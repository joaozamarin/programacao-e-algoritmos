// 4) Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos".

var num1 = parseInt(prompt("Digite um número"));
var num2 = parseInt(prompt("Digite outro número"));

var multiplo = num1 % num2;
var multiplo2 = num2 % num1;

if (multiplo == 0 || multiplo2 == 0) {
    alert("São múltiplos!")
} else {
    alert("Não são múltiplos!")
};