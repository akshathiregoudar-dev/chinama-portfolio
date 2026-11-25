/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const ul = (items, cls = '') => `<ul class="${cls}">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const nl = (items, start = 0) => `<ol class="numlist" style="counter-reset:n ${start}">${items.map(i => `<li>${i}</li>`).join('')}</ol>`;

/* table: head = [..]; rows = [[..]] ; row may be {t:1, c:[..]} for total; numeric columns -> nums = [indexes] */
const tbl = (head, rows, nums = []) => `<div class="tw"><table><thead><tr>${head.map((h, i) => `<th class="${nums.includes(i) ? 'n' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => {
  const t = !Array.isArray(r); const c = t ? r.c : r;
  return `<tr class="${t ? 'tot' : ''}">${c.map((x, i) => `<td class="${nums.includes(i) ? 'n' : ''}">${x}</td>`).join('')}</tr>`;
}).join('')}</tbody></table></div>`;

const fig = (src, cap, cls = '') => `<figure class="fig ${cls}"><img src="assets/${src}" loading="lazy" alt="${esc(cap)}" data-zoom><figcaption>${cap}</figcaption></figure>`;
const gal = (n, items) => `<div class="gal c${n}">${items.join('')}</div>`;
const sub = (title, tag = '') => `<div class="sub">${tag ? `<span class="tagx">${tag}</span>` : ''}<h3>${title}</h3></div>`;
const card = (inner, cls = '') => `<div class="card ${cls}">${inner}</div>`;
const callout = (t, cls = '') => `<div class="callout ${cls}">${t}</div>`;
const bigStats = items => `<div class="big-stats">${items.map(([v, l, lt]) => `<div class="bs ${lt ? 'lt' : ''}"><b>${v}</b><span>${l}</span></div>`).join('')}</div>`;
const flow = steps => `<div class="flow">${steps.map((s, i) => `<div class="st"><i>${String(i + 1).padStart(2, '0')}</i><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>`;
const bars = (rows, unit = '', max, hiIdx = -1) => {
  const m = max || Math.max(...rows.map(r => r[1]));
  return `<div class="bars">${rows.map((r, i) => `<div class="bar"><span>${r[0]}</span><div class="t"><i class="${i === hiIdx ? 'hi' : ''}" data-w="${(r[1] / m * 100).toFixed(1)}"></i></div><b>${r[1]}${unit}</b></div>`).join('')}</div>`;
};
const pill = (t, c) => `<span class="pill ${c}">${t}</span>`;

/* meeting card */
const meeting = m => `
<article class="meet rv">
  <div class="ph ${m.photo ? '' : 'empty'}">
    <span class="badge" style="${m.photo ? '' : 'display:none'}">MEETING ${String(m.n).padStart(2, '0')}</span>
    ${m.photo ? `<img src="assets/${m.photo}" alt="Meeting ${m.n}" loading="lazy" data-zoom>` : `<div>Meeting ${String(m.n).padStart(2, '0')}<br>photo not available in the source slides</div>`}
  </div>
  <div class="bd">
    <h4>Meeting ${m.n}</h4>
    <div class="meta">
      <div><span>Date</span><b>${m.date}</b></div>
      <div><span>Time</span><b>${m.time || '—'}</b></div>
      <div><span>Duration</span><b>${m.dur}</b></div>
      <div><span>Venue</span><b>${m.venue || '—'}</b></div>
    </div>
    <div class="pts">Points discussed</div>
    ${m.points}
    ${m.note ? `<p class="note">${m.note}</p>` : ''}
  </div>
</article>`;

const noMinutes = ps => `<div class="empty-min rv"><span class="ic">MoM</span><p><b>Minutes of meeting — to be added.</b> The source file for this problem statement didn’t include meeting records (image, date, time, venue, points discussed). This block is ready for them.</p></div>`;

/* page skeleton for a problem statement */
const SEC = [['problem', 'Problem Statement'], ['minutes', 'Minutes of Meeting'], ['solutions', 'Solutions'], ['reflection', 'Reflection'], ['conclusion', 'Conclusion']];
const psPage = p => {
  const idx = PS.findIndex(x => x.id === p.id);
  const prev = PS[idx - 1], next = PS[idx + 1];
  return `
<section class="phead">
  <div class="wrap">
    <div class="no">Problem Statement ${String(p.no).padStart(2, '0')} · ${p.tag}</div>
    <h1>${p.title}</h1>
    <p class="theme">${p.theme}</p>
    <div class="secnav">${SEC.map((s, i) => `<button data-go="${s[0]}"><i>0${i + 1}</i>${s[1]}</button>`).join('')}</div>
  </div>
</section>
<section class="blk" id="problem"><div class="wrap">
  <div class="sec-h"><span class="n">01</span><h2>Problem Statement</h2></div>
  ${p.problem}
</div></section>
<section class="blk" id="minutes"><div class="wrap">
  <div class="sec-h"><span class="n">02</span><h2>Minutes of Meeting</h2></div>
  ${p.meetings && p.meetings.length ? p.meetings.map(meeting).join('') : noMinutes()}
</div></section>
<section class="blk" id="solutions"><div class="wrap">
  <div class="sec-h"><span class="n">03</span><h2>Solutions</h2></div>
  ${p.solutions}
</div></section>
<section class="blk" id="reflection"><div class="wrap">
  <div class="sec-h"><span class="n">04</span><h2>Reflection</h2></div>
  <div class="refl rv">${p.reflection.map(t => `<p>${t}</p>`).join('')}</div>
</div></section>
<section class="blk" id="conclusion"><div class="wrap">
  <div class="sec-h"><span class="n">05</span><h2>Conclusion</h2></div>
  <div class="concl rv">
    <div>${p.conclusion.text.map(t => `<p>${t}</p>`).join('')}</div>
    <div class="kp">${p.conclusion.kp.map(k => `<div><b>${k[0]}</b>${k[1]}</div>`).join('')}</div>
  </div>
  ${p.after || ''}
  <div class="pn">
    ${prev ? `<a href="#${prev.id}"><small>← Previous</small><b>PS ${prev.no} · ${prev.short}</b></a>` : '<span></span>'}
    ${next ? `<a class="r" href="#${next.id}"><small>Next →</small><b>PS ${next.no} · ${next.short}</b></a>` : `<a class="r" href="#home"><small>Back to</small><b>Portfolio home</b></a>`}
  </div>
</div></section>`;
};

/* ---------- router ---------- */
const PS = [];   // filled by ps12.js / ps36.js
const ROUTES = {};
let io;

function renderNav(cur) {
  $('#links').innerHTML = `
    <a href="#home" class="${cur === 'home' ? 'on' : ''}">Home</a>
    <a href="#about" class="${cur === 'about' ? 'on' : ''}">About Me</a>
    <span class="sep"></span>
    ${PS.map(p => `<a class="ps ${cur === p.id ? 'on' : ''}" href="#${p.id}" title="${p.short}">PS-${p.no}</a>`).join('')}`;
  const on = $('#links a.on'); if (on) on.scrollIntoView({ inline: 'center', block: 'nearest' });
}

function go() {
  let id = (location.hash || '#home').slice(1);
  if (!ROUTES[id]) id = 'home';
  const r = ROUTES[id];
  $('#app').innerHTML = r.html();
  document.title = r.title + ' · Chinnamma H · CSM Portfolio';
  renderNav(id);
  window.scrollTo(0, 0);
  hydrate();
}

function hydrate() {
  // section nav
  $$('[data-go]').forEach(b => b.onclick = () => { const t = document.getElementById(b.dataset.go); if (t) t.scrollIntoView({ behavior: 'smooth' }); });
  const secs = $$('.blk'); const btns = $$('.secnav button');
  if (secs.length && 'IntersectionObserver' in window) {
    const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) btns.forEach(b => b.classList.toggle('on', b.dataset.go === e.target.id)); }), { rootMargin: '-35% 0px -60% 0px' });
    secs.forEach(s => so.observe(s));
  }
  // reveal + bars
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); $$('i[data-w]', e.target).forEach(i => i.style.width = i.dataset.w + '%'); io.unobserve(e.target); }
  }), { threshold: .08 });
  $$('.rv').forEach(el => io.observe(el));
  $$('.bars').forEach(b => { const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { $$('i[data-w]', b).forEach(i => i.style.width = i.dataset.w + '%'); o.disconnect(); } }), { threshold: .2 }); o.observe(b); });
  // photo preview on about page
  const up = $('#upBtn'), f = $('#upFile');
  if (up && f) { up.onclick = () => f.click(); f.onchange = () => { const file = f.files[0]; if (!file) return; const u = URL.createObjectURL(file); $('#portraitImg').src = u; $('#portraitImg').style.display = 'block'; $('#monoI').style.display = 'none'; }; }
}

/* lightbox */
document.addEventListener('click', e => {
  const z = e.target.closest('[data-zoom]');
  const lb = $('#lb');
  if (z) { const img = z.tagName === 'IMG' ? z : $('img', z); $('img', lb).src = img.src; lb.classList.add('on'); return; }
  if (e.target.closest('#lb')) lb.classList.remove('on');
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#lb').classList.remove('on'); });
window.addEventListener('hashchange', go);
