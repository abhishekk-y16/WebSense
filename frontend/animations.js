// frontend/animations.js
// Separate animation initializer so we don't touch existing script.js too heavily.
(function(){
  function prefersReducedMotion(){
    try{
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }catch(e){ return false; }
  }

  function init(){
    if(!window.gsap){
      console.warn('GSAP not loaded — animations will be skipped.');
      return;
    }
    if(prefersReducedMotion()){
      // Minimal motion: just set opacity to visible
      document.querySelectorAll('.hero-content, .quick-cards .card, .card-grid .card').forEach(el=> el.style.opacity = 1);
      return;
    }

    const gsap = window.gsap;
    const baseEase = 'power3.out';
    gsap.from('.hero-content', { opacity: 0, y: 26, duration: 1.05, ease: baseEase });
    gsap.from('.quick-cards .card', { stagger: 0.14, opacity: 0, y: 16, duration: 0.85, ease: baseEase, delay: 0.12 });
    gsap.from('.card-grid .card', { stagger: 0.09, opacity: 0, y: 14, duration: 0.9, ease: baseEase, delay: 0.2 });

    // hover micro-interactions for primary buttons
    const btns = document.querySelectorAll('.btn.primary');
    btns.forEach(b => {
      b.addEventListener('mouseenter', () => gsap.to(b, { scale: 1.035, boxShadow: '0 22px 60px rgba(0,120,215,0.12)', duration: 0.36, ease: 'power2.out' }));
      b.addEventListener('mouseleave', () => gsap.to(b, { scale: 1, boxShadow: '0 12px 36px rgba(0,120,215,0.08)', duration: 0.36, ease: 'power2.out' }));
    });
  }

  if(document.readyState === 'complete' || document.readyState === 'interactive') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
