//9) As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem 
//compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.



var maçães = 0;

var valorDaCompra = 0;




function calcular(){
    var text = parseFloat(document.getElementById("box").value);
    var node = document.getElementById("text");
    var novonode = document.createElement("p");

    maçães = text;

    

    if (maçães <= 12){

        valorDaCompra = (0.30 * maçães);
    }else{
        valorDaCompra = (0.25 * maçães);
    };

    novonode.appendChild(document.createTextNode("R$: " + valorDaCompra));
    node.appendChild(novonode);
   
};
