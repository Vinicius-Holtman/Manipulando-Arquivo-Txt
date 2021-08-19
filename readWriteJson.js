const fs = require('fs');

function modificarUsuario(nome, curso, categoria) {
    fs.readFile("./usuario.json", {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            console.log("Um erro aconteceu!")
        } else {
            var conteudo = JSON.parse(data) // Converte texto para objeto javascript
    
            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria
    
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err, data) => { // JSON.stringify converte de objeto javascript para texto
                if (err) {
                    console.log("Um erro aconteceu! durante a escrita")
                }
            }) 
        }
    });
}

modificarUsuario("NameUser", "Java", "Programming")
