//4) Escreva um programa para calcular e imprimir o número de lâmpadas necessárias para iluminar um determinado cômodo de uma residência. Dados de entrada: a potência da lâmpada utilizada (em watts), as dimensões (largura e comprimento, em metros) do cômodo. Considere que a potência necessária é de 18 watts por metro quadrado.

// Entrada, potencia da lampada em watts, as dimensoes do comodo(largura, comprimento) em metros.

let watts = parseInt(prompt("entre a potencia em Watts "));;
let largura = parseInt(prompt("entre a largure"));
let comprimento = parseInt(prompt("entre o comprimento"));
let area = 0;

//calcular o metro quadrado.

function calcularMetroQuadrado(largura, comprimento){

    area = largura * comprimento;
    return area;
};

//calcular o numero de lampadas.

function calcularNumerodeLamp(watts, comodo){
    
    let wattsTotal = 18 * comodo;
    return wattsTotal / watts;
};

//mostrar o resultado.

document.write("Lampadas " + calcularNumerodeLamp(watts,calcularMetroQuadrado(largura,comprimento)));