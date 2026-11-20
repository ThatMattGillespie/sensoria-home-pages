/* Round 4 kit: the parts Matt picked from round 3, shared by every round-4 option.
   - From 4D: collages built from paper planes that shift with the cursor (and, optionally, with scroll).
   - From 5E: a sticker per state in the list, small objects set in headlines, the flat-lay collage.
   - Stickers in unexpected places: figures that peek over a section edge or stand on a rule.
   - No torn edges: the teal section ends in a clean straight edge. */
(function () {
  const R = window.REFRACT, C = R.C, S = R.SPECTRUM, SL = R.SPECTRUM_LIGHT;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // one sticker per state, in list order (no glassware beside "Psychedelics")
  R.STATE_OBJ = ['armchair', 'writer', 'brain', 'blindfold', 'standing', 'goggles', 'eeg'];
  R.STATE_SHORT = ['Dreaming', 'Meditation', 'Mystical', 'Aesthetic', 'Breathwork', 'Technodelics', 'Psychedelics'];

  R.plane = (d, html) => `<div class="plane" style="--d:${d}">${html}</div>`;
  R.planes = (list, cls = '') => `<div class="collage planes ${cls}" data-par>${list.map(([d, h]) => R.plane(d, h)).join('')}</div>`;
  R.inl = (key) => `<img class="inl" src="media/${R.OBJ[key]}" alt="">`;

  // put a small object after a word in a headline (both blur layers, so the layout matches)
  R.rebus = (sel, word, key) => document.querySelectorAll(sel).forEach((el) => {
    el.innerHTML = el.innerHTML.replace(word, `${word} ${R.inl(key)}`);
  });
  // swap the colour dots in the states lists for stickers
  R.stateObjects = () => document.querySelectorAll('.state-list, .slide-states').forEach((list) => {
    list.querySelectorAll('li').forEach((li, i) => {
      const chip = li.querySelector('.state-chip');
      if (chip) chip.outerHTML = `<img class="state-obj" src="media/${R.OBJ[R.STATE_OBJ[i]]}" alt="">`;
    });
  });
  // a sticker placed inside any element. tone: '', 'sm' (finer edge for small figures), 'cream', 'duo'
  R.sticker = (parentSel, key, style, tone = '', attrs = '') => {
    const p = document.querySelector(parentSel);
    if (!p) return;
    if (getComputedStyle(p).position === 'static') p.style.position = 'relative';
    p.insertAdjacentHTML('beforeend', R.cut(key, style, `stk ${tone}`, attrs));
  };
  // a figure peeking over the top edge of a section: style sets left/right, width and the visible height
  R.peek = (sectionSel, key, style, tone = '') => {
    const p = document.querySelector(sectionSel);
    if (!p) return;
    if (getComputedStyle(p).position === 'static') p.style.position = 'relative';
    p.insertAdjacentHTML('afterbegin', `<span class="peek" style="${style}">${R.cut(key, '', tone)}</span>`);
  };

  // cursor parallax on the hero collage; scroll: true also shifts the planes as the page scrolls
  R.parallax = (o = {}) => {
    const stage = document.querySelector('.hero [data-par]');
    if (!stage || reduce) return;
    const hero = stage.closest('.hero');
    const s = { x: 0, y: 0, tx: 0, ty: 0, hover: false };
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      s.tx = ((e.clientX - r.left) / r.width - .5) * 2; s.ty = ((e.clientY - r.top) / r.height - .5) * 2; s.hover = true;
    });
    hero.addEventListener('pointerleave', () => { s.hover = false; });
    const tick = (t) => {
      if (!s.hover) { s.tx = .5 * Math.sin(t / 4800); s.ty = .4 * Math.sin(t / 3900 + 1); }
      s.x += (s.tx - s.x) * .05; s.y += (s.ty - s.y) * .05;
      stage.style.setProperty('--px', s.x.toFixed(3)); stage.style.setProperty('--py', s.y.toFixed(3));
      if (o.scroll) {
        const r = stage.getBoundingClientRect();
        const sy = Math.max(-1, Math.min(1, (innerHeight / 2 - (r.top + r.height / 2)) / innerHeight));
        stage.style.setProperty('--sy', sy.toFixed(3));
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  // stickers with data-sp="0.1" drift against the scroll at their own speed
  R.scrollDrift = () => {
    const els = [...document.querySelectorAll('[data-sp]')];
    if (!els.length || reduce) return;
    const tick = () => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const base = r.top - (el._ty || 0);
        el._ty = (base + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.sp);
        el.style.translate = `0 ${el._ty.toFixed(1)}px`;
      });
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  R.kit = R.printKit.css + R.fKit + `
    .states, .coord, .collab, .site-foot, .stats, .state-list li { position: relative; }

    /* paper planes */
    .planes { --px: 0; --py: 0; --sy: 0; }
    .plane { position: absolute; inset: 0; will-change: transform;
      transform: translate3d(calc(var(--px) * var(--d) * var(--amp, 14px)), calc(var(--py) * var(--d) * 10px + var(--sy) * var(--d) * -36px), 0); }
    .plane[style*="--d:-1"] .print { box-shadow: 0 6px 14px -8px rgba(5,39,43,.4); }
    .plane[style*="--d:1"] .cut { filter: var(--edge) drop-shadow(0 16px 18px rgba(5,39,43,.36)); }
    .plane[style*="--d:2"] .cut { filter: var(--edge) drop-shadow(0 26px 26px rgba(5,39,43,.42)); }
    .plane .cut.cream { filter: grayscale(1) sepia(.35) contrast(.9) brightness(1.1) var(--edge) drop-shadow(0 10px 14px rgba(5,39,43,.3)); }
    .kit .cut, .flat .cut { transform: rotate(var(--r, 0deg)); }

    /* stickers */
    .cut.sm { filter: var(--edge-sm) drop-shadow(0 3px 4px rgba(5,39,43,.32)); }
    .stk { z-index: 3; pointer-events: none; }
    .peek { position: absolute; bottom: 100%; z-index: 2; display: block; clip-path: inset(-40px -40px 0 -40px); pointer-events: none; }
    .peek .cut { left: 0; top: 0; width: 100%; }
    @media (max-width: 760px) { .hide-m { display: none; } }

    /* objects in type, stickers in the list */
    .inl { display: inline-block; height: .78em; width: auto; vertical-align: -.06em; margin: 0 .1em; filter: var(--edge-sm) drop-shadow(0 .04em .05em rgba(5,39,43,.3)); }
    .bt-soft .inl { visibility: hidden; }
    .on-dark .inl { filter: var(--edge-sm) drop-shadow(0 .04em .08em rgba(0,0,0,.5)); }
    .state-list li { grid-template-columns: 56px 56px 1fr auto; }
    /* type stays two-colour: teal on paper, white on teal. Spectrum colour never reaches text (Matt, 2026-11-19) */
    .stat-big { color: inherit; }
    .ctag { color: var(--ink-2); }
    .vf .ctag { color: var(--ink-2); }
    .state-obj { width: 48px; height: 40px; align-self: center; object-fit: contain; filter: var(--edge-sm) drop-shadow(0 2px 3px rgba(5,39,43,.25)); transition: transform .25s cubic-bezier(.3,1.4,.5,1); }
    .slide-states li { grid-template-columns: 5cqw 6cqw 1fr auto; }
    .slide-states .state-obj { width: 5.4cqw; height: 4.4cqw; }
    @media (max-width: 760px) { .state-list li { grid-template-columns: 34px 44px 1fr; } .state-obj { width: 38px; height: 32px; } }

    /* video */
    .vf .plane { transform: none; animation: push 6s cubic-bezier(.4,0,.2,1) infinite alternate; }
    @keyframes push { from { transform: translateY(calc(var(--d) * 1.2cqw)) scale(1); } to { transform: translateY(calc(var(--d) * -2.4cqw)) scale(calc(1 + var(--d) * .03)); } }
    .vf .stage-lab { position: absolute; left: 7cqw; top: 9cqw; font: 2.3cqw var(--font-label); letter-spacing: .14em; text-transform: uppercase; color: var(--ink-2); z-index: 6; }
    .vf.on-dark .stage-lab { color: rgba(254,254,254,.72); }
    .vf .big-cap { position: absolute; left: 7cqw; right: 7cqw; z-index: 6; font: 400 7.4cqw/1.02 var(--font-display); letter-spacing: -.03em; color: ${C.WHITE}; }
    .vf .rb { position: absolute; left: 7cqw; right: 7cqw; font: 400 9cqw/1.06 var(--font-display); letter-spacing: -.03em; }
    .vf .rb .inl { height: .8em; }
    .vf .sheet { position: absolute; left: 0; right: 0; top: 46%; bottom: 0; background: radial-gradient(ellipse 80% 60% at 40% 30%, #1F5D64, #05272B); box-shadow: 0 -8px 16px rgba(5,39,43,.22); }
    .vf .idx { position: absolute; left: 7cqw; right: 7cqw; top: 20cqw; display: grid; grid-template-columns: 1fr 1fr; gap: 3cqw; }
    .vf .idx div { aspect-ratio: 1; background: rgba(254,254,254,.06); box-shadow: inset 0 0 0 1px rgba(254,254,254,.14); border-radius: 1.4cqw; position: relative; }
    .vf .idx img { position: absolute; left: 14%; top: 12%; height: 58%; width: 72%; object-fit: contain; filter: var(--edge-sm) drop-shadow(0 1cqw 1.2cqw rgba(0,0,0,.35)); }
    .vf .idx span { position: absolute; left: 6%; right: 6%; bottom: 6%; display: flex; justify-content: space-between; font: 2.2cqw var(--font-label); letter-spacing: .06em; text-transform: uppercase; color: ${C.WHITE}; }
    .vf .idx b { font-weight: 400; display: inline-flex; align-items: center; gap: 1cqw; }
    .vf .idx b::before { content: ""; width: 1.4cqw; height: 1.4cqw; border-radius: 50%; background: var(--c); }
    .vf .ssheet { position: absolute; inset: 16cqw 7cqw 10cqw; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4cqw; align-content: start; }
    .vf .ssheet div { aspect-ratio: 1; min-width: 0; border: 1px dashed var(--line-strong); border-radius: 1.2cqw; position: relative; }
    .vf .ssheet img { position: absolute; left: 12%; top: 12%; width: 76%; height: 76%; object-fit: contain; filter: var(--edge-sm) drop-shadow(0 .6cqw .8cqw rgba(5,39,43,.25)); }
  `;
  // for options that keep the coordination section on paper
  R.kitPaperCoord = `
    .coord { color: inherit; border-top: 1px solid var(--line); --s1: ${S[0]}; --s4: ${S[3]}; --s7: ${S[6]}; }
    .coord::before, .coord::after { display: none; }
    .coord .eyebrow, .coord .label, .coord .h2 em { color: var(--ink-2); }
    .coord .eyebrow .num { color: var(--ink); }
    .coord .body p { color: var(--ink); }
    .coord .stat { border-top-color: var(--line-strong); }
    .collab { border-top: 1px solid var(--line); }
  `;

  // shared video frames
  R.fr = {
    title: (H, art, note, label = 'Title card') => ({
      label, note, cls: 'ground on-dark',
      html: `${art}<div class="vf-safe" style="z-index:5">
          <span class="label">Sensoria Research</span>
          <div style="margin-top:auto">${H.bt('div', 'vf-title', `One light. ${R.inl('goggles')}<br>Seven routes.`)}</div>
          <div style="margin-top:6cqw">${R.strip(SL)}</div></div>`,
    }),
    speaker: (H, note = 'Natural colour, light grade, amber key word. Nothing pasted on the speaker.') => ({ label: 'Speaker with caption', note, html: R.speaker(H) }),
    index: (note = 'The states as a sticker index on the lit teal ground, one tile per state, marked with a small spectrum dot. Tiles fill in one by one.') => ({
      label: 'Sticker index', note, cls: 'ground on-dark',
      html: `<span class="stage-lab">Seven routes</span>
        <div class="idx">${R.STATE_OBJ.slice(0, 6).map((k, i) => `<div style="--c:${SL[i]}"><img src="media/${R.OBJ[k]}" alt=""><span><b>0${i + 1}</b>${R.STATE_SHORT[i]}</span></div>`).join('')}</div>`,
    }),
    stack: (H, note = 'Transition: prints are laid one over another, each a little rotated. A sticker figure walks across the top one.') => ({
      label: 'Stack', note, cls: 'ground on-dark',
      html: `<div class="planes" style="position:absolute;inset:0">
          ${R.plane(-1, R.print(H.media('salon.jpg'), 'left:10%;top:16%;width:80%;height:30%;--r:-4deg', 'duo'))}
          ${R.plane(0, R.print(H.media('blindfold-dinner.jpg'), 'left:6%;top:30%;width:84%;height:30%;--r:2deg', 'duo'))}
          ${R.plane(1, R.print(H.media('dinner.jpg'), 'left:8%;top:46%;width:86%;height:30%;--r:-1deg', 'duo', 'Community dinner'))}
          ${R.plane(2, R.cut('walker', 'left:62%;top:58%;width:22%'))}</div>`,
    }),
    rebusLine: (H) => ({
      label: 'Rebus line', note: 'On paper: the sentence builds a phrase at a time, a sticker arriving with each clause. Holds for three seconds.',
      html: `<span class="stage-lab">03 · A problem of coordination</span>
        <div class="rb" style="top:24%;color:${C.TEAL}">Many already practice ${R.inl('headphones')}<br><span style="color:var(--ink-2)">Few do so in a coordinated ${R.inl('salon')} way.</span></div>
        ${R.print(H.media('blindfold-dinner.jpg'), 'left:8%;top:62%;width:84%;height:22%;--r:-2deg', 'duo')}
        ${R.cut('standing', 'left:68%;top:66%;width:20%')}`,
    }),
    peek: (H) => ({
      label: 'Behind the sheet', cls: 'paper',
      note: 'A teal sheet with a clean edge slides up over the paper. The person in VR is tucked behind it and peeks over; the line sits on the sheet.',
      html: `<span class="stage-lab">Technodelics</span>
        ${R.print(H.media('lasers.jpg'), 'left:8%;top:12%;width:84%;height:26%;--r:2deg', 'colour')}
        ${R.cut('vr', 'left:30%;top:26%;width:44%')}
        <div class="sheet"></div>
        <div class="big-cap" style="top:60%">Strobe light, binaural beats, VR.</div>`,
    }),
    sheet: () => ({
      label: 'Sticker sheet', note: 'The whole kit on paper as a sticker sheet. Each sticker lifts off as its idea is spoken, leaving its dashed outline behind.',
      html: `<span class="stage-lab">Sticker sheet 01</span>
        <div class="ssheet">${['goggles', 'brain', 'standing', 'flask', 'vr', 'headphones', 'walker', 'mindmachine', 'writer', 'tubes', 'eeg', 'armchair'].map((k) => `<div><img src="media/${R.OBJ[k]}" alt=""></div>`).join('')}</div>`,
    }),
  };
})();
