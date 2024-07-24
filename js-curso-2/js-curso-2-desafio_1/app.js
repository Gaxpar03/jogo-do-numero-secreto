let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleClicado(){
    console.log('O botão console foi clicado');
}

let cidadeDigitada;
function promptClicado(){
    cidadeDigitada = prompt('Digite o nome de uma cidade brasileira');
    alert(`Estive em ${cidadeDigitada} e lembrei de você.`);
}
let soma, numero1, numero2;
function somaClicado(){
    alert('Digite dois números para efetuar a soma');
    numero1 = prompt('Digite o primeiro número');
    numero2 = prompt('Digite o segundo número');
    soma =  parseInt(numero1, 10) + parseInt(numero2, 10);
    alert(`O resultado de ${numero1} + ${numero2} = ${soma}`);
}

function alertaClicado(){
    alert('Eu amo JS');
}
