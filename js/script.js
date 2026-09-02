// Añade sombra/fondo sólido al navbar al hacer scroll
const mainNav = document.getElementById('mainNav');

function handleNavScroll() {
  if (window.scrollY > 20) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll);
handleNavScroll();

// Cierra el menú colapsable en móvil al seleccionar un link
const navLinks = document.querySelectorAll('#navContent .nav-link');
const navCollapseEl = document.getElementById('navContent');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navCollapseEl.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
      bsCollapse.hide();
    }
  });
});
