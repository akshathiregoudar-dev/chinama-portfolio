/* ================= HOME ================= */
const OUT = {
  'ps-1': ['≈ ₹1.49 crore saved by choosing RMC over an on-site plant', 'Site layout · RERA · Site visit'],
  'ps-2': ['2 gates · 3 invoice copies · 6 material tests', 'Procurement · QA/QC · Stores'],
  'ps-3': ['≈ 35 t steel saved · every formwork set reused 10×+', 'BBS · Ordering · Formwork groups'],
  'ps-4': ['92.4 t steel and 288 m² plywood saved', 'Take-off · Cutting plans · Reconciliation'],
  'ps-5': ['Peak 130 workers · average 87 · ≈ ₹3.13 crore', 'Histogram · Wages · Contracts'],
  'ps-6': ['23 of 56 columns failed — causes and a no-failure plan', 'Investigation · IS 456 · RMC owner']
};
const BLURB = {
  'ps-1': 'Statutory paperwork, a two-phase site layout and a cost comparison of RMC against on-site batching for 12,000 m³ of concrete.',
  'ps-2': 'A store, gate and records system that a new store manager can run: ingress and exit, three-copy invoices, testing lab and rejection notes.',
  'ps-3': 'BBS-based steel quantities for all seven blocks, project-wise purchase with block-wise release, and five formwork groups for 10× reuse.',
  'ps-4': 'Concrete and steel take-off per block, cutting plans, weekly reconciliation and a plywood plan, with a 30-day set-up schedule.',
  'ps-5': 'Crew size month by month from the concrete curve, three hiring strategies compared, wages and the labour contract.',
  'ps-6': 'Brainstorming why columns failed while footings passed, a plan so no cube fails again, and the RMC owner’s precautions.'
};

ROUTES.home = {
  title: 'Home',
  html: () => `
<section class="hero">
  <div class="wrap">
    <div>
      <div class="eyebrow">Construction Site Management Practice · 26ECVP401</div>
      <h1>Site Management<em>Portfolio</em></h1>
      <p class="lead">Six problem statements, one shopping-mall project: site layout, procurement, wastage control, labour planning and quality testing, worked out in meetings, on a live site in Hubballi and on paper.</p>
      <div class="chips"><span class="chip">Chinnamma H · 164</span><span class="chip">School of Civil Engineering</span><span class="chip">KLE Technological University</span><span class="chip">2026-27</span></div>
      <div class="btns"><a class="btn pri" href="#ps-1">Start with PS-1 →</a><a class="btn ghost" href="#about">About me</a></div>
    </div>
    <div class="plan-card" data-zoom><div class="tag"><span>Site plan</span><span>8 acres · 7 blocks</span></div><img src="assets/plot_plan.png" alt="Site plan with seven blocks"><small>Existing property · Gate 1 · park</small></div>
  </div>
</section>
<section class="stats"><div class="wrap">
  <div class="stat"><b>6</b><small>problem statements</small></div>
  <div class="stat"><b>7<span> blocks</span></b><small>on an 8-acre site, 3 basement levels</small></div>
  <div class="stat"><b>12,000<span> m³</span></b><small>of concrete estimated</small></div>
  <div class="stat"><b>3<span> + 1</span></b><small>recorded meetings and a site visit</small></div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec-h"><span class="n">PORTFOLIO</span><h2>Problem statements</h2><p>Each page follows the same flow: the problem statement, minutes of meetings, solutions (site visit and engineer interaction where applicable), reflection and conclusion.</p></div>
  <div class="grid3">
    ${PS.map(p => `<a class="pcard rv" href="#${p.id}"><span class="big">0${p.no}</span><div class="k">${OUT[p.id][1]}</div><h3>${p.title}</h3><p>${BLURB[p.id]}</p><div class="out">${OUT[p.id][0]}</div><div class="go">Open problem statement →</div></a>`).join('')}
  </div>
</div></section>

<section class="sec alt"><div class="wrap">
  <div class="sec-h"><span class="n">TIMELINE</span><h2>Field work and meetings</h2></div>
  <div class="timeline">
    <div class="tl rv"><span class="d">25 AUG 2026 · 11:47</span><b>Site visit</b><span>Shreya Nagar, Hubballi — met the site engineer (PS-1)</span></div>
    <div class="tl rv"><span class="d">27 AUG 2026 · 02:25 PM</span><b>Meeting 1 · PS-1</b><span>30 min — RERA, site location, engineer’s plan</span></div>
    <div class="tl rv"><span class="d">29 AUG 2026 · 12:31 PM</span><b>Meeting 2 · PS-1</b><span>20 min — welfare, mobilization, RERA, AutoCAD</span></div>
    <div class="tl rv"><span class="d">25 SEP 2026</span><b>Meeting 1 · PS-2</b><span>50 min — procurement, QA/QC, stores and records</span></div>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="card dk rv" style="display:flex;gap:28px;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:32px 36px">
    <div><span class="lab">The person behind the portfolio</span><h3 style="font-size:28px">Chinnamma H · Roll no. 164</h3><p style="margin:6px 0 0;color:#c5d0db">Civil engineering student at KLE Technological University, Hubballi.</p></div>
    <a class="btn pri" href="#about">Read my About page →</a>
  </div>
</div></section>`
};

