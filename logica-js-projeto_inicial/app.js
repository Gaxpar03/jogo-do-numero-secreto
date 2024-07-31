
alert('Boas vindas ao jogo do número secreto');
let intervaloNumeroSecreto = prompt('Digite um o intervalo que seja adivinhar o número');
let numeroSecreto = parseInt(Math.random() * intervaloNumeroSecreto + 1);
console.log('Numero Secreto: ', numeroSecreto);
let chute;
let tentativa = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e ' + intervaloNumeroSecreto);
    if (numeroSecreto == chute){
        break;
    } else {
        if (numeroSecreto > chute){
            alert('O numero secreto é maior que ' + chute);
        }else{
            alert('O número secreto é menor que ' + chute);
        }
    }
    tentativa++;    
}

// Operador ternário: testo utilizado para que aquilo que está sendo desenvovlido seja dinâmico para a sua utilização.
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai você descobriu o ${numeroSecreto} com ${tentativa}  ${palavraTentativa}.`);
// if(tentativa == 1){
//     alert(`Isso ai você descobriu o ${numeroSecreto} com ${tentativa} tentativa`);
// }else{
//     alert(`Isso ai você descobriu o ${numeroSecreto} com ${tentativa} tentativas`);
// }
