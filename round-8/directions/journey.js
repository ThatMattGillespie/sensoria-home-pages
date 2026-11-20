/* 8D · Journey. The techniques demo (final/techniques.html) rebuilt as the home page. Each part of the story gets
   the technique that suits it: the hero you scroll through, the problem as a sentence that builds, the cycle and
   the field as a horizontal journey, the three promises as stacked sheets, why-now as a marquee, the ways in as
   a split screen, and the sticker table as a closing invitation. Phones and reduced motion get a flat version. */
(function () {
  const R = window.REFRACT, C = R.C, S = R.SPECTRUM;
  const img = (k) => `media/${R.OBJ[k]}`;
  const words = (text, stickers) => text.split(' ').map((w) => `<span class="t-w">${w}${stickers[w] ? ` <img class="t-wsticker inl" src="${img(stickers[w])}" alt="">` : ''}</span>`).join(' ');
  const TRAY = ['goggles', 'headphones', 'brain', 'flask', 'eeg', 'mindmachine', 'vr', 'walker', 'standing', 'tubes'];

  window.LAYOUTS.push({
    id: 'journey',
    name: 'Journey',
    idea: 'The techniques demo rebuilt as the home page. Scroll through the hero collage, watch the problem build word by word, travel sideways through the cycle and the field, stack the three promises, let the forces drift past, and pick a way in on a split screen. Phones and reduced motion get a flat version.',
    render: (W) => {
      const panels = [
        ...W.loop.steps.map(([v, t, d], i) => ({ n: `0${i + 1}`, h: v, sub: t, p: d, im: ['il-dome.jpg', 'il-capture.jpg', 'il-community-map.jpg'][i], tone: '' })),
        ...W.field.events.map(([n, where, nums, d], i) => ({ n: `0${i + 4}`, h: n, sub: `${where} · ${nums.map(([a, b]) => `${a} ${b}`).join(' · ')}`, p: d, im: ['ph-conclave.jpg', 'ph-welcome.jpg'][i], tone: '' })),
      ];
      const sheets = [['il-vault.jpg', 'Personal vaults', W.sovereign.points[0][1], 'armchair'], ['il-enclave.jpg', 'Computation comes to the data', W.sovereign.points[1][1], 'eeg'], ['il-companion.jpg', 'Consent you can take back', W.sovereign.points[2][1], 'writer']];
      const ways = [...W.ways.items.map(([k, t, d, l], i) => [k, t, d, l, ['writer', 'talker', 'standing'][i]]), ['Read', 'The work is open', 'Papers, essays and instruments, open for review. Start with the NOSEP survey, collecting data now.', 'Visit the Proceedings', 'brain']];
      return `
      ${W.head()}
      <section class="t-depth" id="depth" data-scrub data-sec="Hero (scroll through)">
        <div class="t-pin"><div class="w8 t-depth-grid">
          <div class="t-depth-copy" data-sub="Headline">${W.k(W.hero.kicker)}<p class="h-pre">${W.hero.pre.join('<br>')}</p>${W.bt('h1', 'display', W.hero.title)}<p class="lead">${W.hero.lead}</p>
            <div class="actions"><a class="btn btn-primary" href="#ways">Find your way in <span class="ar">→</span></a><a class="btn btn-quiet" href="#ways">Read the research</a></div></div>
          <div class="t-depth-stage" data-sub="Collage">
            <div class="plane" style="--z:.08;--f:0;--d:-1">${R.print('media/ph-dome-dinner.jpg', 'left:6%;top:4%;width:90%;height:54%;--r:2deg', 'duo')}</div>
            <div class="plane" style="--z:.7;--f:.9;--d:0">${R.cut('brain', 'left:-4%;top:30%;width:58%', 'cream')}${R.print('media/ph-salon.jpg', 'left:42%;top:46%;width:60%;height:30%;--r:-3deg', 'duo', 'Salon session')}</div>
            <div class="plane" style="--z:1.5;--f:1.3;--d:1">${R.cut('tubes', 'left:6%;top:60%;width:22%')}${R.cut('goggles', 'left:50%;top:16%;width:44%')}</div>
            <div class="plane" style="--z:2.6;--f:1.7;--d:2">${R.cut('vr', 'left:42%;top:52%;width:30%')}</div>
          </div></div>
          <div class="t-scrollcue" aria-hidden="true">Scroll</div></div>
      </section>

      <section class="t-words" id="problem" data-scrub data-sec="Problem (sentence)">
        <div class="t-pin"><div class="w8">
          ${W.k(W.gap.kicker)}
          <p class="t-sentence" data-sub="Sentence">${words('Consciousness science is where genetics was in 1990.', { 'science': 'brain', '1990.': 'tubes' })}</p>
          <div class="t-stats" data-sub="What is missing"><div><b>Isolated</b><span>Datasets that can’t be combined</span></div><div><b>Reinvented</b><span>Methods rebuilt by every group</span></div><div><b>Shared</b><span>Standards, data and instruments: what Sensoria builds</span></div></div>
        </div></div>
      </section>

      <section class="t-h" id="cycle" data-scrub data-sec="Cycle and field (horizontal)">
        <div class="t-pin">
          <div class="w8 t-h-head" data-sub="Headline"><div>${W.k(W.loop.kicker)}<h2 class="h2">${W.loop.head}</h2></div><p class="lead">${W.loop.sub} Keep scrolling: from the method to the field.</p></div>
          <div class="t-track" data-sub="Panels">${panels.map((x, i) => `
            <article class="t-panel ph" style="--c:${S[i]}"><div class="t-panel-img"><img src="media/${x.im}" alt=""></div>
              <span class="t-panel-num"><i></i>${x.n}</span><h3>${x.h}</h3><p class="facts">${x.sub}</p><p>${x.p}</p></article>`).join('')}
            <article class="t-panel t-panel-end"><h3>150+</h3><p>Research participants so far, across 4+ protocols and three event formats.</p></article></div>
          <div class="w8"><div class="t-rail" data-sub="Progress rail">${panels.concat([{}]).map((x, i) => `<i style="--c:${S[i]}"></i>`).join('')}<b></b></div></div>
        </div>
      </section>

      <section class="t-sheets w8" id="sovereign" data-sec="Sovereignty (stacked sheets)">
        <div class="t-sheets-head" data-sub="Headline">${W.k(W.sovereign.kicker)}<h2 class="h2">${W.sovereign.head}</h2><p class="lead" style="color:var(--ink-2);max-width:40ch">${W.sovereign.body}</p></div>
        ${sheets.map(([f, t, d, k], i) => `
          <article class="t-sheet" style="--i:${i};--r:${[-1, .8, -.5][i]}deg" data-sub="${t}">
            <figure class="print nat" style="position:relative;--r:0deg"><img src="media/${f}" alt=""><figcaption>Promise 0${i + 1}</figcaption></figure>
            <div class="t-sheet-copy"><span class="h-kick">0${i + 1} / 03</span><h3>${t}</h3><p>${d}</p></div>
            <img class="cut sm t-sheet-stk" src="${img(k)}" alt=""></article>`).join('')}
      </section>

      <section class="t-marquee" data-sec="Why now (marquee)">
        <div class="w8">${W.k(W.now.kicker)}<h2 class="h2" style="max-width:20ch">${W.now.head}</h2></div>
        <div class="t-band" data-sub="Band"><div class="t-band-row">${[0, 1].map(() => W.now.items.map(([b, p], i) => `<span><b>${b}</b>${['in need of care', 'in consciousness science', 'on one timeline', 'by design'][i]}</span><img class="cut sm" src="${img(['headphones', 'brain', 'eeg', 'goggles'][i])}" alt="">`).join('')).join('')}</div></div>
      </section>

      <section class="t-split w8" id="ways" data-sec="Ways in (split screen)">
        <div class="t-split-grid">
          <div class="t-split-pin" data-sub="Call to action">${W.k(W.ways.kicker)}${W.bt('h2', 'h2', 'Four ways into the work.')}<p class="lead">Train, gather, fund or read. Most people do more than one.</p>
            <div class="actions"><a class="btn btn-primary" href="#">Apply for certification <span class="ar">→</span></a></div></div>
          <div class="t-qa" data-sub="Options">${ways.map(([k, t, d, l, s]) => `<article class="t-q"><img class="cut sm" src="${img(s)}" alt=""><span class="k">${k}</span><h3>${t}</h3><p>${d}</p><a class="btn btn-quiet" href="#">${l} <span class="ar">→</span></a></article>`).join('')}</div>
        </div>
      </section>

      <section class="t-play w8" id="play" data-sec="Sticker table">
        <div class="t-play-grid">
          <div class="t-play-copy" data-sub="Copy">${W.k('Make the map')}${W.bt('h2', 'h2', 'Which instruments would you bring?')}<p class="lead">Every state has its tools. Drag yours onto the table.</p>
            <button class="btn btn-quiet t-reset" type="button">Clear the table</button></div>
          <div class="t-board" data-sub="Board">${R.print('media/ph-dome-dinner.jpg', 'inset:0;--r:-1deg', 'duo', 'Drop stickers here')}<div class="t-board-layer"></div></div>
        </div>
        <div class="t-tray" data-sub="Sticker sheet" role="list">${TRAY.map((k) => `<button class="t-tray-item" type="button" role="listitem" data-k="${k}" aria-label="Place ${k} sticker"><img src="${img(k)}" alt="" draggable="false"></button>`).join('')}</div>
      </section>

      <section class="w8 t-team" data-sec="Team">${W.k(W.team.kicker)}<h2 class="h2" style="max-width:20ch">${W.team.head}</h2><ul class="w8-people">${W.team.people.map(([n, r]) => `<li><b>${n}</b><span>${r}</span></li>`).join('')}</ul></section>
      ${W.foot()}`;
    },
    init: (W, R) => {
      const root = document.documentElement;
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const small = matchMedia('(max-width: 760px)');
      W.motion({ reveal: '.t-team .h2, .w8-people li' });
      R.peek('.t-words', 'jeremy', 'right:9%;width:150px;height:104px', 'cream');

      const tb = () => (document.querySelector('.toolbar')?.offsetHeight || 0);
      const flat = () => reduce || small.matches;
      const track = document.querySelector('.t-track'), hsec = document.querySelector('.t-h');
      const wordEls = [...document.querySelectorAll('.t-w')];
      const layout = () => {
        root.classList.toggle('t-flat', flat());
        if (!flat() && track) hsec.style.height = `${innerHeight - tb() + Math.max(0, track.scrollWidth - innerWidth) + innerHeight * .2}px`;
        else if (hsec) hsec.style.height = '';
      };
      const scrubs = [...document.querySelectorAll('[data-scrub]')];
      const progress = (el) => { const r = el.getBoundingClientRect(), total = el.offsetHeight - (innerHeight - tb()); return total > 0 ? Math.min(1, Math.max(0, (tb() - r.top) / total)) : 0; };
      const rail = [...document.querySelectorAll('.t-rail i')];
      const update = () => scrubs.forEach((el) => {
        const p = flat() ? 1 : progress(el);
        el.style.setProperty('--p', p.toFixed(4));
        if (el === hsec && track) {
          const dist = flat() ? 0 : Math.max(0, track.scrollWidth - innerWidth);
          track.style.transform = flat() ? '' : `translate3d(${(-p * dist).toFixed(1)}px,0,0)`;
          const n = Math.min(rail.length - 1, Math.floor(p * rail.length * 1.0001));
          rail.forEach((d, i) => d.classList.toggle('on', i <= n));
          el.style.setProperty('--rail', p.toFixed(4));
        }
        if (el.classList.contains('t-words')) {
          const lit = flat() ? wordEls.length : Math.round((p / .7) * wordEls.length);
          wordEls.forEach((w, i) => w.classList.toggle('on', i < lit));
          el.classList.toggle('done', flat() || p > .78);
        }
      });
      let raf = 0;
      addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); }, { passive: true });
      addEventListener('resize', () => { layout(); update(); });
      small.addEventListener('change', () => { layout(); update(); });
      layout(); update();
      const params = new URLSearchParams(location.search);
      const go = () => {
        const el = params.get('go') && document.getElementById(params.get('go')); if (!el) return;
        const total = el.offsetHeight - (innerHeight - tb());
        scrollTo(0, el.offsetTop - tb() + Math.max(0, total) * parseFloat(params.get('p') || '0')); update();
      };
      if (document.fonts) document.fonts.ready.then(() => { layout(); go(); update(); });

      // sticker table (from the techniques demo)
      const board = document.querySelector('.t-board'), layer = document.querySelector('.t-board-layer');
      const place = (k, x, y) => {
        const s = document.createElement('img');
        s.className = 't-placed'; s.src = img(k); s.alt = ''; s.draggable = false;
        s.style.left = `${x}%`; s.style.top = `${y}%`; s.style.rotate = `${(Math.random() * 16 - 8).toFixed(1)}deg`;
        layer.appendChild(s);
        s.animate([{ transform: 'translate(-50%,-50%) scale(1.25)' }, { transform: 'translate(-50%,-50%) scale(1)' }], { duration: reduce ? 0 : 260, easing: 'cubic-bezier(.3,1.5,.5,1)' });
      };
      const drag = (k, e, existing) => {
        e.preventDefault();
        const ghost = existing || Object.assign(document.createElement('img'), { src: img(k), alt: '', className: 't-ghost' });
        if (!existing) document.body.appendChild(ghost); else ghost.classList.add('t-lift');
        const moveTo = (cx, cy) => {
          if (existing) { const b = board.getBoundingClientRect(); ghost.style.left = `${((cx - b.left) / b.width) * 100}%`; ghost.style.top = `${((cy - b.top) / b.height) * 100}%`; }
          else { ghost.style.left = `${cx + scrollX}px`; ghost.style.top = `${cy + scrollY}px`; }
        };
        moveTo(e.clientX, e.clientY);
        const move = (ev) => moveTo(ev.clientX, ev.clientY);
        const up = (ev) => {
          removeEventListener('pointermove', move); removeEventListener('pointerup', up);
          const b = board.getBoundingClientRect();
          const inside = ev.clientX > b.left && ev.clientX < b.right && ev.clientY > b.top && ev.clientY < b.bottom;
          if (existing) { ghost.classList.remove('t-lift'); if (!inside) ghost.remove(); return; }
          ghost.remove();
          if (inside) place(k, ((ev.clientX - b.left) / b.width) * 100, ((ev.clientY - b.top) / b.height) * 100);
        };
        addEventListener('pointermove', move); addEventListener('pointerup', up);
      };
      document.querySelectorAll('.t-tray-item').forEach((b) => {
        b.addEventListener('pointerdown', (e) => { if (e.button === 0) drag(b.dataset.k, e); });
        b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); place(b.dataset.k, 15 + Math.random() * 70, 15 + Math.random() * 60); } });
      });
      layer.addEventListener('pointerdown', (e) => { const s = e.target.closest('.t-placed'); if (s) drag(null, e, s); });
      document.querySelector('.t-reset').addEventListener('click', () => { layer.innerHTML = ''; });
      [['goggles', 30, 34], ['brain', 68, 40], ['walker', 52, 70]].forEach(([k, x, y]) => place(k, x, y));
    },
  });
})();
