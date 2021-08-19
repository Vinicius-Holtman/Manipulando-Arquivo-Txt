const fs = require('fs');

fs.writeFile("./vini.txt", "Curso em andamento...", (err) => {
    if (err) {
        console.log("Erro durante o salvamento...")
    }
})