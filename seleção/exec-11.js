//11) Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. A senha 
//válida é o número 1234. Devem ser impressas as seguintes mensagens: 
//ACESSO PERMITIDO caso a senha seja válida. 
//ACESSO NEGADO caso a senha seja inválida. 

var login = ""
var senha = ""

function logar(){
login = document.getElementById("login").value;
senha = document.getElementById("senha").value;




if (login.trim() == "andrey" && senha.trim() == "123"){
    document.writeln("Acesso permitido");
}else{
    document.writeln("Acesso negado");
}


};
