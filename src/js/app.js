function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se campo pesquisa estiver vazio ou conter apenas espaços em branco
    if (!campoPesquisa.trim()) {
        section.innerHTML = "<p class='mensagem-erro'>Nenhum texto digitado. Digite alguma coisa no campo de pesquisa.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada carro na lista de carros
    for (let carro of carros) {
        titulo = carro.titulo.toLowerCase()
        descricao = carro.descricao.toLowerCase()
        tags = carro.tags.toLowerCase()
        // Se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${carro.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${carro.descricao}</p>
                    <a href=${carro.link} target="_blank">Mais Informações</a>
                </div>
            `;
        } 
    }

    // Se o que o usuário digitar não for encontrado (Não estiver na base de dados) exibir uma mensagem
    if (!resultados) {
        resultados = "<p class='mensagem-nao-existe'>O resultado digitado no campo de pesquisa não existe.</p>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }