/* Round 8: three full home pages for Sensoria, written from the current sensoriaresearch.org content but
   reorganised as one story: hook, problem, approach, proof, trust, urgency, openness, invitation, people.
   8A builds on 7B Collection, 8B on 7C Illustrated, 8C on the round 4 / final direction (collage, stickers).
   Media lives in ./media (git-ignored): round 5's set plus website photos (ph-*) and illustrations (il-*). */
(function () {
  const R = window.REFRACT, C = R.C;
  window.LAYOUTS = [];

  const W = window.W = {
    nav: ['Research', 'Events', 'Community', 'Proceedings', 'About'],
    hero: {
      kicker: 'The inner frontier',
      pre: ['Too late to explore the world.', 'Too soon to explore the galaxy.'],
      title: 'Just in time to explore the mind.',
      lead: 'Sensoria is building the scientific infrastructure to study, map and navigate human consciousness.',
    },
    gap: {
      kicker: 'The problem',
      head: 'Consciousness science is where genetics was in 1990.',
      body: [
        'Brilliant work in isolated pockets, very little of it joined up. Each group reinvents its methods, builds its own dataset and publishes findings that can’t be combined.',
        'The Human Genome Project didn’t happen because one lab sequenced everything. It happened because the field built shared standards, shared data and shared instruments. Sensoria is building that layer for consciousness.',
      ],
    },
    loop: {
      kicker: 'How it works',
      head: 'One cycle, three movements.',
      sub: 'Experience produces data. Data produces knowledge. Knowledge shapes the next experience.',
      steps: [
        ['Gather', 'Living laboratories', 'Salons, retreats and installations designed as research containers. People have a real experience and contribute research-grade data while they do.'],
        ['Capture', 'Signal and story, aligned', 'Adaptive interviews, wearable biosensors and first-person report on one timeline. Every contribution is consented, encrypted and owned by the person who made it.'],
        ['Map', 'A map of the mind', 'The Neurophenomenological State Space: a navigable map of conscious experience, where distances and paths between states become measurable.'],
      ],
    },
    field: {
      kicker: 'In the field',
      head: 'Tested where experience actually happens.',
      events: [
        ['Consciousness Conclave', 'Ponte de Lima, Portugal', [['75', 'participants'], ['5', 'days']], 'A five-day retreat with immersive journeys, expert conversations and the full research protocol.'],
        ['Psychonaut’s Playground', 'Portugal', [['200', 'participants'], ['6+', 'studies']], 'The Conclave at a larger scale: more people, more experiences, deeper data collection.'],
      ],
      stats: [['150+', 'Research participants'], ['4+', 'Research protocols'], ['3', 'Event formats']],
    },
    sovereign: {
      kicker: 'Our first principle',
      head: 'Your inner life is your data.',
      body: 'Consciousness research needs the most intimate data a person can produce. So privacy is the starting condition, not a feature added later.',
      points: [['Personal vaults', 'Your data stays encrypted in a vault you hold the key to.'], ['Computation comes to the data', 'Models visit the data. The data never leaves.'], ['Consent you can take back', 'Dynamic and revocable, at any time.']],
    },
    now: {
      kicker: 'Why now',
      head: 'Four forces, and no institution built to hold them.',
      items: [['350M+', 'people live with serious mental health conditions. Today’s systems weren’t built for that scale.'],
        ['Renaissance', 'Psychedelic medicine and contemplative neuroscience are producing data nobody has a place to keep.'],
        ['Multimodal AI', 'For the first time, voice, biosignal and first-person report can be analysed on one timeline.'],
        ['Sovereignty', 'Privacy law is tightening worldwide, and this research needs the most private data there is.']],
    },
    open: {
      kicker: 'The Proceedings',
      head: 'The work is open.',
      sub: 'Papers, essays and instruments, open for review and critique as the work unfolds.',
      items: [['Survey · collecting data', 'NOSEP', 'How do non-ordinary states shape professional thinking? A confidential survey, 20 to 25 minutes.', 'Take the survey'],
        ['White paper', 'Psychonautic Benchmarking', 'Towards standard expertise criteria in non-ordinary states research. Estevez, Lameiras, Allocca, Gibbons, Christov-Moore, 2026.', 'Read the paper'],
        ['White paper', 'The Sovereign Data Research Fabric', 'The encrypted vault model, confidential compute and dynamic consent.', 'Read the paper'],
        ['Essays', 'Why Sensoria, I to III', 'State engineering and existential risk, the case for mapping the mind, and what events could be.', 'Read on Substack']],
    },
    ways: {
      kicker: 'Get involved',
      head: 'Three ways in.',
      items: [['Train', 'Become a Certified Psychonaut', 'Astronauts train. Deep-sea divers train. A program in phenomenological reporting, state navigation and data protocols for mind explorers.', 'Apply'],
        ['Gather', 'Join a local node', 'Salons, meetups and integration circles in Los Angeles, the Bay Area and Salt Lake City. Barcelona, Las Vegas and Stockholm soon.', 'Find a node'],
        ['Support', 'Become a Founding Member', '$100 a month, tax deductible. Fund the infrastructure and get early access to what it builds.', 'Join']],
    },
    team: {
      kicker: 'The people',
      head: 'Neuroscience, security, events and design, in one team.',
      people: [['Cody Gibbons', 'Chief State Engineer'], ['Nick “Knux” Synodis', 'Chief Strategist'], ['Leo Christov-Moore, PhD', 'Head of Research'],
        ['Patrick Deegan, PhD', 'Head of Development'], ['Alina Hedenström', 'Director of Communications'], ['Jeremy Coltharp', 'Director of Operations']],
    },
  };

  W.MARK = `<svg class="mark" viewBox="0 0 72 72" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 72V1h28"/><path d="M0 71h72"/><path d="M1 1h17c13 0 13 27 0 27H9"/><path d="M9 28C-1 32 1 45 11 47s11 15 1 23"/><path d="M15 28l56 43"/></g><circle cx="56" cy="14" r="8.5" fill="currentColor"/></svg>`;
  W.m = (f) => `media/${f}`;
  W.img = (k) => `media/${R.OBJ[k]}`;
  W.bt = (tag, cls, html, extra = '') => `<${tag} class="${cls} bt" data-bt ${extra}>${html}</${tag}>`;
  W.k = (t) => `<p class="h-kick">${t}</p>`;
  W.stk = (k, cls = '') => `<img class="stk6 ${cls}" src="${W.img(k)}" alt="">`;
  W.plate = (file, n, cap, tone = 'duo', extra = '') => `<figure class="plate ${tone}" ${extra}><div class="plate-im"><img src="media/${file}" alt=""></div><figcaption>${n ? `<b>${n}</b>` : ''}${cap}</figcaption></figure>`;
  W.head = () => `<header class="w8 w8-head" data-sec="Header"><a class="brand" href="#" data-sub="Wordmark">${W.MARK}<span class="wordmark">Sensoria Research</span></a>
    <nav data-sub="Navigation">${W.nav.map((n) => `<a href="#">${n}</a>`).join('')}</nav><a class="btn btn-primary" href="#ways">Get involved</a></header>`;
  W.heroCopy = () => `${W.k(W.hero.kicker)}<p class="h-pre">${W.hero.pre.join('<br>')}</p>${W.bt('h1', 'display', W.hero.title)}<p class="lead">${W.hero.lead}</p>
    <div class="actions"><a class="btn btn-primary" href="#ways">Find your way in <span class="ar">→</span></a><a class="btn btn-quiet" href="#open">Read the research</a></div>`;
  W.foot = () => `<footer class="w8-foot" data-sec="Footer"><div class="w8">
      <div class="w8-foot-top"><div data-sub="Newsletter"><h2>Stay in the loop.</h2><p>Research updates, new papers and events. Occasional email, nothing more.</p>
        <form class="w8-sub" onsubmit="return false"><label class="sr" for="em">Email</label><input id="em" type="email" placeholder="Your email"><button class="btn btn-primary">Subscribe</button></form></div>
        <nav data-sub="Links"><b>Explore</b>${W.nav.map((n) => `<a href="#">${n}</a>`).join('')}<a href="#">Membership</a></nav></div>
      <div class="w8-foot-base"><span class="brand">${W.MARK}<span class="wordmark">Sensoria Research</span></span><span>A 501(c)(3) nonprofit · sensoriaresearch.org</span></div></div></footer>`;

  /* Fine touches shared by 8A and 8B (8D has its own scroll engine). Every effect is skipped with reduced motion.
     o.reveal: selector of things that rise into place (siblings stagger); o.count: selector of numbers that count up;
     o.drift: selector of images that drift inside their frame as they cross the screen. */
  W.motion = (o = {}) => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const head = document.querySelector('.w8-head');
    if (head) {
      let last = scrollY;
      addEventListener('scroll', () => {
        const y = scrollY;
        head.classList.toggle('scrolled', y > 80);
        if (!reduce) head.classList.toggle('tuck', y > 400 && y > last);
        last = y;
      }, { passive: true });
    }
    if (reduce) return;
    document.documentElement.classList.add('w8-motion');
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px' });
    if (o.reveal) document.querySelectorAll(o.reveal).forEach((el) => {
      const sib = [...el.parentElement.children].filter((c) => c.matches(o.reveal));
      el.classList.add('w8-rv'); el.style.setProperty('--rv', `${Math.min(sib.indexOf(el), 6) * 90}ms`); io.observe(el);
    });
    const co = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return; co.unobserve(e.target);
      const el = e.target, m = el.textContent.match(/^(\D*)(\d+)(.*)$/); if (!m) return;
      const to = +m[2], t0 = performance.now(), dur = 1100 + Math.min(to, 400);
      const step = (t) => { const k = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - k, 3); el.textContent = m[1] + Math.round(to * ease) + m[3]; if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), { threshold: .6 });
    if (o.count) document.querySelectorAll(o.count).forEach((el) => { if (/\d/.test(el.textContent)) co.observe(el); });
    const drifts = o.drift ? [...document.querySelectorAll(o.drift)] : [];
    if (drifts.length) {
      let raf = 0;
      const tick = () => { raf = 0; drifts.forEach((im) => { const r = im.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
        const p = (r.top + r.height / 2 - innerHeight / 2) / (innerHeight / 2 + r.height / 2); im.style.transform = `scale(1.08) translate3d(0, ${(p * 3.2).toFixed(2)}%, 0)`; }); };
      addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true }); tick();
    }
  };

  const SHARED = `
    html, body { overflow-x: clip; } body { background: ${C.SURFACE}; }
    .wordmark { font: 500 19px/1 var(--font-display); letter-spacing: -.01em; text-transform: none; }
    .mark { width: 34px; height: 34px; } .brand { gap: 12px; }
    .btn { border-radius: 4px; height: 46px; } .display, .h2, .lead { margin: 0; } .actions { margin-top: 32px; }
    .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
    .w8 { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
    .w8-head { display: flex; align-items: center; gap: 32px; padding-top: 28px; padding-bottom: 28px; }
    .w8-head nav { margin-left: auto; display: flex; gap: 28px; font: 400 16px var(--font-text); }
    .w8-head nav a { text-decoration: none; } .w8-head nav a:hover { text-decoration: underline; text-underline-offset: 4px; }
    .w8-head .btn { height: 40px; padding: 0 16px; font-size: 14px; }
    .w8-head { position: sticky; top: 40px; z-index: 60; max-width: none; padding-left: max(40px, calc((100vw - 1120px) / 2)); padding-right: max(40px, calc((100vw - 1120px) / 2));
      background: transparent; transition: background-color .3s, box-shadow .3s, transform .4s cubic-bezier(.2,.7,.2,1), padding .3s; }
    .w8-head.scrolled { background: rgba(242,236,226,.92); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 1px 0 rgba(5,39,43,.06); padding-top: 16px; padding-bottom: 16px; }
    .w8-head.tuck { transform: translateY(calc(-100% - 40px)); }
    .w8-head nav a { position: relative; text-decoration: none !important; }
    .w8-head nav a::after { content: ''; position: absolute; left: 0; right: 0; bottom: -4px; height: 1.5px; background: currentColor; transform: scaleX(0); transform-origin: right; transition: transform .35s cubic-bezier(.2,.7,.2,1); }
    .w8-head nav a:hover::after { transform: scaleX(1); transform-origin: left; }
    .btn .ar { display: inline-block; transition: transform .3s cubic-bezier(.3,1.5,.5,1); } .btn:hover .ar { transform: translateX(4px); }
    .w8-link { text-decoration: none !important; background: linear-gradient(currentColor, currentColor) 0 100% / 100% 1.5px no-repeat; padding-bottom: 3px; transition: background-size .35s cubic-bezier(.2,.7,.2,1); }
    a:hover .w8-link, .w8-link:hover { background-size: 0 1.5px; background-position: 100% 100%; }
    .w8-motion .w8-rv { opacity: 0; transform: translateY(22px); transition: opacity .8s cubic-bezier(.2,.7,.2,1) var(--rv, 0ms), transform .9s cubic-bezier(.2,.7,.2,1) var(--rv, 0ms); }
    .w8-motion .w8-rv.in { opacity: 1; transform: none; }
    .btn { transition: transform .15s ease, background-color .2s ease, box-shadow .2s ease; }
    .btn-quiet:hover { box-shadow: inset 0 0 0 1.5px var(--ink); }
    .h-kick { font: 500 15px var(--font-text); color: var(--ink-2); margin-bottom: 18px; }
    .on-teal .h-kick { color: rgba(254,254,254,.7); }
    .h-pre { font: 400 clamp(20px, 1.8vw, 26px)/1.3 var(--font-display); letter-spacing: -.015em; color: var(--ink-2); margin-bottom: 14px; }
    .display { font-size: clamp(46px, 6vw, 92px); line-height: .96; }
    .h2 { font-size: clamp(34px, 3.6vw, 52px); line-height: 1.03; }
    .lead { font-size: 21px; line-height: 1.45; max-width: 32ch; margin-top: 24px; }
    .w8-sec { padding-top: 152px; }
    .w8-split { display: grid; grid-template-columns: 5fr 7fr; gap: 72px; align-items: start; }
    .w8-body p { font-size: 18px; line-height: 1.6; margin-bottom: 1.1em; max-width: 56ch; }
    .on-teal { background: ${C.TEAL}; color: ${C.WHITE}; }
    .on-teal .w8-body p, .on-teal p { color: rgba(254,254,254,.86); }
    .stk6 { display: block; object-fit: contain; filter: var(--edge-sm) drop-shadow(0 3px 5px rgba(5,39,43,.22)); transition: transform .3s cubic-bezier(.3,1.5,.5,1); }
    .stk-host:hover .stk6, .stk6:hover { transform: scale(1.12) rotate(-6deg); }
    .plate { display: grid; gap: 10px; margin: 0; }
    .plate-im { overflow: hidden; background: #dfe5e2; }
    .plate-im img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .plate.duo img { filter: brightness(1.3) url(#r2-duo); } .plate.nat img { filter: saturate(.92); }
    .plate figcaption { font: 13px/1.4 var(--font-text); color: var(--ink-2); }
    .plate figcaption b { font: 12px var(--font-label); color: var(--ink); margin-right: 10px; }
    .on-teal .plate figcaption { color: rgba(254,254,254,.7); } .on-teal .plate figcaption b { color: ${C.WHITE}; }
    .w8-link { font: 500 15px var(--font-text); text-decoration: underline; text-underline-offset: 4px; }
    .w8-people { list-style: none; display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px 32px; margin-top: 48px; }
    .w8-people b { display: block; font: 400 22px/1.15 var(--font-display); letter-spacing: -.02em; } .w8-people span { color: var(--ink-2); font-size: 15px; }
    .w8-foot { margin-top: 152px; background: ${C.WHITE}; padding: 88px 0 36px; }
    .w8-foot-top { display: grid; grid-template-columns: 7fr 4fr; gap: 72px; }
    .w8-foot h2 { font: 400 40px/1.05 var(--font-display); letter-spacing: -.03em; } .w8-foot p { color: var(--ink-2); margin-top: 10px; }
    .w8-sub { display: flex; gap: 10px; margin-top: 24px; max-width: 460px; }
    .w8-sub input { flex: 1; height: 46px; border: 0; border-radius: 4px; background: ${C.SURFACE}; padding: 0 16px; font: 16px var(--font-text); color: var(--ink); min-width: 0; }
    .w8-sub input:focus-visible { outline: 2px solid var(--ink); }
    .w8-foot nav { display: grid; gap: 10px; align-content: start; } .w8-foot nav b { font-weight: 500; margin-bottom: 4px; } .w8-foot nav a { text-decoration: none; color: var(--ink-2); } .w8-foot nav a:hover { color: var(--ink); }
    .w8-foot-base { display: flex; justify-content: space-between; align-items: center; margin-top: 88px; font-size: 14px; color: var(--ink-2); }
    @media (max-width: 900px) { .w8 { padding: 0 16px; } .w8-head nav { display: none; } .w8-head .btn { margin-left: auto; }
      .w8-split, .w8-foot-top { grid-template-columns: 1fr; gap: 28px; } .w8-sec { padding-top: 96px; } .w8-people { grid-template-columns: 1fr 1fr; }
      .w8-foot { margin-top: 96px; } .w8-foot-base { flex-direction: column; align-items: flex-start; gap: 12px; } .display { font-size: clamp(40px, 11vw, 60px); } }
    @media (prefers-reduced-motion: reduce) { .stk6, .stk-host:hover .stk6, .stk6:hover { transition: none; transform: none; } }
  `;

  window.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('app')) return; // the index page only lists the options
    const list = window.LAYOUTS;
    let idx = list.findIndex((d) => d.id === new URLSearchParams(location.search).get('d'));
    if (idx < 0) idx = 0;
    const L = list[idx], root = document.documentElement;
    const D = R.make({ css: R.kit });
    Object.entries(D.tokens).forEach(([k, v]) => root.style.setProperty(k, v));
    const st = document.createElement('style'); st.textContent = D.css + SHARED + (L.css || ''); document.head.appendChild(st);
    document.getElementById('defs').innerHTML = R.printKit.defs;
    document.title = `${L.name} · Sensoria round 8`;
    root.dataset.layout = L.id;
    const code = `8${String.fromCharCode(65 + idx)}`;
    document.getElementById('app').innerHTML = `
      <nav class="toolbar" aria-label="Exploration"><a class="tb-title" href="index.html">Sensoria · Round 8</a>
        ${list.map((d, i) => `<a class="tb-dir" href="?d=${d.id}"${i === idx ? ' aria-current="page"' : ''}>${i + 1} ${d.name}</a>`).join('')}
        <span class="tb-spacer"></span></nav>
      <div class="r5-intro"><b>${code} · ${L.name}</b><span>${L.idea}</span></div>
      ${L.render(W, R)}`;
    document.querySelectorAll('[data-bt]').forEach((el) => {
      const html = el.innerHTML;
      el.innerHTML = `<span class="bt-layer bt-soft" aria-hidden="true">${html}</span><span class="bt-layer bt-sharp">${html}</span>`;
      el.style.cssText += '--mx:42%;--my:46%;--nx:-.16;--ny:-.08';
    });
    if (L.init) L.init(W, R);
    const s = document.createElement('script'); s.src = '../labels.js'; s.dataset.prefix = code; document.body.appendChild(s);
  });
})();
