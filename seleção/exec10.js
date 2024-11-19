//10) Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e
//escrevê-los em ordem crescente.

var valor1 = 0;
var valor2 = 0;
var valor3 = 0;


function mostrarValor(){

	var valor1 = parseFloat(document.getElementById("box1").value);
	var valor2 = parseFloat(document.getElementById("box2").value);
	var valor3 = parseFloat(document.getElementById("box3").value);
    var node = document.getElementById("text");
    var novonode = document.createElement("p");

	novonode.appendChild(document.createTextNode(valor1, valor2, valor3));
    node.appendChild(novonode);



};





