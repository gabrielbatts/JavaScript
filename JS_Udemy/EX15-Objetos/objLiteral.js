const pessoa = new Object()
pessoa.nome = 'Rafael'
pessoa.sobrenome = 'Bispo'
pessoa.idade = 26
pessoa.falarNome = function(){ // Aqui é um metodo criado dentro de um obj
    console.log(`${this.nome} está falando seu nome.`) // o this se refere ao objeto pessoa, o qual é o pai dele.
}
pessoa.getAnoNascimento = function(){
    const anoAtual = new Date()
    return anoAtual.getFullYear() - this.idade
}
console.log(pessoa.getAnoNascimento())