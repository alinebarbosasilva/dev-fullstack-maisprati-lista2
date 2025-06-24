// 2. Jogo de Adivinhação Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')(); 

function jogoAdivinhacao() {

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let palpite = null;

    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");

    while (palpite !== numeroSecreto) {
        const entrada = prompt("Digite seu palpite: ");
        palpite = parseInt(entrada);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, digite um número válido entre 1 e 100.");
            continue;
        }

        tentativas++;

        if (palpite < numeroSecreto) {
            console.log("Mais alto!");
        } else if (palpite > numeroSecreto) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s).`);
        }
    }
}

jogoAdivinhacao();