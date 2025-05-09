// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

//const nome = gets();
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
//const quantidade = parseInt(gets());

const prompt = require('prompt-sync')();

const nome = prompt("Digite o nome do item: ");
const quantidade = parseInt(prompt("Digite a quantidade: "));

let inventario = [
    { nome: 'espada', quantidade: 1 },
    { nome: 'escudo', quantidade: 1 },
    { nome: 'poção de cura', quantidade: 6 },
    { nome: 'poção de mana', quantidade: 4 },
		{ nome: 'pergaminho', quantidade: 3 }
];

/* Utilizamos o metodo JavaScript find() para buscar o primeiro elemento no array que satisfaça
 a condição especificada por uma função de callback. */

let item = inventario.find(item => item.nome === nome);

// TODO: Implemente a condição necessária para a exibição de cada mensagem

switch (nome) {

  case 'espada':
    console.log(quantidade >= 1 ? "Disponível" : "Indisponível");
    break;

  case 'escudo':

  case 'pergaminho':

  case 'poção de cura':

  case 'poção de mana':

    console.log(quantidade >= 2 ? "Disponível" : "Indisponível");
    break;
    
  default:
    console.log("Item não encontrado");
}
