/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


const prompt = require('prompt-sync')();

const qntdVitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
const qntdDerrotas = parseInt(prompt("Digite a quantidade de derrotas: "));



function resultado (qntdVitorias, qntdDerrotas){

    return qntdVitorias - qntdDerrotas;

}

let saldoVitorias = resultado(qntdVitorias, qntdDerrotas) 

    let nivel;

    if (qntdVitorias <= 10){
        nivel = "Ferro";

    } else if (qntdVitorias >= 11  && qntdVitorias <= 20){
        nivel = "Bronze";

    } else if (qntdVitorias >= 21  && qntdVitorias <= 50){
        nivel = "Prata";
        
    } else if (qntdVitorias >= 51  && qntdVitorias <= 80){
        nivel = "Ouro";
        
    } else if (qntdVitorias >= 81  && qntdVitorias <= 90){
        nivel = "Diamante";
        
    } else if (qntdVitorias >= 91  && qntdVitorias <= 100){
        nivel = "Lendário";
        
    } else if (qntdVitorias >= 101){
        nivel = "Imortal";
        
    }



console.log('O Herói tem de saldo de ' + saldoVitorias + ' vitórias e está no nível de ' + nivel );

