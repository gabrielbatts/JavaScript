function retornaHora(data){
    if (data && !(data instanceof Date)){ // se a data for enviada e for uma instancia de Date (se for uma data mesmo)
        throw new TypeError ('esperando a instancia de Date')
    }
    if (!data){ // se a data não for enviada entao o bloco abaixo faz isso envia a data
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR') /* obs já esta aparecendo do jeito certo porem se não aparecer desse modo 00:12:19 que é a hora que estou aqui é so fazer isso  
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false             isso dentro do escopo ('pt-BR', { é digitado aqui } */
}
try{
    const hora = retornaHora()
    console.log(hora)
}
catch(erro){
    // tratar o erro
}
finally{
    console.log('Boa Noite')
}