/* 8A · Collection (from 7B). The home page as a well-kept catalogue: instruments and figures sit square on
   numbered plates, photos are captioned plates, and each section reads like an entry. Hover lifts an object
   off its plate. One teal surface: the field record. */
(function () {
  const R = window.REFRACT, C = R.C;
  const CAB = [['eeg', 'EEG headband', 'Neural rhythm'], ['goggles', 'Flicker goggles', 'Light-led states'], ['headphones', 'Headphones', 'Sound and binaural beats'],
    ['mindmachine', 'Mind machine', 'Light and sound together'], ['flask', 'Flask', 'Neurochemistry'], ['tubes', 'Sample tubes', 'Biomarkers']];
  const obj = (k, no, name, note) => `<figure class="co-obj stk-host"><div class="pl">${'<img class="stk6" src="media/' + R.OBJ[k] + '" alt="">'}</div><figcaption><span>${no}</span><b>${name}</b><em>${note}</em></figcaption></figure>`;
  window.LAYOUTS.push({
    id: 'collection',
    name: 'Collection',
    idea: 'From 7B. The home page as a well-kept catalogue: instruments and figures on numbered plates, photos as captioned plates, each section an entry. Hover lifts an object off its plate. One teal surface, the field record.',
    css: `
      .co-hero { display: grid; grid-template-columns: 6fr 6fr; gap: 64px; align-items: center; padding-top: 48px; }
      .co-cab { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
      .co-obj { margin: 0; display: grid; gap: 10px; align-content: start; min-width: 0; }
      .co-obj .pl { aspect-ratio: 1; background: ${C.WHITE}; position: relative; }
      .co-obj .stk6 { position: absolute; left: 15%; top: 15%; width: 70%; height: 70%; filter: drop-shadow(0 12px 14px rgba(5,39,43,.18)); }
      .co-obj:hover .stk6 { transform: translateY(-8px) scale(1.06) rotate(-5deg); }
      .co-obj figcaption { display: grid; grid-template-columns: auto 1fr; column-gap: 10px; font-size: 14px; line-height: 1.35; }
      .co-obj figcaption span { font: 12px/1.6 var(--font-label); color: var(--ink-2); grid-row: span 2; }
      .co-obj figcaption b { font-weight: 500; } .co-obj figcaption em { font-style: normal; color: var(--ink-2); font-size: 13px; }
      .co-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 64px; }
      .co-step .plate-im { aspect-ratio: 4 / 3; }
      .co-step .no { display: flex; gap: 12px; align-items: baseline; margin-top: 18px; }
      .co-step .no span { font: 12px var(--font-label); color: var(--ink-2); }
      .co-step h3 { font: 400 28px/1.05 var(--font-display); letter-spacing: -.02em; }
      .co-step h4 { font: 500 16px var(--font-text); margin: 6px 0 6px; } .co-step p { color: var(--ink-2); font-size: 15px; }
      .co-field { margin-top: 152px; padding: 112px 0; }
      .co-records { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 56px; }
      .co-rec .plate-im { aspect-ratio: 3 / 2; }
      .co-rec h3 { font: 400 30px/1.05 var(--font-display); letter-spacing: -.02em; margin-top: 20px; } .co-rec .where { font-size: 15px; opacity: .7; margin-top: 4px; }
      .co-rec dl { display: flex; gap: 40px; margin: 20px 0 14px; } .co-rec dt { font: 400 44px/1 var(--font-display); letter-spacing: -.03em; } .co-rec dd { font-size: 14px; opacity: .7; }
      .co-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 72px; }
      .co-stats div { background: rgba(254,254,254,.06); padding: 24px; }
      .co-stats b { display: block; font: 400 52px/1 var(--font-display); letter-spacing: -.035em; } .co-stats span { font-size: 14px; opacity: .72; }
      .co-sov { display: grid; grid-template-columns: 6fr 6fr; gap: 64px; align-items: center; }
      .co-sov .plate-im { aspect-ratio: 16 / 10; }
      .co-points { list-style: none; display: grid; gap: 14px; margin-top: 32px; }
      .co-points li { background: ${C.WHITE}; padding: 18px 22px; display: grid; grid-template-columns: 34px 1fr; gap: 8px 12px; }
      .co-points span { font: 12px/1.7 var(--font-label); color: var(--ink-2); grid-row: span 2; } .co-points b { font-weight: 500; } .co-points p { color: var(--ink-2); font-size: 15px; }
      .co-now { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; margin-top: 56px; }
      .co-now b { display: block; font: 400 36px/1 var(--font-display); letter-spacing: -.03em; margin-bottom: 12px; } .co-now p { color: var(--ink-2); font-size: 15px; }
      .co-papers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 56px; }
      .co-paper { text-decoration: none; color: inherit; background: ${C.WHITE}; padding: 24px 22px; display: grid; gap: 10px; align-content: start; min-height: 290px; grid-template-rows: auto auto 1fr auto; }
      .co-paper small { font: 12px var(--font-label); color: var(--ink-2); } .co-paper h3 { font: 400 24px/1.1 var(--font-display); letter-spacing: -.02em; } .co-paper p { color: var(--ink-2); font-size: 14px; }
      .co-paper.live { background: ${C.TEAL}; color: ${C.WHITE}; } .co-paper.live h3, .co-paper.live .w8-link { color: ${C.WHITE}; } .co-paper.live small, .co-paper.live p { color: rgba(254,254,254,.75); }
      .co-ways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 56px; }
      .co-way .pl { aspect-ratio: 5 / 4; background: #E8E1D3; position: relative; }
      .co-way .stk6 { position: absolute; left: 25%; top: 10%; width: 50%; height: 80%; filter: var(--edge) drop-shadow(0 12px 14px rgba(5,39,43,.25)); }
      .co-way small { display: block; font: 12px var(--font-label); color: var(--ink-2); margin-top: 18px; } .co-way h3 { font: 400 26px/1.1 var(--font-display); letter-spacing: -.02em; margin: 6px 0 8px; }
      .co-way p { color: var(--ink-2); font-size: 15px; margin-bottom: 16px; }
      /* fine touches */
      @keyframes co-bob { 50% { translate: 0 -4px; } }
      .w8-motion .co-cab .stk6 { animation: co-bob 6s ease-in-out infinite; animation-delay: calc(var(--i) * -1.1s); }
      .co-obj .pl { transition: box-shadow .35s; } .co-obj:hover .pl { box-shadow: 0 18px 30px -22px rgba(5,39,43,.45); }
      .co-obj .stk6 { transition: transform .45s cubic-bezier(.3,1.5,.5,1), filter .45s; } .co-obj:hover .stk6 { filter: drop-shadow(0 22px 18px rgba(5,39,43,.22)); }
      .co-step .plate-im img, .co-rec .plate-im img, .co-sov .plate-im img { transition: filter .7s ease, transform 1.2s cubic-bezier(.2,.7,.2,1); }
      .co-step:hover .plate-im img, .co-rec:hover .plate-im img { filter: none; transform: scale(1.04); }
      .co-sov .plate:hover .plate-im img { transform: scale(1.03); }
      .co-paper { transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s; } .co-paper:hover { transform: translateY(-6px); box-shadow: 0 24px 34px -26px rgba(5,39,43,.5); }
      .co-points li { transition: transform .3s cubic-bezier(.2,.7,.2,1); } .co-points li:hover { transform: translateX(6px); }
      .co-way .pl { transition: background-color .4s; } .co-way:hover .pl { background: #E1D8C7; }
      .co-way .stk6 { transition: transform .45s cubic-bezier(.3,1.5,.5,1); } .co-way:hover .stk6 { transform: translateY(-10px) rotate(-5deg); }
      .co-stats div { transition: background-color .3s; } .co-stats div:hover { background: rgba(254,254,254,.1); }
      @media (max-width: 900px) { .co-hero, .co-sov, .co-records { grid-template-columns: 1fr; gap: 32px; } .co-steps, .co-stats { grid-template-columns: 1fr; } .co-now, .co-papers { grid-template-columns: 1fr 1fr; } .co-ways { grid-template-columns: 1fr; } .co-field { margin-top: 96px; padding: 72px 0; } .co-cab { grid-template-columns: 1fr 1fr; } }
    `,
    render: (W) => `
      ${W.head()}
      <section class="w8 co-hero" data-sec="Hero"><div data-sub="Copy">${W.heroCopy()}</div>
        <div class="co-cab" data-sub="Cabinet">${CAB.map(([k, n, note], i) => obj(k, `No. 0${i + 1}`, n, note).replace('class="co-obj', `style="--i:${i}" class="co-obj`)).join('')}</div></section>
      <section class="w8 w8-sec w8-split" data-sec="Problem"><div data-sub="Headline">${W.k(W.gap.kicker)}<h2 class="h2">${W.gap.head}</h2></div><div class="w8-body" data-sub="Body">${W.gap.body.map((p) => `<p>${p}</p>`).join('')}</div></section>
      <section class="w8 w8-sec" data-sec="How it works"><div class="w8-split" data-sub="Headline"><div>${W.k(W.loop.kicker)}<h2 class="h2">${W.loop.head}</h2></div><p class="lead" style="color:var(--ink-2)">${W.loop.sub}</p></div>
        <div class="co-steps" data-sub="Steps">${W.loop.steps.map(([v, t, d], i) => `<div class="co-step">${W.plate(['ph-salon.jpg', 'ph-lab.jpg', 'il-lab-map.jpg'][i], `Plate ${i + 1}`, ['A salon session.', 'Signal on a shared timeline.', 'The state space, as Sensoria draws it.'][i], i === 2 ? 'nat' : 'duo')}
          <div class="no"><span>0${i + 1}</span><h3>${v}</h3></div><h4>${t}</h4><p>${d}</p></div>`).join('')}</div></section>
      <section class="co-field on-teal" data-sec="In the field"><div class="w8"><div class="w8-split" data-sub="Headline"><div>${W.k(W.field.kicker)}<h2 class="h2">${W.field.head}</h2></div><p>Events are research infrastructure: a transformative experience for the people inside, and a data collection site for the science.</p></div>
        <div class="co-records" data-sub="Records">${W.field.events.map(([n, where, nums, d], i) => `<div class="co-rec">${W.plate(['ph-conclave.jpg', 'ph-welcome.jpg'][i], `Record ${i + 1}`, n, 'nat')}<h3>${n}</h3><p class="where">${where}</p><dl>${nums.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl><p>${d}</p></div>`).join('')}</div>
        <div class="co-stats" data-sub="Totals">${W.field.stats.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div></div></section>
      <section class="w8 w8-sec co-sov" data-sec="Sovereignty">${W.plate('il-vault.jpg', 'Plate 4', 'A personal data vault, and its key.', 'nat', 'data-sub="Illustration"')}
        <div data-sub="Copy">${W.k(W.sovereign.kicker)}<h2 class="h2">${W.sovereign.head}</h2><p class="lead" style="font-size:19px;color:var(--ink-2)">${W.sovereign.body}</p>
          <ol class="co-points">${W.sovereign.points.map(([t, d], i) => `<li><span>0${i + 1}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol></div></section>
      <section class="w8 w8-sec" data-sec="Why now"><div data-sub="Headline">${W.k(W.now.kicker)}<h2 class="h2" style="max-width:20ch">${W.now.head}</h2></div>
        <div class="co-now" data-sub="Forces">${W.now.items.map(([b, p]) => `<div><b>${b}</b><p>${p}</p></div>`).join('')}</div></section>
      <section class="w8 w8-sec" id="open" data-sec="Proceedings"><div class="w8-split" data-sub="Headline"><div>${W.k(W.open.kicker)}<h2 class="h2">${W.open.head}</h2></div><p class="lead" style="color:var(--ink-2)">${W.open.sub}</p></div>
        <div class="co-papers" data-sub="Entries">${W.open.items.map(([k, t, d, l], i) => `<a class="co-paper${i === 0 ? ' live' : ''}" href="#"><small>${k}</small><h3>${t}</h3><p>${d}</p><span class="w8-link">${l}</span></a>`).join('')}</div></section>
      <section class="w8 w8-sec" id="ways" data-sec="Ways in">${W.k(W.ways.kicker)}<h2 class="h2">${W.ways.head}</h2>
        <div class="co-ways" data-sub="Options">${W.ways.items.map(([k, t, d, l], i) => `<div class="co-way stk-host"><div class="pl">${W.stk(['writer', 'talker', 'standing'][i])}</div><small>0${i + 1} · ${k}</small><h3>${t}</h3><p>${d}</p><a class="btn ${i === 0 ? 'btn-primary' : 'btn-quiet'}" href="#">${l} <span class="ar">→</span></a></div>`).join('')}</div></section>
      <section class="w8 w8-sec" data-sec="Team">${W.k(W.team.kicker)}<h2 class="h2" style="max-width:20ch">${W.team.head}</h2><ul class="w8-people">${W.team.people.map(([n, r]) => `<li><b>${n}</b><span>${r}</span></li>`).join('')}</ul></section>
      ${W.foot()}`,
    init: (W) => W.motion({
      reveal: '.h-kick, .h2, .w8-body p, .co-step, .co-rec, .co-stats > div, .co-points li, .co-now > div, .co-paper, .co-way, .w8-people li, .co-sov .plate',
      count: '.co-rec dt, .co-stats b, .co-now b',
    }),
  });
})();
