document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            id: '1',
            nome: 'Conversor de Binario',
            alt: 'Conversor de Binario',
            resumo: 'Plataforma completa de vendas online, com painel administrativo e sistema de pagamento integrado.',
        },
        {
            id: '2',
            nome: 'TAG Paramentação',
            alt: 'TAG Paramentação',
            resumo: 'Plataforma web desenvolvida para a empresa TAG Paramentação, voltada à gestão e divulgação de vestimentas hospitalares. O sistema conta com um site institucional moderno e responsivo e um backend robusto em Node.js e Express, garantindo integração entre dados, produtos e área administrativa com foco em desempenho e usabilidade.',
        },
        {
            id: '3',
            nome: 'App de Delivery Local (Mobile)',
            alt: 'App de Delivery Local',
            resumo: 'Solução móvel para conectar vendedores e consumidores em uma determinada região, otimizando entregas.',
        }   
    ]

    const projectListContainer = document.getElementById('project-list')

    const createProjectCard = (project) => {
        return `
            <article class="card">
                <h3>${project.nome}</h3>
                <p>${project.resumo}</p>
            </article>
        `
    }

    const renderProject = () => {
        const html = projects.map(createProjectCard).join('')
        projectListContainer.innerHTML = html;
    }

    renderProject()

})