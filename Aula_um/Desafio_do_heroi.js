let nomes = ["Eduarda", "João", "Maria"];
let xps = [9000, 1500, 3000];

for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i];
    let xp = xps[i];

    if (xp <= 1000){
        console.log("O Herói de nome " + nome + " está no nível de Ferro");

    } else if(xp <= 2000){
        console.log("O Herói de nome " + nome + " está no nível de Bronze");

    } else if(xp <= 5000){
        console.log("O Herói de nome " + nome + " está no nível de Prata");

    } else if(xp <= 7000){
        console.log("O Herói de nome " + nome + " está no nível de Ouro");

    } else if(xp <= 8000){
        console.log("O Herói de nome " + nome + " está no nível de Platina");

    } else if(xp <= 9000){
        console.log("O Herói de nome " + nome + " está no nível de Ascendente");

    } else if(xp <= 10000){
        console.log("O Herói de nome " + nome + " está no nível de Imortal");

    } else {
        console.log("O Herói de nome " + nome + " está no nível de Radiante");
    }
}