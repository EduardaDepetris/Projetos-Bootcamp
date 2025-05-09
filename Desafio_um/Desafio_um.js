
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


let item = inventario.find(item => item.nome === nome);


switch (nome) {

  case 'espada':
    console.log(quantidade >= 1 ? "Disponível" : "Indisponível");
    break;

  case 'escudo':

  case 'pergaminho':

  case 'poção de cura':

  case 'poção de mana':

    console.log(quantidade > 2 ? "Disponível" : "Indisponível");
    break;

  default:
    console.log("Item não encontrado");
}
