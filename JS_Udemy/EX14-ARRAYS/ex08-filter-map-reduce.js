// * RETORNE A SOMA DO DOBRO DE TODOS OS PARES. Passos:
// -> Filtre os pares
// -> Dobre os valores
// -> Some tudo
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const SomaNumDobroPares = numeros
.filter(valor => valor % 2 === 0) // filtra os pares
.map(valor => valor * 2) // dobra os valores pares
.reduce((ac,valor) => ac + valor) // soma todos os pares
console.log(SomaNumDobroPares)