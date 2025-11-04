document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            id: '1',
            nome: 'Conversor de Binário',
            alt: 'Conversor de Binário',
            resumo: 'Ferramenta interativa que converte números em binário. Desenvolvida para praticar lógica de programação e manipulação de DOM com JavaScript puro',
            github: 'https://github.com/jamaralm/binaryConverter'
        },
        {
            id: '2',
            nome: 'TAG Paramentação',
            alt: 'TAG Paramentação',
            resumo: 'Plataforma web desenvolvida para a empresa TAG Paramentação, focada na gestão e divulgação de vestimentas hospitalares. O sistema apresenta um site institucional moderno, totalmente responsivo e desenvolvido com React.',
            github: 'https://github.com/gustavolinodev/Tag-Site'
        },
        {
            id: '3',
            nome: 'Mini Spotify',
            alt: 'Mini Spotify',
            resumo: 'Um projeto em Java inspirado no Spotify, desenvolvida para controle de playlists. O projeto permite ao usuário criar, e gerenciar músicas em uma interface moderna e responsiva.',
            github: 'https://github.com/jamaralm/spotifyProject'
        }   
    ]

    const projectListContainer = document.getElementById('project-list')

    const createProjectCard = (project) => {
        return `
            <article class="card">
                <h3>${project.nome}</h3>
                <p>${project.resumo}</p>
                <button class="mini-bio-btn" onclick="window.open('${project.github}', '_blank')">
                    Ver no GitHub
                </button>
            </article>
        `
    }

    const renderProject = () => {
        const html = projects.map(createProjectCard).join('')
        projectListContainer.innerHTML = html;
    }

    renderProject()

})