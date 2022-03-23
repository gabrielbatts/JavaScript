//OBS: pode conter objetos em cada indice da array
const pessoas = [
    {nome: 'Maria', idade: 23},
    {nome: 'Luiz', idade: 62},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Canabrava', idade: 15},
    {nome: 'Pedro', idade: 25},
    {nome: 'Caio', idade: 17}
]
const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length >= 5)
const pessoasComCiquentaAnos = pessoas.filter( obj => obj.idade >= 50)
const pessoasQueTerminaComA = pessoas.filter( function(obj){
   return obj.nome.toLowerCase().endsWith('a')
})
console.log(pessoasQueTerminaComA)