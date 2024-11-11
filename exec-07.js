//7) A equipe Benneton-Ford deseja calcular o número mínimo de litros que deverá colocar no tanque de seu carro para que ele possa percorrer um determinado número de voltas até o primeiro reabastecimento. Escreva um programa que leia o comprimento da pista (em metros), o número total de voltas a serem percorridas no grande prêmio, o número de abastecimentos desejados e o consumo de combustível do carro (em Km/L). Calcular e escrever o número mínimo de litros necessários para percorrer até o primeiro reabastecimento. OBS: Considere que o número de voltas entre os abastecimentos é o mesmo.

let comprimento = 0;
let NumPits = 0;
let voltas = 0;
let comsumo = 0;

// ler o comprimento da pista(Metros)

function Comprimento(){
    var comp = parseFloat(prompt("Comprimento da pasta: "));

    var node = document.getElementById("comprimento");
    var novonode = document.createElement("p");
    novonode.appendChild(document.createTextNode("Comprimento: " + comp + "Km"));
    node.appendChild(novonode);

    comprimento = comp;
};


//ler o numero total de voltas

function Voltas(){
    var laps = parseFloat(prompt("Numero de voltas: "));

    var node = document.getElementById("voltas");
    var novonode = document.createElement("p");
    novonode.appendChild(document.createTextNode("Numero de Voltas: " + laps));
    node.appendChild(novonode);

    voltas = laps;
};

//o numero de pitstops e o combustivel em KM/L

function Pitstops(){
    var numdeParadas = parseFloat(prompt("Numero de paradas desejadas: "));
    var comsumo = parseFloat(prompt("Comsumo em Km/L: "));

    var node = document.getElementById("pitstop");
    var novonode = document.createElement("p");
    
    var minLitros = (comprimento - comsumo) * (voltas) + (numdeParadas * comsumo);
    
    novonode.appendChild(document.createTextNode("Litros gastos: " + minLitros + "L"));
    node.appendChild(novonode);

};