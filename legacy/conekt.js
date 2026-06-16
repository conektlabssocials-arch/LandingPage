/* CONEKT ADS — shared behaviors + theme boot */
(function(){
  // ---- theme boot: apply persisted tweaks site-wide ----
  var THEME = { direction:'punch', accent:'#1E8442', accentBright:'#36B544', font:"'Plus Jakarta Sans', system-ui, sans-serif" };
  try{
    var saved = JSON.parse(localStorage.getItem('conekt:tweaks') || '{}');
    Object.assign(THEME, saved);
  }catch(e){}
  function applyTheme(t){
    var r = document.documentElement;
    r.setAttribute('data-theme', t.direction || 'punch');
    if(t.accent){ r.style.setProperty('--accent', t.accent); }
    if(t.accentBright){ r.style.setProperty('--accent-bright', t.accentBright); }
    if(t.font){ r.style.setProperty('--font-display', t.font); }
  }
  applyTheme(THEME);
  window.__conektTheme = THEME;
  window.__applyConektTheme = applyTheme;

  document.addEventListener('DOMContentLoaded', function(){
    // ---- nav scroll ----
    var nav = document.querySelector('.nav');
    if(nav){
      var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 12); };
      onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
    }
    // ---- mobile menu ----
    var burger = document.querySelector('.nav__burger');
    var mnav = document.querySelector('.mnav');
    if(burger && mnav){
      burger.addEventListener('click', function(){
        var open = mnav.classList.toggle('open');
        document.body.classList.toggle('menu-open', open);
      });
      mnav.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ mnav.classList.remove('open'); document.body.classList.remove('menu-open'); });
      });
    }
    // ---- reveal (IO + scroll + timeout failsafe; never leaves content hidden) ----
    var reveals = [].slice.call(document.querySelectorAll('.reveal'));
    function reveal(el){ el.classList.add('in'); }
    function revealInView(){
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for(var i=0;i<reveals.length;i++){
        var el = reveals[i];
        if(el.classList.contains('in')) continue;
        var r = el.getBoundingClientRect();
        if(r.top < vh*0.94 && r.bottom > 0) reveal(el);
      }
    }
    revealInView();
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(en){ if(en.isIntersecting){ reveal(en.target); io.unobserve(en.target); } });
      }, { threshold:0.1, rootMargin:'0px 0px -6% 0px' });
      reveals.forEach(function(el){ if(!el.classList.contains('in')) io.observe(el); });
    }
    window.addEventListener('scroll', revealInView, {passive:true});
    window.addEventListener('resize', revealInView);
    window.addEventListener('load', revealInView);
    setTimeout(function(){ reveals.forEach(reveal); }, 2000); // ultimate failsafe

    // ---- counters (same fail-safe pattern) ----
    function animateCount(el){
      if(el.dataset.done) return; el.dataset.done = '1';
      var target = parseFloat(el.dataset.count);
      var dec = (el.dataset.dec|0);
      var dur = 1400, t0 = null;
      function step(ts){
        if(!t0) t0 = ts;
        var p = Math.min((ts - t0)/dur, 1);
        var e = 1 - Math.pow(1-p, 3);
        var val = target * e;
        el.textContent = (dec ? val.toFixed(dec) : Math.round(val)).toLocaleString('en-IN');
        if(p < 1) requestAnimationFrame(step);
        else el.textContent = (dec ? target.toFixed(dec) : target).toLocaleString('en-IN');
      }
      requestAnimationFrame(step);
    }
    var counters = [].slice.call(document.querySelectorAll('[data-count]'));
    function countInView(){
      var vh = window.innerHeight || document.documentElement.clientHeight;
      counters.forEach(function(el){ var r = el.getBoundingClientRect(); if(r.top < vh*0.9 && r.bottom > 0) animateCount(el); });
    }
    countInView();
    window.addEventListener('scroll', countInView, {passive:true});
    setTimeout(function(){ counters.forEach(function(el){ if(!el.dataset.done){ el.dataset.done='1'; var t=parseFloat(el.dataset.count); el.textContent=t.toLocaleString('en-IN'); } }); }, 2200);
  });
})();
