//produto -> aumento, deconto
// camiseta = cor
//caneca = material
function Produto (name, price){ 
    this.name = name
    this.price = price
}
Produto.prototype.desconto = function(percentual){ //metodo criado dentro do prototype da function Produto
    this.price = this.price - (this.price * (percentual / 100))
}
Produto.prototype.aumento = function(percentual){ //metodo criado dentro do prototype da function Produto
    this.price = this.price + (this.price * (percentual / 100))
}
function Camiseta (name, price, cor){
    Produto.call(this, name, price) // aqui está linkando essa function com a function Produto, passando os parâmetros name e price pra ela
    this.cor = cor
}
//Obs: para o prototype de Produto ser inserido em Camiseta, tem que asetar ele dessa forma:
Camiseta.prototype = Object.create(Produto.prototype)// o prototype de produto sendo inserido no prototype de Camiseta, para ele poder acessar desconto e aumento
Camiseta.prototype.constructor = Camiseta // aqui é para o construtor da function Camiseta ser ele mesmo, pq quando usei o codigo Produto.call() o construtor de camiseta passou a ser a function produto
//OBS2: A Camiseta é subproduto de Produto
//----------------------------------------------------------------------------------//
function Caneca(name, price, material,estoque){
    Produto.call(this,name,price)
    this.material = material
    Object.defineProperty(this, estoque,{
        enumerable: true,
        configurable: false, // Aqui não vai deixar configurar essa parte do código
        get: function(){ // o get é necessário usar aqui
            return estoque
        },
        set: function(valor){ // o set vai fazer retornar o número que tem em estoque
            if (typeof valor !== 'number') return // se o valor for diferente de numero n vai retornar nada
            valor = estoque

        }
    })
}
Caneca.prototype = Object.create(Produto.prototype) // inserindo o protorype de Produto em Caneca
Caneca.prototype.constructor = Caneca // colocando Caneca para ser o construtor do Objeto
const caneca = new Caneca('Xícara', 5, 'Porcelana', 5)
const camiseta = new Camiseta('TFM', 15, 'Branca')
const produto = new Produto('armario', 130)
camiseta.desconto(20)
caneca.aumento(50)
console.log(camiseta)
console.log(produto)
console.log(caneca)