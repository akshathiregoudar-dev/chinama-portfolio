/* ================= PROBLEM STATEMENT 1 ================= */
const BLOCKS = [[1, '16,000'], [2, '18,000'], [3, '16,000'], [4, '16,000'], [5, '14,000'], [6, '18,000'], [7, '20,000']];
const GEO_NOTE = 'Time and venue are read from the geo-tag stamp on the meeting photo.';

PS.push({
  id: 'ps-1', no: 1, short: 'Site Layout, RERA & Concrete', tag: 'Site layout · RERA · Concrete',
  title: 'Paperwork, RERA and an efficient site layout',
  theme: 'To complete all paperwork related to the local governing body and RERA, and develop a detailed site layout for efficient circulation of labour housing, material storage and the civil site office.',
  problem: `
  <div class="cols-1-2">
    <div>
      ${card(`<span class="lab">The brief</span><p>Your company has just won a contract for the construction of a <b>shopping mall</b>: <b>7 blocks</b> with interconnected pathways and <b>3 stories of underground parking</b>.</p>
      <p>Preliminary estimate: about <b>12,000 m³</b> of concrete on an <b>8-acre</b> plot. The existing ground drawing (AutoCAD) is the basis for the layout, and the mobilization amount arrives in the next week.</p>`, 'dk')}
      <div style="height:16px"></div>
      ${tbl(['Block No.', 'Area (sq ft)'], [...BLOCKS.map(b => [b[0], b[1]]), { t: 1, c: ['Total', '1,18,000'] }], [1])}
    </div>
    <div>
      ${fig('plot_plan.png', 'Existing ground drawing of the 8-acre plot with Blocks 1–7 and Gate 1', 'contain')}
      <div style="height:16px"></div>
      ${callout('The seven blocks total <b>1,18,000 sq ft</b> over <b>3 levels of underground parking</b>, on a site with two gates (entry and exit).', 'bl')}
    </div>
  </div>

  ${sub('What the assignment asks for', 'TASKS')}
  <div class="cols2">
    ${card(nl([
      'Study all paperwork required by the local governing body and RERA; contact the Architect, Structural Engineer and MEP Engineer for the permissions.',
      'Provide for the stay of skilled and unskilled labour, following Government of India guidelines once the labour count crosses the limit.',
      'Check whether 12,000 m³ justifies our own concrete plant or whether RMC will suffice; if a plant is needed, find vendors, place it so concrete reaches every corner, and plan conveying.',
      'Provide separate lots for carpenters and fabricators, with material storage.'
    ]))}
    ${card(nl([
      'Provide the electrical and water requirements for the site and the labour camp.',
      'Provide a civil engineering site office and a sales office.',
      'Plan for the 2 gates for entrance and exit.',
      'Set up the material testing lab and store.'
    ], 4))}
  </div>

  ${sub('Problem definition', 'OBJECTIVES')}
  <div class="cols2">
    ${card(ul([
      'Complete all paperwork related to the local governing body and RERA.',
      'Set up an economical concreting system to maximise efficiency.',
      'Set up a material testing lab to ensure the quality of construction material.'
    ]))}
    ${card(ul([
      'Develop a detailed site layout for efficient circulation of labour shelter, material storage and the civil site office.',
      'Determine the total duration of the project.'
    ]))}
  </div>

  ${sub('Questions prepared for the site interaction', 'Q&amp;A')}
  <div class="card">${ul([
    'What approvals are required before starting construction?', 'What documents should be available at the construction site?',
    'What facilities should be provided for workers?', 'How is site entry and exit controlled?', 'What safety measures are followed on site?',
    'Is PPE provided to all workers?', 'How is the quality of construction materials checked?', 'What tests are carried out on cement, sand and aggregates?',
    'What tests are performed on concrete?', 'How is daily construction progress recorded?', 'How are materials stored and protected at the site?',
    'What surveying instruments are used for setting out?', 'How are electricity and water supplied to the site?', 'How is construction waste disposed of?',
    'What records and registers should be maintained at the site?'
  ], 'two-lists')}</div>`,

  meetings: [
    {
      n: 1, date: '27/08/2026', time: '02:25 PM', dur: '30 minutes', venue: 'Vidya Nagar, Hubballi, Karnataka', photo: 'meeting1.jpg',
      points: ul(['<b>Achal</b> — we will discuss problem statement 1 as given', '<b>Chinnamma</b> — getting the RERA information', '<b>Sanjana</b> — getting the site location and the site engineer’s number', '<b>Neha</b> — getting information from the site engineer about our plan']),
      note: GEO_NOTE
    },
    {
      n: 2, date: '29/08/2026', time: '12:31 PM', dur: '20 minutes', venue: 'Vidya Nagar, Hubballi, Karnataka', photo: 'meeting2.jpg',
      points: ul(['<b>Achal</b> — welfare facilities for labour', '<b>Sanjana</b> — collected the information about the mobilization amount', '<b>Chinnamma</b> — information about RERA', '<b>Neha</b> — AutoCAD drawing']),
      note: GEO_NOTE
    }
  ],

  solutions: `
  ${sub('Site visited and interaction with the engineer', 'SITE VISIT')}
  <div class="cols-1-2">
    <div>
      ${card(`<span class="lab">Site visit</span>
        <div class="meta" style="margin-bottom:0">
          <div><span>Date</span><b>25/08/2026</b></div>
          <div><span>Time</span><b>11:47 AM</b></div>
          <div class="wide"><span>Location</span><b>G-4, Walvekar Rd, Shreya Nagar, Industrial Estate, Hubballi, Karnataka 580021</b></div>
          <div class="wide"><span>Stage of work</span><b>Under construction (RCC frame, brick stacks and formwork in progress)</b></div>
        </div>`)}
      <div style="height:16px"></div>
      ${card(`<span class="lab">Interaction with the engineer</span>
        <h4 style="margin-bottom:4px">Abhishek Jakkappanavar</h4>
        <p style="margin-bottom:10px;color:var(--muted)">Site Engineer</p>
        <p>The team met the site engineer on site and used the prepared question list (approvals, site documents, welfare, entry and exit control, safety, PPE, material testing, storage, utilities, waste and registers) to understand how a running project handles each point.</p>`, 'or')}
    </div>
    <div>
      ${fig('site_team.jpg', 'Team with the site engineer at the project site', 'photo')}
      <div style="height:16px"></div>
      ${gal(2, [fig('site_view.jpg', 'Ground-floor frame under construction', 'photo'), fig('site_frame.jpg', 'Columns and slab formwork at the visited site', 'photo')])}
    </div>
  </div>

  ${sub('Site layout for labour, storage and offices', 'LAYOUT')}
  ${gal(2, [fig('layout_phase1.png', 'Site layout — Phase 1', 'contain'), fig('layout_phase2.png', 'Site layout — Phase 2', 'contain')])}
  <div style="height:18px"></div>
  <div class="cols-1-2">
    <div>${tbl(['Facility', 'Dimensions'], [
      ['Site office', '4 m × 5 m'], ['Sales office', '4 m × 5 m'], ['Material testing lab', '4 m × 5 m'], ['Security office', '2 m × 2.5 m'],
      ['Material storage room', '6 m × 8 m'], ['Labour camp', '10 m × 15 m'], ['Toilet', '2 m × 3 m'], ['Water / storage area', '2 m × 3 m']])}</div>
    <div>
      ${card(`<h4>Labour welfare facilities</h4>
      <p>The layout must have a proper place for workers to stay, for both <b>skilled</b> labour (masons, electricians, carpenters, plumbers) and <b>unskilled</b> labour (helpers, loaders, general workers). Where headcount crosses the limit set by government rules, the contractor must follow the applicable labour laws.</p>
      ${ul(['Safe accommodation / shelter', 'Clean drinking water', 'Toilets and bathrooms', 'Proper lighting and ventilation', 'Waste disposal and cleanliness', 'Basic health and first-aid facilities', 'Safe cooking / food arrangements where applicable'], 'two-lists')}`)}
    </div>
  </div>

  ${sub('RERA and local-body paperwork', 'RERA')}
  <div class="cols2">
    ${card(`<h4>RERA Act (Real Estate Regulatory Authority)</h4>${ul([
      'Came into force on <b>1 May 2017</b> to reform the real estate sector in India; the RERA Act, 2016 is a landmark piece of legislation.',
      'Encourages greater transparency.',
      'Projects must be registered with the state RERA authority <b>before advertising or selling</b>.',
      'Protects homebuyers by providing a mechanism for complaints and disputes.',
      'Promotes timely completion and reduces delays in handover.',
      'Improves accountability of builders by requiring disclosure of project details, approvals, plans and progress.'
    ])}`)}
    ${card(`<h4>Promoters must furnish for registration</h4>${ul([
      '<b>Project details</b> — complete details of the proposed project.',
      '<b>Building approvals</b> — copies of approvals, sanctioned plans and permissions.',
      '<b>Project timeline</b> — expected completion and possession dates.',
      '<b>Bank account details</b> — a separate account for project funds.',
      '<b>Architect and contractor details</b> — architect, engineer and contractor involved.',
      '<b>Project transparency</b> — important information disclosed to buyers through registration.'
    ])}`, 'bl')}
  </div>
  <div style="height:18px"></div>
  <div class="cols2">
    ${card(`<h4>Design documents</h4>${ul(['Sanctioned architectural plan', 'Site / layout plan', 'Structural drawings', 'MEP drawings', 'Fire-fighting plan', 'Parking plan', 'Landscape plan'], 'two-lists')}`)}
    ${card(`<h4>Land documents</h4>${ul(['Sale deed / title deed', 'Encumbrance certificate', 'Land conversion / use permission', 'Property record', 'Survey plan', 'Site boundaries', 'Development agreement / JDA', 'Tippon / Tippani', 'Akarbandh (Index of Lands)', 'RTC (Record of Rights, Tenancy and Crops)', 'Mutation Register (MR)'], 'two-lists')}`)}
  </div>
  <div style="height:18px"></div>
  ${gal(4, [fig('doc_saledeed.jpg', 'Land document — sale deed / title deed', 'contain'), fig('doc_survey.jpg', 'Land document — survey plan', 'contain'), fig('doc_arch.jpg', 'Design document — sanctioned architectural plan', 'contain'), fig('doc_mep.jpg', 'Design document — MEP drawings', 'contain')])}

  ${sub('Concrete: RMC or on-site batching?', 'COST')}
  <p>With about 12,000 m³ of concrete, both routes were costed to see whether our own plant is justified.</p>
  ${tbl(['Particulars', 'RMC', 'On-site batching'], [
    ['Concrete quantity', '12,000 m³', '12,000 m³'], ['Rate per m³', '₹5,400', '₹5,837'],
    ['Concrete cost', '₹6,48,00,000', '₹7,00,44,000'], ['Labour cost', '₹14,00,000', '₹52,00,000'],
    ['Plant &amp; equipment', 'Included', '₹30,00,000'], ['Material wastage', '₹15,00,000', '₹35,02,200'], ['Quality control', 'Included', '₹9,00,000'],
    { t: 1, c: ['Total estimated cost', '₹6,77,00,000', '₹8,26,46,200'] }])}
  <p class="note">RMC concrete cost is 12,000 × ₹5,400 = ₹6,48,00,000, which is the figure that adds up to the ₹6,77,00,000 total.</p>
  <div class="cols2" style="margin-top:18px">
    ${card(`<h4>Calculation</h4><div class="formula"><em>RMC</em> 12,000 × ₹5,400 = ₹6,48,00,000<br>₹6,48,00,000 + ₹14,00,000 + ₹15,00,000 = <em>₹6,77,00,000</em><br><br><em>On-site</em> 12,000 × ₹5,837 = ₹7,00,44,000<br>₹7,00,44,000 + ₹52,00,000 + ₹30,00,000 + ₹35,02,200 + ₹9,00,000 = <em>₹8,26,46,200</em></div>
      <p class="note">M25 material rate basis — current Hubballi benchmarks: OPC 53 ≈ ₹427/bag, M-sand ≈ ₹1,250/tonne, 20 mm aggregate ≈ ₹1,225/tonne.</p>`)}
    ${card(`<span class="lab">Net cost difference</span><b style="font-family:var(--f-head);font-size:40px;color:var(--orange-d)">≈ ₹1.49 crore</b><p style="margin-top:8px">₹8,26,46,200 − ₹6,77,00,000 = ₹1,49,46,200.</p><p><b>RMC is cheaper</b> by about ₹1.49 crore for 12,000 m³ under these assumptions, so a dedicated plant is not justified.</p>`, 'gr')}
  </div>

  ${sub('Mobilization advance and quality checks', 'SETUP')}
  <div class="cols2">
    ${card(`<h4>Mobilization advance for initial site setup</h4><p>Advance money given to the contractor at the start of a project to begin work and arrange resources. It is generally used for:</p>${ul(['Setting up the construction site', 'Bringing machinery and equipment to site', 'Arranging labour and staff', 'Temporary labour accommodation', 'Temporary electricity', 'Water supply', 'Purchasing / transporting initial materials', 'Site office and basic facilities'], 'two-lists')}`)}
    ${card(`<h4>Tests to be conducted for quality check</h4>${ul(['Standard consistency of cement', 'Setting time of cement', 'Fineness modulus of aggregates', 'Flakiness and elongation index', 'Slump test', 'Compressive strength of concrete cubes', 'Water tests — pH value, alkalinity, sulphate'])}`, 'or')}
  </div>`,

  reflection: [
    'Problem Statement 1 showed me that a construction project starts long before the first excavation: land documents, sanctioned drawings and RERA registration decide whether a site can even begin work. Collecting the RERA information for the team made me realise how much of a project manager’s job is paperwork and coordination with the architect, structural and MEP engineers.',
    'The site visit at Shreya Nagar turned the layout from a drawing exercise into something real. Seeing stacked bricks, formwork and the site engineer’s routine helped me understand why labour camp, store, testing lab and offices have to be planned together with the gates and circulation.',
    'Comparing RMC with on-site batching taught me to question the “own plant” assumption: for 12,000 m³ the numbers clearly favoured RMC. Next time I would also check RMC supply distance and pump access early.'
  ],
  conclusion: {
    text: [
      'A workable start-up plan for the shopping-mall project needs three things in place together: complete RERA and local-body paperwork, a site layout that places labour housing, material storage, testing lab and offices around the two gates, and a concreting system chosen on cost.',
      'On cost, RMC at ₹6.77 crore beats on-site batching at ₹8.26 crore for 12,000 m³, so the layout does not need a batching plant and the material testing lab and store can be sized for quality control of incoming material.'
    ],
    kp: [['₹1.49 cr', 'saved by choosing RMC over an on-site plant'], ['2 phases', 'site layout drawn for the two construction phases'], ['8 facilities', 'sized and placed — offices, lab, store, labour camp, toilet, water']]
  }
});

