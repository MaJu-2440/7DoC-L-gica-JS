// Seleciona elementos do DOM
const input = document.querySelector("#chute"); // Campo de entrada para o palpite do usuário
const buttonEnviar = document.querySelector(".enviar"); // Botão para enviar o palpite
const palpiteContainer = document.querySelector(".container_palpite"); // Container que exibe os palpites
const lista = document.querySelector(".mensagem"); // Lista que mostra mensagens ao usuário

let numeroAleatorio; // Variável que armazenará o número aleatório gerado
let tentativas = 3; // Contador de tentativas do usuário

/** Limpa a lista de mensagens antes de começar o jogo */
lista.innerHTML = "";

/**
 * Função para mostrar mensagens na lista
 * @param {string} msg - A mensagem a ser exibida
 * @param {string} color - A cor do texto da mensagem
 */
function mostrarMensagem(msg, color){
    // Cria um elemento li dentro do ul e adiciona a mensagem e a cor
    const mensagem = document.createElement("li");
    mensagem.textContent = msg; // Define o texto da mensagem
    mensagem.style.color = color; // Define a cor do texto
    lista.appendChild(mensagem); // Adiciona a mensagem à lista
    lista.style.display = "block"; // Exibe a lista
}

/**
 * Função para gerar um número aleatório entre um intervalo específico
 * @param {number} min - O valor mínimo do intervalo
 * @param {number} max - O valor máximo do intervalo
 * @returns {number} - Um número aleatório entre min e max
 */
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // Gera e retorna o número aleatório
}

/**
 * Função para verificar o palpite do usuário
 */
function verificarPalpite() {
    let palpite; // Variável para armazenar o palpite do usuário

    input.focus(); // Foca no campo de entrada
    palpite = parseInt(input.value); // Converte o valor do input para um inteiro

    // Verifica se o palpite está correto
    if (palpite !== null && palpite === numeroAleatorio) {
        msg = `Parabéns, você acertou! O número aleatório era ${numeroAleatorio}`;        
        mostrarMensagem(msg, "green"); // Mostra mensagem de sucesso
        buttonEnviar.disabled = true; // Desabilita o botão de enviar
    }
    // Verifica se o palpite está incorreto
    else if (palpite !== null && palpite !== numeroAleatorio) {
        tentativas--; // Decrementa o contador de tentativas
        input.value = ""; // Limpa o campo de entrada

        let msgTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // Define a palavra correta no plural

        // Mensagem para o usuário
        msg = tentativas == 0 ? `Você perdeu! O número aleatório era ${numeroAleatorio}!` : `Você errou! Você tem mais ${tentativas} ${msgTentativa}:`;
        mostrarMensagem(msg, "red"); // Mostra mensagem de erro
        console.log(msg); // Loga a mensagem no console
    }
    // Verifica se as tentativas acabaram
    if (tentativas <= 0) {
        buttonEnviar.disabled = true; // Desabilita o botão de enviar
        mostrarMensagem("Suas tentativas acabaram!", "red"); // Mensagem de fim de jogo
    }
}

/**
 * Função para iniciar o jogo
 */
function iniciarJogo() {
    palpiteContainer.style.display = "block"; // Exibe o container de palpites
    input.focus(); // Foca no campo de entrada
    buttonEnviar.disabled = false; // Habilita o botão de enviar
    tentativas = 3; // Reinicia o contador de tentativas
    numeroAleatorio = gerarNumeroAleatorio(1, 10); // Gera um novo número aleatório
    lista.innerHTML = ""; // Limpa a lista de mensagens
}

// Desabilita o botão de enviar se não houver tentativas
if (tentativas <= 0) {
    buttonEnviar.disabled = true; 
}