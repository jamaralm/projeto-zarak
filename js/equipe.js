document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = [
        {
            id: 'joao',
            nome: 'João Amaral',
            cargo: 'Líder de projeto',
            foto: 'https://i.imgur.com/nnKxCKb.png',
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
            foto: 'https://i.imgur.com/1seyMZS.png',
            alt: 'Samuel Schneweiss',
            resumo: 'Cuida da identidade visual, experiência do usuário e design de interfaces.',
            bioCompleta: `
                <p>Designer e desenvolvedor especializado em experiência do usuário e identidade visual. Além de atuar na DevStudio, Samuel criou o fronted e a identidade visual da TAG Paramentação, uma empresa do setor médico focada em vestimentas hospitalares.</p>            `
        },
        {
            id: 'davi',
            nome: 'Davi Chaves',
            cargo: 'Back-end Developer',
            foto: 'https://i.imgur.com/synYJJy.png',
            alt: 'Davi Chaves',
            resumo: 'Responsável pela lógica do servidor, banco de dados e infraestrutura.',
            bioCompleta: `
                <p>Especialista em infraestrutura e banco de dados. Desenvolveu a API que sustenta o sistema de relatórios automatizados da empresa.</p>
            `
        },
        {
            id: 'joaoantonio',
            nome: 'João Antonio',
            cargo: 'Front-end Developer',
            foto: 'https://i.imgur.com/A7vGg1c.png',
            alt: 'João Antonio',
            resumo: 'Especialista em interfaces de usuário modernas, responsável por transformar designs em código interativo e responsivo.',
            bioCompleta: `
                <p>Com vasta experiência em React e Vue.js, João é o arquiteto de front-end que garante a performance e a usabilidade de nossos produtos. Seu foco é otimizar o tempo de carregamento e proporcionar a melhor experiência de navegação para os usuários finais.</p>
            `
        }
    ];

    const teamListContainer = document.getElementById('team-list');

    const createMemberCard = (member) => {
        return `
            <section class="member">
            
            <div class="member-header">
                <img src="${member.foto}" alt="${member.alt}">
                <div>
                    <h3>${member.nome}</h3>
                    <p style="margin: 0; color: var(--accent); font-weight: 500;">${member.cargo}</p>
                </div>
            </div>
            
            <p>${member.resumo}</p>
            
            <a href="#" class="mini-bio-btn" data-member="${member.id}">Ver Detalhes</a>
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