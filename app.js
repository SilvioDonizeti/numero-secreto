//Variáveis do jogo
let numeroMaximo = 100;
let numerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numerosSorteados);

//Texto principal
function textoPrincipal(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoInicial() {
    textoPrincipal('h1', 'Jogo do número secreto');
    textoPrincipal('p', `Escolha um número de 1 a ${numeroMaximo}`);
}
textoInicial();

//Gerador de número aleatório
function gerarNumeroAleatorio() {
    let numeroAleatorioGerado = parseInt(Math.random() * numeroMaximo) + 1;
    let quantidadeDeElementosNaLista = numerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroMaximo) {
        numerosSorteados = [];
    } 
    if(numerosSorteados.includes(numeroAleatorioGerado)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroAleatorioGerado);
        return numeroAleatorioGerado;
    }
}

//Verificando o chute e exibindo a mensagem
function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(chute == numeroAleatorio) {
        textoPrincipal('h1', 'Parabéns!');
        textoPrincipal('p', `Você descobriu o número secreto ${numeroAleatorio} com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            textoPrincipal('p', 'O número secreto é menor que o escolhido.');
        } else {
            textoPrincipal('p', 'O número secreto é maior que o escolhido.');
        }
        limpaCampo();
        tentativas++;
    }
}

function limpaCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    textoInicial();
    limpaCampo();
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 1;
}
