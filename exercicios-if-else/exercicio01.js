// 1) O sistema de avaliação de determinada disciplina, é composto por três provas. A primeira prova tem peso 4, a Segunda tem peso 3 e a terceira prova tem peso 3. Faça um algoritmo para calcular a média final de um aluno desta disciplina. Caso a média seja maior ou igual a 7 mostre APROVADO, se a média for entre 5 e 7, mostre em RECUPERAÇÃO, e se for menor do que 5 mostre REPROVADO.

var prova1 = parseFloat(prompt("Digite sua nota na primeira prova"));
var prova2 = parseFloat(prompt("Digite sua nota na segunda prova"));
var prova3 = parseFloat(prompt("Digite sua nota na terceira prova"));

var mediaFinal = (4 * prova1 + 3 * prova2 + 3 * prova3) / 10;

if (prova1 < 0 || prova2 < 0 || prova3 < 0 || mediaFinal > 10) {
    alert("Notas inválidas")
} else if (mediaFinal >= 7) {
    alert("Aprovado!")
} else if (mediaFinal >= 5 && mediaFinal < 7) {
    alert("Recuperação")
} else {
    alert("Reprovado")
};