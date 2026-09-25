/**
 * Forensic Semantic Reader Verification Script
 * Validates that rendered BKRS HTML readers preserve the full semantic content
 * of the canonical Book Master knowledge-units.json.
 */

const fs = require('fs');
const path = require('path');

const BS_DIR = path.join(__dirname, '..', 'docs', 'distillations', 'bhagat-singh-a-life-in-revolution');
const NW_DIR = path.join(__dirname, '..', 'docs', 'distillations', 'norwegian-wood');
const PM_DIR = path.join(__dirname, '..', 'docs', 'distillations', 'the-psychology-of-money');

function runVerification() {
  console.log("================================================================================");
  console.log("BKRS STEP 4.6: FORENSIC SEMANTIC READER VERIFICATION");
  console.log("================================================================================\n");

  const report = {
    timestamp: new Date().toISOString(),
    benchmark: "Bhagat Singh: A Life in Revolution (Juss, 2022)",
    verifier: "BKRS Forensic Semantic Verification Engine",
    sections: {}
  };

  // Load Bhagat Singh files
  const bsKu = JSON.parse(fs.readFileSync(path.join(BS_DIR, 'knowledge-units.json'), 'utf-8'));
  const bsHtml = fs.readFileSync(path.join(BS_DIR, 'index.html'), 'utf-8');

  // Extract embedded trace data payloads from HTML
  const tracePayloads = {};
  const traceRegex = /<script type="application\/json" id="trace-data-([^"]+)">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = traceRegex.exec(bsHtml)) !== null) {
    const unitId = match[1];
    try {
      tracePayloads[unitId] = JSON.parse(match[2]);
    } catch (e) {
      console.error(`Failed to parse trace JSON for ${unitId}:`, e.message);
    }
  }

  // Extract embedded search index from HTML
  let searchIndex = [];
  const searchMatch = bsHtml.match(/<script type="application\/json" id="bkrs-search-data">([\s\S]*?)<\/script>/);
  if (searchMatch) {
    searchIndex = JSON.parse(searchMatch[1]);
  }

  // Helper to extract an article HTML block by unit_id
  function getUnitArticleHtml(unitId) {
    // In render_historical, article has class "content-unit ..." and id="${unitId}"
    const regex = new RegExp(`<article class="content-unit[^"]*" id="${unitId}"[\\s\\S]*?<\\/article>`);
    const m = bsHtml.match(regex);
    return m ? m[0] : null;
  }

  // ---------------------------------------------------------------------------
  // A. STRUCTURAL PRESERVATION
  // ---------------------------------------------------------------------------
  console.log("--- SECTION A: STRUCTURAL PRESERVATION ---");
  const expectedUnitCount = bsKu.content_units.length; // 78
  const foundArticles = (bsHtml.match(/<article class="content-unit/g) || []).length;
  const foundSections = (bsHtml.match(/<section class="chapter-block"/g) || []).length;
  const viewAExists = bsHtml.includes('id="view-journey"');
  const viewBExists = bsHtml.includes('id="view-map"');
  const viewCExists = bsHtml.includes('id="view-experience"');
  const tocExists = bsHtml.includes('class="reader-sidebar"');

  const structPass = (foundArticles === expectedUnitCount) && (foundSections === 58) && viewAExists && viewBExists && viewCExists && tocExists;
  report.sections.A_structural_preservation = {
    status: structPass ? "PASS" : "FAIL",
    expected_units: expectedUnitCount,
    rendered_units: foundArticles,
    rendered_sections: foundSections,
    views: { view_a: viewAExists, view_b: viewBExists, view_c: viewCExists },
    sidebar_toc: tocExists
  };
  console.log(`  Rendered Units: ${foundArticles}/${expectedUnitCount}`);
  console.log(`  Rendered Sections: ${foundSections}/58`);
  console.log(`  Reading Views: View A: ${viewAExists}, View B: ${viewBExists}, View C: ${viewCExists}`);
  console.log(`  Section A Status: ${report.sections.A_structural_preservation.status}\n`);

  // ---------------------------------------------------------------------------
  // B. FIELD PRESERVATION (All 78 units, 17 canonical fields)
  // ---------------------------------------------------------------------------
  console.log("--- SECTION B: FIELD PRESERVATION ---");
  const fieldList = [
    'unit_id', 'unit_type', 'title', 'source_location', 'structural_position',
    'summary_statement', 'materiality', 'materiality_reason', 'epistemic_status',
    'confidence', 'relationships', 'causal_relationships', 'source_evidence',
    'genre_specific_payload', 'competing_accounts', 'temporal_metadata', 'archival_metadata'
  ];

  let fieldFailures = [];
  let unitFieldAudit = {};

  bsKu.content_units.forEach(u => {
    const trace = tracePayloads[u.unit_id];
    if (!trace) {
      fieldFailures.push({ unit_id: u.unit_id, error: "Missing trace data in HTML" });
      return;
    }

    const fieldCheck = {
      unit_id: trace.unit_id === u.unit_id,
      unit_type: trace.unit_type === u.unit_type,
      title: trace.title === u.title,
      source_location: JSON.stringify(trace.source_location) === JSON.stringify(u.source_location),
      structural_position: JSON.stringify(trace.structural_position) === JSON.stringify(u.structural_position),
      summary_statement: trace.summary_statement === u.summary_statement,
      materiality: trace.materiality === u.materiality,
      materiality_reason: trace.materiality_reason === u.materiality_reason,
      epistemic_status: trace.epistemic_status === u.epistemic_status,
      confidence: trace.confidence === u.confidence,
      relationships: JSON.stringify(trace.relationships) === JSON.stringify(u.relationships),
      causal_relationships: JSON.stringify(trace.causal_relationships) === JSON.stringify(u.causal_relationships),
      source_evidence: JSON.stringify(trace.source_evidence) === JSON.stringify(u.source_evidence),
      genre_specific_payload: JSON.stringify(trace.genre_specific_payload) === JSON.stringify(u.genre_specific_payload),
      competing_accounts: JSON.stringify(trace.competing_accounts) === JSON.stringify(u.competing_accounts),
      temporal_metadata: JSON.stringify(trace.dual_timeline) === JSON.stringify(u.dual_timeline),
      archival_metadata: JSON.stringify(trace.source_provenance) === JSON.stringify(u.source_provenance)
    };

    unitFieldAudit[u.unit_id] = fieldCheck;

    for (const [k, v] of Object.entries(fieldCheck)) {
      if (!v) {
        fieldFailures.push({ unit_id: u.unit_id, field: k });
      }
    }
  });

  const fieldPass = fieldFailures.length === 0 && Object.keys(tracePayloads).length === expectedUnitCount;
  report.sections.B_field_preservation = {
    status: fieldPass ? "PASS" : "FAIL",
    total_units_audited: expectedUnitCount,
    trace_payloads_recovered: Object.keys(tracePayloads).length,
    canonical_fields_checked: fieldList,
    failure_count: fieldFailures.length,
    failures: fieldFailures
  };
  console.log(`  Units Audited: ${expectedUnitCount}`);
  console.log(`  Trace Payloads Recovered: ${Object.keys(tracePayloads).length}/${expectedUnitCount}`);
  console.log(`  Field Failures: ${fieldFailures.length}`);
  console.log(`  Section B Status: ${report.sections.B_field_preservation.status}\n`);

  // ---------------------------------------------------------------------------
  // C. EPISTEMIC PRESERVATION
  // ---------------------------------------------------------------------------
  console.log("--- SECTION C: EPISTEMIC PRESERVATION ---");
  const epistemicSummary = {};
  let epistemicMismatches = [];

  bsKu.content_units.forEach(u => {
    const expectedStatus = u.epistemic_status;
    epistemicSummary[expectedStatus] = (epistemicSummary[expectedStatus] || 0) + 1;

    // Check trace payload
    const trace = tracePayloads[u.unit_id];
    if (!trace || trace.epistemic_status !== expectedStatus) {
      epistemicMismatches.push({ unit_id: u.unit_id, location: 'trace_payload', expected: expectedStatus, found: trace ? trace.epistemic_status : null });
    }

    // Check DOM badge in index.html (the text uses spaces instead of underscores)
    const expectedBadgeText = expectedStatus.replace(/_/g, ' ');
    const articleHtml = getUnitArticleHtml(u.unit_id);
    if (!articleHtml) {
      epistemicMismatches.push({ unit_id: u.unit_id, location: 'dom_article', error: "Article element not found" });
    } else if (!articleHtml.includes(expectedBadgeText)) {
      epistemicMismatches.push({ unit_id: u.unit_id, location: 'dom_badge', expected: expectedBadgeText, error: "Badge text not found in article" });
    }
  });

  const epistemicPass = epistemicMismatches.length === 0;
  report.sections.C_epistemic_preservation = {
    status: epistemicPass ? "PASS" : "FAIL",
    canonical_distribution: epistemicSummary,
    mismatches: epistemicMismatches
  };
  console.log("  Canonical Epistemic Distribution:", JSON.stringify(epistemicSummary, null, 2));
  console.log(`  Epistemic Mismatches: ${epistemicMismatches.length}`);
  console.log(`  Section C Status: ${report.sections.C_epistemic_preservation.status}\n`);

  // ---------------------------------------------------------------------------
  // D. CAUSAL PRESERVATION
  // ---------------------------------------------------------------------------
  console.log("--- SECTION D: CAUSAL PRESERVATION ---");
  let totalCausalEdges = 0;
  let causalMismatches = [];
  const causalStatusCounts = {};

  bsKu.content_units.forEach(u => {
    (u.causal_relationships || []).forEach(cr => {
      totalCausalEdges++;
      causalStatusCounts[cr.causal_status] = (causalStatusCounts[cr.causal_status] || 0) + 1;

      // 1. Check in View A unit DOM
      const articleHtml = getUnitArticleHtml(u.unit_id);
      if (!articleHtml) {
        causalMismatches.push({ source: u.unit_id, target: cr.target_unit_id, error: "Source article missing in DOM" });
        return;
      }
      if (!articleHtml.includes(cr.target_unit_id) || !articleHtml.includes(cr.causal_status)) {
        causalMismatches.push({
          source: u.unit_id,
          target: cr.target_unit_id,
          status: cr.causal_status,
          error: "Causal edge or status missing in View A unit DOM"
        });
      }

      // 2. Check in trace data
      const trace = tracePayloads[u.unit_id];
      const traceEdge = trace && trace.causal_relationships ? trace.causal_relationships.find(e => e.target_unit_id === cr.target_unit_id) : null;
      if (!traceEdge) {
        causalMismatches.push({ source: u.unit_id, target: cr.target_unit_id, error: "Missing edge in trace payload" });
      } else if (traceEdge.causal_status !== cr.causal_status) {
        causalMismatches.push({
          source: u.unit_id,
          target: cr.target_unit_id,
          expected_status: cr.causal_status,
          found_status: traceEdge.causal_status,
          error: "Causal status modified in trace payload"
        });
      }
    });
  });

  // 3. Check View B Causal DAG container
  const viewBHasDag = bsHtml.includes('id="km-causal-dag"') && bsHtml.includes('Multi-Step Causal Historical Mechanics (DAG)');

  const causalPass = causalMismatches.length === 0 && viewBHasDag && totalCausalEdges === 44;
  report.sections.D_causal_preservation = {
    status: causalPass ? "PASS" : "FAIL",
    total_edges: totalCausalEdges,
    causal_status_distribution: causalStatusCounts,
    view_b_dag_present: viewBHasDag,
    mismatches: causalMismatches
  };
  console.log(`  Total Causal Edges Audited: ${totalCausalEdges}`);
  console.log("  Causal Status Distribution:", JSON.stringify(causalStatusCounts, null, 2));
  console.log(`  View B DAG Present: ${viewBHasDag}`);
  console.log(`  Causal Mismatches: ${causalMismatches.length}`);
  console.log(`  Section D Status: ${report.sections.D_causal_preservation.status}\n`);

  // ---------------------------------------------------------------------------
  // E. COMPETING-ACCOUNT PRESERVATION
  // ---------------------------------------------------------------------------
  console.log("--- SECTION E: COMPETING-ACCOUNT PRESERVATION ---");
  const disputeUnits = bsKu.content_units.filter(u => u.competing_accounts && u.competing_accounts.length > 0);
  let totalIssues = 0;
  let disputeMismatches = [];

  disputeUnits.forEach(u => {
    u.competing_accounts.forEach(ca => {
      totalIssues++;
      const issueText = ca.contested_issue;
      const sysSynthesis = ca.system_synthesis;

      // Check View A unit DOM
      const articleHtml = getUnitArticleHtml(u.unit_id);
      if (!articleHtml) {
        disputeMismatches.push({ unit_id: u.unit_id, issue: issueText, error: "Article element missing" });
        return;
      }
      if (!articleHtml.includes(issueText)) {
        disputeMismatches.push({ unit_id: u.unit_id, issue: issueText, error: "Issue text missing in View A DOM" });
      }

      // Check that accounts are preserved and not collapsed
      if (ca.accounts && Array.isArray(ca.accounts)) {
        ca.accounts.forEach(acc => {
          if (!articleHtml.includes(acc.assertion)) {
            disputeMismatches.push({ unit_id: u.unit_id, issue: issueText, assertion: acc.assertion, error: "Account assertion missing in View A DOM" });
          }
          if (acc.witness_or_document && !articleHtml.includes(acc.witness_or_document)) {
            disputeMismatches.push({ unit_id: u.unit_id, issue: issueText, witness: acc.witness_or_document, error: "Witness/Document attribution missing in View A DOM" });
          }
        });
      }

      if (sysSynthesis && !articleHtml.includes(sysSynthesis)) {
        disputeMismatches.push({ unit_id: u.unit_id, issue: issueText, error: "System synthesis missing in View A DOM" });
      }

      // Check trace data
      const trace = tracePayloads[u.unit_id];
      const traceCa = trace && trace.competing_accounts ? trace.competing_accounts.find(x => x.contested_issue === issueText) : null;
      if (!traceCa) {
        disputeMismatches.push({ unit_id: u.unit_id, issue: issueText, error: "Dispute missing in trace payload" });
      }
    });
  });

  // Check View B Historiographical Disputes matrix
  const viewBHasDisputes = bsHtml.includes('id="km-disputes"') && bsHtml.includes('Historiographical Disputes & Competing Accounts Matrix');

  const disputePass = disputeMismatches.length === 0 && viewBHasDisputes && totalIssues === 8;
  report.sections.E_competing_account_preservation = {
    status: disputePass ? "PASS" : "FAIL",
    dispute_units_count: disputeUnits.length,
    total_contested_issues: totalIssues,
    view_b_matrix_present: viewBHasDisputes,
    mismatches: disputeMismatches
  };
  console.log(`  Dispute Units: ${disputeUnits.length}`);
  console.log(`  Total Contested Issues: ${totalIssues}`);
  console.log(`  View B Dispute Matrix Present: ${viewBHasDisputes}`);
  console.log(`  Dispute Mismatches: ${disputeMismatches.length}`);
  console.log(`  Section E Status: ${report.sections.E_competing_account_preservation.status}\n`);

  // ---------------------------------------------------------------------------
  // F. DUAL TIMELINE PRESERVATION
  // ---------------------------------------------------------------------------
  console.log("--- SECTION F: DUAL TIMELINE PRESERVATION ---");
  let timelineUnitsAudited = 0;
  let timelineMismatches = [];

  bsKu.content_units.forEach(u => {
    timelineUnitsAudited++;
    const dt = u.dual_timeline;
    if (!dt) {
      timelineMismatches.push({ unit_id: u.unit_id, error: "Missing canonical dual_timeline" });
      return;
    }

    const trace = tracePayloads[u.unit_id];
    if (!trace || !trace.dual_timeline) {
      timelineMismatches.push({ unit_id: u.unit_id, error: "Missing dual_timeline in trace payload" });
      return;
    }

    // Verify event_time, record_revelation_time, and source_time survive intact
    if (JSON.stringify(trace.dual_timeline.event_time) !== JSON.stringify(dt.event_time)) {
      timelineMismatches.push({ unit_id: u.unit_id, error: "event_time discrepancy in trace" });
    }
    if (JSON.stringify(trace.dual_timeline.record_revelation_time) !== JSON.stringify(dt.record_revelation_time)) {
      timelineMismatches.push({ unit_id: u.unit_id, error: "record_revelation_time discrepancy in trace" });
    }
    if (JSON.stringify(trace.dual_timeline.source_time) !== JSON.stringify(dt.source_time)) {
      timelineMismatches.push({ unit_id: u.unit_id, error: "source_time discrepancy in trace" });
    }

    // Check that event_time is not equal to record_revelation_time when canonical differs
    if (dt.event_time && dt.record_revelation_time && dt.event_time.date_raw !== dt.record_revelation_time.date_raw) {
      if (trace.dual_timeline.event_time.date_raw === trace.dual_timeline.record_revelation_time.date_raw) {
        timelineMismatches.push({ unit_id: u.unit_id, error: "Event time silently substituted for record time" });
      }
    }
  });

  const timelinePass = timelineMismatches.length === 0 && timelineUnitsAudited === 78;
  report.sections.F_temporal_preservation = {
    status: timelinePass ? "PASS" : "FAIL",
    units_audited: timelineUnitsAudited,
    mismatches: timelineMismatches
  };
  console.log(`  Units with Dual Timeline Audited: ${timelineUnitsAudited}/${expectedUnitCount}`);
  console.log(`  Timeline Mismatches: ${timelineMismatches.length}`);
  console.log(`  Section F Status: ${report.sections.F_temporal_preservation.status}\n`);

  // ---------------------------------------------------------------------------
  // G. SOURCE TRACEABILITY (Representative Units)
  // ---------------------------------------------------------------------------
  console.log("--- SECTION G: SOURCE TRACEABILITY ---");
  const repUnits = [
    { type: "historical_episode", id: "KU-BS-CH22-01", desc: "Saunders Action" },
    { type: "life_episode", id: "KU-BS-CH01-01", desc: "Ancestral Heritage and Family Birth" },
    { type: "document_unit", id: "KU-BS-CH27-01", desc: "Red Leaflets" },
    { type: "archival_plate", id: "KU-BS-CH16-01", desc: "Assembly Plan / Plate 1" },
    { type: "primary_source", id: "KU-BS-CH48-01", desc: "Why I Am an Atheist" },
    { type: "biographer_thesis", id: "KU-BS-PROLOGUE-01", desc: "Emergency Powers Thesis" },
    { type: "contested_account", id: "KU-BS-CH50-01", desc: "Gandhi-Irwin Commutation Discussions" }
  ];

  const traceAuditResults = [];
  let tracePassCount = 0;

  repUnits.forEach(rep => {
    const u = bsKu.content_units.find(x => x.unit_id === rep.id);
    const trace = tracePayloads[rep.id];

    if (!u || !trace) {
      traceAuditResults.push({ id: rep.id, type: rep.type, status: "FAIL", error: "Unit not found" });
      return;
    }

    const checks = {
      chapter_title_preserved: trace.source_location && trace.source_location.chapter_title === u.source_location.chapter_title,
      document_file_preserved: trace.source_location && trace.source_location.document === u.source_location.document,
      element_ids_preserved: trace.source_location && JSON.stringify(trace.source_location.element_ids) === JSON.stringify(u.source_location.element_ids),
      referenced_notes_preserved: trace.source_provenance && JSON.stringify(trace.source_provenance.notes_referenced) === JSON.stringify(u.source_provenance.notes_referenced),
      archival_citations_preserved: trace.source_provenance && JSON.stringify(trace.source_provenance.archival_citations) === JSON.stringify(u.source_provenance.archival_citations),
      verbatim_evidence_preserved: trace.source_evidence && JSON.stringify(trace.source_evidence) === JSON.stringify(u.source_evidence)
    };

    const allChecksPass = Object.values(checks).every(Boolean);
    if (allChecksPass) tracePassCount++;

    traceAuditResults.push({
      unit_id: rep.id,
      category: rep.type,
      description: rep.desc,
      status: allChecksPass ? "PASS" : "FAIL",
      checks: checks
    });
  });

  const repPass = tracePassCount === repUnits.length;
  report.sections.G_source_traceability = {
    status: repPass ? "PASS" : "FAIL",
    representative_units_audited: repUnits.length,
    passed_units: tracePassCount,
    audit_details: traceAuditResults
  };
  console.log(`  Representative Units Audited: ${repUnits.length}`);
  console.log(`  Trace Passes: ${tracePassCount}/${repUnits.length}`);
  console.log(`  Section G Status: ${report.sections.G_source_traceability.status}\n`);

  // ---------------------------------------------------------------------------
  // H. MATERIALITY
  // ---------------------------------------------------------------------------
  console.log("--- SECTION H: MATERIALITY ---");
  const matDistribution = {};
  let matMismatches = [];

  bsKu.content_units.forEach(u => {
    matDistribution[u.materiality] = (matDistribution[u.materiality] || 0) + 1;
    const trace = tracePayloads[u.unit_id];
    if (!trace || trace.materiality !== u.materiality) {
      matMismatches.push({ unit_id: u.unit_id, error: "Materiality modified in trace" });
    }

    // Check badge in View A DOM
    const badgeStr = `LEVEL: ${u.materiality.toUpperCase()}`;
    const articleHtml = getUnitArticleHtml(u.unit_id);
    if (!articleHtml || !articleHtml.includes(badgeStr)) {
      matMismatches.push({ unit_id: u.unit_id, error: `Materiality badge '${badgeStr}' missing in DOM` });
    }
  });

  // Verify textural unit is preserved and accounted for
  const texturalUnit = bsKu.content_units.find(u => u.materiality === 'textural');
  const texturalPreserved = bsHtml.includes('badge-textural') && bsHtml.includes('LEVEL: TEXTURAL') && tracePayloads['KU-BS-CH11-01'].materiality === 'textural';

  const matPass = matMismatches.length === 0 && texturalPreserved && matDistribution.critical === 63 && matDistribution.important === 14 && matDistribution.textural === 1;
  report.sections.H_materiality = {
    status: matPass ? "PASS" : "FAIL",
    distribution: matDistribution,
    textural_unit_retained: texturalPreserved,
    mismatches: matMismatches
  };
  console.log("  Materiality Distribution:", JSON.stringify(matDistribution, null, 2));
  console.log(`  Textural Unit Retained: ${texturalPreserved}`);
  console.log(`  Materiality Mismatches: ${matMismatches.length}`);
  console.log(`  Section H Status: ${report.sections.H_materiality.status}\n`);

  // ---------------------------------------------------------------------------
  // I. SEARCH RETRIEVAL
  // ---------------------------------------------------------------------------
  console.log("--- SECTION I: SEARCH RETRIEVAL ---");
  function executeSearch(query) {
    const q = query.toLowerCase();
    return searchIndex.filter(item => {
      const inId = item.id && item.id.toLowerCase().includes(q);
      const inTitle = item.title && item.title.toLowerCase().includes(q);
      const inSnippet = item.snippet && item.snippet.toLowerCase().includes(q);
      const inContent = item.content && item.content.toLowerCase().includes(q);
      const inEntities = item.entities && Array.isArray(item.entities) && item.entities.some(e => e.toLowerCase().includes(q));
      return inId || inTitle || inSnippet || inContent || inEntities;
    });
  }

  const searchTests = [
    { category: "person/entity", query: "Sukhdev", expectedTarget: "KU-BS-CH21-01" },
    { category: "person/entity", query: "Saunders", expectedTarget: "KU-BS-CH22-01" },
    { category: "organisation", query: "Hindustan Socialist Republican Association", expectedTarget: "KU-BS-CH24-01" },
    { category: "organisation", query: "Naujawan Bharat Sabha", expectedTarget: "KU-BS-CH10-01" },
    { category: "event", query: "Assembly Bombs", expectedTarget: "KU-BS-CH23-01" },
    { category: "event", query: "Kakori", expectedTarget: "KU-BS-CH09-01" },
    { category: "legal instrument", query: "Ordinance III", expectedTarget: "KU-BS-CH32-01" },
    { category: "legal instrument", query: "Section 121", expectedTarget: ["KU-BS-CH30-01", "KU-BS-APP-13"] },
    { category: "archival plate", query: "Plate 1", expectedTarget: "KU-BS-APP-01" },
    { category: "archival plate", query: "Plate 7", expectedTarget: "KU-BS-APP-07" },
    { category: "primary document", query: "Why I Am an Atheist", expectedTarget: "KU-BS-CH46-01" },
    { category: "primary document", query: "Young Political Workers", expectedTarget: "KU-BS-CH37-01" },
    { category: "disputed issue", query: "FIR No. 121", expectedTarget: "KU-BS-CH22-01" },
    { category: "disputed issue", query: "Ganda Singh Wala", expectedTarget: "KU-BS-CH47-01" },
    { category: "epistemic category", query: "PRIMARY_SUBJECT_WRITING", expectedCountMin: 8 },
    { category: "epistemic category", query: "BIOGRAPHER_THESIS", expectedCountMin: 8 },
    { category: "epistemic category", query: "COERCED_TESTIMONY", expectedCountMin: 1 }
  ];

  const searchResults = [];
  let searchFailCount = 0;

  searchTests.forEach(t => {
    const hits = executeSearch(t.query);
    let pass = false;
    if (t.expectedTarget) {
      if (Array.isArray(t.expectedTarget)) {
        pass = hits.some(h => t.expectedTarget.includes(h.id));
      } else {
        pass = hits.some(h => h.id === t.expectedTarget);
      }
    } else if (t.expectedCountMin) {
      pass = hits.length >= t.expectedCountMin;
    }

    if (!pass) searchFailCount++;

    searchResults.push({
      category: t.category,
      query: t.query,
      status: pass ? "PASS" : "FAIL",
      total_matches: hits.length,
      top_match: hits[0] ? `${hits[0].id}: ${hits[0].title}` : null
    });
  });

  const searchPass = searchFailCount === 0 && searchIndex.length === 78;
  report.sections.I_search_retrieval = {
    status: searchPass ? "PASS" : "FAIL",
    index_size: searchIndex.length,
    test_queries_run: searchTests.length,
    failed_queries: searchFailCount,
    details: searchResults
  };
  console.log(`  Search Index Size: ${searchIndex.length}/${expectedUnitCount}`);
  console.log(`  Test Queries Run: ${searchTests.length}`);
  console.log(`  Failed Queries: ${searchFailCount}`);
  console.log(`  Section I Status: ${report.sections.I_search_retrieval.status}\n`);

  // ---------------------------------------------------------------------------
  // J. CROSS-GENRE REGRESSION (Norwegian Wood & The Psychology of Money)
  // ---------------------------------------------------------------------------
  console.log("--- SECTION J: CROSS-GENRE REGRESSION ---");
  const regressionResults = {};

  // 1. Norwegian Wood (Fiction)
  const nwKu = JSON.parse(fs.readFileSync(path.join(NW_DIR, 'knowledge-units.json'), 'utf-8'));
  const nwHtml = fs.readFileSync(path.join(NW_DIR, 'index.html'), 'utf-8');

  let nwTraceCount = 0;
  let nwFieldFailures = 0;
  nwKu.scenes.forEach(s => {
    const tag = `id="trace-data-${s.scene_id}"`;
    if (nwHtml.includes(tag)) nwTraceCount++;

    const m = nwHtml.match(new RegExp(`<script type="application/json" id="trace-data-${s.scene_id}">([\\s\\S]*?)<\\/script>`));
    if (m) {
      const trace = JSON.parse(m[1]);
      if (trace.scene_id !== s.scene_id || trace.chapter !== s.chapter || trace.location !== s.location) {
        nwFieldFailures++;
      }
    } else {
      nwFieldFailures++;
    }
  });

  const nwPass = (nwTraceCount === nwKu.scenes.length) && (nwFieldFailures === 0) &&
                 nwHtml.includes('id="view-journey"') && nwHtml.includes('id="view-map"') && nwHtml.includes('id="view-experience"');

  regressionResults.norwegian_wood = {
    genre: "literary_fiction",
    status: nwPass ? "PASS" : "FAIL",
    scenes_audited: nwKu.scenes.length,
    trace_payloads_recovered: nwTraceCount,
    field_failures: nwFieldFailures
  };
  console.log(`  Norwegian Wood: ${regressionResults.norwegian_wood.status} (${nwTraceCount}/${nwKu.scenes.length} scenes preserved)`);

  // 2. The Psychology of Money (Analytical Nonfiction)
  const pmKu = JSON.parse(fs.readFileSync(path.join(PM_DIR, 'knowledge-units.json'), 'utf-8'));
  const pmHtml = fs.readFileSync(path.join(PM_DIR, 'index.html'), 'utf-8');

  let pmTraceCount = 0;
  let pmFieldFailures = 0;
  const pmUnits = pmKu.content_units || pmKu.argument_units || [];
  pmUnits.forEach(u => {
    const tag = `id="trace-data-${u.unit_id}"`;
    if (pmHtml.includes(tag)) pmTraceCount++;

    const m = pmHtml.match(new RegExp(`<script type="application/json" id="trace-data-${u.unit_id}">([\\s\\S]*?)<\\/script>`));
    if (m) {
      const trace = JSON.parse(m[1]);
      if (trace.unit_id !== u.unit_id || trace.chapter !== u.chapter) {
        pmFieldFailures++;
      }
    } else {
      pmFieldFailures++;
    }
  });

  const pmPass = (pmTraceCount === pmUnits.length) && (pmFieldFailures === 0) &&
                 pmHtml.includes('id="view-journey"') && pmHtml.includes('id="view-map"') && pmHtml.includes('id="view-experience"');

  regressionResults.the_psychology_of_money = {
    genre: "analytical_nonfiction",
    status: pmPass ? "PASS" : "FAIL",
    arguments_audited: pmUnits.length,
    trace_payloads_recovered: pmTraceCount,
    field_failures: pmFieldFailures
  };
  console.log(`  The Psychology of Money: ${regressionResults.the_psychology_of_money.status} (${pmTraceCount}/${pmUnits.length} arguments preserved)`);

  const regressionPass = nwPass && pmPass;
  report.sections.J_cross_genre_regression = {
    status: regressionPass ? "PASS" : "FAIL",
    benchmarks: regressionResults
  };
  console.log(`  Section J Status: ${report.sections.J_cross_genre_regression.status}\n`);

  // ---------------------------------------------------------------------------
  // OVERALL ASSESSMENT
  // ---------------------------------------------------------------------------
  const allSections = Object.values(report.sections);
  const overallPass = allSections.every(s => s.status === "PASS");
  report.overall_status = overallPass ? "PASS" : "FAIL";

  console.log("================================================================================");
  console.log(`FINAL AUDIT RESULT: ${report.overall_status}`);
  console.log("================================================================================\n");

  return report;
}

if (require.main === module) {
  const report = runVerification();
  const jsonPath = path.join(__dirname, '..', 'docs', 'architecture', 'step-4-6-semantic-renderer-verification.json');
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`Saved JSON audit report to: ${jsonPath}`);
}

module.exports = { runVerification };
