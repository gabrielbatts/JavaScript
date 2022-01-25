function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()           
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    
    if (hora >= 0 && hora < 12){
        foto.innerHTML = '<img src = "Imagens/Manha.png">'
        
    }
    else if (hora >= 12 && hora < 18){
        foto.innerHTML = '<img src ="Imagens/Tarde.png">'
        document.body.style.background ='#6b5304'
    }
    else {
        foto.innerHTML = '<img src = "Imagens/Noite.png">'
        document.body.style.background = '#1f1708'
    }  

}