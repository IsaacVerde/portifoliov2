// public/js/script.js

// Garante que o script só vai rodar depois que todo o HTML da página for carregado.
document.addEventListener('DOMContentLoaded', () => {

    const botoesFiltro = document.querySelectorAll('#filtros .filtro-btn');
    const projetosCard = document.querySelectorAll('.projeto-card');

    // Se não houver botões de filtro na página, o script para por aqui.
    if (botoesFiltro.length === 0) {
        return;
    }

    // Função para filtrar os cards
    const filtrarProjetos = (filtro) => {
        projetosCard.forEach(card => {
            const categoriasDoCard = card.dataset.categorias;

            // Se o filtro for 'all' OU se as categorias do card incluírem o filtro,
            // o card é mostrado. Senão, é escondido.
            if (filtro === 'all' || categoriasDoCard.includes(filtro)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Adiciona o evento de clique a cada botão
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            botoesFiltro.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' apenas no botão que foi clicado
            botao.classList.add('active');

            const filtro = botao.dataset.filter;
            filtrarProjetos(filtro);
        });
    });

    // Inicia a página com o filtro "Todos" já ativo
    const botaoTodosInicial = document.querySelector('.filtro-btn[data-filter="all"]');
    if (botaoTodosInicial) {
        botaoTodosInicial.classList.add('active');
        filtrarProjetos('all');
    }
});