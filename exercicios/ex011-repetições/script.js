

function contar(){
    let n1 = document.getElementById('inicio')
    let n2 = document.querySelector('input#fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById ('res')    
    
    
    if (n1.value.length == 0 || n2.value.length == 0 || c.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos')
    }
    else{
        res.innerHTML = 'Calculando: '
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)
        for (let c = i; c <= f; c += p){
            res.innerHTML += `${c}`
        }
        
    }
        
    
}

