const numeroMenor = 1;
const numeroMaior = 1000;
const numeroSorteado = gerarNumeroAleatorio();

 function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numeroMaior + 1); // O +1 seria para incluir o número 1000, já que ele só iria até o 999. 
};

console.log(numeroSorteado);

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMenorValor.innerHTML = numeroMenor;
elementoMaiorValor.innerHTML = numeroMaior;

