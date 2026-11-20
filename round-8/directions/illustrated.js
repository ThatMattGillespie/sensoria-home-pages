/* 8B · Illustrated (from 7C). Sensoria's ligne claire scenes carry the ideas; real photographs carry the proof.
   Drawn for what the work is, photographed for where it has happened. Wide square-cornered scenes open the
   chapters; text stays quiet around them. One teal surface: the sovereignty promise. */
(function () {
  const R = window.REFRACT, C = R.C;
  const scene = (file, n, cap, sec, sub = '') => `<figure class="il-scene" data-sec="${sec}"${sub}><div class="ph"><img src="media/${file}" alt=""></div><figcaption class="w8"><b>${n}</b>${cap}</figcaption></figure>`;
  window.LAYOUTS.push({
    id: 'illustrated',
    name: 'Illustrated',
    idea: 'From 7C. Sensoria’s ligne claire scenes carry the ideas; real photographs carry the proof. Wide scenes open the chapters and the text stays quiet around them. One teal surface, the sovereignty promise.',
    css: `
      .il-hero { padding: 64px 40px 56px; display: grid; grid-template-columns: 7fr 5fr; gap: 64px; align-items: end; }
      .il-hero .lead { margin-top: 0; }
      .il-scene { margin: 0 auto; max-width: 1440px; }
      .il-scene .ph { aspect-ratio: 16 / 7; overflow: hidden; } .il-scene img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .il-scene figcaption { font: 13px/1.4 var(--font-text); color: var(--ink-2); margin-top: 10px; } .il-scene figcaption b { font: 12px var(--font-label); color: var(--ink); margin-right: 10px; }
      .il-loop { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 64px; }
      .il-loop .ph { aspect-ratio: 16 / 10; overflow: hidden; } .il-loop img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .il-loop .n { display: block; font: 12px var(--font-label); color: var(--ink-2); margin: 20px 0 6px; }
      .il-loop h3 { font: 400 28px/1.05 var(--font-display); letter-spacing: -.02em; } .il-loop h4 { font: 500 16px var(--font-text); margin: 6px 0; } .il-loop p { color: var(--ink-2); font-size: 15px; }
      .il-field { display: grid; grid-template-columns: 7fr 5fr; gap: 28px; margin-top: 56px; align-items: start; }
      .il-field .plate:first-child .plate-im { aspect-ratio: 4 / 3; } .il-field .plate:last-child .plate-im { aspect-ratio: 4 / 5; }
      .il-ev { display: grid; grid-template-columns: 7fr 5fr; gap: 28px; margin-top: 24px; }
      .il-ev h3 { font: 400 26px/1.1 var(--font-display); letter-spacing: -.02em; } .il-ev p { color: var(--ink-2); font-size: 15px; margin-top: 6px; }
      .il-ev .nums { font: 500 15px var(--font-text); color: var(--ink); margin-top: 8px; }
      .il-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 56px; }
      .il-stats b { display: block; font: 400 56px/1 var(--font-display); letter-spacing: -.04em; } .il-stats span { color: var(--ink-2); }
      .il-sov { margin-top: 152px; padding: 104px 0; }
      .il-sov .grid { display: grid; grid-template-columns: 6fr 6fr; gap: 64px; align-items: center; }
      .il-sov .ph { aspect-ratio: 16 / 11; overflow: hidden; } .il-sov img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .il-sov ol { list-style: none; display: grid; gap: 18px; margin-top: 32px; }
      .il-sov li b { display: block; font: 400 21px/1.15 var(--font-display); letter-spacing: -.015em; } .il-sov li span { color: rgba(254,254,254,.72); font-size: 15px; }
      .il-now { list-style: none; display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; margin-top: 56px; }
      .il-now b { display: block; font: 400 34px/1 var(--font-display); letter-spacing: -.03em; margin-bottom: 12px; } .il-now p { color: var(--ink-2); font-size: 15px; }
      .il-papers { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 56px; }
      .il-paper { background: ${C.WHITE}; padding: 26px 28px; display: grid; grid-template-columns: 1fr auto; gap: 6px 24px; align-items: end; text-decoration: none; color: inherit; }
      .il-paper small { grid-column: 1 / -1; font: 12px var(--font-label); color: var(--ink-2); } .il-paper h3 { font: 400 26px/1.1 var(--font-display); letter-spacing: -.02em; }
      .il-paper p { grid-column: 1; color: var(--ink-2); font-size: 15px; } .il-paper .w8-link { grid-column: 2; grid-row: 2 / span 2; white-space: nowrap; }
      .il-ways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 56px; }
      .il-ways .ph { aspect-ratio: 16 / 10; overflow: hidden; } .il-ways img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .il-ways small { display: block; font: 12px var(--font-label); color: var(--ink-2); margin-top: 18px; } .il-ways h3 { font: 400 26px/1.1 var(--font-display); letter-spacing: -.02em; margin: 6px 0 8px; }
      .il-ways p { color: var(--ink-2); font-size: 15px; margin-bottom: 16px; }
      /* fine touches: illustrations drift inside their frames on scroll (W.motion drift), lift on hover */
      .il-scene .ph img, .il-loop .ph img, .il-ways .ph img, .il-sov .ph img { transform: scale(1.08); will-change: transform; }
      .il-loop > div .ph, .il-ways > div .ph { transition: box-shadow .4s; }
      .il-loop > div:hover .ph, .il-ways > div:hover .ph { box-shadow: 0 22px 34px -24px rgba(5,39,43,.5); }
      .il-loop .n { transition: color .3s; } .il-loop > div:hover .n { color: var(--ink); }
      .il-field .plate-im img { transition: transform 1.4s cubic-bezier(.2,.7,.2,1); } .il-field .plate:hover .plate-im img { transform: scale(1.04); }
      .il-paper { transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s; } .il-paper:hover { transform: translateY(-4px); box-shadow: 0 22px 32px -26px rgba(5,39,43,.5); }
      .il-sov li { padding-left: 0; transition: padding .3s; } .il-sov li:hover { padding-left: 8px; }
      .il-scene figcaption b, .plate figcaption b { display: inline-block; }
      @media (max-width: 900px) { .il-hero { grid-template-columns: 1fr; gap: 24px; padding: 32px 16px; } .il-scene .ph { aspect-ratio: 4 / 3; } .il-scene figcaption { padding: 0 16px; }
        .il-loop, .il-field, .il-ev, .il-stats, .il-sov .grid, .il-papers, .il-ways { grid-template-columns: 1fr; } .il-now { grid-template-columns: 1fr 1fr; } .il-sov { margin-top: 96px; padding: 64px 0; } .il-paper { grid-template-columns: 1fr; } .il-paper .w8-link { grid-column: 1; grid-row: auto; } }
    `,
    render: (W) => `
      ${W.head()}
      <section class="w8 il-hero" data-sec="Hero"><div data-sub="Headline">${W.k(W.hero.kicker)}<p class="h-pre">${W.hero.pre.join('<br>')}</p>${W.bt('h1', 'display', W.hero.title)}</div>
        <div data-sub="Lead"><p class="lead">${W.hero.lead}</p><div class="actions"><a class="btn btn-primary" href="#ways">Find your way in <span class="ar">→</span></a><a class="btn btn-quiet" href="#open">Read the research</a></div></div></section>
      ${scene('il-wide.jpg', 'Fig. 1', 'Consciousness research at scale, as Sensoria draws it: many kinds of work, tied together by one map.', 'Opening scene')}
      <section class="w8 w8-sec w8-split" data-sec="Problem"><div data-sub="Headline">${W.k(W.gap.kicker)}<h2 class="h2">${W.gap.head}</h2></div><div class="w8-body" data-sub="Body">${W.gap.body.map((p) => `<p>${p}</p>`).join('')}</div></section>
      <section class="w8 w8-sec" data-sec="How it works"><div class="w8-split" data-sub="Headline"><div>${W.k(W.loop.kicker)}<h2 class="h2">${W.loop.head}</h2></div><p class="lead" style="color:var(--ink-2)">${W.loop.sub}</p></div>
        <div class="il-loop" data-sub="Steps">${W.loop.steps.map(([v, t, d], i) => `<div><div class="ph"><img src="media/${['il-dome.jpg', 'il-capture.jpg', 'il-community-map.jpg'][i]}" alt=""></div><span class="n">0${i + 1}</span><h3>${v}</h3><h4>${t}</h4><p>${d}</p></div>`).join('')}</div></section>
      <section class="w8 w8-sec" data-sec="In the field"><div class="w8-split" data-sub="Headline"><div>${W.k(W.field.kicker)}<h2 class="h2">${W.field.head}</h2></div><p class="lead" style="color:var(--ink-2)">Drawings show the idea. These are the photographs.</p></div>
        <div class="il-field" data-sub="Photos">${W.plate('ph-conclave.jpg', 'Photo 1', 'Consciousness Conclave, Ponte de Lima.', 'nat')}${W.plate('ph-installation.jpg', 'Photo 2', 'Inside an art-science installation.', 'nat')}</div>
        <div class="il-ev" data-sub="Events">${W.field.events.map(([n, where, nums, d]) => `<div><h3>${n}</h3><p class="nums">${where} · ${nums.map(([a, b]) => `${a} ${b}`).join(' · ')}</p><p>${d}</p></div>`).join('')}</div>
        <div class="il-stats" data-sub="Totals">${W.field.stats.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div></section>
      <section class="il-sov on-teal" data-sec="Sovereignty"><div class="w8 grid"><div class="ph" data-sub="Illustration"><img src="media/il-enclave.jpg" alt=""></div>
        <div data-sub="Copy">${W.k(W.sovereign.kicker)}<h2 class="h2">${W.sovereign.head}</h2><p style="font-size:18px;margin-top:20px">${W.sovereign.body}</p>
          <ol>${W.sovereign.points.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join('')}</ol></div></div></section>
      <section class="w8 w8-sec" data-sec="Why now">${W.k(W.now.kicker)}<h2 class="h2" style="max-width:20ch">${W.now.head}</h2>
        <ul class="il-now" data-sub="Forces">${W.now.items.map(([b, p]) => `<li><b>${b}</b><p>${p}</p></li>`).join('')}</ul></section>
      <section class="w8 w8-sec" id="open" data-sec="Proceedings"><div class="w8-split" data-sub="Headline"><div>${W.k(W.open.kicker)}<h2 class="h2">${W.open.head}</h2></div><p class="lead" style="color:var(--ink-2)">${W.open.sub}</p></div>
        <div class="il-papers" data-sub="Entries">${W.open.items.map(([k, t, d, l]) => `<a class="il-paper" href="#"><small>${k}</small><h3>${t}</h3><p>${d}</p><span class="w8-link">${l}</span></a>`).join('')}</div></section>
      <section class="w8 w8-sec" id="ways" data-sec="Ways in">${W.k(W.ways.kicker)}<h2 class="h2">${W.ways.head}</h2>
        <div class="il-ways" data-sub="Options">${W.ways.items.map(([k, t, d, l], i) => `<div><div class="ph"><img src="media/${['il-atelier.jpg', 'lc-terrace.jpg', 'lc-group.jpg'][i]}" alt=""></div><small>0${i + 1} · ${k}</small><h3>${t}</h3><p>${d}</p><a class="btn ${i === 0 ? 'btn-primary' : 'btn-quiet'}" href="#">${l} <span class="ar">→</span></a></div>`).join('')}</div></section>
      <section class="w8 w8-sec" data-sec="Team">${W.k(W.team.kicker)}<h2 class="h2" style="max-width:20ch">${W.team.head}</h2><ul class="w8-people">${W.team.people.map(([n, r]) => `<li><b>${n}</b><span>${r}</span></li>`).join('')}</ul></section>
      ${W.foot()}`,
    init: (W) => W.motion({
      reveal: '.h-kick, .h2, .w8-body p, .il-loop > div, .il-field .plate, .il-ev > div, .il-stats > div, .il-sov li, .il-now li, .il-paper, .il-ways > div, .w8-people li',
      count: '.il-stats b, .il-now b',
      drift: '.il-scene .ph img, .il-loop .ph img, .il-ways .ph img, .il-sov .ph img',
    }),
  });
})();
