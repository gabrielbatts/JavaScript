let peso = document.querySelector('#txtp')
let altura = document.querySelector('#txta')
let resposta = document.querySelector('#res')

function calcular(){
    let resultado = peso.value / (altura.value * 2)
    if(peso.value.length == 0 || altura.value.length == 0){
        alert('Digite um valor')
    }
    else{
    if (resultado <= 18.5){
        resposta.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (abaixo do peso)`
    }
    else if (resultado >= 1.85 && resultado <= 24.9){
        resposta.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (peso normal)`
    }
    else if (resultado >= 25 && resultado <= 29.9){
        resposta.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (sobrepeso)`
    }
    else if(resultado >= 30 && resultado <= 34.9){
        resposta.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 1)`
    }
    else if(resultado >= 35 && resultado <= 39.9){
        resposta.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 2)`
    }
    else if(resultado >= 40){
        resposta.innerHTML = `Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 3. Procure um médico)`
    }
    }
}