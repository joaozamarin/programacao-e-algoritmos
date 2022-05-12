// 5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

var inicio = 1;
var fim = parseInt(prompt("Digite o valor do fim do intervalo"));
var soma = 0;

if(inicio > fim){
    console.log("Intervalo inválido")
} else {

    for(inicio; inicio <= fim; inicio++){

        soma = soma + inicio

    }
    console.log("A soma dos números que compreendem o intervalo de 1 a " + fim + " é igual a " + soma)

}