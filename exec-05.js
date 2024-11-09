//5) Escreva um programa para ler as dimensões de uma cozinha retangular (comprimento, largura e altura), calcular e escrever a quantidade de caixas de azulejos para se colocar em todas as suas paredes (considere que não será descontada a área ocupada por portas e janelas). Cada caixa de azulejos possui 1,5 m2.



//entrada  (comprimento, largura e altura).
let comprimento = parseInt(prompt("Entre o comprimento"));
let largura     = parseInt(prompt("Entre a largura"));
let altura      = parseInt(prompt("Entre a altura"));



//calcular quantidade de caixas para colocar na parede.

function Dimensao(comprimento, largura, altura){
    return comprimento * largura * altura;
};

function azulejos(DM){
    let total = 1.5 * DM;
    return (total) / (0.5 * DM);
};



//saida

document.write(azulejos(Dimensao(comprimento,largura,altura)));