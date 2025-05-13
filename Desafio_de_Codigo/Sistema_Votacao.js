/*
Descrição
Você está desenvolvendo um sistema de votação para um jogo multiplayer online. 
O objetivo é permitir que os jogadores votem em qual mapa eles gostariam de jogar na próxima partida.

Entrada
A entrada consistirá em uma lista de votos dos jogadores. 
Cada voto será representado por uma letra, indicando o mapa escolhido pelo jogador. 
Os votos serão apresentados em uma única linha, separados por espaços.

Saída
A saída esperada é o mapa que recebeu mais votos.
*/

const prompt = require('prompt-sync')();

const entrada = prompt("Qual mapa você deseja escolher?: ");
const votos = entrada.split(' ');

const contagemVotos = {};

// Usamos o metodo JavaScript forEach que executa uma função de retorno de chamada para cada 
// elemento da lista para iterar sobre a lista de votos e conta quantos votos cada mapa recebeu.

votos.forEach(voto => {
    contagemVotos[voto] = (contagemVotos[voto] || 0) + 1;
});

let mapaVencedor;
let maxVotos = 0;

// TODO: Itere sobre cada mapa na contagem de votos para encontrar o vencedor
for (const mapa in contagemVotos) {
    if (contagemVotos[mapa] > maxVotos) {
        maxVotos = contagemVotos[mapa];
        mapaVencedor = mapa;
    }
}

console.log(mapaVencedor);