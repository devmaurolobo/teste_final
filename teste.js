var numeros = [10, 20, 30, 40, 50]; // Substitua pelo seu próprio array de números

var soma = numeros.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0);

console.log("A soma dos valores é:", soma);