Add-Type -AssemblyName System.IO.Compression.FileSystem

$outDir = "src/manifestation_pipeline/unpacked_batch_3"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$books = Get-ChildItem Books

$dotyFile = $books | Where-Object { $_.Name -like "*Doty*" } | Select-Object -First 1
$bernsteinFile = $books | Where-Object { $_.Name -like "*Bernstein*" } | Select-Object -First 1
$infiniteFile = $books | Where-Object { $_.Name -like "*Infinite Potential*" } | Select-Object -First 1

if ($dotyFile) {
    Copy-Item -LiteralPath $dotyFile.FullName -Destination "Books/doty.epub" -Force
    $dest = Join-Path $outDir "doty_mind_magic"
    if (!(Test-Path $dest)) {
        [System.IO.Compression.ZipFile]::ExtractToDirectory("Books/doty.epub", $dest)
    }
    Remove-Item "Books/doty.epub" -Force
    Write-Host "Extracted Doty Mind Magic successfully!"
}

if ($bernsteinFile) {
    Copy-Item $bernsteinFile.FullName "Books/bernstein.epub" -Force
    $dest = Join-Path $outDir "bernstein_universe_back"
    if (!(Test-Path $dest)) {
        [System.IO.Compression.ZipFile]::ExtractToDirectory("Books/bernstein.epub", $dest)
    }
    Remove-Item "Books/bernstein.epub" -Force
    Write-Host "Extracted Bernstein Universe Has Your Back successfully!"
}

if ($infiniteFile) {
    Copy-Item $infiniteFile.FullName "Books/infinite.epub" -Force
    $dest = Join-Path $outDir "goddard_infinite_potential"
    if (!(Test-Path $dest)) {
        [System.IO.Compression.ZipFile]::ExtractToDirectory("Books/infinite.epub", $dest)
    }
    Remove-Item "Books/infinite.epub" -Force
    Write-Host "Extracted Goddard Infinite Potential successfully!"
}

Write-Host "Batch 3 EPUB unpacking complete!"
