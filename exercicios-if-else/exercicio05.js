// 5) Elabore um algoritmo que leia 3 valores inteiros e mostre o maior valor entre eles.

var num1 = parseInt(prompt("Digite um número"));
var num2 = parseInt(prompt("Digite outro número"));
var num3 = parseInt(prompt("Digite outro número"));

if (num1 == num2 && num1 == num3) {
    alert("Os números são iguais")
} else if (num1 > num2 && num1 > num3) {
    alert(num1 + " é o maior número")
} else if (num2 > num1 && num2 > num3) {
    alert(num2 + " é o maior número")
} else {
    alert(num3 + " é o maior número")
};