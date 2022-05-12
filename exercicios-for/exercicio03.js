// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.

var inicio = parseInt(prompt("Digite o início do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));
var par = 0;
var impar = 0;

if(inicio > fim){
    console.log("Intervalo inválido")
}else {

    for(inicio; inicio <= fim; inicio++){

        if(inicio % 2 == 0){
            par++
            console.log(inicio + " é par")
        }else{
            impar++
            console.log(inicio + " é ímpar")
        }

    }

}

console.log("Quantidade de números pares: " + par + "\nQuantidade de números ímpares: " + impar);