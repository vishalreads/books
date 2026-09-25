const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const booksDir = path.join(__dirname, '..', 'Books');

async function inspectCandidatePdfs() {
  const files = [
    "The trial of Bhagat Singh _ politics of justice -- Abdul Gafoor Abdul Majeed Noorani -- Oxford [England], New York, England, 2001 -- Oxford University -- isbn13 9780195796674 -- 49fe172e1b452d0c4631bbf793c76b9c -- Anna’s Arch.pdf",
    "Jail Notebook and Other Writings (English Edition) -- Bhagat Singh, Chaman Lal (editor) -- 1°, 2017 -- LeftWord Books -- 4132a410ebc87a1c8edaa6755dd85ff4 -- Anna’s Archive.pdf",
    "Bhagat Singh Selected Speeches And Writings -- D_N_Gupta -- 1, 1, 2014 -- National Book Trust, India -- 5d82c36f0b9f4ed484811f7f0fdd0041 -- Anna’s Archive.pdf",
    "The Hanging Of Bhagat Singh Confessions, Statements And -- Malwinderjit Singh Waraich -- 2007 -- Unistar books Pvt Ltd -- 6d961638d1f3c04e0a25a2ef4493e4e6 -- Anna’s Archive.pdf",
    "My Meetings with Bhagat Singh and on Other Early -- Sohan Singh Josh -- 1976 -- Communist Party of India -- f790581a7ca7327f7406e1e9b419c914 -- Anna’s Archive.pdf",
    "Understanding Bhagat Singh -- Chaman Lal -- 1800 -- 6364477c8d6aed45616fb5272fe490b6 -- Anna’s Archive.pdf",
    "Why I am an Atheist - Shaheed Bhagat Singh -- Bhagat Singh -- 1931 -- Maple Press -- isbn13 9789389643862 -- a40bb2015a40ab357132c8b23cbefdc8 -- Anna’s Archive.pdf",
    "The autobiography and Dhamma teachings of Ajahn Dtun -- Ajahn Dtun -- 2020 -- Author-publishers (miscellaneous) -- isbn13 9786165687683 -- 077807e21f82e22749c95ddcd688fcd5 -- Anna’s Archive.pdf"
  ];

  for (const f of files) {
    const p = path.join(booksDir, f);
    if (!fs.existsSync(p)) {
      console.log(`NOT FOUND: ${f}`);
      continue;
    }
    const stat = fs.statSync(p);
    try {
      const buf = fs.readFileSync(p);
      const parser = new PDFParse({ data: buf });
      const textResult = await parser.getText();
      console.log(`\n========================================`);
      console.log(`FILE: ${f}`);
      console.log(`Size: ${(stat.size / 1024 / 1024).toFixed(2)} MB | Total chars: ${textResult.text.length}`);
      
      // Look for Table of Contents or first 2000 chars
      const preview = textResult.text.substring(0, 2500);
      console.log(`PREVIEW (first 800 chars):\n${preview.substring(0, 800)}\n...`);
    } catch(e) {
      console.log(`Error parsing ${f}: ${e.message}`);
    }
  }
}

inspectCandidatePdfs().catch(console.error);
