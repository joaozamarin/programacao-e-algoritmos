// Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.

// Entrada
var CotacaoDol = parseFloat(prompt("Digite a atual cotação do dólar (em R$)"));
var QtdDolar = parseFloat(prompt("Digite a quantidade em dólares (U$) que você deseja converter para reais (R$)"))

// Processamento
var conversao = CotacaoDol * QtdDolar;

// Saída
alert("A quantidade de dólares informado é equivalente a R$" + conversao + ",00");