function verificaValorValidoChute(chute ) {
const numero =+chute;

if (chuteInvalido(numero)) {
    if (chute.toUpperCase() === "GAME OVER") {

        document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <img src="https://art.ngfiles.com/images/2779000/2779023_massivetwo_gameover-loser.png"> </img>
            <h3>Pressione o botão para jogar novamente</h3>
                      <div class="box-button">
  <button id="btn-jogarnovamente" class="button">Jogar Novamente</button>
  <div class="space">
    <span style="--i: 31" class="star"></span>
    <span style="--i: 12" class="star"></span>
    <span style="--i: 57" class="star"></span>
    <span style="--i: 93" class="star"></span>
    <span style="--i: 23" class="star"></span>
    <span style="--i: 70" class="star"></span>
    <span style="--i: 6" class="star"></span>
  </div>
</div>
            `
            document.body.style.backgroundColor = "black";
    } else {

        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }
}

if(numeroMaiorOuMenorPermitido(numero)){
    elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${numeroMenor} e ${numeroMaior}</div>`
return
}




if(numeroSorteado === numero) {
document.body.innerHTML = `
            <h2>Parabéns! Você acertou!</h2>
            <h3>O número secreto era ${numeroSorteado}</h3>

            <div class="box-button">
  <button id="btn-jogarnovamente" class="button">Jogar Novamente</button>
  <div class="space">
    <span style="--i: 31" class="star"></span>
    <span style="--i: 12" class="star"></span>
    <span style="--i: 57" class="star"></span>
    <span style="--i: 93" class="star"></span>
    <span style="--i: 23" class="star"></span>
    <span style="--i: 70" class="star"></span>
    <span style="--i: 6" class="star"></span>
  </div>
</div>
        `}

    

        else if(numero>numeroSorteado) {
            elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
        }
        else if (numero<numeroSorteado){
            elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
        }
        else {
            elementoChute.innerHTML += ``
        }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero){
    return numero > numeroMaior || numero < numeroMenor;
}

document.body.addEventListener('click', e => {
if(e.target.id == 'btn-jogarnovamente'){
    window.location.reload();
}
}
)

recognition.addEventListener('end', ()=> recognition.start())
