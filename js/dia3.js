/*1.Se quer seguir para área de Front-End ou seguir para a área de Back-End. */
function iniciar() {

    let area = toLowerCase(prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End?"));
    
    /**2.Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java. */
    if (area == "front-end" || area == "frontend") {
        let tecnologia = prompt("Você quer aprender React ou aprender Vue?");
    
    } else if (area == "back-end" || area == "backend") {
        let tecnologia = prompt("Você quer aprender C# ou aprender Java?");
    }
    
    /**3.Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha. */
    
    let caminho = toLowerCase(prompt("Você gostaria de seguir se especializando na área escolhida ?"));
    
    if (caminho == "não" || caminho == "nao") {
        caminho = prompt("Então gostaria de seguir se desenvolvendo para se tornar Fullstack ?");
    }
    
    /**4.Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida. */
    let tecnologias = [];
    let resposta;
    
    while (resposta != "nao" && resposta != "não") {
        resposta = toLowerCase(prompt("Tem mais alguma tecnologia que você gostaria de aprender? Cite uma por vez"));
    
        if (resposta == "não" || resposta == "nao") {
            break;
        }
        else {
            tecnologias.push(resposta);
        }
    } 
    
    let lista = document.querySelector("ul");
    lista.style.display = "block";
    tecnologias.forEach(tecnologia => adicionarTecnologia(tecnologia, lista));
    
}
function adicionarTecnologia(tecnologia, lista) {
    tecnologia = tecnologia.charAt(0).toUpperCase() + tecnologia.slice(1).toLowerCase();

    const li = document.createElement("li");
    li.textContent = tecnologia;
    lista.appendChild(li);
}
function toLowerCase(str) {
    return str.toLowerCase();
}
