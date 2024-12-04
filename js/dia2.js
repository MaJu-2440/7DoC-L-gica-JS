// Criando um objeto para armazenar as referências dos elementos
const elementos = {
    nome: document.querySelector("#nome"),
    idade: document.querySelector("#idade"),
    linguagem: document.querySelector("#linguagem"),
    mensagem: document.querySelector(".mensagemDinamica"),
    perguntaExtra: document.querySelector(".perguntaExtra"),
    formExtra: document.querySelector(".formExtra"),
    mensagemExtra: document.querySelector(".mensagemExtra"),
    respostaExtra: document.querySelector("#respostaExtra"),
    buttonExtra: document.querySelector(".buttonExtra"),
  };

  // Função para verificar se todos os campos obrigatórios foram preenchidos
  function todosCamposPreenchidos() {
    return elementos.nome.value && elementos.idade.value && elementos.linguagem.value;
  }
  
  // Função para exibir a mensagem inicial e habilitar a pergunta extra
  function exibirPerguntaExtra() {
    elementos.perguntaExtra.textContent = `Você gosta de estudar ${elementos.linguagem.value}? Responda apenas com SIM ou NÃO`;
    elementos.formExtra.style.display = "block";
    elementos.buttonExtra.style.display = "block";
  }
  
  // Função para tratar a resposta da pergunta extra
  function tratarRespostaExtra() {
    const resposta = elementos.respostaExtra.value.toLowerCase();
    const resultado = resposta === "sim" ?
      "Muito bom! Continue estudando e você terá muito sucesso." :
      "Ahh que pena... Já tentou aprender outras linguagens ?";
  
    elementos.mensagemExtra.style.display = "block";
    elementos.mensagemExtra.textContent = resultado;
  }
  
  // Event listener para o botão de envio
function enviarDados() {
    if (todosCamposPreenchidos()) {
      elementos.mensagem.textContent = `Olá ${elementos.nome.value}, você tem ${elementos.idade.value} anos e já está aprendendo ${elementos.linguagem.value}!`;
      elementos.mensagem.style.color = "black";
      exibirPerguntaExtra();
    } else {
      elementos.mensagem.textContent = "Preencha todos os campos ";
      elementos.mensagem.style.color = "red";
    }
  };