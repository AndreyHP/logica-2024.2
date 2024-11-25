//10) Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e
//escrevê-los em ordem crescente.

var valor1 = " ";
var valor2 = " ";
var valor3 = " ";
var buffer = " ";

var valIguais = false;


function ordenarValores(valor1,valor2,valor3){

	var resultado = " ";

	if (valor1 > valor3){
		buffer = valor1;
		valor1 = valor3;
		valor3 = buffer;
		} 
		
		if(valor2 > valor3){
		buffer = valor3;
		valor3 = valor2;
		valor2 = buffer;
		}
		
		if(valor1 > valor2){
		buffer = valor2;
		valor2 = valor1;
		valor1 = buffer;
		};


		resultado = valor1 + "," + valor2 + "," + valor3;

		return resultado
};

function mostrarValor(){

	var valor1 = parseInt(document.getElementById("box1").value);
	var valor2 = parseInt(document.getElementById("box2").value);
	var valor3 = parseInt(document.getElementById("box3").value);


	if (valor1 == valor2 && valor3){
	valIguais = true;
	}else{
		valIguais = false;
	}


	//console.log(valIguais);

	if (valIguais == false){

		var node = document.getElementById("text");
		var novonode = document.createElement("p");

		novonode.appendChild(document.createTextNode(ordenarValores(valor1,valor2,valor3)));
		node.appendChild(novonode);



	};


};





