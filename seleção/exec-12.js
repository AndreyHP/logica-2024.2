//12) Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1:feminino 2:masculino) de 
//uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas: 
//- para homens : (72.7 * h) – 58 
//- para mulheres : (62.1 * h) – 44.7 
//Observação: Altura = h (na fórmula acima). 



  
            
        const radioButtons = document.querySelectorAll('input[name="BMI"]');
        btn.addEventListener("click", () => {
            let selectedSize;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
           
        });
 
