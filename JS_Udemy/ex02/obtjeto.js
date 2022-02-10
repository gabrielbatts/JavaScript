/*const pessoa01 = {
    nome: 'Gabriel', // perceba que é com : e , no final
    sobrenome: 'Batista',
    idade: 25
}
console.log(pessoa01.nome)
console.log(pessoa01.sobrenome)
console.log(pessoa01.idade) */

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa1 = criaPessoa('Gabriel', 'Baista', 25)
const pessoa2 = criaPessoa('Erica', 'Dolores', 30)
const pessoa3 = criaPessoa('Emilly', 'Prazeres', 12)
