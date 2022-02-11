
let res = document.getElementById('res')
const pessoa = []
function enviar(){  
    let nome = document.getElementById('txtn')
    let sob = document.querySelector('input#txtsn')
    let peso = document.getElementById ('txtp')
    let alt = document.querySelector('input#txta')      
    pessoa.push({ // aqui eu vou guardar cada nome, sobrenome, peso e altura de cada pessoa em um array. esses 4 valor em cada índice, através desse objeto criado dentro do array.
        nome: nome.value,
        sob: sob.value,
        peso: peso.value,
        alt: alt.value})
    res.innerHTML += `<p>${nome.value} ${sob.value}`+` ${peso.value} ${alt.value}</p>`
}