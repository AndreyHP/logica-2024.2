//6) Reescreva o programa do exercício anterior considerando o zero como neutro, ou seja, se for 
//digitado o valor zero, escrever a palavra zero


let num = parseFloat(prompt("insira o numero: "));

let resposta = "";
if (num > 0)  {
    resposta = "Positivo";
}else if (num == 0) {
    resposta = "Neutro";
} else {
    resposta = "Negativo";
}

document.write("numero " + resposta);