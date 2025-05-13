/*Descrição
Você é um aventureiro e está prestes a embarcar em uma jornada de proporções épicas! 
A cada desafio enfrentado, é crucial que você avalie com cuidado se possui tudo o que precisa para avançar, 
pois até mesmo a falta de um simples artefato pode fazer toda a diferença entre a vitória e a derrota iminente. 
No momento, em seu inventário, você possui uma espada, um escudo, seis poções de cura, quatro poções de mana e três pergaminhos. 
Diante disso, é hora de você verificar se cada item essencial para o próximo desafio está disponível em seu inventário. 
Assim, sua missão é criar um algoritmo que retorne a mensagem “Disponível”, 
caso possua o item na quantidade especificada no seu inventário, e “Indisponível” caso não.

Entrada
A entrada vai receber duas informações: o nome do item a ser verificado e a quantidade desejada desse item.

Saída
Imprima "Disponível" se a quantidade desejada do item estiver disponível no inventário e "Indisponível" caso contrário. 
*/


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
