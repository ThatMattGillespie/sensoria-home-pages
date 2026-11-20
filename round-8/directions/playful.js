/* 8C · Playful (the round 4 / final direction). Collage and stickers carry the personality: a parallax
   collage of prints and cut-outs in the hero, an object set in the headline, one sticker per section placed
   beside the idea it stands for, Jeremy peeking over the teal field section, and pinned prints of real
   events. Stickers tilt and lift on hover. */
(function () {
  const R = window.REFRACT, C = R.C;
  const mg = (k, style, cls = '') => `<img class="mg cut ${cls}" src="media/${R.OBJ[k] || k}" alt="" style="${style}">`;
  window.LAYOUTS.push({
    id: 'playful',
    name: 'Playful',
    idea: 'Collage and stickers lead. A hero collage that moves with the cursor, an object set into the headline, one sticker beside each idea, a team member peeking over the events section, and pinned prints of real gatherings. Stickers lift on hover.',
    css: `
      .pf-hero { display: grid; grid-template-columns: 6fr 6fr; gap: 48px; align-items: center; padding: 32px 40px 0; }
      .pf-stage { position: relative; aspect-ratio: 4 / 5; }
      .pf-hero .inl { height: .74em; }
      .mg { position: absolute; z-index: 3; height: auto; filter: var(--edge) drop-shadow(0 10px 14px rgba(5,39,43,.3)); transition: transform .35s cubic-bezier(.3,1.5,.5,1); cursor: default; }
      .mg:hover { transform: rotate(-7deg) translateY(-10px) scale(1.06); }
      .pf-rel { position: relative; }
      .pf-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 96px; }
      .pf-card { position: relative; background: ${C.WHITE}; padding: 88px 28px 30px; border-radius: 6px; }
      .pf-card .cut { position: absolute; left: 24px; top: -58px; width: 132px; transition: transform .35s cubic-bezier(.3,1.5,.5,1); }
      .pf-card:hover .cut { transform: rotate(-8deg) translateY(-10px); }
      .pf-card .n { font: 12px var(--font-label); color: var(--ink-2); }
      .pf-card h3 { font: 400 30px/1.05 var(--font-display); letter-spacing: -.02em; margin: 4px 0 6px; } .pf-card h4 { font: 500 16px var(--font-text); margin-bottom: 8px; } .pf-card p { color: var(--ink-2); font-size: 15px; }
      .pf-field { position: relative; margin-top: 200px; padding: 104px 0 120px; }
      .pf-field .grid { display: grid; grid-template-columns: 5fr 7fr; gap: 64px; align-items: center; }
      .pf-board { position: relative; aspect-ratio: 6 / 5; }
      .pf-ev { margin-top: 32px; display: grid; gap: 22px; }
      .pf-ev h3 { font: 400 24px/1.1 var(--font-display); letter-spacing: -.02em; } .pf-ev p { font-size: 15px; }
      .pf-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 72px; }
      .pf-stats b { display: block; font: 400 clamp(56px, 7vw, 104px)/.9 var(--font-display); letter-spacing: -.05em; } .pf-stats span { font-size: 15px; color: rgba(254,254,254,.72); }
      .peek { pointer-events: auto; } .peek:hover .cut { transform: translateY(-14px); } .peek .cut { transition: transform .35s cubic-bezier(.3,1.5,.5,1); }
      .pf-sov { display: grid; grid-template-columns: 6fr 6fr; gap: 64px; align-items: center; }
      .pf-vault { position: relative; aspect-ratio: 1; }
      .pf-points { list-style: none; display: grid; gap: 14px; margin-top: 28px; }
      .pf-points li { background: ${C.WHITE}; border-radius: 6px; padding: 16px 20px; } .pf-points b { font-weight: 500; display: block; } .pf-points span { color: var(--ink-2); font-size: 15px; }
      .pf-now { list-style: none; counter-reset: n; display: grid; grid-template-columns: repeat(2, 1fr); gap: 36px 56px; margin-top: 56px; }
      .pf-now b { display: block; font: 400 40px/1 var(--font-display); letter-spacing: -.03em; margin-bottom: 10px; } .pf-now p { color: var(--ink-2); max-width: 42ch; }
      .pf-papers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 56px; }
      .pf-paper { position: relative; background: ${C.WHITE}; border-radius: 6px; padding: 24px 22px; display: grid; gap: 10px; grid-template-rows: auto auto 1fr auto; min-height: 280px; text-decoration: none; color: inherit; transition: transform .2s; }
      .pf-paper:hover { transform: translateY(-4px); }
      .pf-paper small { font: 12px var(--font-label); color: var(--ink-2); } .pf-paper h3 { font: 400 24px/1.1 var(--font-display); letter-spacing: -.02em; } .pf-paper p { color: var(--ink-2); font-size: 14px; }
      .pf-paper.live { background: ${C.AMBER}; } .pf-paper.live small, .pf-paper.live p { color: ${C.TEAL}; }
      .pf-ways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 110px; }
      .pf-ways .pf-card .cut { width: auto; height: 150px; top: -96px; }
      .pf-ways .pf-card { padding-top: 76px; }
      .pf-ways .btn { margin-top: 18px; }
      @media (max-width: 1360px) { .mg.edge { display: none; } }
      @media (max-width: 900px) { .pf-hero, .pf-field .grid, .pf-sov { grid-template-columns: 1fr; padding-left: 16px; padding-right: 16px; gap: 32px; } .pf-field .grid, .pf-sov { padding: 0; }
        .pf-cards, .pf-papers, .pf-ways, .pf-stats { grid-template-columns: 1fr; } .pf-cards, .pf-ways { gap: 80px; } .pf-now { grid-template-columns: 1fr; } .pf-field { margin-top: 140px; padding: 72px 0; } .mg { display: none; } }
      @media (prefers-reduced-motion: reduce) { .mg, .pf-card .cut, .peek .cut { transition: none; } .mg:hover, .pf-card:hover .cut, .peek:hover .cut { transform: none; } }
    `,
    render: (W) => `
      ${W.head()}
      <section class="pf-hero hero w8" data-sec="Hero"><div data-sub="Copy">${W.k(W.hero.kicker)}<p class="h-pre">${W.hero.pre.join('<br>')}</p>
          ${W.bt('h1', 'display', `Just in time to explore ${R.inl('headphones')} the mind.`)}<p class="lead">${W.hero.lead}</p>
          <div class="actions"><a class="btn btn-primary" href="#ways">Find your way in</a><a class="btn btn-quiet" href="#open">Read the research</a></div></div>
        <div class="pf-stage" data-sub="Collage">${R.planes([
          [-1, R.print('media/ph-dome-dinner.jpg', 'left:6%;top:2%;width:84%;height:44%;--r:2deg', 'duo')],
          [0, R.cut('brain', 'left:-4%;top:30%;width:50%', 'cream') + R.print('media/ph-salon.jpg', 'left:42%;top:44%;width:56%;height:30%;--r:-3deg', 'duo', 'Salon session')],
          [1, R.cut('tubes', 'left:6%;top:62%;width:22%') + R.cut('goggles', 'left:52%;top:14%;width:44%')],
          [2, R.cut('vr', 'left:42%;top:62%;width:30%')],
        ])}</div></section>

      <section class="w8 w8-sec w8-split pf-rel" data-sec="Problem"><div data-sub="Headline">${W.k(W.gap.kicker)}<h2 class="h2">${W.gap.head}</h2></div>
        <div class="w8-body" data-sub="Body">${W.gap.body.map((p) => `<p>${p}</p>`).join('')}</div>
        ${mg('roundflask', 'right:-118px;top:150px;width:96px', 'edge')}</section>

      <section class="w8 w8-sec" data-sec="How it works"><div class="w8-split" data-sub="Headline"><div>${W.k(W.loop.kicker)}<h2 class="h2">${W.loop.head}</h2></div><p class="lead" style="color:var(--ink-2)">${W.loop.sub}</p></div>
        <div class="pf-cards" data-sub="Steps">${W.loop.steps.map(([v, t, d], i) => `<div class="pf-card">${R.cut(['salon', 'eeg', 'brain'][i], '', i === 2 ? 'cream' : '')}<span class="n">0${i + 1}</span><h3>${v}</h3><h4>${t}</h4><p>${d}</p></div>`).join('')}</div></section>

      <section class="pf-field on-teal" data-sec="In the field"><div class="w8 grid">
        <div data-sub="Copy">${W.k(W.field.kicker)}<h2 class="h2">${W.field.head}</h2>
          <div class="pf-ev">${W.field.events.map(([n, where, nums, d]) => `<div><h3>${n}</h3><p style="opacity:.75">${where} · ${nums.map(([a, b]) => `${a} ${b}`).join(' · ')}</p></div>`).join('')}</div></div>
        <div class="pf-board" data-sub="Prints">${R.print('media/ph-conclave.jpg', 'left:0;top:4%;width:54%;height:70%;--r:-3deg', 'colour', 'Conclave · Ponte de Lima')}${R.print('media/ph-welcome.jpg', 'left:44%;top:18%;width:56%;height:52%;--r:2.5deg', 'colour', 'Playground · Portugal')}${R.cut('eeg', 'left:30%;top:66%;width:26%')}</div></div>
        <div class="w8 pf-stats" data-sub="Totals">${W.field.stats.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div></section>

      <section class="w8 w8-sec pf-sov" data-sec="Sovereignty"><div class="pf-vault" data-sub="Collage">${R.print('media/il-vault.jpg', 'left:0;top:8%;width:92%;height:70%;--r:-1.5deg', 'nat')}${R.cut('armchair', 'left:56%;top:52%;width:42%')}</div>
        <div data-sub="Copy">${W.k(W.sovereign.kicker)}<h2 class="h2">${W.sovereign.head}</h2><p class="lead" style="font-size:19px;color:var(--ink-2)">${W.sovereign.body}</p>
          <ol class="pf-points">${W.sovereign.points.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join('')}</ol></div></section>

      <section class="w8 w8-sec pf-rel" data-sec="Why now">${W.k(W.now.kicker)}<h2 class="h2" style="max-width:20ch">${W.now.head}</h2>
        <ul class="pf-now" data-sub="Forces">${W.now.items.map(([b, p]) => `<li><b>${b}</b><p>${p}</p></li>`).join('')}</ul>
        ${mg('mindmachine', 'right:-100px;top:150px;width:86px', 'edge')}</section>

      <section class="w8 w8-sec" id="open" data-sec="Proceedings"><div class="w8-split" data-sub="Headline"><div>${W.k(W.open.kicker)}<h2 class="h2">${W.open.head}</h2></div><p class="lead" style="color:var(--ink-2)">${W.open.sub}</p></div>
        <div class="pf-papers" data-sub="Entries">${W.open.items.map(([k, t, d, l], i) => `<a class="pf-paper${i === 0 ? ' live' : ''}" href="#"><small>${k}</small><h3>${t}</h3><p>${d}</p><span class="w8-link">${l}</span></a>`).join('')}</div></section>

      <section class="w8 w8-sec" id="ways" data-sec="Ways in">${W.k(W.ways.kicker)}<h2 class="h2">${W.ways.head}</h2>
        <div class="pf-ways" data-sub="Options">${W.ways.items.map(([k, t, d, l], i) => `<div class="pf-card">${R.cut(['writer', 'talker', 'standing'][i], '')}<span class="n">0${i + 1} · ${k}</span><h3>${t}</h3><p>${d}</p><a class="btn ${i === 0 ? 'btn-primary' : 'btn-quiet'}" href="#">${l}</a></div>`).join('')}</div></section>

      <section class="w8 w8-sec pf-rel" data-sec="Team">${W.k(W.team.kicker)}<h2 class="h2" style="max-width:20ch">${W.team.head}</h2><ul class="w8-people">${W.team.people.map(([n, r]) => `<li><b>${n}</b><span>${r}</span></li>`).join('')}</ul>
        ${mg('walker', 'right:-108px;bottom:-30px;width:84px', 'edge')}</section>
      ${W.foot()}`,
    init: (W, R) => {
      R.peek('.pf-field', 'jeremy', 'left:8%;width:150px;height:118px', 'cream');
      R.parallax({ scroll: true });
    },
  });
})();
