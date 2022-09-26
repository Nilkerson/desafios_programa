const btn_Buscar = document.getElementById("buscar");
const btn_Limpar = document.getElementById("limpar");

btn_Buscar.addEventListener("click", function busca() {
    let number1 = document.getElementById("numero1");
    let new_number1 = number1.value;
    let format_number1 = parseInt(new_number1, 10);

    let number2 = document.getElementById("numero2");
    let new_number2 = number2.value;
    let format_number2 = parseInt(new_number2, 10);

    let number3 = document.getElementById("numero3");
    let new_number3 = number3.value;
    let format_number3 = parseInt(new_number3, 10);

    let menor;
    let maior;

    /*encontrando o menor número dos 3*/
    if ((format_number1 < format_number2) && (format_number1 < format_number3)) {
        menor = format_number1;
    } else if ((format_number2 < format_number3) && (format_number2 < format_number1)) {
        menor = format_number2;
    } else {
        menor = format_number3;
    }

    /*encontrando o maior número dos 3*/
    if ((format_number1 > format_number2) && (format_number1 > format_number3)) {
        maior = format_number1;
    } else if ((format_number2 > format_number3) && (format_number2 > format_number1)) {
        maior = format_number2;
    } else {
        maior = format_number3;
    }
    
    document.getElementById("resultado").value = `Menor:  ${menor} / Maior:  ${maior} `;
});

btn_Limpar.addEventListener("click", function limpar() {
    document.getElementById("numero1").value = '';
    document.getElementById("numero2").value = '';
    document.getElementById("numero3").value = '';
    document.getElementById("resultado").value = '';
})