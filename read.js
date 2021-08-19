const fs = require('fs');

fs.readFile("./vini.txt", {encoding: "utf-8"}, (erro, dados) => {
    if (erro) {
        console.log("ocorreu uma falha durante a leitura do arquivo")
    } else {
        console.log(dados)
    }
})