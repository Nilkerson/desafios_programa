const btn_calcular = document.getElementById("calcular");
const btn_limpar = document.getElementById("limpar");

btn_calcular.addEventListener("click", function calcular() {
    let celsius = parseFloat(document.getElementById("celsius").value, 10);
    let fahrenheit = (celsius * 1.8 + 32).toFixed(1);

    document.getElementById("fahrenheit").value = fahrenheit;
});

btn_limpar.addEventListener("click", function limpar() {
    document.getElementById("celsius").value = '';
    document.getElementById("fahrenheit").value = '';
});