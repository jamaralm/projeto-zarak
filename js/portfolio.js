document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            id: '1',
            nome: 'Conversor de Binario',
            foto: 'https://graphicsauce.co/free-placeholder-logo/wp-content/uploads/2024/08/Free-PlaceHolder-Logo.jpg',
            alt: 'Conversor de Binario',
            resumo: 'Plataforma completa de vendas online, com painel administrativo e sistema de pagamento integrado.',
        },
        {
            id: '2',
            nome: 'Sistema de Gestão Financeira',
            foto: 'https://graphicsauce.co/free-placeholder-logo/wp-content/uploads/2024/08/Free-PlaceHolder-Logo.jpg',
            alt: 'Sistema de Gestão Financeira',
            resumo: 'Plataforma SaaS (Software as a Service) para controle de fluxo de caixa e emissão de notas fiscais.',
        },
        {
            id: '3',
            nome: 'App de Delivery Local (Mobile)',
            foto: 'https://graphicsauce.co/free-placeholder-logo/wp-content/uploads/2024/08/Free-PlaceHolder-Logo.jpg',
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
                <img src="${project.foto}" alt="${project.alt}" style="max-width:100%;border-radius:6px;">
            </article>
        `
    }

    const renderProject = () => {
        const html = projects.map(createProjectCard).join('')
        projectListContainer.innerHTML = html;
    }

    renderProject()

})