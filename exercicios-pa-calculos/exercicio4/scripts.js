// Considerando que para um consórcio, sabe-se o número total de prestações, a quantidade de prestações pagas e o valor atual da prestação, escreva um algoritmo que determine o total pago pelo consorciado e o saldo devedor. //

// Entrada
var total_prest = parseInt(prompt("Digite o total de prestações a serem pagar"));
var prest_pagas = parseInt(prompt("Digite a quantidade de prestações pagas"));
var valor_prest = parseFloat(prompt("Digite o valor de cada prestação"));

// Processamento
var total_pago = prest_pagas * valor_prest;
var saldo_devedor = total_prest * valor_prest - total_pago;
var valor_total = total_prest * valor_prest;

// Saída
alert("-- Total de prestações: " + total_prest + "                 -- Quantidade de prestações pagas: " + prest_pagas + 
"\n* Valor total a ser pago: R$" + valor_total + ",00" + "  * Valor pago: R$" + total_pago + 
"\n\n-- Restante a ser pago: R$" + saldo_devedor + ",00");