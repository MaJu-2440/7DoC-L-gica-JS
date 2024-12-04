// CALCULADORA USANDO O MÉTODO EVAL E TRY/CATCH
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Erro';
    }
}

//CALCULADORA USANDO PROMPT E SWITCH/CASE
/** Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.*/

// const sair = true;

// function soma(a, b) {
//     return a + b;
// }
// function subtracao(a, b) {
//     return a - b;
// }
// function multiplicacao(a, b) {
//     return a * b;
// }
// function divisao(a, b) {
//     if (b != 0) {
//         return a / b;
//     }
//     else {
//         return "Não é possível dividir por zero.";
//     }
// }

// while (sair){
//     /**Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela. */
//     let escolha = prompt("Escolha uma opção:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nSair");

//     if (escolha.toLowerCase() == "sair") {
//         sair = false;
//         break;
//     }

//     /**Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão */
//     let valor1 = Number(prompt("Insira o primeiro valor: "));
//     let valor2 = Number(prompt("Insira o segundo valor: "));

//     /**As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima". */
//     switch (escolha) {
//         case "1":
//             alert(soma(valor1, valor2));
//             break;
//         case "2":
//             alert(subtracao(valor1, valor2));
//             break;
//         case "3":
//             alert(multiplicacao(valor1, valor2));
//             break;
//         case "4":
//             alert(divisao(valor1, valor2));
//             break;
//         default:
//             alert("Até a próxima!");
//             sair = false;
//             break;
//     }
// }

