/*
Descrição
Você foi convocado pelo reino de Diolaris para uma missão de suma importância: 
auxiliar os aventureiros recém-chegados na escolha de sua classe. As opções são: Guerreiro, Mago e Arqueiro. 
Para isso, você deve criar um programa que solicite aos aventureiros a escolha de sua classe. 
Com base nessa escolha, o programa deve exibir uma mensagem indicando a classe selecionada. Se o aventureiro inserir uma classe inválida, 
uma mensagem de orientação deve ser exibida, instruindo-o a escolher entre as opções válidas.

Entrada
A entrada será o nome da classe escolhida.

Saída
A saída esperada é uma mensagem informando a classe escolhida dentre as três opções: Guerreiro, Mago e Arqueiro. 
Por exemplo, caso tenha escolhido Guerreiro, deverá imprimir “Você escolheu a classe Guerreiro!”. 
aso a entrada seja diferente de uma dessas três classes, deverá retornar a mensagem: 
“Classe inválida! Escolha entre Guerreiro, Mago ou Arqueiro.”
*/


const prompt = require('prompt-sync')();

const classe = prompt("Escolha sua classe: ");

switch(classe) {

    case "Guerreiro":
        console.log("Você escolheu a classe Guerreiro!");
        break;
  
    case "Mago":
        console.log("Você escolheu a classe Mago!");
        break;

    case "Arqueiro":
        console.log("Você escolheu a classe Arqueiro!");
        break;

    default:
        console.log("Classe inválida! Escolha entre Guerreiro, Mago ou Arqueiro.");
        break;
}

