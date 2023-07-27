const elementoChute = document.querySelector('#chute')

// ISSO DAQUI VAI SERVIR PARA ELE OUVIR O QUE A PESSOA DIZ E ESCREVER NA TELA 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'; // COLOCANDO ELA PARA OUVIR EM PORTUGUÊS
recognition.start(); // DEIXAR ELA ATIVA

// EVENTlISTENER É PARA ELE OUVIR A TELA E O RESULTADO TÊM QUE SER QUANDO FALAR
recognition.addEventListener('result', onSpeak)

// ESSE E É DE EVENTO - NESSA FUNÇÃO ELE VAI FICAR ESCREVENDO NO CONSOLE OQUE ESTÁ ACONTECENDO
function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificarSeChutePossuiValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
                            <div> Você Disse: </div>
                            <span class="box"> ${chute}</span>
                            `
}

recognition.addEventListener('end', () => recognition.start())