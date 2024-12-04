// Objeto para armazenar a lista de compras, organizada por categorias
let listaDeCompras = {
    "Frutas": [],
    "Laticínios": [],
    "Congelados": [],
    "Doces": [],
    "Bebidas": [],
    "Carnes": [],
    "Pães": [],
    "Salgados": [],
    "Outros": []
};

// Evento para adicionar um item à lista
function chamaAdicionar() {
    // Pede ao usuário o nome do item
    let item = prompt("Qual item você deseja adicionar?");
    console.log("item: " + item);

    // Verifica se o usuário inseriu um item
    if (item != null) {
        // Pede ao usuário a categoria do item
        let categoria = prompt("Em qual categoria essa item se encaixa ?");

        // Ajusta a primeira letra da categoria para maiúscula
        categoria = ajustaCategoria(categoria);

        // Adiciona o item à categoria correspondente
        adicionaritem(categoria, item);
    }
}

// Evento para remover um item da lista
function chamaRemover() {
    // Verifica se há itens na lista
    let temItens = false;
    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            // Exibe a lista de compras atual para o usuário escolher o item
            exibirListaDeCompras(listaDeCompras);
            temItens = true;
        }
    }

    // Se não houver itens, exibe uma mensagem
    if (!temItens) {
       alert("Não há itens para remover na lista.");
    }
    else {
        // Pede ao usuário o nome do item a ser removido
        let itemRemover = prompt("Qual item você deseja remover ?");

        // Remove o item da lista
        removeritem(itemRemover);

        // Exibe a lista de compras atualizada
        exibirListaDeCompras(listaDeCompras);
    }
}

// Função para ajustar a primeira letra da categoria para maiúscula
function ajustaCategoria(categoria){
    return categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();
}

// Função para adicionar um item à lista
function adicionaritem(categoria, item) {
    if (listaDeCompras[categoria]) {
        // Adiciona o item à categoria correspondente
        listaDeCompras[categoria].push(item);
        exibirListaDeCompras(listaDeCompras);
    }
    else {
        // Exibe uma mensagem de erro caso a categoria não exista
        alert("Acho que você digitou errado, ou talvez essa opção ainda não existe na lista!");
    }   
}

// Função para remover um item da lista
function removeritem(item) {
    // Percorre as categorias para encontrar o item
    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].includes(item)) {
            // Remove o item da lista e informa o usuário
            listaDeCompras[categoria].splice(listaDeCompras[categoria].indexOf(item), 1);
            alert("Item removido da lista com sucesso!");
            return;
        }
    }
    // Se o item não foi encontrado, exibe uma mensagem
    alert("Não foi possível encontrar o item dentro da lista!");
}

// Função para exibir a lista de compras na tela
function exibirListaDeCompras(listaDeCompras) {
    // Seleciona o elemento onde a lista será exibida
    const listaElement = document.querySelector(".lista");
  
    // Limpa a lista antes de preencher
    listaElement.innerHTML = "";
  
    // Cria um elemento ul para cada categoria e adiciona os itens
    for (const categoria in listaDeCompras) {
      const categoriaElement = document.createElement("ul");
      categoriaElement.textContent = categoria + ":";
      listaElement.appendChild(categoriaElement);

      listaElement.style.display = "block";
      categoriaElement.style.display = "block";
  
      // // Cria um elemento li para cada item e adiciona à categoria correspondente
      const itens = listaDeCompras[categoria];
      for (const item of itens) {
        const itemElement = document.createElement("li");
        itemElement.textContent = item;
        categoriaElement.appendChild(itemElement);
      }
    }
}

