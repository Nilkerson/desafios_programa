const btn_calcular = document.getElementById("calcular");
const btn_limpar = document.getElementById("limpar");

btn_calcular.addEventListener("click", function busca() {
  let media1 = document.getElementById("media1").value;
  let format_media1 = parseInt(media1, 10);

  let media2 = document.getElementById("media2").value;
  let format_media2 = parseInt(media2, 10);

  let media3 = document.getElementById("media3").value;
  let format_media3 = parseInt(media3, 10);

  let media4 = document.getElementById("media4").value;
  let format_media4 = parseInt(media4, 10);

  let resultado =
    (format_media1 + format_media2 + format_media3 + format_media4) / 4;

  if (resultado >= 6) {
    document.getElementById("media").value = `${resultado} - Você foi APROVADO`;
  } else {
    document.getElementById("media").value = `${resultado} - Você foi REPROVADO`;
  }
});

btn_limpar.addEventListener("click", function limpar() {
  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
  document.getElementById("numero3").value = "";
  document.getElementById("resultado").value = "";
});