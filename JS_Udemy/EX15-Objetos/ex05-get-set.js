function Loja(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    
// o Get e Set nesse código aqui serve para validar o valor inserido
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque // aqui o get só vai retornar o estoque
        },
        set: function(valor){ // o set aqui esta validando o valor inserido
            if(typeof valor !== 'number'){
                console.log('insira um número.')
            }
           else estoque = valor
        }
    })
}

const p1 = new Loja('Moleton', 30, 100)
p1.estoque = 'Outra coisa'
console.log(p1.estoque)