

function contar(){
    let n1 = document.getElementById('inicio')
    let n2 = document.querySelector('input#fim')
    let pass = document.getElementById('passo')
    let res = document.getElementById ('res')    
    
    
    if (n1.value.length == 0 || n2.value.length == 0 || pass.value.length == 0) /* length == 0 O zero quer dizer que se nenhum digito for digitado vai efetuar o comando abaixo*/{
        window.alert('[ERRO] Preencha todos os campos')
    }
    else {
        res.innerHTML = 'Calculando: <br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(pass.value)
        if (p<=0){
            alert('Não é possivel efetuar com passo 0, passo considerado 1')
            p = 1
        }
        // Contagem crescente
        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        // Contagem Decrescente
        else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F47D}`
    }
    
    
}

