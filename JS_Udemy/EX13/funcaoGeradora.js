function* geradora1(){ // o aisteristico é para identificar que é uma função geradora
    yield 'Valor 1'
    yield 'Valor 2' // aqui se ultiliza o yield em vez de return
    yield 'Valor 3'
}
const g1 = geradora1()
console.log(g1.next().value) // para aparecer o valor tem q escrever o .next().value -> o next é para dizer que é o proximo e o .value é para dizer o valor
console.log(g1.next().value)
console.log(g1.next().value) // toda vez que eu chamo aparece o valor abaixo, aqui so vai até o valor 3 pq so coloquei 3
function* geradora2(){
    let i = 0
    while(true){
        yield i
        i++
    }
}
const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)


function* geradora3(){
    yield function(){
        console.log('Vim do Y1')
    }
    yield function(){
        console.log('Vim do y2')
    }
}
const g3 = geradora3()
const func1 = g3.next().value
const func2 = g3.next().value
func1()
func2()

