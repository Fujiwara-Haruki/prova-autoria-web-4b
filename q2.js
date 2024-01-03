const capitalizarTitulos = livros => {
    
    for( let x = 0; x < livros.length; x++){
        let texto = livros[x].toString().split("");
        texto[0] = texto[0].toUpperCase();
        
        console.log("" + texto + "");
    }
    
    return livros.map(livro => livro.toUpperCase());
}

console.log("questão 2: ");
console.log(capitalizarTitulos(["a metamorfose", "sete minutos depois da meia noite"]));