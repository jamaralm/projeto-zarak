document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = [
        {
            id: 'joao',
            nome: 'João Amaral',
            cargo: 'Líder de projeto',
            foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
            alt: 'João Amaral',
            resumo: 'Responsável pela organização do time e pelo desenvolvimento front-end.',
            bioCompleta: `
                <p>Líder técnico com foco em soluções web escaláveis. Esteve à frente do projeto de automação interna da DevStudio, aumentando a produtividade em 35%.</p>
            `
        },
        {
            id: 'samuel',
            nome: 'Samuel Schneweiss',
            cargo: 'UI/UX Designer',
            foto: 'https://images.unsplash.com/photo-1545996124-1a5f3b6f6c1e?w=400&q=80',
            alt: 'Samuel Schneweiss',
            resumo: 'Cuida da identidade visual, experiência do usuário e design de interfaces.',
            bioCompleta: `
                <p>Designer e desenvolvedor especializado em experiência do usuário e identidade visual. Além de atuar na DevStudio, Samuel criou o <strong>frontend</strong> e a <strong>identidade visual da TAG Paramentação</strong>, uma empresa do setor médico focada em vestimentas hospitalares.</p>
                <p>Nesse projeto independente, uniu design limpo, performance e usabilidade, desenvolvendo uma presença digital moderna que reforça a credibilidade e o propósito da marca.</p>
            `
        },
        {
            id: 'davi',
            nome: 'Davi Chaves',
            cargo: 'Back-end Developer',
            foto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
            alt: 'Davi Chaves',
            resumo: 'Responsável pela lógica do servidor, banco de dados e infraestrutura.',
            bioCompleta: `
                <p>Especialista em infraestrutura e banco de dados. Desenvolveu a API que sustenta o sistema de relatórios automatizados da empresa.</p>
            `
        }
    ];

    const teamListContainer = document.getElementById('team-list');

    const createMemberCard = (member) => {
        return `
            <section class="member">
                <h3>${member.nome} — ${member.cargo}</h3>
                <img src="${member.foto}" alt="${member.alt}">
                <p>${member.resumo}
                    <a href="#" class="mini-bio-btn" data-member="${member.id}">Ver Detalhes</a>
                </p>
                <div class="mini-bio-content" id="bio-${member.id}"></div>
            </section>
        `;
    };

    const renderTeam = () => {
        const html = teamMembers.map(createMemberCard).join('');
        teamListContainer.innerHTML = html;
        setupMiniBioListeners();
    };

    const setupMiniBioListeners = () => {
        document.querySelectorAll(".mini-bio-btn").forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                const memberId = btn.dataset.member;
                const content = document.getElementById(`bio-${memberId}`);
                const isOpen = content.classList.contains("open");
                
                const memberData = teamMembers.find(m => m.id === memberId);

                document.querySelectorAll(".mini-bio-content").forEach(div => {
                    div.classList.remove("open");
                    div.innerHTML = "";
                });

                if (!isOpen && memberData) {
                    content.innerHTML = memberData.bioCompleta;
                    content.classList.add("open");
                }
            });
        });
    };
    
    renderTeam();
});