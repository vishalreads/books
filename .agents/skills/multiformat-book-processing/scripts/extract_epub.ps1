param (
    [Parameter(Mandatory=$true)]
    [string]$EpubPath,
    [Parameter(Mandatory=$false)]
    [string]$OutputDir
)

if (-not (Test-Path -LiteralPath $EpubPath)) {
    Write-Error "EPUB file not found: $EpubPath"
    exit 1
}

if (-not $OutputDir) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($EpubPath)
    $OutputDir = Join-Path (Split-Path $EpubPath -Parent) "$baseName`_extracted"
}

if (-not (Test-Path -LiteralPath $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

Write-Host "Extracting EPUB: $EpubPath to $OutputDir"
# EPUB files are zip archives but Expand-Archive requires .zip extension
Add-Type -AssemblyName System.IO.Compression.FileSystem
try {
    [System.IO.Compression.ZipFile]::ExtractToDirectory($EpubPath, $OutputDir)
} catch {
    # Fallback: copy to temp .zip and extract
    $tempZip = Join-Path $env:TEMP "$([System.Guid]::NewGuid().ToString()).zip"
    Copy-Item -LiteralPath $EpubPath -Destination $tempZip -Force
    Expand-Archive -LiteralPath $tempZip -DestinationPath $OutputDir -Force
    Remove-Item -LiteralPath $tempZip -Force -ErrorAction SilentlyContinue
}

# Locate OPF package file to discover reading order
$opfFiles = Get-ChildItem -Path $OutputDir -Recurse -Filter "*.opf"
if ($opfFiles.Count -gt 0) {
    Write-Host "Found package metadata at: $($opfFiles[0].FullName)"
}

Write-Host "EPUB extracted successfully."
