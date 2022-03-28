// function construtora

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome  // perceba que aqui não precisa da virgula e nem do return
    Object.freeze(this)
}
const p1 = new Pessoa('Gabriel', 'Batista')
p1.nome = 'Erica'
Object.freeze(p1) // aqui vai bloquear o obj, não poderá sofrer alteração
console.log(p1.nome)