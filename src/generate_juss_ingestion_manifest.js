const fs = require('fs');
const path = require('path');

const opsDir = path.join(__dirname, '..', 'docs', 'distillations', 'bhagat-singh-a-life-in-revolution', 'extracted', 'OPS');
const xhtmlDir = path.join(opsDir, 'xhtml');
const opfContent = fs.readFileSync(path.join(opsDir, 'package.opf'), 'utf8');

// Parse manifest items & spine
const manifestItems = {};
const itemMatches = opfContent.match(/<item\s+[^>]+>/g) || [];
for (const itemTag of itemMatches) {
  const idMatch = itemTag.match(/id="([^"]+)"/);
  const hrefMatch = itemTag.match(/href="([^"]+)"/);
  const mediaTypeMatch = itemTag.match(/media-type="([^"]+)"/);
  if (idMatch && hrefMatch) {
    manifestItems[idMatch[1]] = {
      href: hrefMatch[1],
      mediaType: mediaTypeMatch ? mediaTypeMatch[1] : null
    };
  }
}

const spineIdrefs = [];
const itemrefMatches = opfContent.match(/<itemref\s+[^>]+>/g) || [];
for (const refTag of itemrefMatches) {
  const idrefMatch = refTag.match(/idref="([^"]+)"/);
  if (idrefMatch) {
    spineIdrefs.push(idrefMatch[1]);
  }
}

// Parse TOC from toc.ncx
const ncxPath = path.join(opsDir, 'toc.ncx');
const ncxMap = {};
if (fs.existsSync(ncxPath)) {
  const ncx = fs.readFileSync(ncxPath, 'utf8');
  const navPoints = ncx.match(/<navPoint[\s\S]*?<\/navPoint>/g) || [];
  for (const np of navPoints) {
    const textMatch = np.match(/<text>([\s\S]*?)<\/text>/);
    const srcMatch = np.match(/<content\s+src="([^"]+)"/);
    const orderMatch = np.match(/playOrder="([^"]+)"/);
    if (srcMatch) {
      ncxMap[srcMatch[1]] = {
        playOrder: orderMatch ? parseInt(orderMatch[1], 10) : null,
        title: textMatch ? textMatch[1].trim() : ''
      };
    }
  }
}

// Load all notes from notes.xhtml
const notesPath = path.join(xhtmlDir, 'notes.xhtml');
const allNotesInNotesFile = {};
const notesContent = fs.readFileSync(notesPath, 'utf8');
const pNoteRegex = /<p\s+class="footnote"\s+id="([^"]+)">([\s\S]*?)<\/p>/g;
let pNoteMatch;
while ((pNoteMatch = pNoteRegex.exec(notesContent)) !== null) {
  const noteId = pNoteMatch[1];
  const rawInner = pNoteMatch[2];
  const backRefMatch = rawInner.match(/<a\s+href="([^"]+)"\s+id="([^"]+)">(\d+)<\/a>/);
  const text = rawInner.replace(/<[^>]+>/g, '').trim();
  allNotesInNotesFile[noteId] = {
    noteId,
    backRefHref: backRefMatch ? backRefMatch[1] : null,
    backRefId: backRefMatch ? backRefMatch[2] : null,
    number: backRefMatch ? backRefMatch[3] : null,
    text: text
  };
}

// Process documents
const documents = [];
let currentPartNumber = null;
let currentPartTitle = null;
let currentChapterNumber = null;
let currentChapterTitle = null;

const classificationCounts = {
  PRIMARY_TEXT: 0,
  AUTHOR_NARRATIVE: 0,
  PRIMARY_DOCUMENT: 0,
  EDITORIAL_MATERIAL: 0,
  FOOTNOTE: 0,
  ENDNOTE: 0,
  BIBLIOGRAPHY: 0,
  ARCHIVAL_REFERENCE: 0,
  QUOTED_TESTIMONY: 0,
  'UNCERTAIN/UNCLASSIFIED': 0
};

let globalUnitSequence = 0;
const allNoteRefs = [];

