// Aqui o polimorfismo é fazer metodos filhos do mesmo pai se comportar de forma diferente, nesse exemplo tem 2 tipos de conta uma CC e outra CP só que a CC pode sacar do limite a CP não
// Super Classe
function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.withdraw = function(value){ // sacar
if (this.saldo < value) return console.log(`Saldo insuficiente! Seu saldo é de ${this.saldo}`)
this.saldo -= value
this.seeBalance()
}
Conta.prototype.deposit = function(value){
this.saldo += value
this.seeBalance() 
}
Conta.prototype.seeBalance = function (){//verSaldo
    console.log(`Seu saldo é de R$${this.saldo.toFixed(2)}`)
}
function ContaCorrente(agencia, conta, saldo, limit){
    Conta.call(this, agencia, conta, saldo)  // aqui vai ter acesso aos prototype da function Conta
    this.limit = limit
}
//linkando os prototypes
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.withdraw = function(value){ // sacar
    if (value > (this.saldo + this.limit)) return console.log(`Saldo insuficiente! Seu saldo é de ${this.saldo}`)
    this.saldo -= value
    this.seeBalance()
    }

    function ContaPoupanca(agencia, conta, saldo){
        Conta.call(this, agencia, conta, saldo) // aqui vai ter acesso aos prototype da function Conta
    }
    //linkando os prototypes
    ContaPoupanca.prototype = Object.create(Conta.prototype)
    ContaPoupanca.prototype.constructor = ContaPoupanca

const conta1 = new Conta('2413-5', '11245-8', 1000)
const contaCC = new ContaCorrente('2656-0', '20118-7', 20.5, 100)
const contaCP = new ContaPoupanca('225-9', '2245-', 500)
contaCC.withdraw(50)
contaCP.withdraw(600)
