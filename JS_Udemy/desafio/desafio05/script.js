function Calculadora(){
    this.display = document.querySelector('.display')
    this.inicia = () =>{        
        this.capturaClick()
        this.pressionaEnter()
    }
    this.addNumDisplay = el =>{ 
        this.display.value += el.innerText
        this.display.focus()}
        //aqui coloquei o focus() para quando for adicionado um numero o focus permanecer no display
    this.deletaUm = () => this.display.value = this.display.value.slice(0, -1)
    this.clearDisplay = () => this.display.value = ''
    this.realizaConta = () => {
        try{
           let conta = this.display.value           
           if(!conta){
               alert('Conta inválida!')
               return
           }
           this.display.value = eval(conta)
        }
        catch (e){
            alert('Conta Inválida!')
            return
        }
    }
    this.pressionaEnter = () =>{
        document.addEventListener('keypress', event =>{
            if(event.keyCode === 13) this.realizaConta()
        })
    }
    this.capturaClick = () =>{
        document.addEventListener('click', event =>{
            const el = event.target
            if(el.classList.contains('btn-num')) this.addNumDisplay(el)
            if(el.classList.contains('btn-del')) this.deletaUm() 
            if(el.classList.contains('btn-clear')) this.clearDisplay()  
            if(el.classList.contains('btn-eq')) this.realizaConta()           
            
        })
    }
}
const calculadora = new Calculadora()
calculadora.inicia()