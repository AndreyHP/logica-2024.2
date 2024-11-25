//6) Um motorista de táxi deseja calcular o rendimento de seu carro na praça. Sabendo-se que o preço do combustível é de R$ 4,87, escreva um programa para ler: a marcação do odômetro (Km) no início do dia, a marcação (Km) no final do dia, o número de litros de combustível gasto e o valor total (R$) recebido dos passageiros. Calcular e escrever: a média do consumo em Km/L e o lucro (líquido) do dia


//Ler KM no inicio do dia 

let kmInicial = 0;
let dinheiroTotal = 0;




function dinheiroRecebido(){
    var plata = parseFloat(prompt("Pagamento: "));
    dinheiroTotal = dinheiroTotal + plata;

    var node = document.getElementById("plata");
    var novonode = document.createElement("p");
    novonode.appendChild(document.createTextNode("Pagamento: " + plata + " " + "TotalRecebido: " + dinheiroTotal));
    node.appendChild(novonode);
};

function começarDia(){
   
    var começoDia = parseFloat(prompt("KM inicial:"));
    var node = document.getElementById("começo");
    var novonode = document.createElement("p");
    novonode.appendChild(document.createTextNode("KM inicial: " + começoDia + "KM"));
    node.appendChild(novonode);

    var bnode = document.getElementById("Pagamento");
    const button = document.createElement("button");

    kmInicial = começoDia;

    button.innerText = "Pagamento";
    bnode.appendChild(button);
    button.onclick = function() {dinheiroRecebido()};

};


//Ler KM no final do dia

function terminarDia(){

    
    //preço do combustível R$ 4,87

    var kmFinal =  parseFloat(prompt("KM Final:"));
    var totalAndado = kmFinal - kmInicial;
    var combustivel = 4.87 * totalAndado;
    var liquido = dinheiroTotal - combustivel;
    var node = document.getElementById("Fim");
    var novonode = document.createElement("p");


    novonode.appendChild(document.createTextNode("KM Inicial: " + kmInicial + '\n\n'  + 
       "KM Final: " + kmFinal + '\n\n' + "Total Andado: " + totalAndado + '\n\n' + "Combustivel gasto R$: " + combustivel
        + '\n\n' + "Liquido: " + liquido + '\n'));
    node.appendChild(novonode);


    novonode.style.whiteSpace = "pre";

    //console.log("kminicial: " + kmInicial);
   // console.log("kmfinal: " + kmFinal);
   // console.log("totalandado: " + totalAndado);
   // console.log("combustivel: " + combustivel);
  // console.log("liquido: " + liquido);
};







