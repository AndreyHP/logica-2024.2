// Escreva um programa para ler uma temperatura em graus Celsius, e devolver o valor em Fahrenheit.
//(F = (C * 9 / 5) + 32)

// entrada

let C = prompt("Digite o valor em Celsius");

// Processamento

function Celsius_para_Fahrenheit(valor){
    return (valor * 9 / 5) + 32;
}

//Saida

document.write("Temperatura em F: " + Celsius_para_Fahrenheit(C));
