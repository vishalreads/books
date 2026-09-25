const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browserPath = fs.existsSync(edgePath) ? edgePath : chromePath;

function compileHtmlToPdf(htmlPath, pdfPath) {
    const absHtml = path.resolve(htmlPath);
    const absPdf = path.resolve(pdfPath);
    console.log(`Compiling [${absHtml}] -> [${absPdf}]...`);

    // Ensure target directory exists
    const pdfDir = path.dirname(absPdf);
    if (!fs.existsSync(pdfDir)) {
        fs.mkdirSync(pdfDir, { recursive: true });
    }

    const cmd = `"${browserPath}" --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="${absPdf}" "file://${absHtml.replace(/\\/g, '/')}"`;
    try {
        execSync(cmd, { stdio: 'inherit' });
        if (fs.existsSync(absPdf)) {
            const stats = fs.statSync(absPdf);
            console.log(`SUCCESS: Generated ${absPdf} (${(stats.size / 1024).toFixed(1)} KB)`);
            return true;
        } else {
            console.error('PDF file was not created.');
            return false;
        }
    } catch (err) {
        console.error('Error during PDF compilation:', err.message);
        return false;
    }
}

if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.log('Usage: node compile-pdf.js <input.html> <output.pdf>');
        process.exit(1);
    }
    compileHtmlToPdf(args[0], args[1]);
}

module.exports = { compileHtmlToPdf };
