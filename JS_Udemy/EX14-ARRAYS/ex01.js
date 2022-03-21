//    Indices      0         1         2        3 
const nomes = ['Eduardo', 'Cabeça', 'Maria', 'João']
delete nomes[3] // deletou o valor do indice 3 porem o indice 3 continua lá

const novo = nomes // foi atribuido a essa const a array nomes, tudo que alterar em novo altera em nomes
novo[3]= 'Gabriel'
const removido = novo.pop() // deletou o ultimo valor do indice  e armazenou na const

novo.shift() // remove do começo 
novo.push('Carvalho') // adicionou um novo indice com esse valor
novo.unshift('Viviane') // adicinou o valor ao indice 0 e empurrou os outros

console.log(novo)
console.log(novo.slice(0, -1))

// Transformando uma string em uma array

const nome = 'Gabriel Nascimento Batista'
const arra = nome.split(' ') // o valor que eu colocar aqui ele vai usar como parâmetro para separar
console.log(arra)