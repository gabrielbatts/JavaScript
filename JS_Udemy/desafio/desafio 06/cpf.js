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
    if (this.isSequencia()) return false
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
    
}
CpfValida.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial) // aqui está transformando o cpf em array
    let regressivo = cpfArray.length +1
    let total = cpfArray.reduce((ac, valor) =>{
        ac += (regressivo * Number(valor)) // aqui vai pegar cada numero do cpf e multiplicar em contagem regressiva começando do 10 ex:
        /* 10  9  8  7  6  5  4  3  2
            8  6  0  1  7  6  3  3  5     */
        regressivo --
        return ac
    },0)
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito) // se digito formaior que 9 retorne  se ñ retorne digito   
}
CpfValida.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}
const cpf = new CpfValida('860.176.335-97')
console.log(cpf.valida())

if (cpf.valida()){
    console.log('CPF Válido')
}
else{
    console.log('CPF Inválido')
}