//const valor = prompt("Informe um Valor: ");
const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*maiorValor + 1); // RETORNA UM VALOR INTEIRO ALEATÓRIO ATÉ 100 O +1 É POR CAUSA DO 0 QUE CONTA COMO 99 AI O 1 PARA DAR 100
}

console.log('Número Secreto: ', numeroSecreto)

// DEIXANDO A PARTE DO MENOR E MAIOR VALOR AUTOMATICO DESSA FORMA PODE SER QUALQUER VALOR
const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor;

// ESSE QUERY SERVE SÓ PARA PEGAR ELEMENTOS DO HTML
const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor;