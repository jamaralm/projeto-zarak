const currentPage = window.location.pathname.split("/").pop();

const navbarHTML = `
  <h1>DevStudio</h1>
  <nav class="navbar" aria-label="Menu principal">
    <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
    <a href="quem-somos.html" class="${currentPage === 'quem-somos.html' ? 'active' : ''}">Quem somos</a>
    <a href="portfolio.html" class="${currentPage === 'portfolio.html' ? 'active' : ''}">Portfólio</a>
    <a href="equipe.html" class="${currentPage === 'equipe.html' ? 'active' : ''}">Equipe</a>
    <a href="contato.html" class="${currentPage === 'contato.html' ? 'active' : ''}">Contato</a>
  </nav>
`;

function loadNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }
}

loadNavbar();