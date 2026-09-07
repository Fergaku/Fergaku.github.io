// Favicon adaptable a modo claro/oscuro del sistema.
// Los <link rel="icon" media="..."> en el <head> cubren los navegadores modernos;
// este bloque es un respaldo para navegadores que no soportan el media query en
// <link rel="icon"> (o que no actualizan el ícono al cambiar de tema en vivo).
function setFavicon(isDark) {
  const href = isDark ? 'assets/favicon2.ico' : 'assets/favicon.ico';

  document.querySelectorAll('link[rel="icon"]').forEach((el) => el.remove());

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = href;
  document.head.appendChild(link);
}

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
setFavicon(darkModeQuery.matches);
darkModeQuery.addEventListener('change', (event) => setFavicon(event.matches));

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
