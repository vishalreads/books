Add-Type -AssemblyName System.IO.Compression.FileSystem

$booksDir = "Books"
$outDir = "src/manifestation_pipeline/unpacked_epubs"

if (Test-Path $outDir) {
    Remove-Item -Recurse -Force $outDir
}
New-Item -ItemType Directory -Path $outDir -Force | Out-Null

$epubs = @(
    @{ Key = "hicks"; Pattern = "*hicks.epub*" },
    @{ Key = "nafousi"; Pattern = "*Manifest _ 7 steps*" },
    @{ Key = "arden"; Pattern = "*DETACHMENT & MANIFESTATION*" },
    @{ Key = "rae"; Pattern = "*How to Manifest a Soulmate*" },
    @{ Key = "dawson"; Pattern = "*MIND CONTROL*" }
)

foreach ($item in $epubs) {
    $file = Get-ChildItem -Path $booksDir -Filter $item.Pattern | Select-Object -First 1
    if ($file) {
        $targetFolder = Join-Path $outDir $item.Key
        Write-Host "Extracting $($item.Key) from $($file.Name)"
        [System.IO.Compression.ZipFile]::ExtractToDirectory($file.FullName, $targetFolder)
        $htmlFiles = Get-ChildItem -Path $targetFolder -Recurse -Include *.html, *.xhtml, *.htm
        Write-Host "  -> Successfully extracted $($htmlFiles.Count) text content files"
    } else {
        Write-Host "Could not find $($item.Pattern)"
    }
}
