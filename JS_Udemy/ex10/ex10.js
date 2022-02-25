function mostraHora(){
    const data = new Date
    return data.toLocaleTimeString('pt-BR')
}

const timer = setInterval(function(){ //esse comando setInterval vai executar o codigo a cada 1 segundo criando um loop até que seja parado
    console.log(mostraHora())
},1000) // 1000 representa 1 segundo, perceba que ele está fora da function
console.log(timer)
setTimeout(function(){ // esse codigo vai fazer esse comando no tempo determinado
    clearInterval(timer) // esse codigo vai fazer parar o loop criado pelo setInterval
},5000)

setTimeout(function(){// esse codigo vai fazer aparecer Olá Mundo em 7 segundos
    console.log('Olá, Mundo!')
},7000) 