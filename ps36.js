/* segmented bars (cutting plans) */
const segs = rows => `<div class="segs">${rows.map(r => `<div class="segrow"><div class="sl">${r.l}</div><div class="sb">${r.p.map(p => `<span class="sg ${p[2] || ''}" style="flex:${p[0]}">${p[1]}</span>`).join('')}</div><div class="sr">${r.r}</div></div>`).join('')}</div>`;

/* ================= PROBLEM STATEMENT 3 ================= */
PS.push({
  id: 'ps-3', no: 3, short: 'Steel & Formwork Optimisation', tag: 'Steel · Formwork · Wastage',
  title: 'Optimising steel and formwork usage for the shopping mall',
  theme: 'A continuation of the mall project: cut steel wastage from 12% to 5% and plywood formwork wastage from 9% to about 5%, with every set of shuttering reused at least 10 times, during the 30-day excavation window.',
  problem: `
  <div class="cols-1-2">
    <div>
      ${card(`<span class="lab">Project background</span><p>This problem continues the shopping-mall project of Problems 1 and 2. Company data shows average <b>steel wastage of 12%</b> and <b>plywood wastage of about 9%</b> for formwork. With excavation in progress for the next <b>30 days</b>, the task is to build a system that reduces both significantly.</p>`, 'dk')}
      <div style="height:16px"></div>
      ${bigStats([['12% → 5%', 'steel wastage (historical → target)', 1], ['9% → 5%', 'plywood wastage — 4-point cut; 4% stretch goal', 1], ['≥ 10×', 'uses per set of shuttering', 1]]).replace('big-stats', 'big-stats" style="grid-template-columns:1fr')}
    </div>
    <div>
      <div class="cols2">
        ${card(`<span class="lab">Steel management</span>${ul([
          '<b>Calculation</b> of steel requirement using Bar Bending Schedules (BBS); typical industry values may be assumed',
          '<b>Ordering</b> — project-wise (bulk) or block-wise? Justify',
          '<b>Storage and releasing</b> — minimal degradation or theft; controlled, accountable release to fabricators',
          '<b>Reconciliation</b> of ordered, used and wasted steel'
        ])}`)}
        ${card(`<span class="lab">Formwork management</span>${ul([
          '<b>Reuse strategy</b> — each set reused at least 10 times, based on Block 1 sizes',
          '<b>Working procedure</b> — installation, reuse, removal, maintenance and storage between uses'
        ])}<span class="lab" style="margin-top:14px">Deliverables</span>${ul(['Report on the steel and formwork system', 'Project-wise vs block-wise ordering comparison', 'Formwork reuse plan with groupings for the 10× target'])}`, 'or')}
      </div>
      <div style="height:16px"></div>
      ${tbl(['Member', 'Size (mm)'], [['Column C1', '450 × 450'], ['Column C2', '600 × 600'], ['Beam B1', '300 × 450'], ['Beam B2', '400 × 600']])}
    </div>
  </div>
  ${sub('Project layout from the site plan', 'SITE')}
  <div class="cols-1-2">
    ${fig('plot_plan.png', 'Site plan: 7 blocks on a 400 ft wide site with a central corridor of about 100 ft', 'contain')}
    <div>
      ${tbl(['Block', 'Size (ft)', 'Area (sq ft)'], [['Block 1', '100 × 160', '16,000'], ['Block 2', '135 × 133', '17,955'], ['Block 3', '100 × 160', '16,000'], ['Block 4', '≈100 × 150', '15,000'], ['Block 5', '≈135 × 100', '13,500'], ['Block 6', '≈135 × 130', '17,550'], ['Block 7', '≈100 × 190', '19,000']], [2])}
      <p class="note">Left column Blocks 1, 5, 2, 6 and right column Blocks 3, 4, 7, with a central corridor of about 100 ft for haulage and yards. Gate 1 (bottom) is the entry, Gate 2 (top) the exit. Sizes for Blocks 1–3 are from the plan; Blocks 4–7 are scaled from the drawing. Units assumed to be feet.</p>
    </div>
  </div>`,

  meetings: null,

  solutions: `
  ${sub('Design basis and BBS method', 'BBS')}
  <div class="cols2">
    ${card(`<h4>Basis and assumptions</h4>${ul([
      'Sizes C1 450×450, C2 600×600, B1 300×450, B2 400×600 mm for all blocks',
      'Concrete M25, steel Fe500D (IS 1786)',
      'Storey 3.6 m; G+3; 6.0 m grid (5.5 m clear) fitted to the plan footprints',
      'Cover: columns 40 mm, beams 25 mm',
      'Lap = 50d; 135° hooks (10d); stock bars 12 m',
      'Stirrups / ties 8 mm: 100 mm c/c at ends, 150 mm c/c at mid',
      'Slab 150 mm, M25 and 8 mm ring detailing from the reference schedules'
    ])}`)}
    <div>
      <div class="formula"><em>Unit weight</em> = d² / 162 kg/m<br><em>Stirrup cut length</em> = 2(a + b) + 24d<br><em>Column bar</em> = storey height + lap<br><em>Beam bar</em> = clear span + anchorage (column − cover + 8d)</div>
      <div style="height:14px"></div>
      ${card(`<h4>BBS workflow</h4>${ul(['Member BBS → block BBS → project BBS', 'Cutting plan on 12 m stock lengths', 'Order = BBS quantity + 5% allowance', 'Bar-mark tags link every bar to its BBS line'])}`, 'bl')}
    </div>
  </div>

  ${sub('Bar bending schedule — steel per member', 'BBS')}
  ${tbl(['Member', 'Size (mm)', 'Main steel', 'Stirrups / ties 8Ø', 'Concrete (m³)', 'Steel (kg)', 'kg/m³'], [
    ['<b>C1</b>', '450 × 450', '8–20Ø (4.6 m each)', '29 nos × 1.67 m', '0.73', '110', '151'],
    ['<b>C2</b>', '600 × 600', '12–20Ø (4.6 m each)', '29 nos, outer + inner tie', '1.30', '182', '141'],
    ['<b>B1</b>', '300 × 450', 'Bottom 3–16Ø, top 2–16Ø + 4–16Ø extra (2.37 m)', '44 nos × 1.49 m', '0.74', '93', '125'],
    ['<b>B2</b>', '400 × 600', 'Bottom 4–20Ø, top 2–20Ø + 4–20Ø extra (2.40 m)', '46 nos × 1.99 m', '1.32', '158', '120']], [4, 5, 6])}
  <p class="note">Per member, one storey (columns) or one 5.5 m clear span (beams). Footing and slab steel are scheduled the same way, then multiplied by member counts to get the block BBS and the project BBS.</p>
  <div style="height:8px"></div>
  <h4 style="font-size:17px;margin:10px 0">Cutting plan on 12 m stock (20Ø example)</h4>
  ${segs([
    { l: 'Naive', p: [[4.6, '4.6 m'], [4.6, '4.6 m'], [2.8, 'offcut 2.8 m', 'bad']], r: '23% offcut' },
    { l: 'Optimised', p: [[4.6, '4.6 m'], [4.6, '4.6 m'], [2.4, '2.40 m extra'], [.4, '', 'bad']], r: '0.40 m · 3.3%' }])}

  ${sub('Block-wise steel quantity (columns + beams)', 'QTY')}
  <div class="cols-1-2">
    <div>${tbl(['Block', 'C1 / C2', 'B1 / B2', 'Per floor (t)', 'G+3 (t)'], [
      ['Block 1', '40 / 13', '59 / 32', '17.3', '69'], ['Block 2', '45 / 15', '67 / 36', '19.6', '78'], ['Block 3', '40 / 13', '59 / 32', '17.3', '69'],
      ['Block 4', '37 / 13', '56 / 30', '16.4', '66'], ['Block 5', '34 / 11', '50 / 27', '14.7', '59'], ['Block 6', '44 / 15', '66 / 35', '19.2', '77'], ['Block 7', '47 / 16', '70 / 38', '20.6', '82'],
      { t: 1, c: ['Project', '', '', '125.2', '501'] }], [3, 4])}</div>
    <div>
      ${card(`<span class="lab">Steel for G+3 frame, tonnes</span>${bars([['Block 1', 69], ['Block 2', 78], ['Block 3', 69], ['Block 4', 66], ['Block 5', 59], ['Block 6', 77], ['Block 7', 82]], ' t', 85, 6)}`)}
      <div style="height:14px"></div>
      ${callout('Frame steel ≈ <b>501 t</b>. Cutting wastage from 12% to 5% saves about <b>35 t</b>.')}
      <p class="note">Method: columns ≈ footprint ÷ 300 sq ft (6 m grid); 25% C2 and 75% C1; beams ≈ 1.72 × columns, 65% B1 and 35% B2; G+3 assumed. Slabs and footings are added when their schedules are issued.</p>
    </div>
  </div>

  ${sub('Steel ordering: project-wise or block-wise?', 'ORDER')}
  ${tbl(['Criteria', 'Project-wise (bulk)', 'Block-wise'], [
    ['Rate', 'Best price, one rate contract', 'Smaller lots, higher rate'], ['Offcut reuse', 'Offcuts pooled across blocks', 'Offcuts stay in one block'],
    ['Storage and degradation', 'Large stock held, rust risk', 'Small stock, low rust risk'], ['Theft and capital lock-up', 'Higher', 'Lower'],
    ['Design-change risk', 'High if ordered early', 'Low'], ['Traceability', 'Needs block coding', 'Natural block-wise tracking']])}
  ${callout('<b>Recommendation: project-wise procurement, block-wise delivery and release.</b> With 7 blocks of similar size, one rate contract covers 8, 12, 16 and 20 mm Fe500D for the whole site. Deliveries enter at Gate 1 in 2-week tranches matched to the next pours, and every bundle is coded to a block — bulk price and offcut pooling, with limited storage, rust and theft exposure.', 'gr')}

  ${sub('Storage, release and reconciliation', 'CONTROL')}
  <div class="cols2">
    ${card(`<h4>Storage and inventory</h4>${ul([
      'Raised timber / concrete sleepers 150–300 mm above a drained, compacted yard',
      'Covered shed; no contact with soil, cement or water',
      'Segregate by diameter, grade and heat number; tag each bundle',
      'FIFO issue; ledger by block code',
      'Yard near Gate 1, fabrication area in the central corridor; fenced, locked, CCTV, one storekeeper',
      'Check at Gate 1 (weigh, diameter, tensile and bend tests) before stacking'
    ])}`)}
    ${card(`<h4>Controlled release to fabricators</h4>${nl([
      'Engineer raises a requisition against the approved BBS (bar mark, dia, nos, block, pour)',
      'PM / QS approves',
      'Storekeeper weighs and issues; voucher signed',
      'Fabricator cuts and bends per cutting plan',
      'Bent bars tagged by bar mark and moved to the element',
      'Offcuts and unused bars returned, weighed and logged',
      'Scrap and rejects leave only via Gate 2 with a gate pass'
    ])}`, 'or')}
  </div>
  <div style="height:18px"></div>
  <div class="cols-1-2">
    <div class="formula"><em>Stock</em>  Opening + Received − Issued = Closing (physical count)<br><em>Usage</em>  Theoretical (BBS × pours done) vs Issued<br><em>Wastage %</em> = (Issued − Theoretical) ÷ Theoretical × 100<br><br><em>Per pour</em> element-wise check<br><em>Weekly</em> diameter-wise reconciliation<br><em>Monthly</em> PM review, rate and stock audit</div>
    <div>
      ${tbl(['Wastage', 'Status', 'Action'], [['≤ 5%', pill('On target', 'g'), 'Continue'], ['5–8%', pill('Amber', 'a'), 'Investigate within 24 h'], ['&gt; 8%', pill('Red', 'r'), 'Hold issues, root-cause review']])}
      <p class="note">Register columns: date, block, pour / element, diameter · opening, received, issued, returned offcut · theoretical (BBS), variance, wastage % · cause code (cutting, over-order, rust, theft, error).</p>
    </div>
  </div>

  ${sub('Formwork reuse strategy: groupings', 'FORMWORK')}
  ${tbl(['Group', 'Elements', 'Panel size (mm)', 'Why grouped'], [
    ['<b>G1</b>', 'Columns C1 450×450', '4 faces, 450 wide × 3000 high', 'Identical section; panels interchange between blocks'],
    ['<b>G2</b>', 'Columns C2 600×600', '4 faces, 600 wide × 3000 high', 'Two faces rip from a 1220 sheet width'],
    ['<b>G3</b>', 'Beams B1 300×450', 'Soffit 300; sides 300 deep (450 − 150 slab)', 'Same depth below slab on every floor'],
    ['<b>G4</b>', 'Beams B2 400×600', 'Soffit 400; sides 450 deep (600 − 150 slab)', 'Same depth below slab on every floor'],
    ['<b>G5</b>', 'Slab 150 mm', 'Deck panels on 1220 × 2440 modules', 'Standard sheet, no trimming needed']])}
  <div class="cols2" style="margin-top:16px">
    ${callout('Column shutter height is <b>3.0 m</b> (3.6 m storey minus the 0.6 m deepest beam). Slight variations in other blocks are absorbed by adjustable filler strips, so panels are never recut.', 'bl')}
    ${callout('<b>Material:</b> film-faced shuttering plywood (IS 4990), 18 mm, on timber / steel runners; steel props and clamps instead of face nailing.')}
  </div>

  ${sub('Working procedure', 'PROCESS')}
  ${flow([['Prepare', 'Clean faces, apply release agent, seal cut edges'], ['Erect', 'Fix panels to marked layout; clamps and tie rods, no nails on face'], ['Inspect', 'Check line, level, plumb and joints before concreting'], ['Strip', 'Sides 16–24 h; slab soffit 3 days; beam soffit 7 days with props re-fixed (IS 456 cl. 11.3)'], ['Clean &amp; repair', 'Scrape, patch, re-seal edges, update reuse tag'], ['Store', 'Stack flat on battens under cover, grouped G1–G5'], ['Retire', 'Remove panels that miss the surface or edge check']])}
  ${callout('<b>Handling rules:</b> lift panels, never drag; strip with wedges, never crowbars on the face; one trained shuttering gang per group.')}

  ${sub('How the groupings deliver 10× reuse', 'REUSE')}
  <div class="cols-1-2">
    ${card(`<h4>Reuse logic</h4>${ul([
      'Each group keeps the same section, so a stripped panel goes straight to the next identical element',
      '7 blocks × 4 lifts = 28 lifts. <b>Set A</b> (Blocks 1, 5, 2, 6): 16 uses. <b>Set B</b> (Blocks 3, 4, 7): 12 uses — both exceed 10',
      'A reuse tag on every panel records the count; retire when edge or face fails',
      'Edge sealing and release agent protect film-faced ply for 10+ cycles',
      'Weekly maintenance check by the formwork foreman'
    ])}`)}
    <div>
      ${tbl(['Ripped from 1220 mm sheet width', 'Used (mm)', 'Loss'], [['600 + 600 (C2 faces)', '1200', '1.6%'], ['450 + 450 + 300 (B2 sides + B1 side)', '1200', '1.6%'], ['400 × 3 (B2 soffits)', '1200', '1.6%'], ['300 × 4 (B1 soffits / sides)', '1200', '1.6%']], [1, 2])}
      <p class="note">Widths 300, 400, 450 and 600 mm combine to 1200 mm, so every sheet is ripped with about 1.6% width loss. With kerf and end trims, plywood wastage stays near the 5% target (4% stretch).</p>
    </div>
  </div>

  ${sub('30-day implementation plan and expected outcome', 'PLAN')}
  <div class="cols4">
    ${card('<span class="lab">Week 1</span><p>Finalise BBS and cutting plans; place the rate contract for Fe500D.</p>')}
    ${card('<span class="lab">Week 2</span><p>Set up steel yard, store, registers, weighing and CCTV.</p>')}
    ${card('<span class="lab">Week 3</span><p>Finalise formwork groups; rip and fabricate first sets; train gangs.</p>')}
    ${card('<span class="lab">Week 4</span><p>Trial lot: fabricate column steel, run the first reconciliation; ready to start.</p>', 'or')}
  </div>
  <div style="height:16px"></div>
  ${card(`<span class="lab">Expected outcome</span>${ul(['Steel wastage falls from 12% to 5% — 7 kg saved on every 100 kg purchased', 'Plywood wastage falls from 9% to about 5% (4% stretch) with 10 or more uses per set', 'Every bar and panel is traceable, so discrepancies are caught at pour level, not at project close'])}`, 'gr')}`,

  reflection: [
    'The biggest lesson from this statement is that waste is mostly a planning problem. Cutting bars to a plan on 12 m lengths and ripping plywood into widths that add up to 1,200 mm of a 1,220 mm sheet removed most of the loss before any bar was bent or any panel nailed.',
    'Working through the BBS for C1, C2, B1 and B2 also showed me why a controlled release matters: if issue is tied to bar marks and returned offcuts are weighed, the reconciliation tells you quickly whether a loss is cutting, rust, over-ordering or theft.',
    'Many numbers here rest on assumptions because structural drawings were not issued. I learned to state them clearly, so the same system can be re-run when real BBS values arrive.'
  ],
  conclusion: {
    text: [
      'Project-wise purchase on one rate contract, with block-wise delivery and release, gives the best price and offcut pooling without storing the whole project’s steel on site. A BBS-based cutting plan, tagged storage, voucher-based release and weekly reconciliation with green / amber / red limits bring steel wastage from 12% towards 5%.',
      'Five formwork groups (G1–G5) built on common panel widths, a seven-step working procedure and a reuse tag on every panel allow each set to be used 12–16 times across the blocks, and bring plywood wastage to about 5%.'
    ],
    kp: [['≈ 501 t', 'frame steel for G+3 across 7 blocks'], ['≈ 35 t', 'saved by cutting wastage 12% → 5%'], ['12–16×', 'planned uses per formwork set (target ≥ 10)']]
  }
});

