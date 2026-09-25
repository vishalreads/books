param (
    [Parameter(Mandatory=$true)]
    [string]$MobiPath,
    [Parameter(Mandatory=$false)]
    [string]$OutputDir
)

if (-not (Test-Path $MobiPath)) {
    Write-Error "MOBI file not found: $MobiPath"
    exit 1
}

if (-not $OutputDir) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($MobiPath)
    $OutputDir = Join-Path (Split-Path $MobiPath -Parent) "$baseName`_extracted"
}

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

Add-Type -Language CSharp -TypeDefinition @"
using System;
using System.IO;

public class PalmDocExtractor {
    public static byte[] Decompress(byte[] src, int srcOffset, int srcLength) {
        byte[] outBuf = new byte[8192];
        int outPos = 0;
        int i = srcOffset;
        int end = srcOffset + srcLength;

        while (i < end && outPos < 4096) {
            int c = src[i++];
            if (c == 0) {
                outBuf[outPos++] = 0;
            } else if (c >= 1 && c <= 8) {
                for (int k = 0; k < c && i < end; k++) {
                    outBuf[outPos++] = src[i++];
                }
            } else if (c >= 9 && c <= 0x7F) {
                outBuf[outPos++] = (byte)c;
            } else if (c >= 0x80 && c <= 0xBF) {
                if (i >= end) break;
                int c2 = src[i++];
                int distance = ((c & 0x3F) << 5) | (c2 >> 3);
                int length = (c2 & 7) + 3;
                for (int k = 0; k < length; k++) {
                    if (outPos - distance >= 0 && outPos < outBuf.Length) {
                        outBuf[outPos] = outBuf[outPos - distance];
                        outPos++;
                    }
                }
            } else {
                outBuf[outPos++] = 32;
                outBuf[outPos++] = (byte)(c ^ 0x80);
            }
        }
        byte[] res = new byte[outPos];
        Array.Copy(outBuf, res, outPos);
        return res;
    }
}
"@

$b = [System.IO.File]::ReadAllBytes($MobiPath)
$numRecords = [System.Net.IPAddress]::NetworkToHostOrder([int16][System.BitConverter]::ToInt16($b, 76))
$recOffsets = @()
for ($i = 0; $i -lt $numRecords; $i++) {
    $recOffsets += [System.Net.IPAddress]::NetworkToHostOrder([int32][System.BitConverter]::ToInt32($b, 78 + ($i * 8)))
}
$recOffsets += $b.Length

$rec0 = $recOffsets[0]
$comp = [System.Net.IPAddress]::NetworkToHostOrder([int16][System.BitConverter]::ToInt16($b, $rec0))
$recCount = [System.Net.IPAddress]::NetworkToHostOrder([int16][System.BitConverter]::ToInt16($b, $rec0 + 8))

$ms = New-Object System.IO.MemoryStream
for ($r = 1; $r -le $recCount; $r++) {
    $start = $recOffsets[$r]
    $len = $recOffsets[$r + 1] - $start
    if ($comp -eq 2) {
        $dec = [PalmDocExtractor]::Decompress($b, $start, $len)
        $ms.Write($dec, 0, $dec.Length)
    } elseif ($comp -eq 1) {
        $ms.Write($b, $start, $len)
    }
}

$all = $ms.ToArray()
$text = [System.Text.Encoding]::UTF8.GetString($all)
$htmlPath = Join-Path $OutputDir "raw_book.html"
[System.IO.File]::WriteAllText($htmlPath, $text, [System.Text.Encoding]::UTF8)

# Strip tags to plain text
$plain = [System.Text.RegularExpressions.Regex]::Replace($text, "<br\s*/?>", "`n")
$plain = [System.Text.RegularExpressions.Regex]::Replace($plain, "</p>", "`n`n")
$plain = [System.Text.RegularExpressions.Regex]::Replace($plain, "</div>", "`n")
$plain = [System.Text.RegularExpressions.Regex]::Replace($plain, "<h[1-6][^>]*>(.*?)</h[1-6]>", "`n`n## `$1`n`n")
$plain = [System.Text.RegularExpressions.Regex]::Replace($plain, "<[^>]+>", "")
$plain = [System.Text.RegularExpressions.Regex]::Replace($plain, "\n{3,}", "`n`n")

$txtPath = Join-Path $OutputDir "clean_book.txt"
[System.IO.File]::WriteAllText($txtPath, $plain, [System.Text.Encoding]::UTF8)
Write-Host "MOBI extracted to $txtPath ($($plain.Length) chars)"
