//7) Escreva um programa para ler 2 valores (considere que não serão informados valores iguais) e 
//escrever o maior deles.


let valor1 = 0;
let valor2 = 0;

function digitarvalor(v1, v2){
    v1 = parseFloat(prompt("Valor1: "));
    v2 = parseFloat(prompt("Valor2: "));

    valor1 = v1;
    valor2 = v2;
};

function calcularMaiorValor(v1, v2){

    if (v1 > v2){
        document.write("v1 e maior que v2");
    }else if (v1 == v2){
        document.write("Digite valores diferentes.");
        digitarvalor();
    }else{
        document.write("v1 e menor que v2");
    };
};

digitarvalor();
calcularMaiorValor(valor1,valor2);