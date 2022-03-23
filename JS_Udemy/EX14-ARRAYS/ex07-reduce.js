// soma de todos os números
// retorne um array só com os números pares
// retorne a pessoa mais velha


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
},0) // o zero aqui é pra dizer que o acumulador começa com o valor '0'

const pares = numeros.reduce(function(acumulador,valor){
    if(valor % 2 === 0) acumulador.push(valor) // vai adicionar no final de cada array o valor
    return acumulador
},[]) // aqui o acumulador se tornou uma array


const pessoas = [
    {nome: 'Maria', idade: 23},
    {nome: 'Luiz', idade: 62},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Canabrava', idade: 15},
    {nome: 'Pedro', idade: 75},
    {nome: 'Caio', idade: 17}
]
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)