function exemplo(nome)// Aqui foi criada a função exemplo e dei um indice pra ela, como se fosse uma variável
{
    return `Boa Noite ${nome}`
}
console.log(exemplo('Gabriel')) //aqui atribui um valor para a "variável" que criei no inicio da função com o nome "nome"

function soma(x, y) // mesmo esquema aqui, porém adicionei 2 "variáveis"
{
    let resultado = x + y
    return resultado
}
console.log(soma(3,6)) // Aqui chamei a função e atribuir 2 valores para as 2 "variáveis" x e y