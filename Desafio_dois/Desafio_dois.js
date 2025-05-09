/*Descrição
Na terra de Diópolis, uma série de guerreiros destemidos serão submetidos ao rigoroso "Julgamento do Guerreiro". 
Este teste de habilidades determinará se estão preparados para enfrentar o desafio supremo: um confronto com um poderoso boss. 
Antes que a batalha comece, cada guerreiro será minuciosamente avaliado para garantir que seu nível seja adequado ao desafio que os aguarda. 
Conscientes de que o boss atinge o formidável nível 50, a missão é retornar uma mensagem para cada guerreiro informando a sua aptidão.

Entrada
A entrada consiste no nome e no nível do guerreiro que se submeterá ao teste.

Saída
A saída esperada é uma mensagem com o nome do guerreiro informando a sua aptidão.

Para guerreiros com nível 40 ou superior, a mensagem deverá ser: “Parabéns, valente <guerreiro>! Sua coragem e habilidade são notáveis!”.  
Nos casos em que o nível seja igual a 30 e menor que 40, a mensagem deverá ser: "Quase lá, <guerreiro>! Continue treinando!".
 Caso seja inferior a 30, a mensagem deverá ser: “Ainda é cedo, jovem <guerreiro>. Treine mais!".
Obs.: Em todos os casos, a palavra “guerreiro” deve ser substituída pelo nome do mesmo.
*/


const prompt = require('prompt-sync')();

const nome = prompt("Digite o nome do guerreiro: ");
const nivel = parseInt(prompt("Digite o nível: "));

if (nivel >= 40 && nivel < 50) {

    print("Parabéns, valente " + nome + "! Sua coragem e habilidade são notáveis!");

  } else if (nivel >= 30 && nivel < 40) {

  print("Quase lá, " + nome + "! Continue treinando!");

  } else if (nivel < 30) {

  print("Ainda é cedo, jovem " + nome + ". Treine mais!");

} 