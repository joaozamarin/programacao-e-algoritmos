// 3) Elaborar um algoritmo que informe se um número informado pelo usuário é par ou ímpar.

var num1 = parseInt(prompt("Digite um número qualquer a partir do zero"));

var par = num1 % 2;

if (num1 < 0) {
    alert("Digite apenas números a partir do zero!")
} else if (par == 0) {
    alert("Número é par!")
} else {
    alert("Número ímpar!")
};