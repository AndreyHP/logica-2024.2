//12) Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1:feminino 2:masculino) de 
//uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas: 
//- para homens : (72.7 * h) – 53.5 
//- para mulheres : (62.1 * h) – 44.7 
//Observação: Altura = h (na fórmula acima). 

const btn = document.querySelector('#mostrar');  
const radioButtons = document.querySelectorAll('input[name="BMI"]');
btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
   
    var altura = parseFloat(document.getElementById("Altura").value);
    
    
    var node = document.getElementById("text");
    var novonode = document.createElement("p");
 
    if (selectedSize == "Male"){
        let result = (72.7 * altura) - 53.5;
        novonode.appendChild(document.createTextNode(result));
        node.appendChild(novonode);
    }

    if (selectedSize == "Female"){
        let result = (62.1 * altura) - 44.7;
        novonode.appendChild(document.createTextNode(result));
        node.appendChild(novonode);
    }
   
 


});

  
    