const btn_calcular = document.getElementById("calcular");
const btn_limpar = document.getElementById("limpar");

btn_calcular.addEventListener("click", function calculo() {
    let peso = parseFloat(document.getElementById("peso").value, 10);
    let altura = parseFloat(document.getElementById("altura").value, 10);
    let imc = (peso / (altura * altura)).toFixed(2);

    if (imc < 18.5) {
        document.getElementById("imc").value = `${imc} - Magreza`;
    } else if (imc < 25) {
        document.getElementById("imc").value = `${imc} - Normal`;
    } else if (imc < 30) {
        document.getElementById("imc").value = `${imc} - Sobrepeso`;
    } else if (imc < 40) {
        document.getElementById("imc").value = `${imc} - Obesidade`;
    } else {
        document.getElementById("imc").value = `${imc} - Obesidade Grave`;
    }
});

btn_limpar.addEventListener("click", function limpar() {
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
    document.getElementById("imc").value = '';
});