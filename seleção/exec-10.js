//10) Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e
//escrevê-los em ordem crescente.

var valor1 = 0;
var valor2 = 0;
var valor3 = 0;

var resultado = 0;
var valIguais = false;


function mostrarValor(){

	var valor1 = parseInt(document.getElementById("box1").value);
	var valor2 = parseInt(document.getElementById("box2").value);
	var valor3 = parseInt(document.getElementById("box3").value);


	if (valor1 == valor2 && valor3){
	valIguais = true;
	}else{
		valIguais = false;
	}


	console.log(valIguais);

	if (valIguais == false){

		var node = document.getElementById("text");
		var novonode = document.createElement("p");



		if (valor1 > valor2 && valor3){
		resultado = valor1;
		}else if(valor2 > valor3){
		resultado = valor2;
		}else{
		resultado = valor3;
		};


		novonode.appendChild(document.createTextNode(resultado));
		node.appendChild(novonode);



	};


};





