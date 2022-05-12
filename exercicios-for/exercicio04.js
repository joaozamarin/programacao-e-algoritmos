// 4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;

var inicio = parseInt(prompt("Digite o ínicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));
var soma = 0;

if(inicio > fim) {
    console.log("Intervalo inválido")
} else {

    for(inicio; inicio <= fim; inicio++){

        if(inicio % 11 == 0){
            soma = inicio + soma
            console.log(inicio + " é multiplo de 11")
        }

    }
    console.log("A soma dos números múltiplos de 11 no intervalo apresentado é " + soma)

}