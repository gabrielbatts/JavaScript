let num = document.querySelector('input#txtn')
let res = document.getElementById('res')

function calcular(){
    let n = Number(num.value)
    res.innerHTML = `Raiz quadrada de <strong>${n}</strong> é: <strong>${n**0.5}</strong>. <br>`
    res.innerHTML += `${n} é um numero inteiro: ${Number.isInteger(n)}. <br>`
    res.innerHTML += `${n} é NaN: ${Number.isNaN(n)}. <br>`
    res.innerHTML += `Arredondando ${n} para baixo: ${Math.floor(n)}`
}