/* ================= ABOUT ================= */
const SKILLS = [
  ['SL', 'Site layout planning', 'Placing labour camp, store, testing lab, offices and gates for efficient circulation (PS-1, PS-2).'],
  ['RR', 'RERA and documentation', 'Collected and explained RERA requirements and the land and design documents a project needs (PS-1).'],
  ['₹', 'Cost comparison', 'RMC against on-site batching for 12,000 m³, with a worked ₹1.49 crore difference (PS-1).'],
  ['QC', 'Procurement, stores and QA/QC', 'Gate control, three-copy invoices, material testing and rejection records (PS-2).'],
  ['BB', 'BBS and wastage control', 'Bar bending schedules, cutting plans, ordering strategy and reconciliation (PS-3, PS-4).'],
  ['FW', 'Formwork planning', 'Element groupings, nested plywood cutting and the 10× reuse procedure (PS-3, PS-4).'],
  ['LB', 'Labour planning', 'Man-day norms, histogram, hiring strategies, wages and contract terms (PS-5).'],
  ['CT', 'Testing and investigation', 'Cube-test failure analysis, IS 456 acceptance and an RMC-owner checklist (PS-6).']
];
const TEAM = [['Neha Chalawadi', '152', 'NC'], ['Achal K', '159', 'AK'], ['Chinnamma H', '164', 'CH', 1], ['Sanjana Gudi', '165', 'SG']];

ROUTES.about = {
  title: 'About Me',
  html: () => `
<section class="about-hero">
  <div class="wrap">
    <div class="portrait">
      <div class="frame"><img id="portraitImg" alt="Chinnamma H" style="display:none"><span class="mono-i" id="monoI">CH</span></div>
      <button class="up" id="upBtn">Preview my photo</button>
      <input type="file" id="upFile" accept="image/*" hidden>
      <small>Preview only — not saved after you leave the page</small>
    </div>
    <div>
      <div class="role">Civil Engineering · Roll no. 164</div>
      <h1>Chinnamma H</h1>
      <p>I am a civil engineering student at the School of Civil Engineering, KLE Technological University, Hubballi. This portfolio gathers my work for Construction Site Management Practice (26ECVP401), 2026-27: six problem statements around one shopping-mall project, built through team meetings, a visit to a live construction site and calculations from first principles.</p>
      <div class="btns" style="margin-top:24px"><a class="btn pri" href="#ps-1">See my work →</a><a class="btn ghost" href="#home">Back home</a></div>
    </div>
  </div>
</section>

<section class="sec"><div class="wrap">
  <div class="cols-1-2">
    <div class="card rv">
      <span class="lab">At a glance</span>
      <div class="facts">
        <div class="fact"><span>Name</span><b>Chinnamma H</b></div>
        <div class="fact"><span>Roll no.</span><b>164</b></div>
        <div class="fact"><span>School</span><b>School of Civil Engineering</b></div>
        <div class="fact"><span>University</span><b>KLE Technological University</b></div>
        <div class="fact"><span>Course</span><b>Construction Site Management Practice (26ECVP401)</b></div>
        <div class="fact"><span>Academic year</span><b>2026-27</b></div>
        <div class="fact"><span>Project</span><b>Shopping mall · 7 blocks · 8 acres</b></div>
        <div class="fact"><span>Location</span><b>Hubballi, Karnataka</b></div>
      </div>
      <div class="logo-card" style="margin-top:22px"><img src="assets/kle_logo.png" alt="KLE Technological University"></div>
    </div>
    <div>
      <div class="card or rv"><span class="lab">My part in the team</span>
        <p>In the Problem Statement 1 meetings my task was to gather the <b>RERA information</b> — what the Act requires, why projects must be registered before they are advertised or sold, and which documents a promoter must furnish.</p>
        <p style="margin:0">Across all six problem statements I worked with Neha, Achal and Sanjana on the calculations, layouts and write-ups collected in this portfolio.</p>
      </div>
      <div style="height:18px"></div>
      <div class="fig photo rv" style="padding:0"><img src="assets/site_team.jpg" alt="Team at the project site with the site engineer" data-zoom style="aspect-ratio:4/3;object-fit:cover;width:100%;cursor:zoom-in"><figcaption>Our team with the site engineer during the site visit, 25/08/2026 — Shreya Nagar, Hubballi</figcaption></div>
    </div>
  </div>
</div></section>

<section class="sec alt"><div class="wrap">
  <div class="sec-h"><span class="n">WHAT I PRACTISED</span><h2>Skills built in this lab</h2></div>
  <div class="cols2">
    ${SKILLS.map(s => `<div class="card skill rv"><div class="ic">${s[0]}</div><div><b>${s[1]}</b><span>${s[2]}</span></div></div>`).join('')}
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec-h"><span class="n">TEAM</span><h2>Who I worked with</h2></div>
  <div class="team">${TEAM.map(t => `<div class="mem rv ${t[3] ? 'me' : ''}"><div class="av">${t[2]}</div><b>${t[0]}</b><span>Roll no. ${t[1]}${t[3] ? ' · me' : ''}</span></div>`).join('')}</div>
</div></section>`
};

/* ================= register ================= */
PS.forEach(p => { ROUTES[p.id] = { title: `PS-${p.no} ${p.short}`, html: () => psPage(p) }; });
go();
