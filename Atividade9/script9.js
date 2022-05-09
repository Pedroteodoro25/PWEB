var n1 = parseFloat(prompt("Digite um número:"),0);
var n2 = parseFloat(prompt("Digite um número:"),0);
var n3 = parseFloat(prompt("Digite um número:"),0);

function maiorNumero(){
    if (n1 > n2 && n1 > n3) {
        alert("O maior número é o primeiro número: " + n1);
    }
    else if (n2 > n1 && n2 > n3) {
        alert("O maior número é o segundo número: " + n2);
    }
    else {
        alert("O maior número é o terceiro número: " + n3);
    }
}
maiorNumero(n1, n2, n3);


alert("Digite novamente mais 3 números para vê-los em ordem crescente");



var n1 = parseFloat(prompt("Digite o primeiro número: "), 0);
var n2 = parseFloat(prompt("Digite o segundo número: "), 0);
var n3 = parseFloat(prompt("Digite o terceiro número: "), 0);

var valores = [n1, n2, n3];

    valores.sort(function(a, b){return a-b});
    alert(valores); 