/* ================= PROBLEM STATEMENT 4 ================= */
PS.push({
  id: 'ps-4', no: 4, short: 'Wastage Control: Quantities', tag: 'Steel · Formwork · Take-off',
  title: 'Reducing wastage of steel and formwork through efficient management',
  theme: 'Shopping-mall project of 7 blocks on 8 acres, ≈ 12,000 m³ of concrete and 3 levels of basement parking. History: steel wastage 12% and plywood wastage 9%. Use the 30-day excavation period to set up a system that controls both.',
  problem: `
  <div class="cols2">
    ${card(`<span class="lab">Targets and tasks</span>${ul([
      '<b>Steel</b> — target wastage 5%: calculate requirement (BBS), decide project-wise or block-wise ordering, storage and release to fabricators, reconciliation',
      '<b>Formwork</b> — reduce wastage by 4%: group columns and beams by size; working procedure to reuse each set at least 10 times'
    ])}<p class="note">Interpretation used: “reduce by 4%” = 4 percentage points, i.e. plywood wastage from 9% to 5%. Wastage is measured as a % of the net (drawing / BBS) requirement.</p>`, 'dk')}
    ${card(`<span class="lab">Objectives</span>${nl([
      'Calculate steel accurately with Bar Bending Schedules before anything is ordered',
      'Choose the right ordering strategy for a 7-block, 8-acre site',
      'Store steel safely and release it only against a BBS-based issue slip',
      'Reconcile ordered / issued / fixed / scrap every week',
      'Reduce steel wastage 12% → 5%',
      'Reduce plywood wastage 9% → 5% with ≥ 10 reuses per set'
    ])}`)}
  </div>
  ${sub('Working assumptions', 'ASSUMED')}
  <div class="cols2">
    ${card(ul(['Concrete 12,000 m³ shared between blocks in proportion to area (total 1,18,000 sq ft)', 'Reinforcement 110 kg per m³ of RCC; Fe500D; M25 concrete; cover 40 mm', 'Floor-to-floor 4.0 m; slab 150 mm', 'Sizes given for Block 1: C1 450×450, C2 600×600, B1 300×450, B2 400×600 mm — valid for all blocks, with small variations']))}
    ${card(ul(['Contact area of formwork ≈ 6 m² per m³ of concrete (average of footings, columns, beams, slabs)', 'Steel rate ₹65,000 per tonne (assumed, ex-GST)', 'All quantities will be replaced by real BBS values once structural drawings arrive; the system stays the same']))}
  </div>`,

  meetings: null,

  solutions: `
  ${sub('Quantity take-off: concrete and steel per block', 'QTY')}
  ${tbl(['Block', 'Area (sq ft)', 'Concrete (m³)', 'Net steel (t)', 'Order @ 12% (t)', 'Order @ 5% (t)', 'Saving (t)'], [
    ['1', '16,000', '1,627', '179.0', '200.5', '187.9', '12.5'], ['2', '18,000', '1,831', '201.4', '225.5', '211.4', '14.1'], ['3', '16,000', '1,627', '179.0', '200.5', '187.9', '12.5'],
    ['4', '16,000', '1,627', '179.0', '200.5', '187.9', '12.5'], ['5', '14,000', '1,424', '156.6', '175.4', '164.4', '11.0'], ['6', '18,000', '1,831', '201.4', '225.5', '211.4', '14.1'], ['7', '20,000', '2,034', '223.7', '250.6', '234.9', '15.7'],
    { t: 1, c: ['Total', '1,18,000', '12,000', '1,320.0', '1,478.4', '1,386.0', '92.4'] }], [1, 2, 3, 4, 5, 6])}
  <p class="note">Concrete per block = 12,000 × block area ÷ 1,18,000 (≈ 0.1017 m³ per sq ft). Net steel = concrete × 110 kg/m³. Order quantity = net × (1 + wastage).</p>
  ${callout('Cutting wastage from 12% to 5% saves <b>92.4 t</b> of steel over the project — about <b>₹60 lakh</b> at ₹65,000/t.', 'gr')}

  ${sub('Where does steel get wasted?', 'CAUSES')}
  <div class="cols-1-2">
    ${card(ul([
      '<b>Random cutting</b> — bars cut without a cutting plan leave short offcuts that are thrown away',
      '<b>BBS errors / over-ordering</b> — lengths, laps and counts guessed on site',
      '<b>Drawing changes</b> — bars cut before the latest revision is issued',
      '<b>Poor storage</b> — bars on soil rust; diameters get mixed up',
      '<b>Weak issue control</b> — verbal issues, no record, pilferage',
      '<b>Rework</b> — wrong bending / rejected bars'
    ]) + '<p class="note">Offcuts are the single biggest loss, so the biggest gain comes from a cutting plan made before the steel is cut. The split of the 12% is an indicative planning budget, to be calibrated against company records and weekly reconciliation.</p>')}
    ${fig('chart_wastage.png', 'Indicative wastage budget (% of net steel): historical 12% vs target 5%', 'contain')}
  </div>

  ${sub('Steel management system', 'SYSTEM')}
  ${flow([['BBS', 'Drawing → BBS by element → cutting plan · planning engineer'], ['Ordering', 'Consolidated demand; phased release orders · purchase + PM'], ['Receiving &amp; storage', 'Weigh, check test certificate, tag, stack · store keeper + QC'], ['Issue', 'Issue slip against bar marks only · store + site engineer'], ['Fabrication &amp; fixing', 'Cut as per plan; offcuts returned and logged · yard supervisor'], ['Reconciliation', 'Weekly: BBS vs issued vs fixed vs scrap · QS + PM']])}
  <div class="cols2" style="margin-top:16px">
    ${card(`<h4>Golden rules</h4>${ul(['No steel is ordered without an approved BBS', 'No steel is issued without a signed issue slip', 'No offcut ≥ 1 m is scrapped — it is logged and reused', 'Every week the numbers must tie up'])}`, 'dk')}
    ${card(`<h4>Why it needs little supervision</h4>${ul(['Every step has an owner and a one-page format', 'Store keeper and QC inspector cross-check each other', 'Green / amber / red wastage limits trigger action automatically', 'The project manager reviews only the weekly dashboard'])}`, 'or')}
  </div>

  ${sub('BBS method and worked example — column C1, 450 × 450 mm', 'BBS')}
  <div class="cols-1-2">
    <div>
      <div class="formula"><em>Unit weight</em> = d² / 162 kg/m<br><em>Straight bar</em> = member length + lap<br><em>Bend deduction</em> 45°=1d · 90°=2d · 135°=3d · 180°=4d<br><em>Tie (135° hooks)</em> = 2(a + b) + 24d<br><em>Lap adopted</em> 50d (Fe500D, M25)</div>
      <p class="note">BBS is prepared per element from the latest drawing revision and checked by a second engineer. Each bar has a unique bar mark, used on the issue slip, the tag and the fixing check.</p>
    </div>
    <div>
      ${tbl(['Mark', 'Dia', 'Nos', 'Cut length (m)', 'Total length (m)', 'Unit wt (kg/m)', 'Weight (kg)'], [
        ['C1-A', '20', '8', '5.000', '40.00', '2.469', '98.8'], ['C1-B (ties @150)', '8', '25', '1.672', '41.80', '0.395', '16.5'], { t: 1, c: ['Total per column per floor', '', '', '', '', '', '115.3'] }], [1, 2, 3, 4, 5, 6])}
      <p class="note">C1-A: floor height 4,000 + lap 50 × 20 = 1,000 → 5,000 mm. C1-B: a = b = 450 − 2 × 40 = 370 mm → 2 × (370 + 370) + 24 × 8 = 1,672 mm; ties = 3,550 / 150 + 1 ≈ 25. Concrete = 0.45² × 3.55 = 0.72 m³.</p>
    </div>
  </div>

  ${sub('Cutting plan: turning offcuts into zero waste', 'CUTTING')}
  <p>Mill bars come in 12 m lengths. Cutting each bar mark separately leaves offcuts.</p>
  ${segs([
    { l: 'No plan · C1 bar', p: [[5, '5.0 m'], [5, '5.0 m'], [2, 'scrap 2.0 m', 'bad']], r: '16.7% waste' },
    { l: 'No plan · beam bar', p: [[3.5, '3.5 m'], [3.5, '3.5 m'], [3.5, '3.5 m'], [1.5, 'scrap 1.5', 'bad']], r: '12.5% waste' },
    { l: 'With plan', p: [[5, '5.0 m column'], [3.5, '3.5 m beam', 'ok'], [3.5, '3.5 m beam', 'ok']], r: '0% waste' }])}
  <div class="cols2" style="margin-top:16px">
    ${card(`<h4>Cutting-plan steps</h4>${ul(['Group all BBS lines by diameter', 'Sort by length, longest first', 'Fit pieces into 12 m bars (first-fit decreasing)', 'Print a cut list per bar for the yard'])}`)}
    ${card(`<h4>Offcut and lap control</h4>${ul(['Offcuts ≥ 1 m go to the offcut rack with a length tag — used for short bars, chairs and spacers', 'Stagger laps (not more than 50% at one section)', 'Consider mechanical couplers for Ø ≥ 25 mm where lap steel is large'])}`, 'bl')}
  </div>

  ${sub('Steel ordering — project-wise or block-wise?', 'ORDER')}
  ${tbl(['Criterion', 'Project-wise (all blocks)', 'Block-wise (each block)'], [
    ['Price', 'Bulk volume ≈ 1,400 t → better rate and mill / dealer priority', 'Small lots → higher rate per tonne'],
    ['Price risk', 'Rate can be fixed for a period with an escalation clause', 'Exposed to market price at every order'],
    ['Storage space', 'All steel on site at once — not possible on a narrow 400 × 871 ft site', 'Only the block in hand — small yard'],
    ['Cash flow', 'Large advance / early payment', 'Pay as required'],
    ['Diameter mix and wastage', 'Better to consolidate all dia / lengths for cutting plan', 'Fragmented lots → more odd offcuts'],
    ['Design changes', 'Surplus stock if a block changes', 'Easy to adapt']])}
  ${callout('<b>Decision — hybrid.</b> A project-wise rate contract (one or two mills / dealers, price valid 12 months, test certificates for every lot) with block-wise, floor-wise release orders placed 3 weeks ahead from the approved BBS, delivered in 12 m lengths. Gets the bulk rate without storing a thousand tonnes on site.', 'gr')}

  ${sub('Storage, release and reconciliation', 'CONTROL')}
  <div class="cols2">
    ${card(`<h4>Storage</h4>${ul(['Covered store / yard near Gate 1 (entry) with fencing, lighting and CCTV', 'Bars on sleepers or concrete plinth, 150–300 mm above ground; tarpaulin cover', 'Separate bays by diameter and length; heat / lot number tag on every bundle', 'Rejected steel in a marked quarantine bay — removed the same day', 'FIFO stacking; stock board at the store', 'Offcut rack and scrap bay kept apart'])}`)}
    ${card(`<h4>Controlled release</h4>${ul(['Fabricator raises an indent slip by bar mark from the approved BBS', 'Site engineer signs; store keeper issues exact diameter and weight', 'Weighed at issue; entry in the issue register and ledger', 'Cut bars leave the yard only with a pour-card / gate pass', 'Offcuts and unused bars returned and weighed back', 'No verbal issue — ever'])}`, 'or')}
  </div>
  ${callout('Every kilogram has a signature on it — receipt (invoice + test certificate), storage (bay + tag), issue (slip) and use (fixing check by BBS bar mark).', 'bl')}
  <div class="cols-1-2">
    <div>
      <div class="formula"><em>Store</em>  Opening + Received − Issued = Closing (counted)<br><em>Yard</em>  Issued − Yard stock − Fixed (per BBS) − Scrap = Unaccounted<br><em>Wastage %</em> = (Issued − Yard stock − Fixed) ÷ Fixed × 100</div>
      <div style="height:12px"></div>
      ${tbl(['Wastage limit', 'Status', 'Action'], [['≤ 5%', pill('Green', 'g'), 'Continue'], ['5–7%', pill('Amber', 'a'), 'Investigate within 48 h; check cutting plan'], ['&gt; 7%', pill('Red', 'r'), 'Stop issue for that block until cause is fixed']])}
    </div>
    <div>
      <h4 style="font-size:17px;margin-bottom:10px">Sample weekly sheet — Block 1 slab (illustrative)</h4>
      ${tbl(['Item', 'Tonnes'], [['Issued to yard', '70.0'], ['Yard closing stock', '0.8'], ['Fixed as per BBS', '66.0'], ['Scrap weighed back', '2.9'], ['Unaccounted (70.0 − 0.8 − 66.0 − 2.9)', '0.3'], { t: 1, c: ['Wastage = (70.0 − 0.8 − 66.0) ÷ 66.0', '4.85%'] }], [1])}
      <p class="note">Done every Saturday by the QS with the store keeper and site engineer; signed by the project manager. Scrap is sold only against a weighment slip; scrap value is booked to the project.</p>
    </div>
  </div>

  ${sub('Formwork — grouping of columns and beams', 'FORMWORK')}
  ${tbl(['Group', 'Element', 'Size (mm)', 'Contact area', 'Standard set'], [
    ['<b>G1</b>', 'Column C1', '450 × 450', '6.39 m² per floor', '4 panels, ht 3.55 m'], ['<b>G2</b>', 'Column C2', '600 × 600', '8.16 m² per floor', '4 panels, ht 3.40 m'],
    ['<b>G3</b>', 'Beam B1', '300 × 450', '0.90 m² per m run', 'soffit 300 + 2 sides 300'], ['<b>G4</b>', 'Beam B2', '400 × 600', '1.30 m² per m run', 'soffit 400 + 2 sides 450'], ['<b>G5</b>', 'Slab', '150 thick', '1.00 m² per m²', '2.44 × 1.22 m panels']])}
  <p class="note">Floor-to-floor 4.0 m. C1 = 4 × 0.45 × (4.0 − 0.45); C2 = 4 × 0.60 × (4.0 − 0.60); B1 = 0.30 + 2 × (0.45 − 0.15); B2 = 0.40 + 2 × (0.60 − 0.15). Columns taken up to the beam soffit. Sizes within 50 mm use the same set plus filler strips; otherwise a new group.</p>
  <h4 style="font-size:17px;margin:14px 0 10px">Nested cutting of an 18 mm plywood sheet (width 1,220 mm)</h4>
  ${segs([
    { l: 'Pattern 1', p: [[600, '600 C2', 'ok'], [600, '600 C2', 'ok'], [20, '', 'bad']], r: '1,200 / 1,220' },
    { l: 'Pattern 2', p: [[450, '450 C1', 'ok'], [450, '450 C1', 'ok'], [300, '300 B1', 'ok'], [20, '', 'bad']], r: '1,200 / 1,220' },
    { l: 'Pattern 3', p: [[400, '400 B2', 'ok'], [400, '400 B2', 'ok'], [400, '400 B2', 'ok'], [20, '', 'bad']], r: '1,200 / 1,220' },
    { l: 'Pattern 4', p: [[300, '300', 'ok'], [300, '300', 'ok'], [300, '300', 'ok'], [300, '300', 'ok'], [20, '', 'bad']], r: '1,200 / 1,220' }])}
  <p class="note">Each pattern uses 1,200 of 1,220 mm — 98.4% yield across the width.</p>

  ${sub('Procedure for ≥ 10 reuses per set', 'REUSE')}
  <div class="cols-1-2">
    ${card(ul([
      '<b>Design</b> — film-faced 18 mm plywood on steel / timber soldiers; edges sealed; panel library per group G1–G5',
      '<b>Tag</b> — every panel numbered; a stroke painted on each use; reuse register updated',
      '<b>Fix</b> — clean face, apply release agent, use clamps and bolts, no nails through the face',
      '<b>Strip</b> — with wedges, never crowbars on the face; follow IS 456 stripping times',
      '<b>Inspect &amp; sort</b> after every use: A = reuse, B = repair, C = demote to kickers / fillers',
      '<b>Store</b> flat on racks, covered, near the block; repair table on site',
      '<b>Rotate</b> floor-to-floor in one block (≈ 7 levels), then move the set to the next block → 10+ uses'
    ]) + '<p class="note">Assumes ≈ 7 levels per block (3 basements + ground + 3 upper). If a block has fewer, sets move on to the next block sooner.</p>')}
    <div>
      <h4 style="font-size:17px;margin-bottom:10px">Minimum stripping time (IS 456 cl. 11.3, OPC, ≥ 15 °C)</h4>
      ${tbl(['Member', 'Time'], [['Column, wall, beam sides', '16–24 h'], ['Slab soffit (props refixed)', '3 days'], ['Beam soffit (props refixed)', '7 days'], ['Props, slab span ≤ 4.5 m', '7 days'], ['Props, slab span &gt; 4.5 m', '14 days'], ['Props, beam span ≤ 6 m', '14 days'], ['Props, beam span &gt; 6 m', '21 days']])}
    </div>
  </div>

  ${sub('Formwork: cutting wastage from 9% to 5%', 'PLYWOOD')}
  <div class="cols-1-2">
    ${card(ul([
      '<b>Random cutting</b> → nested cutting plan on the 1,220 mm width, panels cut in the carpentry yard only',
      '<b>Damage at stripping</b> → wedges, trained gang, no crowbars on the face',
      '<b>Edge swelling and delamination</b> → edge sealing, covered stacking, release agent every use',
      '<b>No tracking</b> → reuse register and monthly plywood stock check',
      '<b>Leakage / misuse</b> (scaffolding, partitions) → issue slips, store control'
    ]))}
    <div>
      ${tbl(['Plywood (assumed)', 'Value'], [['Contact area ≈ 6 m² × 12,000 m³', '72,000 m²'], ['Net plywood with 10 reuses', '7,200 m²'], ['Purchase at 9% wastage', '7,848 m²'], ['Purchase at 5% wastage', '7,560 m²'], { t: 1, c: ['Saving', '288 m² ≈ 97 sheets (8 × 4 ft)'] }], [1])}
      <p class="note">Reuse matters even more than cutting waste: if present practice gives about 5 reuses, 10 reuses halve the plywood purchase (14,400 m² → 7,200 m² net).</p>
    </div>
  </div>

  ${sub('Expected benefit and 30-day implementation plan', 'PLAN')}
  ${bigStats([['92.4 t', 'steel saved (12% → 5%), ≈ ₹60 lakh at ₹65,000/t'], ['288 m²', 'plywood saved ≈ 97 sheets'], ['≥ 10×', 'reuse of every formwork set'], ['Weekly', 'reconciliation with green / amber / red limits']])}
  <div style="height:14px"></div>
  ${tbl(['Week', 'Action during excavation'], [
    ['<b>1</b>', 'Collect drawings, prepare BBS template, appoint store keeper and QC inspector, decide group sizes G1–G5'],
    ['<b>2</b>', 'BBS and cutting plan for Block 1 foundations; request quotations from 3 mills / dealers; plywood panel design and cut list'],
    ['<b>3</b>', 'Sign rate contract; build steel store, offcut rack and fabrication yard; print slips and registers; train fabricators and carpenters'],
    ['<b>4</b>', 'Dry run: mock issue and reconciliation, panel fabrication and tagging, audit by project manager; go live with foundations']])}`,

  reflection: [
    'Problem Statement 4 pushed me to turn wastage percentages into tonnes and square metres. Seeing that 7 percentage points of steel is 92.4 t — about ₹60 lakh — made the cost of an unplanned cutting yard very concrete.',
    'The worked cutting plan was the clearest example: the same bars that leave 16.7% scrap when cut one mark at a time leave none when 5.0 m and 3.5 m pieces are packed into 12 m lengths. The hybrid ordering decision also taught me that “bulk vs block” is rarely either-or; the best answer can split price, delivery and release.',
    'I also learned how important it is to be honest about assumptions: 110 kg/m³ and 6 m² of contact area per m³ are planning values, and the system is designed to be recalibrated with real BBS data.'
  ],
  conclusion: {
    text: [
      'A BBS-led steel system — approved BBS before ordering, cutting plans before cutting, signed issue slips, weekly reconciliation with green / amber / red limits — takes wastage from 12% to 5%, saving 92.4 t of steel. A hybrid purchase (project-wise rate contract, block- and floor-wise release) gives bulk pricing without a thousand tonnes in the yard.',
      'For formwork, five groups, nested plywood cutting, tagging and an IS 456 stripping routine cut plywood purchase by 288 m² and allow at least 10 reuses of every set. A four-week plan during excavation makes the system ready before steel fixing starts.'
    ],
    kp: [['92.4 t', 'steel saved ≈ ₹60 lakh'], ['288 m² ≈ 97 sheets', 'plywood saved'], ['≥ 10×', 'reuse for every formwork set']]
  }
});

