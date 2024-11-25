//5) Escreva um programa para ler um valor e escrever se é positivo ou negativo. Considere o valor 
//zero como positivo.


let num = parseFloat(prompt("insira o numero: "));

let resposta = "";
if (num >= 0)  {
    resposta = "Positivo";
}else{
    resposta = "Negativo";
}

document.write("numero " + resposta);