/* CONEKT ADS — Tweaks panel (vanilla, cross-page, host-protocol compliant) */
(function(){
  var ACCENTS = [
    { name:'Signal',  base:'#1E8442', bright:'#36B544' },
    { name:'Forest',  base:'#136B33', bright:'#2A9A45' },
    { name:'Spring',  base:'#23A24A', bright:'#48C95C' },
    { name:'Pine',    base:'#0F7A5A', bright:'#2BA886' }
  ];
  var FONTS = [
    { name:'Jakarta', stack:"'Plus Jakarta Sans', system-ui, sans-serif" },
    { name:'Sora',    stack:"'Sora', system-ui, sans-serif" },
    { name:'Manrope', stack:"'Manrope', system-ui, sans-serif" }
  ];
  var DIRS = [
    { id:'punch',     label:'Punch' },
    { id:'editorial', label:'Editorial' },
    { id:'warm',      label:'Warm' }
  ];

  function load(){ try{ return JSON.parse(localStorage.getItem('conekt:tweaks')||'{}'); }catch(e){ return {}; } }
  function save(t){ try{ localStorage.setItem('conekt:tweaks', JSON.stringify(t)); }catch(e){} }

  var T = Object.assign({ direction:'punch', accent:'#1E8442', accentBright:'#36B544', font:FONTS[0].stack }, load());

  function apply(){ if(window.__applyConektTheme) window.__applyConektTheme(T); }
  apply();

  document.addEventListener('DOMContentLoaded', function(){
    // ---- styles ----
    var css = document.createElement('style');
    css.textContent = [
      '.cktweaks{position:fixed;right:20px;bottom:20px;z-index:9999;width:300px;max-width:calc(100vw - 32px);',
        'background:#15170F;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:16px;',
        'box-shadow:0 20px 60px rgba(0,0,0,.45);font-family:\'Plus Jakarta Sans\',system-ui,sans-serif;',
        'padding:16px 16px 18px;display:none;}',
      '.cktweaks.open{display:block;}',
      '.cktweaks__hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}',
      '.cktweaks__hd h4{margin:0;font-size:.95rem;font-weight:800;letter-spacing:-.01em;color:#fff;}',
      '.cktweaks__hd .tag{font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:#7fdc8f;font-weight:700;}',
      '.cktweaks__x{background:none;border:0;color:rgba(255,255,255,.6);cursor:pointer;padding:4px;border-radius:8px;line-height:0;}',
      '.cktweaks__x:hover{background:rgba(255,255,255,.1);color:#fff;}',
      '.cktweaks__x svg{width:18px;height:18px;}',
      '.cktweaks__lbl{font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5);font-weight:700;margin:16px 0 8px;}',
      '.cktweaks__lbl:first-of-type{margin-top:0;}',
      '.ckseg{display:flex;gap:4px;background:rgba(255,255,255,.07);border-radius:10px;padding:4px;}',
      '.ckseg button{flex:1;border:0;background:none;color:rgba(255,255,255,.7);font-family:inherit;font-weight:700;',
        'font-size:.82rem;padding:7px 4px;border-radius:7px;cursor:pointer;transition:all .15s ease;}',
      '.ckseg button:hover{color:#fff;}',
      '.ckseg button.on{background:#fff;color:#15170F;}',
      '.ckswatches{display:flex;gap:8px;}',
      '.ckswatches button{flex:1;height:34px;border-radius:9px;border:2px solid transparent;cursor:pointer;position:relative;transition:transform .12s ease;}',
      '.ckswatches button:hover{transform:translateY(-2px);}',
      '.ckswatches button.on{border-color:#fff;}',
      '.ckswatches button.on::after{content:"";position:absolute;inset:0;margin:auto;width:7px;height:7px;border-radius:50%;background:#fff;}',
      '.cktweaks__reset{margin-top:16px;width:100%;background:rgba(255,255,255,.08);border:0;color:rgba(255,255,255,.8);',
        'font-family:inherit;font-weight:700;font-size:.8rem;padding:9px;border-radius:9px;cursor:pointer;}',
      '.cktweaks__reset:hover{background:rgba(255,255,255,.14);color:#fff;}'
    ].join('');
    document.head.appendChild(css);

    // ---- build panel ----
    var p = document.createElement('aside');
    p.className = 'cktweaks';
    p.setAttribute('aria-label','Tweaks');
    p.innerHTML =
      '<div class="cktweaks__hd"><div><span class="tag">Conekt</span><h4>Tweaks</h4></div>'+
        '<button class="cktweaks__x" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
      '<div class="cktweaks__lbl">Style direction</div><div class="ckseg" data-grp="dir"></div>'+
      '<div class="cktweaks__lbl">Accent</div><div class="ckswatches" data-grp="accent"></div>'+
      '<div class="cktweaks__lbl">Headline font</div><div class="ckseg" data-grp="font"></div>'+
      '<button class="cktweaks__reset">Reset to default</button>';
    document.body.appendChild(p);

    var segDir = p.querySelector('[data-grp="dir"]');
    DIRS.forEach(function(d){ var b=document.createElement('button'); b.textContent=d.label; b.dataset.v=d.id;
      b.onclick=function(){ T.direction=d.id; apply(); save(T); sync(); }; segDir.appendChild(b); });

    var sw = p.querySelector('[data-grp="accent"]');
    ACCENTS.forEach(function(a){ var b=document.createElement('button'); b.style.background=a.base; b.title=a.name; b.dataset.v=a.base;
      b.onclick=function(){ T.accent=a.base; T.accentBright=a.bright; apply(); save(T); sync(); }; sw.appendChild(b); });

    var segFont = p.querySelector('[data-grp="font"]');
    FONTS.forEach(function(f){ var b=document.createElement('button'); b.textContent=f.name; b.dataset.v=f.stack;
      b.onclick=function(){ T.font=f.stack; apply(); save(T); sync(); }; segFont.appendChild(b); });

    function sync(){
      segDir.querySelectorAll('button').forEach(function(b){ b.classList.toggle('on', b.dataset.v===T.direction); });
      sw.querySelectorAll('button').forEach(function(b){ b.classList.toggle('on', b.dataset.v===T.accent); });
      segFont.querySelectorAll('button').forEach(function(b){ b.classList.toggle('on', b.dataset.v===T.font); });
    }
    sync();

    p.querySelector('.cktweaks__reset').onclick=function(){
      T={ direction:'punch', accent:'#1E8442', accentBright:'#36B544', font:FONTS[0].stack };
      apply(); save(T); sync();
    };

    // ---- host protocol ----
    function showPanel(){ p.classList.add('open'); }
    function hidePanel(){ p.classList.remove('open'); }
    p.querySelector('.cktweaks__x').onclick=function(){ hidePanel(); try{ window.parent.postMessage({type:'__edit_mode_dismissed'},'*'); }catch(e){} };
    window.addEventListener('message', function(e){
      var t = e && e.data && e.data.type;
      if(t==='__activate_edit_mode') showPanel();
      else if(t==='__deactivate_edit_mode') hidePanel();
    });
    try{ window.parent.postMessage({type:'__edit_mode_available'},'*'); }catch(e){}
  });
})();
