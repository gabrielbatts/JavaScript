let peso = document.querySelector('#txtp')
let altura = document.querySelector('#txta')
let resposta = document.querySelector('#res')

function calcular(){
    let p = Number(peso.value)
    let a = Number(altura.value)
    let resultado = peso.value / (altura.value * 2)
    if(!p || !a){
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



const result = document.querySelector('#res') // uma variavel const foi criada aqui e atribuida o id
const parag = document.createElement('p') // o creatElement cria uma tag no html nesse aqui foi criada a tag <p> e atribuida a const parag
parag.classList.add('paragrafo') // com o classList.add() foi criada uma class, com o nome paragrafo, para a const parag
result.appendChild(parag) // aqui a const parag foi atribuiada a result como filho.