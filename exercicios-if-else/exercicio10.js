// 10) Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.   
// De 0 a 200   --> Nenhum crédito  
// De 201 a 400 --> 20% do valor do saldo médio  
// De 401 a 600 --> 30% do valor do saldo médio 
// Acima de 601 --> 40% do valor do saldo médio

var saldoMedio = parseFloat(prompt("Digite o saldo médio no último ano"));

if (saldoMedio <= 200) {
    alert("Saldo médio: " + saldoMedio + "\nValor do crédito: " + 0 * saldoMedio)
} else if (saldoMedio > 200 && saldoMedio <= 400) {
    alert("Saldo médio: " + saldoMedio + "\nValor do crédito: " + 0.2 * saldoMedio)
} else if (saldoMedio > 400 && saldoMedio <=600) {
    alert("Saldo médio: " + saldoMedio + "\nValor do crédito: " + 0.3 * saldoMedio)
} else if (saldoMedio > 600) {
    alert("Saldo médio: " + saldoMedio + "\nValor do crédito: " + 0.4 * saldoMedio)
}