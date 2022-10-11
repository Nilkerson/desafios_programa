const btn_calcular = document.getElementById("calcular");
const btn_limpar = document.getElementById("limpar");

btn_calcular.addEventListener("click", function calculo() {
    let dias_trabalhados = parseInt(document.getElementById("dias").value, 10);
    let anos = parseInt((dias_trabalhados / 360));
    let meses = parseInt((dias_trabalhados - (360 * anos)) / 30);
    let dias = parseInt((dias_trabalhados - (360 * anos)) % 30);

    document.getElementById("resultado").value = `Anos: ${anos}; Meses: ${meses}; Dias: ${dias}`;
})

btn_limpar.addEventListener("click", function limpar() {
    document.getElementById("dias").value = '';
    document.getElementById("resultado").value = '';
});