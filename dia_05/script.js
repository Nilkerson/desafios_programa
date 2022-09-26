const btn_calcular = document.getElementById("calcular");
const btn_limpar = document.getElementById("limpar");

btn_calcular.addEventListener("click", function calculo() {
  let numero = parseInt(document.getElementById("numero").value, 10);
  let soma = 0;

  if (numero < 1) {
    document.getElementById("soma").value = "Número inválido";
  }

  for (i = 1; i <= numero; i++) {
    soma += i;
    document.getElementById("soma").value = soma;
  }
});

btn_limpar.addEventListener("click", function limpar() {
  document.getElementById("numero").value = '';
  document.getElementById("soma").value = '';
});