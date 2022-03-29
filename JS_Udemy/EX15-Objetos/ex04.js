// Object defineProperty
function Loja (nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    Object.defineProperty(this, 'estoque',{ // aqui vai criar a chave estoque
        enumerable: true, // vai fazer mostrar a chave estoque
        value: estoque, // vai mostrar o valor da chave 
        writable: true,  // true pode alterar o valor da chave, false não pode
        configurable: true // configurável ou não
    })   
}
function Lojas (nome, preco, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // vai fazer mostrar a chave estoque
            value: nome, // vai mostrar o valor da chave 
            writable: true,  // true pode alterar o valor da chave, false não pode
            configurable: true // configurável ou não
        },
        preco: {
            enumerable: true, // vai fazer mostrar a chave estoque
            value: preco, // vai mostrar o valor da chave 
            writable: true,  // true pode alterar o valor da chave, false não pode
            configurable: true // configurável ou não
        },
        estoque:{
            enumerable: true, // vai fazer mostrar a chave estoque
            value: estoque, // vai mostrar o valor da chave 
            writable: true,  // true pode alterar o valor da chave, false não pode
            configurable: true // configurável ou não
        }
    })
}
const p1 = new Loja('Camiseta', 20, 3)
const p2 = new Lojas('Calça', 60, 100)
console.log(p2)