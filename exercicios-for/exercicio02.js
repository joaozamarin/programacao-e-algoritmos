// 2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).

var inicio = 1;
var fim = 70;
var multiplos = 0;

for(inicio; inicio <= fim; inicio++){

    if(inicio % 7 == 0){
        multiplos++
        console.log(inicio + " é múltiplo de 7")
    }

}

console.log("A quantidade de números múltiplos de 7 no intervalo de 1 a 70 é " + multiplos);