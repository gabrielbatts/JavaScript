const produto = {nome: 'camisa', preco: 1.80}
const outraCoisa = {...produto}

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))