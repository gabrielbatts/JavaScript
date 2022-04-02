
//  FUNCTION MOLDE
function Pessoa (nome, sobrenome){
this.nome = nome
this.sobrenome = sobrenome
}
Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome
}

pessoa1 = new Pessoa('Erica', 'Dolores')
console.log(pessoa1.nomeCompleto())