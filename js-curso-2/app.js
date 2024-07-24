// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Mensagens sublinhadas a cima foram substituidas pela função abaixo:
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
// exibirTexto('h1', 'Jogo do Número Secreto');
// exibirTexto('p', 'Escolha um número entre 1 e 10');

mensagemInicio();
limparCampo();
let listaNumerosSorteados = [];
let numeroDisponiveis = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let campo = document.querySelector(tag);
habilitaDesabilitaBotao('chute','habilita');
//document.getElementById('chute').removeAttribute('disabled');

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descrobriu o Número Secreto com ${tentativas}` ;
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!!!');
        exibirTexto('p', mensagemTentativas);
        habilitaDesabilitaBotao('reiniciar', 'habilita');
        habilitaDesabilitaBotao('chute', 'desabilita');
    }else{
        if (chute > numeroSecreto){
            exibirTexto('h1', 'Foi quase...');
            exibirTexto('p', `O Número secreto é menor que ${chute}`);
        }else{
            exibirTexto('h1', 'Foi quase...');
            exibirTexto('p', `O Número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroDisponiveis + 1);
    let quantidadeNumeroSortiado = listaNumerosSorteados.length;
    if (quantidadeNumeroSortiado == numeroDisponiveis){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function mensagemInicio() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function habilitaDesabilitaBotao(tag, comando){
    if (comando == 'habilita'){
        document.getElementById(tag).removeAttribute('disabled');
    }
    if (comando == 'desabilita'){
        document.getElementById(tag).setAttribute('disabled', true);
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    mensagemInicio();
    habilitaDesabilitaBotao('reiniciar', 'desabilita');
    habilitaDesabilitaBotao('chute', 'habilita');
}

