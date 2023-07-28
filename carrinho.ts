const entrada = require("readline-sync");
let total = 0
let i =0
while(i == 0){
    let preco: number = parseInt(entrada.question("insira o preco do produto: "));

    total+= preco
    let res = entrada.question("gostaria de fechar o programa?(s/n): ");

    if (res == "s" || res == "S") {
        console.log("o preco total é "+ total);
        
        break;
    }
}