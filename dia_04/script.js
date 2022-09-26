const btn_calcular = document.getElementById("calcular");
const btn_limpar = document.getElementById("limpar");

btn_calcular.addEventListener("click", function calculo() {
  let comprimento = document.getElementById("comprimento").value;
  let format_comprimento = parseFloat(comprimento, 10);

  let largura = document.getElementById("largura").value;
  let format_largura = parseFloat(largura, 10);

  let area = (format_comprimento * format_largura).toFixed(2);

  let valor = parseFloat(area * 7592).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); /*Conversão para moeda local*/

  document.getElementById("area").value = `${area}m²`;
  document.getElementById("valor").value = `${valor}`;
});

btn_limpar.addEventListener("click", function limpar() {
  document.getElementById("comprimento").value = '';
  document.getElementById("largura").value = '';
  document.getElementById("area").value = '';
  document.getElementById("valor").value = '';
});