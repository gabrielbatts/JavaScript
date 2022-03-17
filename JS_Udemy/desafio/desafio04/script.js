//Obs Geral: esses codigos que parece function é chamado de metodo

function criaCalculadora(){
    return{
        display: document.querySelector('.display'), // display esta recebendo a classe display que é o input de texto

        //aqui vai apagar tudo uq ta escrito lá, pos o display vai recerber nada de valor
        clearDisplay(){
            this.display.value = ''
        },

        deletaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            //O eval() ele vai detectar uq ta escrito e por se só fazer a conta, porém é muito perigoso usar ele, pq ele pode ser usado para ser invadido o sistema criado, ele executa comandos.
            let conta = this.display.value
            try {
                conta = eval(conta)
                if (!conta){
                    alert('Conta Inválida')
                    return 
                }
                this.display.value = conta
            } catch(e){
                alert('Conta Inválida')
                return
            }
        },
        //esse codigo aqui é para quando apertar no enter realizar a conta, tava dando erro mas foi resolvido com o this.display.focus()
        pressionaEnter(){
            this.display.addEventListener('keypress', e =>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },
        inicia(){
            this.cliqueBotoes() // o this serve para chamar outro objeto dentro do mesmo objeto mãe que é o return
            this.pressionaEnter()
        },
        cliqueBotoes (){
            //this é a calculadora que chamou a função la em baixo
            document.addEventListener('click', e =>{
                const el = e.target // aqui tudo que é clicado é recebido por essa const

                if(el.classList.contains('btn-num')){ // esse codigo tudo que for clicado e for da classe btn-num vai executar o comando abaixo
                    this.btnParaDisplay(el.innerText)// aqui tava dando erro pq o this aqui é o document, pois ele estava chamando a função. Além disso ele está recebendo o valor do texto de cada botton clicado
                }
                //aqui se for clicado onde contenha essa classe btn-clear vai chamar o metodo clearDisplay
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                //aqui vai chamar o metodo deletaUm, se for clicado onde contenha a class btn-del
                if(el.classList.contains('btn-del')){
                    this.deletaUm()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
                this.display.focus()
            })          
        },

        btnParaDisplay(valor){
            this.display.value += valor // aqui vai fazer aparecer o texto de cada botton clicado com a class btn-num. OBS: aqui vai contatenar e não multiplicar
        }

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()
