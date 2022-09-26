const btn_calcular = document.getElementById("calcular");
const btn_limpar = document.getElementById("limpar");

btn_calcular.addEventListener("click", function calculo() {
    let cateto1 = parseFloat(document.getElementById("cateto1").value, 10);
    let cateto2 = parseFloat(document.getElementById("cateto2").value, 10);
    let hipotenusa = (cateto1 ** 2) + (cateto2 ** 2);

    document.getElementById("hipo").value = hipotenusa;
});

btn_limpar.addEventListener("click", function limpar() {
    document.getElementById("cateto1").value = '';
    document.getElementById("cateto2").value = '';
    document.getElementById("hipo").value = '';
})