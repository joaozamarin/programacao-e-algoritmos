// Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um algoritmo que leia um cheque que entrou e calcule o saldo, mostrando (escrevendo) o novo saldo na tela. //

// Entrada
var ValorCheque = parseInt(prompt("Digite o valor que você deseja depositar"))

// Processamento
var Saldo = ValorCheque + 500;
var SaldoAnt = 500;

// Saída
alert("Você realizou o depósito de R$" + ValorCheque + ",00" + "\nSaldo anterior: R$" + SaldoAnt + ",00" + "\nSaldo atual: R$" + Saldo + ",00"  );