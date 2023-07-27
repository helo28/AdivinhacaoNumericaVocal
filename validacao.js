function verificarSeChutePossuiValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        // console.log('valor Inválio')
        elementoChute.innerHTML += "<div> Valor Inválido! </div>"
        return
    }

    if (numeroEPermitido(numero)){
        // console.log(
            elementoChute.innerHTML +=`<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
            return
    }
    
    if (numero === numeroSecreto){
        document.body.innerHTML = `
                                <h2>Você ACERTOU! Parabéns!</h2>
                                <h3> O Número Secreto Era ${numeroSecreto}</h3>
                                `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
                                    <div>O Número Secreto é MENOR! 
                                    <i class="fa-solid fa-angles-down seta"></i></div>
                                    `
    } else {
        elementoChute.innerHTML += `
        <div>O Número Secreto é MAIOR! 
        <i class="fa-solid fa-angles-up seta"></i></div>
        `
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroEPermitido(numero){
    return numero > maiorValor || numero < menorValor
}