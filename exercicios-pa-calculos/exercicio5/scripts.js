// Construa um algoritmo que leia o nome de um aluno e três notas obtidas durante o semestre, ao final mostre o nome do aluno e a média aritmética das notas. //

// Entrada
var nome = prompt("Digite seu nome");
var nota1 = parseFloat(prompt("Digite sua 1º nota"));
var nota2 = parseFloat(prompt("Digite sua 2º nota"));
var nota3 = parseFloat(prompt("Digite sua 3º nota"));

// Processamento
var media = (nota1 + nota2 + nota3) / 3;

// Saída
alert("Olá, " + nome + "\n\nSua média nesse semestre foi " + media);