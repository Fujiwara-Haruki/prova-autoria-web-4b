function formatarContato({nome, email, telefone}){

   return "Nome: " +  nome  + ", Email: " + email + ", Telefone:" + telefone;
}

console.log("questão 1:")
console.log( formatarContato({nome: "Anna", email: "Anna@gmail.com", telefone: "9 8989-8989"}));