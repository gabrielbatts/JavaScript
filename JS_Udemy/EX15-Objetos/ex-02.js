//factory function
function criaPessoa(nome, sobrenome){
    return { 
        nome, // aqui vai ser criada a chave nome
        sobrenome, // aqui vai ser criada a chave sobrenome
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('Gabriel', 'Batista')
console.log(p1.nomeCompleto())