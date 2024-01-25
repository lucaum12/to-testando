let numerosQueJaForam = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function mensagemInicial() {
    document.querySelector("h1").textContent = "Bem Vindo ao Jogo do Número Secreto!";
    document.querySelector("p").textContent = `Selecione um número entre 1 e ${numeroLimite}:`;
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    let tentativa = tentativas > 1 ? "tentativas" : "tentativa";
    if(chute == numeroSecreto) {
        document.getElementById("reiniciar").removeAttribute("disabled", true);
        document.querySelector("h1").textContent = "PARABÉNS!";
        document.querySelector("p").textContent = `Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${tentativa}!`;
        limparCampo();
    } else if(chute < numeroSecreto) {
        document.querySelector("h1").textContent = "VOCÊ ERROU!";
        document.querySelector("p").textContent = `O número secreto é maior que ${chute}`;
        tentativas++;
        limparCampo();
    } else {
        document.querySelector("h1").textContent = "VOCÊ ERROU!"
        document.querySelector("p").textContent = `O número é menor que ${chute}`;
        tentativas++;
        limparCampo();
    }
}
console.log(numeroSecreto);

function gerarNumeroSecreto() {
    let numeroGerado = parseInt(Math.random() * 10 + 1);
    if(numerosQueJaForam.includes(numeroGerado)) {
        if(numerosQueJaForam.length == numeroLimite) {
            numerosQueJaForam = [];
        }
        return gerarNumeroSecreto();
    } else {
        numerosQueJaForam.push(numeroGerado);
        console.log(numerosQueJaForam);
    }
    return numeroGerado;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}