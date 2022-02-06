let num = document.querySelector("input#txtn")
let res2 = document.querySelector("select#txtn2")
let res = document.querySelector('div#res')
let valores = [] // criação do vetor/array

function isNumber(n){ // esse aqui é para validar se o número digitado estar entre 1 e 100
    if (Number(n) >=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){ //nessa aqui é pra saber se o que for digitado já estar encontrado na lista. caso não esteja na lista o resultado de Number(n) é -1
        return true
    }
    else {
        return false
    }
}
//primeiro cria a função adicionar em refência ao input 
function adicionar(){
    if (isNumber(num.value) && !inLista(num.value, valores))// criei essas 2 funções isNumber e inLista e nessa linha é para saber se o que for digitado é número ou se não foi nada digitado.    
    {
       valores.push(Number(num.value)) // o push vai adicionar o num.value para a ultima parte do vetor      
       let item = document.createElement('option') // vai criar a tag option 
       item.text = `O valor ${num.value} foi adicionado.` // vai adicionar a tag  option essa frase
       res2.appendChild(item) // vai reproduzir na variável res2 o que foi escrito na variável item
       res.innerHTML= ""
    }
    else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = '' // vai apagar quando vc digitar o valor na caixa
    num.focus() // é para não precisar clicar lá novamente quando apagar da caixa o valor
    
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione os valores antes de finalizar')
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]            
        }
        media = soma / tot
        res.innerHTML = `<p>O total de valores adicionado foram <strong>${tot}</strong></p>`
        res.innerHTML += `<p>O soma dos valores foram <strong>${soma}</strong></p>`
        res.innerHTML += `<p> O maior valor digitado foi <strong>${maior}</strong> </p>`
        res.innerHTML += `<p> O menor valor digitado foi <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A média dos valores foram <strong>${media}</strong></p>`

    }
}