// 9) Elabore um algoritme que leia o ano de nascimento do usuário e informe se ele pode ou não votar. Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.

var ano = parseInt(prompt("Digite o ano de nascimento"));

var idade = 2022 - ano;

if (idade < 0 || ano < 0) {
    alert("Idade inválida")
} else if (idade <= 15) {
    alert("O voto é proibido!")
} else if ((idade >= 16 && idade <= 17) || idade > 70) {
    alert("O voto é facultativo!")
} else if (idade >=18 && idade <= 70) {
    alert("O voto é obrigatório!")
};