const verificarNumero = () => {
    return new Promise((resolve, reject) =>{
        let num = Math.random() * 10;

        if (num > 5){
            console.log(num + ": Número alto!");
        }
        else {
            console.log(num + ": Número baixo!");
        }
    });
}

console.log("questão 3:");
verificarNumero();