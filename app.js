let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let mensagemTentativas;
let tentativas = 1;
let tentativa;
let campo;
function exibirTextoNaTela(tag, texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagemInicial();
alert("Hello, World!");

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto!");
    exibirTextoNaTela("p", `Digite um número entre 1 e ${numeroLimite}:`);
}

console.log(numeroSecreto);

function verificarChute(){
    tentativa = tentativas > 1 ? "tentativas" : "tentativa";
    mensagemTentativas = `Parabéns, você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${tentativa}!`;
    chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        document.getElementById("reiniciar").removeAttribute("disabled", true);
        exibirTextoNaTela("h1", "PARABÉNS!");
        exibirTextoNaTela("p", mensagemTentativas);
    }else if(chute < numeroSecreto){
        exibirTextoNaTela("h1", "VOCÊ ERROU!");
        exibirTextoNaTela("p", `O número secreto é maior que ${chute}!`);
        tentativas++;
    }else if(chute > numeroSecreto){
        exibirTextoNaTela("h1", "VOCÊ ERROU!");
        exibirTextoNaTela("p", `O número secreto é menor que ${chute}!`);
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = numerosSorteados.length;
    if(quantidadeElementosLista == numeroLimite){
        numerosSorteados = [];
    }
    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    document.getElementById("reiniciar").setAttribute("disabled", true);
    limparCampo();
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
}