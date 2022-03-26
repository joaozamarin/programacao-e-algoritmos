// Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.

// Entrada
var nome = prompt("Digite seu nome");
var salario = parseInt(prompt("Digite seu salário fixo"));
var vendas = parseInt(prompt("Digite o valor das suas vendas no mês atual"));

// Processamento
var SalarioFinal = salario + (vendas * 15/100);
var comissao = vendas * 15/100;

// Saída
alert("Nome do funcionário(a): " + nome + "\nSalário fixo: R$" + salario + ",00" + "\nComissão das vendas referente ao mês atual: R$" +  comissao + ",00" + "\nSalário final: R$" + SalarioFinal + ",00");