/* ================= PROBLEM STATEMENT 2 ================= */
PS.push({
  id: 'ps-2', no: 2, short: 'Procurement, QC & Stores', tag: 'Procurement · QA/QC · Stores',
  title: 'Material procurement, quality control, storage and accounts',
  theme: 'To develop a system for construction material procurement, QC, storage and accounts that can sustain itself with minimum supervision from the project manager.',
  problem: `
  <div class="theme-box"><b>Scenario</b>You are the project manager and have just hired a new store manager who lacks experience with large-scale projects. The project starts in <b>15 days</b>. For efficient movement of materials in and out of the site, you must set up a procurement system that runs with minimal involvement from you once work begins.</div>
  <div class="cols-1-2">
    <div>${card(`<span class="lab">Conditions the system must meet</span>${nl([
      'Prepare the store layout keeping in mind consumables, non-consumables, equipment and safety gear.',
      'The site has 2 gates — based on the store’s location, decide which is used for <b>ingress</b> and which for <b>departure</b>.',
      'Record every vehicle number on entry and exit, using security and available technology.',
      'The driver brings the invoice: one copy stays with <b>security</b>, one with the <b>store manager</b>, one goes to <b>accounts</b>.',
      'Materials must pass quality checks — the QA/QC inspector works with the store manager, keeping the testing lab close to the store. Rejected material leaves the premises immediately, with proper paperwork.',
      'Accepted material goes to its designated storage slot defined during site layout planning.'
    ])}`)}</div>
    <div>
      ${fig('plot_plan.png', 'Plot plan: Gate 1 at the bottom, 871 ft site depth, Blocks 1–7 and the park', 'contain')}
      <div style="height:16px"></div>
      ${card(`<span class="lab">Objectives</span>${nl([
        'Develop an efficient construction material procurement system.',
        'Plan proper storage and site layout for all materials and equipment.',
        'Ensure proper entry, exit and movement of vehicles and materials.',
        'Maintain quality checking, inspection and documentation of materials.',
        'Manage material accounts and records with minimum supervision from the project manager.'
      ])}`, 'dk')}
    </div>
  </div>`,

  meetings: [{
    n: 1, date: '25/09/2026', time: '', dur: '50 minutes', venue: '', photo: '',
    points: nl([
      'What are the main consumable and non-consumable materials used at the site?',
      'How is the material procurement and ordering process carried out?',
      'What QC (Quality Control) and QA (Quality Assurance) checks are done for incoming materials?',
      'How are rejected materials identified, documented and returned?',
      'How are consumable and non-consumable materials, equipment and safety gear stored and arranged?',
      'How are invoices, vehicle entry/exit, stock and material records maintained?'
    ]),
    note: 'Time, venue and a photo for this meeting were not in the source slides.'
  }],

  solutions: `
  ${sub('Store and site layout', 'LAYOUT')}
  ${fig('store_layout.jpg', 'Proposed material-management layout: Gate 1 ingress, Gate 2 exit, store, testing lab, storage zones and the material management flow', 'contain')}
  <div style="height:18px"></div>
  ${flow([
    ['Entry &amp; security record', 'Vehicle number, driver, time logged at Gate 1; CCTV'],
    ['Invoice verification', 'Invoice/challan checked; 3 copies — security, store, accounts'],
    ['QA/QC inspection', 'Sampled and tested in the material testing lab'],
    ['Accept or reject', 'Accepted material to its slot; rejected leaves via Gate 2'],
    ['Storage &amp; records', 'Stock ledger, store records, accounts update']
  ])}

  ${sub('What gets stored', 'STORE')}
  <div class="cols2">
    ${card(`<h4>Consumables</h4><ul><li>Materials used up during construction and regularly replenished</li><li>Examples: cement, welding rods, binding wire, fuel, lubricants</li></ul>
      <h4 style="margin-top:16px">Non-consumables</h4><ul><li>Items not used up quickly and reusable over a longer period</li><li>Examples: tools, equipment, scaffolding, safety helmets, ladders</li></ul>`)}
    ${card(`<h4>Equipment</h4><ul><li>Used to carry out construction activities and improve speed and efficiency</li><li>Examples: excavator, concrete mixer, crane, vibrator, welding machine</li></ul>
      <h4 style="margin-top:16px">Safety gear</h4><ul><li>Protects workers from site hazards; must be provided and used</li><li>Examples: helmet, safety shoes, gloves, goggles, safety harness, reflective jacket</li></ul>`, 'or')}
  </div>

  ${sub('Security and gate control', 'GATES')}
  <div class="cols3">
    ${card(`<span class="lab">Gate 1 — ingress / entry</span>${ul(['Main entry gate for all material vehicles', 'Security cabin at the gate', 'Record vehicle number, driver details and entry time', 'Check the invoice / challan', 'Weighbridge or record point near the entry', 'CCTV surveillance at the gate'])}`, 'bl')}
    ${card(`<span class="lab">Gate 2 — departure / exit</span>${ul(['Used mainly for vehicle exit after unloading / inspection', 'Security checks vehicle number and exit time', 'Verify material documents before exit', 'Rejected materials are directed to Gate 2 for immediate removal'])}`, 'rd')}
    ${card(`<span class="lab">Security control</span>${ul(['Guards at both gates', 'CCTV covering gates and vehicle movement', 'Entry–exit register', 'Invoice / delivery challan records', 'Boom barrier for controlled vehicle movement', 'Safety signs, barricades, speed-limit signs', 'Emergency access kept clear'])}`)}
  </div>
  <div style="height:18px"></div>
  ${fig('store_records.jpg', 'Record formats: vehicle entry &amp; exit book, delivery challan, site gate pass, weighbridge slip and material rejection note', 'contain')}

  ${sub('Quality assurance and control', 'QA / QC')}
  <div class="cols-1-2">
    ${card(nl(['Inspect all incoming materials before accepting them at site.', 'Test materials in the material testing laboratory.', 'QA ensures proper quality procedures and standards are followed.', 'QC identifies defective or poor-quality material through inspection and testing.', 'Accept or reject on test results and keep proper records.']), 'dk')}
    <div class="cols2">
      ${card(`<h4>1 · Cement</h4><p>Check fineness, consistency and setting time — suitability for concrete work.</p><h4>2 · Aggregate</h4><p>Sieve analysis, grading, specific gravity and water absorption — proper size and quality.</p><h4>3 · Concrete</h4><p>Slump test for workability; cast cubes and test compressive strength.</p>`)}
      ${card(`<h4>4 · Brick</h4><p>Compressive strength and water absorption — adequate strength and durability.</p><h4>5 · Steel</h4><p>Diameter, weight, tensile strength and bend test — meets specification.</p><h4>6 · Water</h4><p>Quality and suitability of water used for mixing and curing.</p>`)}
    </div>
  </div>`,

  reflection: [
    'This problem statement made me see the store as the control room of a site. Without a clear gate-in, gate-out rule, three copies of every invoice and a testing step before acceptance, even a good store manager cannot keep stock and accounts reliable.',
    'What stood out most was designing for a new store manager: every step needs an owner and a record, so the project manager only reviews instead of supervising. Placing the testing lab close to the store and sending rejected material straight out of Gate 2 are small layout decisions that save a lot of confusion.',
    'I would like to add digital records such as number-plate capture and a shared stock sheet in the next iteration, since the paper formats work but are slow to audit.'
  ],
  conclusion: {
    text: [
      'A procurement system that can run with minimal supervision rests on a layout where entry, inspection, storage and exit follow one line, and on paperwork that is cross-checked by different people: security, store manager, QA/QC inspector and accounts.',
      'Gate 1 as ingress and Gate 2 as departure, a material testing lab beside the store, and rejection notes for anything that fails give the project manager a system that is checked by its own structure.'
    ],
    kp: [['2 gates', 'Gate 1 ingress · Gate 2 departure and rejected material'], ['3 copies', 'every invoice: security, store manager, accounts'], ['6 tests', 'cement, aggregate, concrete, brick, steel, water']]
  }
});
