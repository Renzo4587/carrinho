var entrada = require("readline-sync");
var total = 0;
var i = 0;
while (i == 0) {
    var preco = parseInt(entrada.question("insira o preco do produto: "));
    total += preco;
    var res = entrada.question("gostaria de fechar o programa?(s/n): ");
    if (res == "s" || res == "S") {
        console.log("o preco total é " + total);
        break;
    }
}
