// vai retornar so o nome de cada objeto
// vai retornar o objeto idade e armazenar na array
// vai retornar cada objeto com um ID

const pessoas = [
    {nome: 'Maria', idade: 23},
    {nome: 'Luiz', idade: 62},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Canabrava', idade: 15},
    {nome: 'Pedro', idade: 25},
    {nome: 'Caio', idade: 17}
]
const pessoasString = pessoas.map(obj => obj.nome)
const pessoasIdade = pessoas.map( function(obj){
    return {idade: obj.idade}
}) 
const pessoasComIds = pessoas.map(function(obj, indice){
    const newObj = {...obj} // aqui copiou toda a array/obj para essa array/obj
    newObj.id = (indice + 1) // aqui criou o id dentro de cada indice do obj
    return newObj
})
console.log(pessoas)