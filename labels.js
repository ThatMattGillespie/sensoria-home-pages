/* Review labels: a code on every section and subsection, so feedback can point at one exact place.
   Code = option number + letter, then section number + subsection letter. "5E-6B" = option 5E, section 6, part B.
   The round shows in the toolbar badge. Toggle with the toolbar button or the L key; ?labels=0 hides them
   (for clean screenshots). Include after core.js: <script src="../labels.js" data-round="3"></script>
   Generic mode, for pages that mark their own parts: <script src="../labels.js" data-prefix="F"></script>.
   Every [data-sec] is a section (numbered in page order), every [data-sub] inside it a part. Codes read "F-8B". */
(function () {
  const round = (document.currentScript && document.currentScript.dataset.round) || '';
  const prefix = document.currentScript && document.currentScript.dataset.prefix;
  const list = window.DIRECTIONS || [];
  const params = new URLSearchParams(location.search);
  let idx = list.findIndex((d) => d.id === params.get('d'));
  if (idx < 0) idx = 0;
  const opt = prefix || `${idx + 1}${String.fromCharCode(65 + idx)}`;

  const blocks = () => [...document.querySelectorAll('.applied .block')];
  // [section title, element, [[part title, element(s)], ...]]
  const q = (s) => document.querySelector(s);
  const qa = (s) => [...document.querySelectorAll(s)];
  // pages whose applied blocks carry data-sec (round 4 on) are mapped from the markup: block = section, [data-sub] = part
  const applied = () => qa('.applied .block[data-sec]').map((b) => [b.dataset.sec, b, [...b.querySelectorAll('[data-sub]')].map((el, i) =>
    [el.dataset.sub === 'Slide' ? `Slide ${i + 1}` : el.dataset.sub, el])]);
  // generic: top-level [data-sec] in page order, each with the [data-sub] parts that belong to it
  const generic = () => qa('[data-sec]').filter((el) => !el.parentElement.closest('[data-sec]')).map((sec) =>
    [sec.dataset.sec, sec, [...sec.querySelectorAll('[data-sub]')].filter((el) => el.closest('[data-sec]') === sec)
      .map((el, i) => [el.dataset.sub === 'Slide' ? `Slide ${i + 1}` : el.dataset.sub, el])]);
  const MAP = () => prefix ? generic() : [
    ['Site header', q('.site-head'), [['Logo', q('.site-head .brand')], ['Navigation', q('.site-nav')], ['Header button', q('.site-head .btn')]]],
    ['Hero', q('.hero'), [['Eyebrow', q('.hero .eyebrow')], ['Headline', q('.hero .display')], ['Lead', q('.hero .lead')], ['Buttons', q('.hero .actions')], ['Hero image', q('.hero-visual')]]],
    ['States', q('.states'), [['Headline', q('.states .section-head .bt') || q('.states .section-head h2')], ['Intro', q('.states .section-head .lead')], ['States list', q('.state-list')]]],
    ['Coordination', q('.coord'), [['Headline', q('.coord .h2')], ['Body', q('.coord .body')], ['Stats', q('.stats')]]],
    ['Collaborators', q('.collab'), []],
    ['Footer', q('.site-foot'), []],
    ...(applied().length ? applied() : [
      ['System', blocks()[0], [['Colour', q('.spec > div:first-child')], ['Type', q('.specimen')], ['Behaviours', q('.behaviors')]]],
      ['Carousel', blocks()[1], qa('.slide').map((el, i) => [`Slide ${i + 1}`, el])],
      ['Video', blocks()[2], qa('.frame-wrap').map((el) => [el.querySelector('figcaption b')?.textContent || 'Frame', el])],
    ]),
  ];

  const css = document.createElement('style');
  css.textContent = `
    .rv-layer { position: absolute; left: 0; top: 0; width: 0; height: 0; z-index: 9000; pointer-events: none; }
    html.rv-off .rv-layer { display: none; }
    .rv { position: absolute; pointer-events: auto; cursor: default; font: 600 11px/1 ui-monospace, 'Fragment Mono', monospace; letter-spacing: .02em; white-space: nowrap;
      padding: 4px 6px; border-radius: 4px; background: #fff; color: #C2187A; box-shadow: inset 0 0 0 1.5px #C2187A, 0 2px 6px rgba(0,0,0,.18); }
    .rv.sec { background: #C2187A; color: #fff; font-size: 12px; padding: 5px 8px; box-shadow: 0 2px 8px rgba(0,0,0,.25); }
    .rv span { font-weight: 400; opacity: .8; margin-left: 6px; }
    .rv-box { position: absolute; display: none; outline: 1.5px dashed #C2187A; outline-offset: 2px; background: rgba(194,24,122,.05); }
    .rv:hover + .rv-box { display: block; }
    .tb-labels { font: inherit; color: #ccc; background: none; border: 1px solid #444; border-radius: 4px; padding: 3px 8px; cursor: pointer; }
    .tb-labels[aria-pressed="true"] { background: #C2187A; border-color: #C2187A; color: #fff; }
    .tb-round { color: #C2187A; font-weight: 600; padding: 0 6px; }
  `;
  document.head.appendChild(css);

  const layer = document.createElement('div');
  layer.className = 'rv-layer';
  document.body.appendChild(layer);

  const draw = () => {
    const out = [];
    const sx = scrollX, sy = scrollY;
    const tag = (el, code, title, sec) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return;
      if (r.right < 0 || r.left > innerWidth) return; // scrolled out sideways (horizontal sections)
      const x = Math.max(4, r.left + sx + (sec ? -2 : 0)), y = Math.max(44, r.top + sy + (sec ? -26 : -21));
      out.push(`<span class="rv ${sec ? 'sec' : ''}" style="left:${x}px;top:${y}px" title="${title}">${code}<span>${title}</span></span>` +
        `<i class="rv-box" style="left:${r.left + sx}px;top:${r.top + sy}px;width:${r.width}px;height:${r.height}px"></i>`);
    };
    MAP().forEach(([title, el, parts], i) => {
      const n = i + 1;
      tag(el, `${opt}-${n}`, title, true);
      parts.forEach(([pt, pel], j) => tag(pel, `${opt}-${n}${String.fromCharCode(65 + j)}`, pt, false));
    });
    layer.innerHTML = out.join('');
    // nudge labels that would overlap an earlier one to its right
    const placed = [];
    layer.querySelectorAll('.rv').forEach((el) => {
      let r = el.getBoundingClientRect();
      for (let k = 0; k < 20; k++) {
        const hit = placed.find((p) => r.left < p.right + 4 && r.right > p.left - 4 && r.top < p.bottom && r.bottom > p.top);
        if (!hit) break;
        el.style.left = (parseFloat(el.style.left) + (hit.right - r.left) + 6) + 'px';
        r = el.getBoundingClientRect();
      }
      placed.push(r);
    });
  };

  // on/off: toolbar button, L key, remembered per browser, ?labels=0 forces off
  let on = params.get('labels') !== '0';
  try { if (params.get('labels') === null && localStorage.getItem('rv-labels') === 'off') on = false; } catch (e) { /* storage blocked */ }
  const btn = document.createElement('button');
  btn.className = 'tb-labels'; btn.type = 'button'; btn.textContent = 'Labels';
  const set = (v) => {
    on = v; document.documentElement.classList.toggle('rv-off', !on); btn.setAttribute('aria-pressed', String(on));
    try { localStorage.setItem('rv-labels', on ? 'on' : 'off'); } catch (e) { /* storage blocked */ }
    if (on) draw();
  };
  const bar = document.querySelector('.toolbar');
  if (bar) {
    const spacer = bar.querySelector('.tb-spacer');
    bar.insertBefore(btn, spacer);
  }
  btn.addEventListener('click', () => set(!on));
  addEventListener('keydown', (e) => { if (e.key.toLowerCase() === 'l' && !e.target.closest('input, textarea')) set(!on); });
  document.documentElement.classList.toggle('rv-off', !on);
  btn.setAttribute('aria-pressed', String(on));

  // positions depend on fonts and on each option's init, so draw a few times, then on resize
  const redraw = () => { if (on) draw(); };
  redraw();
  if (document.fonts) document.fonts.ready.then(redraw);
  setTimeout(redraw, 600); setTimeout(redraw, 2000);
  addEventListener('resize', redraw);
  // pages with pinned or sideways-scrolling sections: follow them as the page scrolls
  if (prefix) { let raf = 0; addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; redraw(); }); }, { passive: true }); }
  addEventListener('load', redraw);
})();
