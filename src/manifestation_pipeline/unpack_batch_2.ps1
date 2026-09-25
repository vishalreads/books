Add-Type -AssemblyName System.IO.Compression.FileSystem

$booksDir = "Books"
$outDir = "src/manifestation_pipeline/unpacked_batch_2"

if (Test-Path $outDir) {
    Remove-Item -Recurse -Force $outDir
}
New-Item -ItemType Directory -Path $outDir -Force | Out-Null

$epubs = @(
    @{ Key = "goddard_feeling"; Pattern = "*feeling.epub*" },
    @{ Key = "goddard_awareness"; Pattern = "*The Power of Awareness*" },
    @{ Key = "shinn"; Pattern = "*The Game of Life*" },
    @{ Key = "dispenza_supernatural"; Pattern = "*Becoming Supernatural*" },
    @{ Key = "gawain_visualization"; Pattern = "*gawain.epub*" }
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
