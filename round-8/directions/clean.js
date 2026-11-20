/* 8E · Clean. The most conventional option: familiar patterns from clean, minimal sites, in Sensoria's fonts and
   colours. Centred hero with an announcement pill and one wide image, a proof bar, tabs for how it works, a
   feature grid with line icons, a FAQ accordion and a teal call-to-action band. Motion stays small: reveals,
   count-ups, a header that tucks away, tabs that advance with a progress bar, a smooth accordion. */
(function () {
  const R = window.REFRACT, C = R.C;
  const ICON = {
    vault: '<rect x="4" y="6" width="24" height="20" rx="3"/><circle cx="16" cy="16" r="4.5"/><path d="M16 11.5v-2M16 22.5v-2M20.5 16h2M9.5 16h2"/>',
    compute: '<rect x="9" y="9" width="14" height="14" rx="2"/><path d="M13 9V5M19 9V5M13 27v-4M19 27v-4M9 13H5M9 19H5M27 13h-4M27 19h-4"/>',
    consent: '<path d="M8 16a8 8 0 1 0 2.4-5.7"/><path d="M8 6v5h5"/><path d="M13 16.5l2.2 2.2L20 14"/>',
  };
  const icon = (k) => `<svg class="cl-ic" viewBox="0 0 32 32" aria-hidden="true">${ICON[k]}</svg>`;
  const FAQ = [
    ['What is Sensoria?', 'A 501(c)(3) nonprofit building shared infrastructure for consciousness science: events that work as living laboratories, tools that capture experience on one timeline, and a map of conscious states.'],
    ['What is a Certified Psychonaut?', 'Someone trained to report what they experience with the precision research needs. The program covers phenomenological reporting, state navigation, data protocols, integration and harm reduction.'],
    ['What happens to my data?', 'It stays yours. Contributions are consented, encrypted and kept in a personal vault. Analysis comes to the data, and you can withdraw consent at any time.'],
    ['Do I need to be a scientist to take part?', 'No. Most people take part by coming to an event, joining a local node or answering a survey. Every participant contributes to the science simply by having an experience.'],
    ['How is the work funded?', 'By members, patrons, grants and donations. Sensoria does not monetise member data or sell access to its community.'],
  ];
  window.LAYOUTS.push({
    id: 'clean',
    name: 'Clean',
    idea: 'The most conventional option, in Sensoria’s fonts and colours: centred hero with one wide image, a proof bar, tabs for how it works, a feature grid with line icons, a FAQ and a call-to-action band. Motion stays small: reveals, count-ups, a tucking header, tabs that advance on their own, a smooth accordion.',
    css: `
      .cl-hero { text-align: center; padding-top: 72px; }
      .cl-pill { display: inline-flex; align-items: center; gap: 10px; padding: 6px 8px 6px 14px; border-radius: 99px; background: ${C.WHITE}; font: 500 14px var(--font-text); text-decoration: none; color: var(--ink);
        box-shadow: 0 1px 2px rgba(5,39,43,.06), 0 0 0 1px rgba(5,39,43,.06); transition: box-shadow .25s, transform .25s; }
      .cl-pill:hover { box-shadow: 0 6px 16px -8px rgba(5,39,43,.3), 0 0 0 1px rgba(5,39,43,.1); transform: translateY(-1px); }
      .cl-pill i { width: 7px; height: 7px; border-radius: 50%; background: #2E9E6B; box-shadow: 0 0 0 0 rgba(46,158,107,.5); animation: cl-ping 2.4s infinite; }
      @keyframes cl-ping { 70% { box-shadow: 0 0 0 7px rgba(46,158,107,0); } 100% { box-shadow: 0 0 0 0 rgba(46,158,107,0); } }
      .cl-pill span { padding: 3px 10px; border-radius: 99px; background: ${C.SURFACE}; font-size: 13px; }
      .cl-hero .display { max-width: 14ch; margin: 28px auto 0; font-size: clamp(44px, 6vw, 88px); }
      .cl-hero .h-pre { margin: 0; }
      .cl-hero .lead { margin: 24px auto 0; max-width: 36ch; }
      .cl-hero .actions { justify-content: center; }
      .cl-shot { max-width: 1280px; margin: 72px auto 0; padding: 0 40px; }
      .cl-shot .ph { aspect-ratio: 21 / 9; border-radius: 16px; overflow: hidden; box-shadow: 0 40px 80px -50px rgba(5,39,43,.6); }
      .cl-shot img { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1.06); transition: transform 1.8s cubic-bezier(.2,.7,.2,1); }
      .cl-ready .cl-shot img { transform: scale(1); }
      .cl-proof { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 64px; text-align: center; }
      .cl-proof b { display: block; font: 400 44px/1 var(--font-display); letter-spacing: -.035em; } .cl-proof span { font-size: 14px; color: var(--ink-2); }
      .cl-center { text-align: center; max-width: 720px; margin: 0 auto; }
      .cl-center .lead { margin: 18px auto 0; color: var(--ink-2); }
      .cl-tabs { display: grid; grid-template-columns: 5fr 7fr; gap: 56px; align-items: center; margin-top: 64px; }
      .cl-tablist { display: grid; gap: 8px; }
      .cl-tab { position: relative; text-align: left; border: 0; background: transparent; border-radius: 12px; padding: 20px 22px 22px; cursor: pointer; color: var(--ink); font: inherit; overflow: hidden; transition: background-color .3s; }
      .cl-tab:hover { background: rgba(254,254,254,.55); }
      .cl-tab[aria-selected="true"] { background: ${C.WHITE}; box-shadow: 0 10px 30px -22px rgba(5,39,43,.5); }
      .cl-tab h3 { font: 400 24px/1.1 var(--font-display); letter-spacing: -.02em; display: flex; gap: 12px; align-items: baseline; }
      .cl-tab h3 span { font: 12px var(--font-label); color: var(--ink-2); }
      .cl-tab p { color: var(--ink-2); font-size: 15px; display: grid; grid-template-rows: 0fr; transition: grid-template-rows .45s cubic-bezier(.2,.7,.2,1), margin .45s; margin-top: 0; }
      .cl-tab p > span { overflow: hidden; }
      .cl-tab[aria-selected="true"] p { grid-template-rows: 1fr; margin-top: 8px; }
      .cl-tab .bar { position: absolute; left: 22px; right: 22px; bottom: 10px; height: 2px; border-radius: 2px; background: rgba(5,39,43,.08); opacity: 0; }
      .cl-tab[aria-selected="true"] .bar { opacity: 1; }
      .cl-tab .bar i { display: block; height: 100%; width: 0; border-radius: 2px; background: var(--ink); }
      .cl-tab[aria-selected="true"] .bar i.run { animation: cl-bar 7s linear forwards; }
      .cl-tabs.paused .bar i { animation-play-state: paused !important; }
      @keyframes cl-bar { to { width: 100%; } }
      .cl-stage { position: relative; aspect-ratio: 16 / 11; border-radius: 16px; overflow: hidden; background: #dcd5c8; }
      .cl-stage img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform: scale(1.04); transition: opacity .6s ease, transform 1.2s cubic-bezier(.2,.7,.2,1); }
      .cl-stage img.on { opacity: 1; transform: none; }
      .cl-field { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 56px; }
      .cl-card { background: ${C.WHITE}; border-radius: 16px; overflow: hidden; transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s; }
      .cl-card:hover { transform: translateY(-4px); box-shadow: 0 30px 50px -36px rgba(5,39,43,.55); }
      .cl-card .ph { aspect-ratio: 16 / 9; overflow: hidden; } .cl-card .ph img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
      .cl-card:hover .ph img { transform: scale(1.04); }
      .cl-card .tx { padding: 24px 26px 28px; } .cl-card h3 { font: 400 26px/1.1 var(--font-display); letter-spacing: -.02em; } .cl-card .meta { font: 500 14px var(--font-text); margin: 6px 0 8px; } .cl-card p { color: var(--ink-2); font-size: 15px; }
      .cl-feats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 56px; }
      .cl-feat { background: ${C.WHITE}; border-radius: 16px; padding: 28px; }
      .cl-ic { width: 44px; height: 44px; padding: 9px; border-radius: 12px; background: ${C.SURFACE}; fill: none; stroke: var(--ink); stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; transition: background-color .3s, stroke .3s, transform .4s cubic-bezier(.3,1.5,.5,1); }
      .cl-feat:hover .cl-ic { background: ${C.TEAL}; stroke: ${C.WHITE}; transform: rotate(-6deg); }
      .cl-feat h3 { font: 400 22px/1.15 var(--font-display); letter-spacing: -.02em; margin: 20px 0 8px; } .cl-feat p { color: var(--ink-2); font-size: 15px; }
      .cl-now { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 56px; }
      .cl-now > div { padding-top: 4px; } .cl-now b { display: block; font: 400 30px/1.05 var(--font-display); letter-spacing: -.025em; margin-bottom: 10px; } .cl-now p { color: var(--ink-2); font-size: 15px; }
      .cl-papers { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 48px; }
      .cl-paper { display: grid; grid-template-columns: 1fr auto; gap: 4px 24px; align-items: center; background: ${C.WHITE}; border-radius: 14px; padding: 22px 24px; text-decoration: none; color: inherit; transition: box-shadow .3s, transform .3s; }
      .cl-paper:hover { box-shadow: 0 20px 36px -28px rgba(5,39,43,.55); transform: translateY(-2px); }
      .cl-paper small { font: 12px var(--font-label); color: var(--ink-2); } .cl-paper h3 { font: 400 22px/1.15 var(--font-display); letter-spacing: -.02em; }
      .cl-paper .go { grid-row: 1 / span 2; grid-column: 2; width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; background: ${C.SURFACE}; transition: background-color .3s, color .3s, transform .3s; }
      .cl-paper:hover .go { background: ${C.TEAL}; color: ${C.WHITE}; transform: translateX(3px); }
      .cl-paper.live small::before { content: ''; display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #2E9E6B; margin-right: 8px; }
      .cl-ways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 56px; }
      .cl-way { background: ${C.WHITE}; border-radius: 16px; padding: 28px; display: grid; gap: 10px; align-content: start; transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s; }
      .cl-way:hover { transform: translateY(-4px); box-shadow: 0 30px 50px -36px rgba(5,39,43,.55); }
      .cl-way .stk6 { width: 56px; height: 56px; margin-bottom: 8px; } .cl-way small { font: 12px var(--font-label); color: var(--ink-2); }
      .cl-way h3 { font: 400 24px/1.12 var(--font-display); letter-spacing: -.02em; } .cl-way p { color: var(--ink-2); font-size: 15px; } .cl-way .w8-link { margin-top: 8px; justify-self: start; }
      .cl-faq { max-width: 800px; margin: 48px auto 0; display: grid; gap: 10px; }
      .cl-q { background: ${C.WHITE}; border-radius: 14px; }
      .cl-q button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 24px; padding: 22px 24px; border: 0; background: none; cursor: pointer; text-align: left; font: 400 20px/1.2 var(--font-display); letter-spacing: -.015em; color: var(--ink); }
      .cl-q button:focus-visible { outline: 2px solid var(--ink); outline-offset: -2px; border-radius: 14px; }
      .cl-q .pm { position: relative; flex: none; width: 14px; height: 14px; }
      .cl-q .pm::before, .cl-q .pm::after { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1.6px; translate: 0 -50%; background: currentColor; border-radius: 2px; transition: transform .35s cubic-bezier(.2,.7,.2,1); }
      .cl-q .pm::after { transform: rotate(90deg); } .cl-q.open .pm::after { transform: rotate(0deg); }
      .cl-q .a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .4s cubic-bezier(.2,.7,.2,1); }
      .cl-q.open .a { grid-template-rows: 1fr; } .cl-q .a > div { overflow: hidden; } .cl-q .a p { padding: 0 24px 22px; color: var(--ink-2); max-width: 64ch; }
      .cl-band { margin-top: 152px; }
      .cl-band .in { border-radius: 20px; padding: 72px 64px; display: grid; grid-template-columns: 7fr 5fr; gap: 48px; align-items: center; position: relative; overflow: hidden; }
      .cl-band .in::before { content: ''; position: absolute; width: 520px; height: 520px; right: -140px; top: -220px; border-radius: 50%; background: radial-gradient(circle, rgba(64,224,208,.18), transparent 65%); transition: transform 1.6s cubic-bezier(.2,.7,.2,1); }
      .cl-band .in:hover::before { transform: translate(-40px, 30px); }
      .cl-band h2 { font: 400 clamp(36px, 4vw, 56px)/1.02 var(--font-display); letter-spacing: -.035em; position: relative; }
      .cl-band .acts { display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-end; position: relative; }
      .cl-band .btn-primary { background: ${C.AMBER}; color: ${C.TEAL}; }
      .cl-band .btn-quiet { background: transparent; color: ${C.WHITE}; box-shadow: inset 0 0 0 1px rgba(254,254,254,.35); } .cl-band .btn-quiet:hover { box-shadow: inset 0 0 0 1.5px ${C.WHITE}; }
      .cl-band + .w8-foot { margin-top: 120px; }
      @media (max-width: 900px) { .cl-hero { padding-top: 40px; } .cl-shot { padding: 0 16px; margin-top: 48px; } .cl-shot .ph { aspect-ratio: 4 / 3; } .cl-proof, .cl-now { grid-template-columns: 1fr 1fr; }
        .cl-tabs, .cl-field, .cl-feats, .cl-papers, .cl-ways, .cl-band .in { grid-template-columns: 1fr; } .cl-tabs { gap: 24px; } .cl-band .in { padding: 48px 24px; } .cl-band .acts { justify-content: flex-start; } .cl-band { margin-top: 96px; } }
      @media (prefers-reduced-motion: reduce) { .cl-shot img, .cl-stage img, .cl-tab p, .cl-q .a, .cl-card, .cl-way, .cl-paper { transition: none !important; } .cl-shot img { transform: none; } .cl-pill i { animation: none; } .cl-tab .bar { display: none; } }
    `,
    render: (W) => `
      ${W.head()}
      <section class="w8 cl-hero" data-sec="Hero">
        <a class="cl-pill" href="#open" data-sub="Announcement"><i></i>NOSEP survey · collecting data<span>Take part →</span></a>
        <div data-sub="Headline"><p class="h-pre" style="margin-top:36px">${W.hero.pre.join(' ')}</p>${W.bt('h1', 'display', W.hero.title)}</div>
        <p class="lead" data-sub="Lead">${W.hero.lead}</p>
        <div class="actions" data-sub="Buttons"><a class="btn btn-primary" href="#ways">Find your way in <span class="ar">→</span></a><a class="btn btn-quiet" href="#open">Read the research</a></div>
      </section>
      <div class="cl-shot" data-sec="Hero image"><div class="ph"><img src="media/ph-dome-dinner.jpg" alt="A Sensoria community dinner under a dome"></div></div>
      <div class="w8 cl-proof" data-sec="Proof bar">${[['150+', 'Research participants'], ['4+', 'Research protocols'], ['200', 'People at the Playground'], ['6', 'Local nodes, active and coming']].map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div>

      <section class="w8 w8-sec w8-split" data-sec="Problem"><div data-sub="Headline">${W.k(W.gap.kicker)}<h2 class="h2">${W.gap.head}</h2></div><div class="w8-body" data-sub="Body">${W.gap.body.map((p) => `<p>${p}</p>`).join('')}</div></section>

      <section class="w8 w8-sec" data-sec="How it works"><div class="cl-center" data-sub="Headline">${W.k(W.loop.kicker)}<h2 class="h2">${W.loop.head}</h2><p class="lead">${W.loop.sub}</p></div>
        <div class="cl-tabs" data-sub="Tabs"><div class="cl-tablist" role="tablist">${W.loop.steps.map(([v, t, d], i) => `<button class="cl-tab" role="tab" id="cl-tab-${i}" aria-controls="cl-stage" aria-selected="${i === 0}"><h3><span>0${i + 1}</span>${v}</h3><p><span>${t}. ${d}</span></p><span class="bar"><i></i></span></button>`).join('')}</div>
          <div class="cl-stage" id="cl-stage" role="tabpanel">${['il-dome.jpg', 'il-capture.jpg', 'il-community-map.jpg'].map((f, i) => `<img src="media/${f}" alt="" class="${i === 0 ? 'on' : ''}">`).join('')}</div></div></section>

      <section class="w8 w8-sec" data-sec="In the field"><div class="cl-center" data-sub="Headline">${W.k(W.field.kicker)}<h2 class="h2">${W.field.head}</h2></div>
        <div class="cl-field" data-sub="Events">${W.field.events.map(([n, where, nums, d], i) => `<article class="cl-card"><div class="ph"><img src="media/${['ph-conclave.jpg', 'ph-welcome.jpg'][i]}" alt=""></div><div class="tx"><h3>${n}</h3><p class="meta">${where} · ${nums.map(([a, b]) => `${a} ${b}`).join(' · ')}</p><p>${d}</p></div></article>`).join('')}</div></section>

      <section class="w8 w8-sec" data-sec="Sovereignty"><div class="cl-center" data-sub="Headline">${W.k(W.sovereign.kicker)}<h2 class="h2">${W.sovereign.head}</h2><p class="lead">${W.sovereign.body}</p></div>
        <div class="cl-feats" data-sub="Features">${W.sovereign.points.map(([t, d], i) => `<div class="cl-feat">${icon(['vault', 'compute', 'consent'][i])}<h3>${t}</h3><p>${d}</p></div>`).join('')}</div></section>

      <section class="w8 w8-sec" data-sec="Why now">${W.k(W.now.kicker)}<h2 class="h2" style="max-width:20ch">${W.now.head}</h2>
        <div class="cl-now" data-sub="Forces">${W.now.items.map(([b, p]) => `<div><b>${b}</b><p>${p}</p></div>`).join('')}</div></section>

      <section class="w8 w8-sec" id="open" data-sec="Proceedings"><div class="w8-split" data-sub="Headline"><div>${W.k(W.open.kicker)}<h2 class="h2">${W.open.head}</h2></div><p class="lead" style="color:var(--ink-2)">${W.open.sub}</p></div>
        <div class="cl-papers" data-sub="Entries">${W.open.items.map(([k, t, d, l], i) => `<a class="cl-paper${i === 0 ? ' live' : ''}" href="#" title="${l}"><small>${k}</small><h3>${t}</h3><span class="go" aria-hidden="true">→</span></a>`).join('')}</div></section>

      <section class="w8 w8-sec" id="ways" data-sec="Ways in"><div class="cl-center" data-sub="Headline">${W.k(W.ways.kicker)}<h2 class="h2">${W.ways.head}</h2></div>
        <div class="cl-ways" data-sub="Options">${W.ways.items.map(([k, t, d, l], i) => `<div class="cl-way stk-host">${W.stk(['writer', 'talker', 'standing'][i])}<small>${k}</small><h3>${t}</h3><p>${d}</p><a class="w8-link" href="#">${l} →</a></div>`).join('')}</div></section>

      <section class="w8 w8-sec" data-sec="FAQ"><div class="cl-center" data-sub="Headline">${W.k('Questions')}<h2 class="h2">Common questions.</h2></div>
        <div class="cl-faq" data-sub="Accordion">${FAQ.map(([q, a], i) => `<div class="cl-q${i === 0 ? ' open' : ''}"><button aria-expanded="${i === 0}" aria-controls="cl-a${i}">${q}<span class="pm" aria-hidden="true"></span></button><div class="a" id="cl-a${i}" role="region"><div><p>${a}</p></div></div></div>`).join('')}</div></section>

      <section class="w8 w8-sec" data-sec="Team">${W.k(W.team.kicker)}<h2 class="h2" style="max-width:20ch">${W.team.head}</h2><ul class="w8-people">${W.team.people.map(([n, r]) => `<li><b>${n}</b><span>${r}</span></li>`).join('')}</ul></section>

      <section class="w8 cl-band" data-sec="Call to action"><div class="in on-teal"><h2>Help build the map of the mind.</h2>
        <div class="acts"><a class="btn btn-primary" href="#">Apply for certification <span class="ar">→</span></a><a class="btn btn-quiet" href="#">Become a member</a></div></div></section>
      ${W.foot()}`,
    init: (W) => {
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      requestAnimationFrame(() => document.documentElement.classList.add('cl-ready'));
      W.motion({
        reveal: '.cl-proof > div, .h-kick, .h2, .w8-body p, .cl-tabs, .cl-card, .cl-feat, .cl-now > div, .cl-paper, .cl-way, .cl-q, .w8-people li',
        count: '.cl-proof b',
      });
      // tabs: click, arrow keys, and a gentle auto-advance with a progress bar (paused on hover, off with reduced motion)
      const box = document.querySelector('.cl-tabs'), tabs = [...box.querySelectorAll('.cl-tab')], imgs = [...box.querySelectorAll('.cl-stage img')];
      let cur = 0;
      const show = (i, user) => {
        cur = i;
        tabs.forEach((t, j) => { t.setAttribute('aria-selected', j === i); const bar = t.querySelector('.bar i'); bar.classList.remove('run'); void bar.offsetWidth; if (j === i && !reduce && !user) bar.classList.add('run'); });
        imgs.forEach((m, j) => m.classList.toggle('on', j === i));
      };
      tabs.forEach((t, i) => {
        t.addEventListener('click', () => show(i, true));
        t.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); tabs[(i + 1) % 3].focus(); show((i + 1) % 3, true); } if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); tabs[(i + 2) % 3].focus(); show((i + 2) % 3, true); } });
        t.querySelector('.bar i').addEventListener('animationend', () => show((cur + 1) % 3));
      });
      box.addEventListener('pointerenter', () => box.classList.add('paused'));
      box.addEventListener('pointerleave', () => box.classList.remove('paused'));
      if (!reduce) new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { show(cur); o.disconnect(); } }), { threshold: .4 }).observe(box);
      // accordion
      document.querySelectorAll('.cl-q button').forEach((b) => b.addEventListener('click', () => {
        const q = b.parentElement, open = !q.classList.contains('open');
        q.classList.toggle('open', open); b.setAttribute('aria-expanded', open);
      }));
    },
  });
})();
