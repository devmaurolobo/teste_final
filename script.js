var adictxt = document.getElementById("txn");
var res = document.getElementById("restx");
var tab = document.getElementById("txtab");
var lista = [];


function executar (){

res.innerHTML = "";

var adicionar= parseInt(adictxt.value);

    if (isNaN(adicionar) || lista.indexOf(adicionar) !== -1){
        window.alert('Digite um número valido!')
        var adicionar= "";
        adictxt.value = "";

        }else if (adicionar <0 || adicionar >100){
            window.alert('Digite um número de 0 a 100!')
            adictxt.value = "";
        } else{
            adictxt.value = "";

        
        lista.push(adicionar);

            var valor = document.createElement("option");
            valor.text = `Valor ${adicionar} adicionado`;
            tab.appendChild(valor);

            adictxt.value = "";
            adictxt.focus()
}}
        function finalizar() {

        if (lista == ""){
            window.alert('Digite um número de 0 a 100, no campo acima!')
        }else {
            var soma = lista.reduce(function(adicionar, valorAtual) {
            return adicionar + valorAtual;
            }, 0);
        
            var num = (lista.length)
            var media = soma/lista.length 
            var menorvalor = Math.min(...lista);
            var maiorvalor = Math.max(...lista);

            console.log(maiorvalor)

            res.innerHTML = `O numero de vagas é ${num} <br>`
            res.innerHTML += `A soma é ${soma}<br>`;
            res.innerHTML += `A media é ${media}<br>`;
            res.innerHTML += `A menor valor é ${menorvalor}<br>`;
            res.innerHTML += `A maior valor é ${maiorvalor}<br>`;
        }
    }

    function deletar() {
        tab.innerHTML = "";
        lista   = [];
        res.innerHTML = "";
        adictxt.value = "";

    }












