// 1) Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos).

var inicio = 1;
var fim = 30;
var impar = 0;

for(inicio; inicio <= fim; inicio++){

    if(inicio % 2 != 0){
        impar++
        console.log(inicio + " é ímpar")
    }

}