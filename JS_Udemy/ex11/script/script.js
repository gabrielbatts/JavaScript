const operador = document.querySelector('#operador')
const n1 = document.querySelector('#txtn1')
const n2 = document.querySelector('#txtn2')
let resultado = document.querySelector('#resultado')


function calcular(){
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let total = 0
    if (operador.value === '+') total = num1 + num2
    if (operador.value === '-') total = num1 - num2
    if (operador.value === '*') total = num1 * num2
    if (operador.value === '/') total = num1 / num2
    if (operador.value === '**') total = num1 ** num2
    return resultado.innerHTML = (total)
}
