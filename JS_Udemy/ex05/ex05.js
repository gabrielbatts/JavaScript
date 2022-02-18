const pessoa = {
    nome: 'Adriana',
    sobrenome: 'Sacramento',
    idade: 25,
    endereço: {
        rua: 'Maloquinha',
        numero: 666
    }
}
const {nome, sobrenome, endereço: {rua, numero}} = pessoa
console.log(nome, sobrenome, rua, numero)