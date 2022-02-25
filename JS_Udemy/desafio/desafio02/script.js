let relogio = document.querySelector('#relogio')
let segundos = 0
let timer

function mostraHora(segundos){
    let data = new Date(segundos * 1000)// vai receber o valor e multiplicar por 1000 = que representa os segundos
    return data.toLocaleTimeString('pt-BR',{
        timeZone:'UTC' // esse código vai fazer com que a hora fique 00:00:00 
    })
}

function iniciar(){//aqui vai incrementar os segundos com a combinação do setInterval com o segundos++
        clearInterval(timer)
        timer = setInterval(function(){
        segundos++
        relogio.innerHTML = mostraHora(segundos)// aqui vai jogar o valor de segundos para a função mostraHora
    },1000)// o 1000 é para em 1 em 1 segundo repetir o bloco
    relogio.style.color = 'black'
}
function pausar(){
    clearInterval(timer) // o clearInterval vai fazer parar o codigo, mas n zerar
    relogio.style.color = 'red'
}
function zerar(){
    clearInterval(timer) // aqui alem de parar vai zerar, pois foi atribuido o 0 a variável segundos
    relogio.innerHTML = '00:00:00'
    segundos = 0
    relogio.style.color = 'black'
}