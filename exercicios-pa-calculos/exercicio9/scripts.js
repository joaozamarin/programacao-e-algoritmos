// Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e mostre a temperatura em Graus Celsius. Para isso pesquise a fórmula na  internet. (ºF - 32)*5/9

//Entrada
var Fahrenheit = parseFloat(prompt("Digite a temperatura em ºF"))

// Processamento
var Celsius = ((Fahrenheit - 32)*5/9).toFixed(1);

// Saída
alert("A temperatura em ºF informada equivale a " + Celsius + "ºC");