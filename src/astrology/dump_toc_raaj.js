const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function extractRaaj() {
  const buf = fs.readFileSync('Books/_OceanofPDF.com_Astrology_Speed_light_-_Kapiel_Raaj.pdf');
  const parser = new PDFParse({ data: buf });
  const res = await parser.getText();
  const text = res.text || '';
  
  // Find Table of Contents
  const idx = text.indexOf('Table of Content');
  if (idx !== -1) {
    console.log(text.slice(idx, idx + 2500));
  } else {
    console.log(text.slice(0, 2500));
  }
}
extractRaaj();
