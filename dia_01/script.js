const botaoCalcular = document.getElementById("calcular")
const botaoLimpar = document.getElementById("limpar");

    botaoCalcular.addEventListener("click", function imprimir() {
        let precoDoProduto = document.getElementById("preco");
        let value_precoDoProduto = precoDoProduto.value;
        let new_preco = parseFloat(value_precoDoProduto, 10);
        
        let valorPago = document.getElementById("pagamento");
        let value_valorPago = valorPago.value;
        let new_pagamento = parseFloat(value_valorPago, 10);

        let troco = (new_pagamento - new_preco).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}); /*Configurações de moeda corrente*/
        /*toFixed(2) - Para mostrar 2 casas decimais após a vírgula*/
        
        alert(`O troco deve ser de ${troco}`);
    });

    botaoLimpar.addEventListener("click", function limpar() {
        document.getElementById("preco").value = '';
        document.getElementById("pagamento").value = '';
    })