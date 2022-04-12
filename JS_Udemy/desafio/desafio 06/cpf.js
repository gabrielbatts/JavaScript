function CpfValida(cpfEnviado){ // aqui vai receber o cpf
Object.defineProperty(this, 'cpfLimpo',{ // aqui  vai limpar o cpf tirando os pontos e o hífem
    enumerable: true,
    get: function() { // esse get /\D+/g está substituindo tudo que nao é numero por nada ''
        return cpfEnviado.replace(/\D+/g, '') 
    }
})
}
CpfValida.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    return true
    
}
CpfValida.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    console.log(cpfArray)
}
const cpf = new CpfValida('860.176.335-97')
console.log(cpf.cpfLimpo)
console.log(cpf.valida())