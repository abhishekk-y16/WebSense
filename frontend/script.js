// frontend/script.js
document.addEventListener('DOMContentLoaded', function () {
  console.log('WebSense Dashboard Loaded');

  // Smooth scroll for same-page anchors (defensive)
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      e.preventDefault();
      window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
    });
  });

  // Brand size control: sync range input to CSS variable and persist
  function applyBrandSize(size){
    document.documentElement.style.setProperty('--brand-size', size + 'px');
  }

  const brandRange = document.getElementById('brandSize');
  const brandReset = document.getElementById('brandReset');
  if(brandRange){
    // initialize from localStorage if present
    const saved = localStorage.getItem('websense.brandSize');
    const initial = saved ? parseInt(saved,10) : parseInt(brandRange.value,10);
    applyBrandSize(initial);
    brandRange.value = initial;

    brandRange.addEventListener('input', (e)=>{
      const val = parseInt(e.target.value,10);
      applyBrandSize(val);
      localStorage.setItem('websense.brandSize', String(val));
    });

    brandReset && brandReset.addEventListener('click', ()=>{
      const def = 36; applyBrandSize(def); brandRange.value = def; localStorage.removeItem('websense.brandSize');
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {
  console.log('WebSense Dashboard Loaded 🚀');
});

  
  