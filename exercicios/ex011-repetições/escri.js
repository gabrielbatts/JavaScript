function calcular(){
    var nu = document.querySelector('input#nu')
    var res = document.querySelector('select#tabuada')       
    var mult = 1
    mult = Number(mult.value)
    if(nu.value.length == 0){
        alert('Digite um número')
    }
    else{
        var n = Number(nu.value)
        res.innerHTML = ''
        for(var c = 1; c <= 10; c++ ){
            var item = document.createElement('option')// Essa tag vai criar uma tag, no caso option que é uma tag no html
            item.text = `${n} x ${c} = ${n*c}` // essa vai digitar o texto  da variável item
            item.value = `res${c}` // isso vai servir pro back end, vai ser guardado res1, res2, res3...
            res.appendChild(item) // essa aqui é para aparecer na tela o que o item.text escreveu, e tbm vai aparecer um embaixo do outro
            }
    }
}