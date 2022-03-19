// Função Construtora -> Ela sempre começa com a Primeira letra Maiúscula

function Pessoa (nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456
    const metodoInterno = function(){

    }
    // Atributos ou métodos Públicos
    this.nome = nome
    this.sobrenome = sobrenome
    //perceba que aqui não precisa da virgula no final e nem da palavra return, porém ela precisa do this
    this.metodo = function(){
        console.log(this.nome + ': Isso é um método')
    }
}

const p1 = new Pessoa('Gabriel', 'Batista')
p1.metodo()