/* ================= PROBLEM STATEMENT 5 ================= */
PS.push({
  id: 'ps-5', no: 5, short: 'Optimum Labour Force', tag: 'Labour · Histogram · Contracts',
  title: 'Determining the optimum labour force through the stages of construction',
  theme: 'From the concrete required for each block, determine the number of skilled labour (fabricators, carpenters, masons) and unskilled labour (the concrete gang) needed at each stage.',
  problem: `
  <div class="cols2">
    ${card(`<span class="lab">What has to be determined</span>${ul(['<b>Skilled labour</b> — fabricators, carpenters, masons', '<b>Unskilled labour</b> — the concrete gang'])}<p style="margin-top:12px">From the concrete required for each block (quantity take-off).</p>`, 'dk')}
    ${card(`<span class="lab">Keep in mind</span>${ul([
      'A peak period needs many workers; a slack period needs fewer',
      'Too few workers → productivity suffers',
      'Too many workers → not enough work, they leave',
      'Know the prevailing wages in the area and the government minimum wage',
      'The company must sign a contract with the labour supplier — know its legal and technical details'
    ])}`, 'or')}
  </div>`,

  meetings: null,

  solutions: `
  ${sub('Approach and assumptions', 'METHOD')}
  ${flow([['Concrete', 'Volume per block from the take-off'], ['Norms', 'Man-days per m³ for each trade'], ['Schedule', 'Blocks in two waves; monthly concrete'], ['Histogram', 'Workers per month — peak and slack'], ['Hiring &amp; contract', 'Strategy, wages, legal terms']])}
  <div class="cols2" style="margin-top:16px">
    ${card(ul(['Two waves, as in the site-layout phases: <b>Wave 1</b> Blocks 1–5 (months 1–12), <b>Wave 2</b> Blocks 6–7 (months 8–16); 16 months of structural work', 'Month-wise concrete follows an S-curve: slow start, steady middle, taper at the end']))}
    ${card(ul(['26 working days per month; concrete is ready-mix (RMC) placed by pump', 'Only the structural frame is planned — masonry, finishing and MEP crews are separate', 'Norms are typical values, corrected later with real site output records']))}
  </div>

  ${sub('Concrete required for each block', 'CONCRETE')}
  ${tbl(['Block', 'Area (sq ft)', 'Concrete (m³)', 'Share', 'Construction wave'], [
    ['1', '16,000', '1,627', '13.6%', 'Wave 1 (M1–12)'], ['2', '18,000', '1,831', '15.3%', 'Wave 1 (M1–12)'], ['3', '16,000', '1,627', '13.6%', 'Wave 1 (M1–12)'], ['4', '16,000', '1,627', '13.6%', 'Wave 1 (M1–12)'], ['5', '14,000', '1,424', '11.9%', 'Wave 1 (M1–12)'],
    ['6', '18,000', '1,831', '15.3%', 'Wave 2 (M8–16)'], ['7', '20,000', '2,034', '16.9%', 'Wave 2 (M8–16)'], { t: 1, c: ['Total', '1,18,000', '12,000', '100%', 'W1 8,136 + W2 3,864 m³'] }], [1, 2, 3])}
  <p class="note">Concrete per block = 12,000 m³ × block area ÷ 1,18,000 sq ft. Wave 1 carries 8,136 m³ (68%); Wave 2 carries 3,864 m³ (32%).</p>

  ${sub('Labour norms: man-days per m³ of RCC', 'NORMS')}
  ${tbl(['Trade', 'Category', 'Man-days/m³', 'Total man-days', 'Basis'], [
    ['Carpenters (formwork)', 'Skilled', '1.0', '12,000', '≈ 6 m² of contact area fixed and stripped per carpenter-day'],
    ['Fabricators (bar benders)', 'Skilled', '0.6', '7,200', '110 kg/m³ → ≈ 5.5 fabricator-days per tonne'],
    ['Masons', 'Skilled', '0.2', '2,400', 'Concrete finishing, levels, supervision of pours'],
    ['Helpers + concrete gang', 'Unskilled', '1.2', '14,400', 'Helpers to carpenters 0.5 + to fabricators 0.3 + concrete gang (placing, vibrating, curing) 0.4'],
    { t: 1, c: ['Total', 'Skilled 60 : unskilled 40', '3.0', '36,000', 'Average over 16 months = 36,000 ÷ (16 × 26) ≈ <b>87 workers per day</b>'] }], [2, 3])}
  <p class="note">3.0 man-days/m³ is a planning norm for a basement + multi-storey frame; after the first two pours it is re-based on actual output.</p>

  ${sub('Labour required per block', 'BLOCKS')}
  ${tbl(['Block', 'Concrete (m³)', 'Man-days', 'Avg crew', 'Peak carpenters', 'Peak fabricators', 'Peak masons', 'Peak unskilled', 'Peak total'], [
    ['1', '1,627', '4,881', '16', '8', '5', '2', '9', '24'], ['2', '1,831', '5,492', '18', '9', '6', '2', '11', '28'], ['3', '1,627', '4,881', '16', '8', '5', '2', '9', '24'], ['4', '1,627', '4,881', '16', '8', '5', '2', '9', '24'],
    ['5', '1,424', '4,271', '14', '7', '4', '2', '8', '21'], ['6', '1,831', '5,492', '24', '13', '8', '3', '16', '40'], ['7', '2,034', '6,102', '26', '15', '9', '3', '17', '44']], [1, 2, 3, 4, 5, 6, 7, 8])}
  <p class="note">Block duration: Wave 1 blocks 12 months, Wave 2 blocks 9 months. Peak crew = average crew × peak-month factor (1.44 for Wave 1, 1.62 for Wave 2), rounded up. Blocks do not peak together, so the site-wide peak (130 workers in month 8) is lower than the sum of block peaks. Crews move from block to block as pours finish.</p>

  ${sub('Labour histogram: peak and slack', 'HISTOGRAM')}
  ${bigStats([['130', 'peak, month 8: 78 skilled + 52 unskilled'], ['87', 'average workers per day'], ['38 → 13', 'slack: month 1 and month 16'], ['16 months', 'of structural work']])}
  <div style="height:14px"></div>
  ${fig('chart_histogram.png', 'Workers on site per day, by month of structural work (skilled vs unskilled), against the average of 87', 'contain')}
  <p class="note">Month-wise concrete (m³): 325, 569, 732, 895, 976, 976, 976, 1,127, 1,119, 1,111, 1,021, 858, 541, 386, 271, 116 — total 12,000. Workers = concrete × 3.0 ÷ 26.</p>

  ${sub('Too few or too many? Choosing the hiring strategy', 'STRATEGY')}
  ${tbl(['Strategy', 'What happens', 'Idle man-days', 'Unmet demand', 'Verdict'], [
    ['A. Hire for the peak (130) for all 16 months', 'Fully used only near the peak (months 8–10); the rest of the time many sit idle and leave', '18,080 (≈ 50% of work)', '0', pill('Wasteful, workers leave', 'r')],
    ['B. Hire the average (87)', 'Peak months cannot be staffed; slabs and columns fall behind', '7,011', '6,819 man-days (19%)', pill('Delays, low productivity', 'a')],
    ['C. Follow the histogram — ramp up / down in steps of 10 with a stable core', 'Crew matched to concrete each month', '1,960 (≈ 5%)', '0', pill('Recommended', 'g')]], [])}
  <div class="cols2" style="margin-top:16px">
    ${card(`<h4>How to hold the line</h4>${ul(['Core crew of ≈ 60 skilled workers from month 4 to 12, always kept busy', 'Flexible 20–40 workers from the supplier for peak months, 7 days’ notice', 'Multi-skill helpers (fix steel / shutter / cure) to move between jobs', 'Share carpenters and fabricators across blocks'])}`)}
    ${card(`<h4>Lowering the peak by levelling</h4><p>Starting Wave 2 in month 10 instead of 8 cuts the peak from <b>130 to 113 workers (−13%)</b> and the average to 77.</p><p><b>Cost:</b> structural work takes 18 months instead of 16. Choose it only if the client’s date allows.</p>`, 'or')}
  </div>

  ${sub('Crew composition at peak (month 8)', 'CREW')}
  ${tbl(['Gang', 'Composition', 'Workers at peak'], [
    ['Concrete gang (per pump, ≈ 12)', '1 foreman-mason, 2 vibrator operators, 6 placing helpers, 2 curing / finishing, 1 pump-line helper', '≈ 17 (1–2 gangs)'],
    ['Carpentry gangs (formwork)', 'Gangs of 4 carpenters + 2 helpers, one gang per pour zone', '43 carpenters + 22 helpers'],
    ['Fabrication yard', 'Cutting / bending team + fixing team; pairs of fabricator + helper', '26 fabricators + 13 helpers'],
    ['Masons', 'Levels, finishing of slab / column tops, quality of pours', '9'],
    { t: 1, c: ['Total', 'Skilled 78 + unskilled 52', '130'] }], [2])}
  <p class="note">Supervisors (foremen, site engineers, safety officer, store keeper) are staff and not counted. Rule of thumb: a pour is planned only when the full gang, pump and vibrators are available — a half-strength gang is never started.</p>

  ${sub('Wages and labour cost', 'WAGES')}
  ${tbl(['Category', 'Minimum wage (₹/day)', 'Planning market rate (₹/day)', 'Man-days', 'Cost (₹ lakh)'], [
    ['Carpenter', '684.91', '1,000', '12,000', '120.0'], ['Fabricator (bar bender)', '684.91', '950', '7,200', '68.4'], ['Mason', '684.91', '1,000', '2,400', '24.0'], ['Unskilled / helper', '654.66', '700', '14,400', '100.8'],
    { t: 1, c: ['Total', '', '', '36,000', '313.2 (≈ ₹3.13 crore)'] }], [1, 2, 3, 4])}
  <p class="note">Minimum wage: Karnataka, Building and Other Construction Works, in force from 1 April 2026 (Zone 2 rates shown; confirm the zone for Hubballi–Dharwad in the Labour Department notification). Market rates are indicative and to be confirmed with local suppliers; offering above minimum wage keeps skilled workers on site. Average ≈ ₹870 per man-day; excludes overtime (double rate), PF / ESI, supplier margin, safety and camp costs.</p>

  ${sub('Labour contract — legal, technical and commercial terms', 'CONTRACT')}
  <div class="cols2">
    ${card(`<h4>Laws that apply</h4>${ul([
      '<b>OSH Code 2020</b> — contract labour, inter-state migrant and building-worker provisions (all four Labour Codes in force from 21 Nov 2025; state rules to be checked)',
      '<b>Code on Wages 2019</b> — minimum wage, timely payment, overtime',
      '<b>Code on Social Security 2020</b> — PF, ESI, gratuity, compensation'
    ])}<h4 style="margin-top:16px">The contract must secure</h4>${ul([
      'Contractor holds a valid licence (needed where 50 or more contract workers are supplied; valid 5 years, Shram Suvidha portal)',
      'Company registered as principal employer (establishments with 10+ workers)',
      'Wages ≥ Karnataka minimum, paid by bank transfer on time; overtime at double rate',
      'PF / ESI enrolment proof every month; accident / compensation insurance',
      'Welfare and safety: shelter, drinking water, toilets, first aid, PPE',
      'Principal employer can pay workers directly and recover from the contractor if wages are unpaid',
      'Register of migrant workers and journey allowance where applicable'
    ])}`)}
    ${card(`<h4>Technical and commercial terms</h4>${ul([
      '<b>Scope</b> — trades, blocks / activities, work method (day rate or measured rate per m² shuttering, per kg steel, per m³ concrete)',
      '<b>Strength schedule</b> — month-wise numbers from the histogram; ±10% change allowed with 7 days’ notice',
      '<b>Productivity</b> — minimum output norms, skill test and ID card for every worker',
      '<b>Attendance</b> — biometric / muster record kept at the gate',
      '<b>Replacement</b> — absent or unfit workers replaced within 48 hours',
      '<b>Payment</b> — monthly cycle, running bills after measurement; 5% retention released after completion',
      '<b>Compliance</b> — PF / ESI challans submitted before payment',
      '<b>Damages</b> — liquidated damages for under-deployment; recovery for material damage',
      '<b>Safety</b> — PPE, induction and toolbox talks compulsory; contractor liable for non-compliance',
      '<b>Rates</b> — revised automatically when government minimum wage is revised',
      'Termination, indemnity and arbitration clauses; duration linked to the schedule'
    ])}<p class="note">Summary for planning, not legal advice — the final agreement should be vetted by the company’s legal / HR team and the Labour Department.</p>`, 'bl')}
  </div>`,

  reflection: [
    'This problem statement changed how I think about “number of workers”. A single average of 87 hides a month-8 peak of 130 and a month-16 tail of 13, so the real task is to match the crew to the concrete curve, not to pick one number.',
    'Comparing three hiring strategies made the trade-off tangible: hiring for the peak leaves about half the man-days idle, hiring the average leaves 19% of the work unstaffed, and following the histogram with a stable core keeps idle time near 5%.',
    'The contract section was a useful reminder that labour planning is also legal planning — licences, minimum wages, PF / ESI proof and retention clauses protect both the company and the workers.'
  ],
  conclusion: {
    text: [
      'Starting from 12,000 m³ of concrete and a norm of 3.0 man-days per m³, the frame needs about 36,000 man-days — an average of 87 workers a day, peaking at 130 in month 8 (78 skilled and 52 unskilled).',
      'The best strategy is to hire in steps that follow the histogram, keep a stable core crew and use the licensed supplier for flexible peak labour, paying above the statutory minimum so workers stay. The labour cost of the frame is about ₹3.13 crore.'
    ],
    kp: [['130', 'workers at peak (month 8) — 78 skilled / 52 unskilled'], ['87', 'average workers per day over 16 months'], ['≈ ₹3.13 cr', 'labour cost for 36,000 man-days (≈ ₹870 each)']]
  }
});

