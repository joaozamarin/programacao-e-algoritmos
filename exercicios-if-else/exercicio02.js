// 2) Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.

var ano = parseInt(prompt("Informe o ano para saber se é bissexto ou não"));

var bissexto = ano % 4;
var bissexto100 = ano % 100;

if (ano == 0 || ano < 0) {
    alert("Insira um ano válido")
} else if (bissexto == 0 && bissexto100 != 0) {
    alert("Ano bissexto!")
} else {
    alert("Esse ano não é bissexto")
};