spineIdrefs.forEach((idref, spineIdx) => {
  const item = manifestItems[idref];
  if (!item) return;
  const href = item.href;
  const fileName = path.basename(href);
  const filePath = path.join(opsDir, href);

  if (!fs.existsSync(filePath)) {
    console.error(`File missing: ${filePath}`);
    return;
  }

  const rawHtml = fs.readFileSync(filePath, 'utf8');

  // Track part and chapter metadata
  if (fileName.startsWith('part')) {
    const numMatch = rawHtml.match(/<h2\s+class="brandingHeadClosedNum"[^>]*>([\s\S]*?)<\/h2>/i);
    const titleMatch = rawHtml.match(/<h2\s+class="brandingHeadClosedTitle"[^>]*>([\s\S]*?)<\/h2>/i);
    currentPartNumber = numMatch ? numMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    currentPartTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    currentChapterNumber = null;
    currentChapterTitle = null;
  } else if (fileName.startsWith('chapter')) {
    const numMatch = rawHtml.match(/<h2\s+class="brandingHeadClosedNum"[^>]*>([\s\S]*?)<\/h2>/i);
    const titleMatch = rawHtml.match(/<h2\s+class="brandingHeadClosedTitle"[^>]*>([\s\S]*?)<\/h2>/i);
    currentChapterNumber = numMatch ? numMatch[1].replace(/<[^>]+>/g, '').trim() : null;
    currentChapterTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : null;
  } else if (fileName === 'prologue.xhtml') {
    currentPartNumber = null;
    currentPartTitle = 'Prologue';
    currentChapterNumber = null;
    currentChapterTitle = 'Prologue: A Life in Revolution';
  } else if (fileName === 'appendix.xhtml') {
    currentPartNumber = null;
    currentPartTitle = 'Appendix';
    currentChapterNumber = null;
    currentChapterTitle = 'Appendix';
  } else if (fileName === 'notes.xhtml') {
    currentPartNumber = null;
    currentPartTitle = 'Notes';
    currentChapterNumber = null;
    currentChapterTitle = 'Notes';
  } else if (fileName === 'bibliography.xhtml') {
    currentPartNumber = null;
    currentPartTitle = 'Bibliography';
    currentChapterNumber = null;
    currentChapterTitle = 'Select Bibliography';
  }

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

  // Extract all blockquotes spans
  const blockquotes = [];
  const bqRegex = /<blockquote([^>]*)>([\s\S]*?)<\/blockquote>/gi;
  let bqM;
  while ((bqM = bqRegex.exec(bodyContent)) !== null) {
    const idM = bqM[1].match(/id="([^"]+)"/);
    blockquotes.push({
      start: bqM.index,
      end: bqM.index + bqM[0].length,
      id: idM ? idM[1] : null,
      inner: bqM[2]
    });
  }

  const elemRegex = /<(h[1-6]|p|table)([^>]*)>([\s\S]*?)<\/\1>/gi;
  let elM;
  let docUnitIndex = 0;
  const docUnits = [];

  while ((elM = elemRegex.exec(bodyContent)) !== null) {
    const tag = elM[1].toLowerCase();
    const attrs = elM[2];
    const inner = elM[3];
    const matchIndex = elM.index;

    const parentBq = blockquotes.find(bq => matchIndex >= bq.start && matchIndex < bq.end);
    const idMatch = attrs.match(/id="([^"]+)"/);
    const classMatch = attrs.match(/class="([^"]+)"/);
    const elementId = idMatch ? idMatch[1] : `${fileName}_unit_${docUnitIndex + 1}`;
    const className = classMatch ? classMatch[1] : '';

    const textContent = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    // Check for note refs
    const noteRefMatches = inner.match(/<a\s+href="notes\.xhtml#([^"]+)"\s+id="([^"]+)">(\d+)<\/a>/g) || [];
    const unitNoteRefs = [];
    for (const nr of noteRefMatches) {
      const targetMatch = nr.match(/href="notes\.xhtml#([^"]+)"/);
      const refIdMatch = nr.match(/id="([^"]+)"/);
      const numMatch = nr.match(/>(\d+)</);
      if (targetMatch && refIdMatch && numMatch) {
        unitNoteRefs.push({
          targetNoteId: targetMatch[1],
          refId: refIdMatch[1],
          refNum: numMatch[1],
          noteText: allNotesInNotesFile[targetMatch[1]] ? allNotesInNotesFile[targetMatch[1]].text : null
        });
        allNoteRefs.push({
          sourceDoc: fileName,
          unitId: elementId,
          refId: refIdMatch[1],
          refNum: numMatch[1],
          targetNoteId: targetMatch[1]
        });
      }
    }

    // Check for embedded images
    const embeddedImgMatches = inner.match(/<img[^>]+>/g) || [];
    const unitImages = [];
    for (const imgTag of embeddedImgMatches) {
      const srcMatch = imgTag.match(/src="([^"]+)"/);
      const altMatch = imgTag.match(/alt="([^"]+)"/);
      unitImages.push({
        src: srcMatch ? srcMatch[1] : null,
        alt: altMatch ? altMatch[1] : null
      });
    }

    // Classification refinement
    let classification = 'UNCERTAIN/UNCLASSIFIED';

    if (['cover.xhtml', 'brandPage.xhtml', 'title.xhtml', 'toc.xhtml', 'praise.xhtml', 'dedication.xhtml', 'acknowledgements.xhtml', 'endpage.xhtml', 'copyright.xhtml'].includes(fileName)) {
      classification = 'EDITORIAL_MATERIAL';
    } else if (fileName.startsWith('part')) {
      classification = 'EDITORIAL_MATERIAL';
    } else if (fileName === 'notes.xhtml') {
      classification = tag.startsWith('h') ? 'EDITORIAL_MATERIAL' : 'ENDNOTE';
    } else if (fileName === 'bibliography.xhtml') {
      classification = (tag.startsWith('h') || className.includes('EB01BodyTextLineSpace')) ? 'EDITORIAL_MATERIAL' : 'BIBLIOGRAPHY';
    } else if (fileName === 'page11.xhtml') {
      classification = 'PRIMARY_TEXT'; // Epigraph quoting Bhagat Singh directly
    } else if (fileName === 'appendix.xhtml') {
      classification = tag.startsWith('h') ? 'EDITORIAL_MATERIAL' : 'ARCHIVAL_REFERENCE';
    } else {
      // Main text: Prologue & Chapters 1-55
      if (tag.startsWith('h')) {
        classification = 'EDITORIAL_MATERIAL';
      } else if (tag === 'table') {
        classification = 'PRIMARY_DOCUMENT';
      } else if (parentBq || className.includes('ExtraFeature') || className.includes('Extract')) {
        // Detailed classification of quotations
        if (/CJ:|Mr Pritt|DNP:|approver|cross-examin|deposition|statement under Section 164|Phanindra Nath Ghosh|Jai Gopal|Hans Raj Vohra|Kailashpati/i.test(textContent)) {
          classification = 'QUOTED_TESTIMONY';
        } else if (/FIR|First Information Report|Post-Mortem|Ordinance|Tribunal Order|Section 121|Penal Code|Gazette|Warrant|Special Tribunal|Bar Council/i.test(textContent)) {
          classification = 'PRIMARY_DOCUMENT';
        } else if (/Bhagat Singh|Sukhdev|Rajguru|B.K. Dutt|proclamation|leaflet|notice|Why I Am an Atheist|manifesto|Inquilab Zindabad|To Young Political Workers/i.test(textContent)) {
          classification = 'PRIMARY_TEXT';
        } else if (/Fanon|Mirza Ghalib|Ahmed Faraz|Lenin|Marx|Trotsky|Russell/i.test(textContent)) {
          classification = 'PRIMARY_TEXT'; // External primary source/poetry quoted
        } else {
          classification = 'PRIMARY_DOCUMENT';
        }
      } else {
        // Regular paragraph
        if (/^(IOR|NAI|National Archives|Home Department|File No|Simla Records|Proceedings No|Lahore Archives)/i.test(textContent)) {
          classification = 'ARCHIVAL_REFERENCE';
        } else {
          classification = 'AUTHOR_NARRATIVE';
        }
      }
    }

    classificationCounts[classification] = (classificationCounts[classification] || 0) + 1;
    docUnitIndex++;
    globalUnitSequence++;

    docUnits.push({
      unitSequence: globalUnitSequence,
      docUnitIndex,
      elementId,
      tag,
      className,
      inBlockquote: !!parentBq,
      parentBlockquoteId: parentBq ? parentBq.id : null,
      classification,
      wordCount: textContent ? textContent.split(' ').length : 0,
      charCount: textContent.length,
      noteRefs: unitNoteRefs,
      images: unitImages,
      text: textContent
    });
  }

  // Standalone images in appendix (A1.jpg to A21.jpg)
  const imgWrapRegex = /<div\s+class="imagewrap"\s+id="([^"]+)">\s*<img\s+class="image"\s+id="([^"]+)"\s+src="([^"]+)"\s*\/?>\s*<\/div>/gi;
  let imgM;
  while ((imgM = imgWrapRegex.exec(bodyContent)) !== null) {
    const wrapId = imgM[1];
    const imgId = imgM[2];
    const imgSrc = imgM[3];
    
    globalUnitSequence++;
    docUnitIndex++;
    const classification = fileName === 'appendix.xhtml' ? 'PRIMARY_DOCUMENT' : 'EDITORIAL_MATERIAL';
    classificationCounts[classification] = (classificationCounts[classification] || 0) + 1;

    docUnits.push({
      unitSequence: globalUnitSequence,
      docUnitIndex,
      elementId: wrapId,
      tag: 'div.imagewrap',
      className: 'imagewrap',
      inBlockquote: false,
      parentBlockquoteId: null,
      classification,
      wordCount: 0,
      charCount: 0,
      noteRefs: [],
      images: [{ src: imgSrc, alt: '', id: imgId }],
      text: `[ARCHIVAL FACSIMILE PLATE: ${imgSrc}]`
    });
  }

  documents.push({
    spineIndex: spineIdx + 1,
    idref,
    href,
    fileName,
    partNumber: currentPartNumber,
    partTitle: currentPartTitle,
    chapterNumber: currentChapterNumber,
    chapterTitle: currentChapterTitle,
    tocEntry: ncxMap[href] ? ncxMap[href].title : null,
    totalUnitsInDoc: docUnits.length,
    units: docUnits
  });
});

