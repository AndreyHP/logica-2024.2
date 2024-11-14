//8) Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que 
//diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu)


var nasceu = 0;

var saida = " ";




function showtext(){
    var text = parseFloat(document.getElementById("box").value);
    var node = document.getElementById("text");
    var novonode = document.createElement("p");

    nasceu = text;

    var podeVotar = (2024 - nasceu);

    if (podeVotar >= 16){

        saida = "Pode Votar";
    }else{
        saida = "Não pode Votar";
    };

    novonode.appendChild(document.createTextNode(saida));
    node.appendChild(novonode);
   
};