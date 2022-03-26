// O custo ao consumidor de um carro novo, é a soma do custo de fábrica com a percentagem do revendedor e com o custo dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do revendedor seja de 25% do custo de fábrica e que os impostos custam 45 % do custo de fábrica, faça um algoritmo que leia o valor de custo de fábrica e determine o preço final do automóvel (custo ao consumidor).

// Entrada
var CustoDeFabrica = parseInt(prompt("Digite o valor de fábrica do seu automóvel"));
var impostos = 45/100;
var PorcRevendedor = 25/100;;

// Processamento
var ValorFinal = CustoDeFabrica + (CustoDeFabrica * impostos) + (CustoDeFabrica * PorcRevendedor);

// Saída
alert("O valor final do seu veículo será de R$" + ValorFinal + ",00");