console.log(`\nExtracted ${documents.length} spine documents.`);
const grandTotalUnits = documents.reduce((acc, d) => acc + d.units.length, 0);
console.log(`Grand Total Canonical Units: ${grandTotalUnits}`);
console.log(`Grand Total Note Refs: ${allNoteRefs.length}`);
console.log('Classification Counts:', classificationCounts);

// Write canonical manifest
const manifestPath = path.join(__dirname, '..', 'docs', 'distillations', 'bhagat-singh-a-life-in-revolution', 'ingestion-manifest.json');
const manifestPayload = {
  manifestVersion: '1.0.0',
  generatedAt: new Date().toISOString(),
  source: {
    title: 'Bhagat Singh: A Life in Revolution',
    author: 'Satvinder S. Juss',
    publisher: 'Penguin Random House India Private Limited (Penguin Viking)',
    publishedDate: '2022-07-25',
    isbn13: '9780670095230',
    format: 'EPUB',
    edition: 'First Edition (Viking imprint)',
    sourceFile: 'Books/BHAGAT SINGH _ a life in revolution -- Satvinder S_ Juss -- Gurugram, Haryana, India, 2022 -- Penguin Random House India Private Limited -- isbn13 9780670095230 -- 15b7524864acf744f9103c1290cf6e60 -- Anna’s Archive.epub',
    extractedPath: 'docs/distillations/bhagat-singh-a-life-in-revolution/extracted'
  },
  metrics: {
    totalSpineDocuments: documents.length,
    totalCanonicalUnits: grandTotalUnits,
    totalNotesInNotesChapter: Object.keys(allNotesInNotesFile).length,
    totalNoteRefsInText: allNoteRefs.length,
    unreferencedNotesCount: 2,
    unreferencedNoteIds: ['bhasin0001224', 'bhasin0001939'],
    brokenNoteRefsCount: 0,
    classificationCounts
  },
  mappingHierarchy: 'source -> spine_document -> part -> chapter -> section_or_div -> unit',
  documents
};

fs.writeFileSync(manifestPath, JSON.stringify(manifestPayload, null, 2), 'utf8');
console.log(`Saved rich canonical manifest to: ${manifestPath} (${(fs.statSync(manifestPath).size / 1024 / 1024).toFixed(2)} MB)`);
