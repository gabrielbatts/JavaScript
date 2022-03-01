// perceba que na função criada não coloquei um parametro nela, porém eu adicionei um, o js ele guarda os valores, mesmo nao tendo um variavel pra guarda-los, é só usar arguments que o js vai fazer aparecer todos os valores jogandos no parametro, como se fosse um array
//arguments sustenta todos os argumentos enviados

function funcao(){
    console.log(arguments) 
}
funcao('iai', 35, 42, 2, 88, 10)


function conta(operador, acumulador, ...numeros){// ... significa que todo o resto do argumento vai ser armazenado nesse parâmetro
console.log(numeros)
} 
conta('+',0,5,47,25,2,5,77)
