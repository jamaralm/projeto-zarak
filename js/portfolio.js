document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            id: '1',
            nome: 'Conversor de Binario',
            foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
            alt: 'Conversor de Binario',
            resumo: 'Plataforma completa de vendas online, com painel administrativo e sistema de pagamento integrado.',
        },
        {
            id: '1',
            nome: 'Conversor de Binario',
            foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
            alt: 'Conversor de Binario',
            resumo: 'Plataforma completa de vendas online, com painel administrativo e sistema de pagamento integrado.',
        },
        {
            id: '1',
            nome: 'Conversor de Binario',
            foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
            alt: 'Conversor de Binario',
            resumo: 'Plataforma completa de vendas online, com painel administrativo e sistema de pagamento integrado.',
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