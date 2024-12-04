function confereResposta1() {

    let resposta = prompt('Insira a resposta aqui: ');

    if (resposta == 'numeroUm == stringUm') {
        alert(`Os valores deram TRUE! As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes. `);

        alert('Se os valores fossem diferentes, o resultado da comparação seria FALSE.');
    } else {
        alert(`A sua resposta não condiz com os resultados de TRUE e FALSE da comparação das variáveis...`);
        
        if (resposta != ''){
            alert(`Essa seria a resposta correta: numeroUm == stringUm`);
        }
    }
}

function confereResposta2() {
    let resposta = prompt('Insira a resposta aqui: ');

    if (resposta == 'numeroUm === stringUm') {
        alert(`Os valores deram TRUE! As variáveis numeroUm e stringUm tem o mesmo valor e mesmo tipo`);
        
        alert(`Se as variáveis numeroUm e stringUm não tivessem nem o mesmo tipo, o resultado da comparação seria FALSE`);
    } else {
        alert(`A sua resposta não condiz com os resultados de TRUE e FALSE da comparação das variáveis...`);

        if (resposta != ''){
            alert(`Essa seria a resposta correta: numeroUm === stringUm`);
        }
    }
}