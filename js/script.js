document.addEventListener("DOMContentLoaded", () => {
  const bios = {
    joao: {
      texto: `
        <p>Líder técnico com foco em soluções web escaláveis. Esteve à frente do projeto de automação interna da DevStudio, aumentando a produtividade em 35%.</p>
      `
    },
    samuel: {
    texto: `
        <p>Designer e desenvolvedor especializado em experiência do usuário e identidade visual. Além de atuar na DevStudio, Samuel criou o <strong>frontend</strong> e a <strong>identidade visual da TAG Paramentação</strong>, uma empresa do setor médico focada em vestimentas hospitalares.</p>
        <p>Nesse projeto independente, uniu design limpo, performance e usabilidade, desenvolvendo uma presença digital moderna que reforça a credibilidade e o propósito da marca.</p>
    `
    },
    davi: {
      texto: `
        <p>Especialista em infraestrutura e banco de dados. Desenvolveu a API que sustenta o sistema de relatórios automatizados da empresa.</p>
      `
    }
  };

  document.querySelectorAll(".mini-bio-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const member = btn.dataset.member;
      const content = document.getElementById(`bio-${member}`);
      const isOpen = content.classList.contains("open");

      // Fecha todas antes de abrir outra
      document.querySelectorAll(".mini-bio-content").forEach(div => {
        div.classList.remove("open");
        div.innerHTML = "";
      });

      // Se não estava aberta, abre agora
      if (!isOpen) {
        content.innerHTML = bios[member].texto;
        content.classList.add("open");
      }
    });
  });
});
