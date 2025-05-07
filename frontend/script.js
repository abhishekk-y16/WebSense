// frontend/script.js
document.addEventListener('DOMContentLoaded', function () {
    console.log("WebSense Dashboard Loaded");
  
    // Example: Add smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    console.log("WebSense Dashboard Loaded 🚀");
  });

  
  