/* ================= PROBLEM STATEMENT 6 ================= */
PS.push({
  id: 'ps-6', no: 6, short: 'Cube Test Failure Investigation', tag: 'Testing · Investigation · RMC',
  title: 'When 23 of 56 columns fail the cube test',
  theme: 'To demonstrate the importance of the tests conducted on site and the ramifications of failure of material tests.',
  problem: `
  <div class="theme-box"><b>Scenario</b>RCC work has reached ground-floor level in 3 blocks. Cubes from footings and columns go to a third-party lab. All <b>106 footings</b> reached the required strength, but <b>23 of 56 columns</b> failed the 28-day compressive strength test. Local RMC was used, because the company’s own plant is still being set up. The RMC contract makes the RMC owner responsible for demolishing and rebuilding failed components — but he says the mistake was in the concreting at site.</div>
  <div class="cols3">
    ${card(`<span class="lab">Task 1</span><p>Brainstorm everything that might have gone wrong.</p>`, 'dk')}
    ${card(`<span class="lab">Task 2</span><p>Develop a plan so that no cube test fails in this project hereafter.</p>`, 'dk')}
    ${card(`<span class="lab">Task 3</span><p>From the RMC owner’s point of view, which precautions will keep him out of such a situation?</p>`, 'dk')}
  </div>`,

  meetings: null,

  solutions: `
  ${sub('What the test results tell us', 'RESULT')}
  <div class="cols-1-2">
    ${fig('chart_cubes.png', 'Footings: 106 of 106 passed. Columns: 33 passed, 23 failed (41.1% fail)', 'contain')}
    <div>
      ${card(`<h4>First reading</h4>${ul([
        'Same RMC and same period → a plain “bad cement” or “bad mix” should have hurt the footings too',
        'The difference lies in what happened to column concrete and column cubes: grade, placing, compaction, curing or sampling',
        'Many columns failing together points to a systematic cause, not bad luck'
      ])}`)}
      <div style="height:14px"></div>
      ${card(`<h4>Immediate steps</h4>${ul(['Stop work above the failed columns; do not load them', 'Collect all records: batch tickets, slump, pour cards, cube register', 'Mark the 23 failed columns with pour dates and trucks', 'Start NDT and core tests'])}`, 'rd')}
    </div>
  </div>

  ${sub('Brainstorm: everything that might have gone wrong', 'CAUSES')}
  <div class="cols3">
    ${card(`<span class="lab">1 · Concrete supplied by the RMC</span><h4>Materials and mix</h4>${ul(['Mix design for the column grade not trial-tested or not followed', 'Low-strength or old cement; aggregate grading or silt content changed', 'Aggregate moisture not corrected → extra water in the batch', 'Admixture overdose → delayed strength / segregation'])}<h4 style="margin-top:12px">Batching and transport</h4>${ul(['Weigh-batcher not calibrated; wrong cement or water quantity', 'Long transit or waiting → slump loss, water added in the drum', 'Drum not agitating; residual wash water', 'Wrong grade or slump sent for columns; mixed-up tickets'])}<p class="note">These are the RMC owner’s responsibility, tested through batch tickets, plant records and retained plant cubes.</p>`, 'bl')}
    ${card(`<span class="lab">2 · Placing and curing at site</span><h4>Placing and compaction</h4>${ul(['Water added at site to make concrete flow into congested column steel', 'Free fall from more than 1.5 m → segregation', 'Needle vibrator not used or too short; honeycombing at the bottom', 'Cold joints: late trucks, long gaps between loads', 'Leaking shuttering joints lose cement slurry', 'Wrong grade poured: ticket not checked'])}<h4 style="margin-top:12px">Curing and protection</h4>${ul(['Columns exposed to sun and wind with no curing for days (footings stay moist underground)', 'Shuttering removed too early; curing by sprinkling once or twice a day', 'Hot-weather concreting without precautions', 'Cement slurry / dirt left at the column base'])}<p class="note">If concrete in the column is weak, cubes may fail and the real column is weak too — so the investigation must also test the structure.</p>`, 'or')}
    ${card(`<span class="lab">3 · Cube sampling, curing, testing</span><h4>Sampling and casting</h4>${ul(['Cubes from the first or last part of the truck, or from concrete before water was added', 'Cubes cast from a different truck than the one used in the column', 'Moulds oily, loose or out of shape; poor tamping (3 layers × 35 strokes)', 'Cube not marked properly — mix-up of ID and grade'])}<h4 style="margin-top:12px">Curing, transport and lab</h4>${ul(['Cubes left in the sun or moved within 24 h; not in the curing tank after 24 h', 'Tank water not at 27 ± 2 °C; cubes dried before testing', 'Machine not calibrated; uneven faces, no capping; wrong loading rate (14 N/mm² per minute)', 'Lab not accredited; results mixed up'])}<p class="note">Check this group first: cheapest to examine, and the only one that can make sound columns look bad.</p>`, 'gr')}
  </div>

  ${sub('Why columns and not footings?', 'DIAGNOSIS')}
  ${tbl(['Condition', 'Footings (106 passed)', 'Columns (23 of 56 failed)'], [
    ['Grade of concrete', 'Usually lower grade (e.g. M20 / M25)', 'Usually higher grade (e.g. M30 / M40) — more sensitive to water and compaction'],
    ['Placing', 'Poured directly from chute / pump, short fall', 'Narrow, tall forms, congested bars; long free fall; vibrator hard to insert'],
    ['Workability handling', 'Easy, flows freely', 'Pressure to add water so concrete “goes in”'], ['Form tightness', 'Earth-supported', 'Shuttering joints can leak grout'],
    ['Curing', 'Earth keeps concrete moist', 'Exposed to sun and wind; curing often forgotten'], ['Cube treatment', 'Made at ground level, cured in time', 'Made in a hurry during tall-column pours']])}
  ${callout('<b>Most likely combination:</b> a higher-grade mix + water added at site + weak compaction and curing in columns. To be proved by the investigation — the batch tickets will show whether the grades differed.')}

  ${sub('Investigation: finding the real cause', 'INVESTIGATE')}
  ${flow([['Paper trail', 'Batch tickets, mix design, slump / temperature records, pour cards, cube register, lab reports'], ['Pattern', 'Failed cubes vs truck, batch time, pour date, column location and grade'], ['Structure', 'Rebound hammer and UPV on all 23 columns; mark the weak ones'], ['Cores', 'Drill cores from the weakest columns (IS 456, cl. 17.4)'], ['Decision', 'Accept, strengthen, or demolish and rebuild']])}
  <div class="cols2" style="margin-top:16px">
    ${card(`<h4>Core-test acceptance (IS 456, cl. 17.4.3)</h4>${ul(['Average of the cores ≥ 85% of the specified strength', 'No single core less than 75%', 'Cores taken from the weakest zones found by NDT, away from reinforcement and joints'])}`)}
    ${card(`<h4>How the result is used</h4>${ul(['Cores pass but cubes failed → the fault was in the cubes (sampling, curing, testing)', 'Cores fail → the concrete itself is weak; replacement as per contract', 'Both sides record findings jointly; third-party lab is NABL-accredited'])}`, 'bl')}
  </div>

  ${sub('Plan for no cube failure from now on', 'PLAN')}
  <div class="cols3">
    ${card(`<span class="lab">Before the pour</span>${ul(['Approved mix design and trial for each grade; batch plant visit', 'Pour card signed by engineer: grade, quantity, vibrators, truck gaps, curing plan', 'Check reinforcement, cover blocks, clean shuttering, leak-proof joints', 'Stand-by vibrator, chute / tremie, curing material ready', 'No pour in extreme heat or rain without precautions'])}`, 'bl')}
    ${card(`<span class="lab">During the pour</span>${ul(['Check ticket: grade, time of loading; reject if &gt; 2 h or wrong grade', 'Slump and temperature on every truck; reject outside tolerance', 'No water added — use superplasticiser if flow is needed', 'Free fall ≤ 1.5 m; layers 300–450 mm; needle vibrator in every layer', 'Cubes from the middle of the load, 3 per sample, marked and logged'])}`, 'or')}
    ${card(`<span class="lab">After the pour</span>${ul(['Cubes kept covered 24 h, then in the curing tank (27 ± 2 °C)', 'Columns cured ≥ 7 days (OPC) / ≥ 10 days (blended cement, hot weather)', '7-day cubes as early warning (≈ 65–70% of target)', 'Rebound hammer on columns after stripping', 'Weekly review of all results by the PM'])}`, 'gr')}
  </div>

  ${sub('Sampling and acceptance rules (IS 456)', 'IS 456')}
  <div class="cols-1-2">
    <div>
      <h4 style="font-size:17px;margin-bottom:10px">Sampling frequency (cl. 15.2.2)</h4>
      ${tbl(['Quantity of concrete (m³)', 'Number of samples'], [['1–5', '1'], ['6–15', '2'], ['16–30', '3'], ['31–50', '4'], ['51 and above', '4 + 1 for every extra 50 m³ or part']])}
      <p class="note">Each sample = 3 cubes (150 mm), tested at 28 days; the sample result is the average of the 3. At least one sample from each shift.</p>
    </div>
    <div>
      <h4 style="font-size:17px;margin-bottom:10px">Acceptance (Table 11, grade M20 and above)</h4>
      ${tbl(['Criterion', 'Requirement'], [['Mean of 4 consecutive results', '≥ fck + 0.825 s, not less than fck + 4 N/mm²'], ['Any individual result', '≥ fck − 3 N/mm²'], ['Example, M25 (s = 4)', 'Mean ≥ 29 N/mm²; each ≥ 22 N/mm²']])}
      ${callout('<b>Stricter than the code:</b> 1 sample per truck for columns until results are stable, so a bad truck is spotted early.')}
    </div>
  </div>

  ${sub('The RMC owner’s point of view: precautions', 'RMC OWNER')}
  <div class="cols2">
    ${card(`<span class="lab">At the plant</span>${ul(['Mix designs (IS 10262) with trial cubes for every grade supplied', 'Weigh-batchers calibrated; moisture meters for sand; admixture dosing checked', 'Plant lab: cubes from every day’s production, 7- and 28-day results charted', 'Strict limit on transit and waiting time; GPS / log for trucks'])}`, 'bl')}
    ${card(`<span class="lab">At the site</span>${ul(['Delivery ticket with grade, batch time, slump and signature of the site engineer', 'Slump check on arrival; no water added without written permission — and if added, it is recorded and the responsibility changes', 'Joint cube sampling and joint custody of cubes', 'Written advice on placing and curing; refuse to supply where facilities are inadequate'])}`, 'or')}
  </div>
  ${callout('<b>Contract protection:</b> state clearly that the RMC’s responsibility covers the fresh concrete as delivered; placing, compaction and curing are the contractor’s. Add a joint-investigation clause, an accredited independent lab and retained plant cubes as evidence.', 'bl')}

  ${sub('Why site tests matter, and what they protect', 'TESTS')}
  ${tbl(['Test', 'Standard', 'What it checks', 'If skipped / fails'], [
    ['Cement — consistency, setting time, strength', 'IS 4031', 'Quality of binder', 'Slow or weak concrete; flash set'],
    ['Aggregate — sieve analysis, silt, flakiness', 'IS 2386 / 383', 'Grading, cleanliness, shape', 'More water and cement needed; low strength'],
    ['Water — pH, chlorides, sulphates', 'IS 456', 'Impurities', 'Corrosion of steel, set and strength problems'],
    ['Steel — diameter, weight, tensile and bend', 'IS 1786', 'Fe500D grade and weight', 'Weaker members; brittle failure; under-weight bars'],
    ['Slump test', 'IS 1199', 'Workability, water content', 'Segregation, honeycombing, hidden extra water'],
    ['Cube compressive strength', 'IS 516', 'Strength achieved', 'Unsafe members; rework; legal claims'],
    ['Rebound hammer / UPV / core', 'IS 13311 / IS 516', 'Strength in the structure', 'Disputes cannot be settled; unnecessary demolition']])}

  ${sub('Ramifications of a failed test', 'IMPACT')}
  ${flow([['Cube fails', 'Work above is stopped'], ['NDT + cores', 'Time and cost of testing'], ['Cores pass', 'Accept with records'], ['Cores fail', 'Strengthen, or demolish and rebuild'], ['Who pays?', 'As the contract says — the RMC owner here']])}
  <div class="cols2" style="margin-top:16px">
    ${card(`<h4>Ramifications</h4>${ul(['Structural safety risk to occupants', 'Delay to the whole schedule (RERA completion date)', 'Cost of demolition, rebuilding and testing', 'Disputes, claims and loss of reputation'])}`, 'rd')}
    ${card(`<h4>What protects everyone</h4><p>The contract clause protected the company, and good testing protects everyone: the no-water rule, compaction, curing and cube discipline prevent repeat failures.</p>`, 'gr')}
  </div>`,

  reflection: [
    'This was the statement that connected every earlier test I had listed — cement, aggregate, water, slump, cubes — to a real consequence. A single missing record or one bucket of water added at the pump can end in demolishing columns and a dispute between the RMC owner and the contractor.',
    'The footing-versus-column comparison taught me to look for what is different rather than what is common: same RMC, same period, very different results. That pushed me towards placing, compaction, curing and cube handling instead of blaming the mix.',
    'I also valued seeing the same facts from the RMC owner’s side. Delivery tickets with slump and signatures, joint sampling and a clear contract split of responsibility are what protect a supplier — and they make the project safer too.'
  ],
  conclusion: {
    text: [
      'Footings passed 106 of 106 while 23 of the 56 columns failed. That points to site practice and cube handling rather than a supply-wide mix fault, to be confirmed by the investigation: paper trail, pattern analysis, NDT and cores.',
      'Going forward, the no-water rule, compaction, curing and cube discipline prevent repeat failures. The contract clause protected the company, and good testing protects everyone.'
    ],
    kp: [['106 / 106', 'footings passed'], ['23 of 56', 'columns failed (33 passed)'], ['85% / 75%', 'core acceptance — average / minimum single core']]
  },
  after: `
  <div class="sub" style="margin-top:20px"><span class="tagx">APPENDIX</span><h3>Sources, standards and items to confirm</h3></div>
  <div class="cols2">
    ${card(`<h4>Sources used</h4>${ul(['Karnataka minimum wages — Building and Other Construction Works (wageindicator.org, in force from 1 Apr 2026)', 'Four Labour Codes enforced 21 Nov 2025 (ksandk.com); contract labour under the OSH Code (lkslaw.com)', 'TMT rate guidance: tatanexarc.com, sreemetaliks.com', 'IS 456:2000, IS 516, IS 1199, IS 2502, SP 34, IS 4926, IS 10262, IS 1786, IS 383, IS 2386, IS 4031, IS 13311'])}`)}
    ${card(`<h4>Assumed values — confirm before final submission</h4>${ul(['Steel 110 kg/m³; rate ₹65,000/t', 'Floor height 4.0 m, slab 150 mm, ≈ 7 levels per block', 'Contact area 6 m² per m³ of concrete', 'Labour norms 3.0 man-days/m³ and market wage rates', 'Wave 1 / Wave 2 timing (16 months of structure)', 'Minimum-wage zone for Hubballi–Dharwad', 'Grade of the failed columns (M25 used as example)'])}`, 'or')}
  </div>`
});
