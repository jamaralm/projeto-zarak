const navbarHTML = `
  <h1>DevStudio</h1>
  <nav class="navbar" aria-label="Menu principal">
    <a href="index.html">Home</a>
    <a href="quem-somos.html">Quem somos</a>
    <a href="portfolio.html">Portfólio</a>
    <a href="equipe.html">Equipe</a>
    <a href="contato.html">Contato</a>
  </nav>
`;

function loadNavbar() {
  const placeholder = document.getElementById("navbar-placeholder");
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }
}

loadNavbar();