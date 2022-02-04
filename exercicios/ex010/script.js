function verificar(){
var data = new Date() // aqui é pra essa variável ficar com a data do sistema
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
var ft = document.getElementById('ft')
var corpo = document.body
if (fano.value.length == 0 || fano.value > ano){/* esse codigo fano.value.length == 0 serve para: se nenhum dados for digitado vai aparecer essa mensagem aqui abaixo, e se for menor que o ano atual tbm, o value em fano é necessario pq vai agregar o valor nele, no ano n precisa pq pega do sistema.*/
    alert('[ERRO] Dados incorretos, digite novamente!')
}
else{
    var fsex = document.getElementsByName('sexo') /* perceba que o get elements foi em byname pq por id nao dá, pois são 2 sexo */
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img') // aqui criou uma Tag <img> 
    img.setAttribute('id','foto') // aqui criou um id, pra tag img, com o nome foto

    if (fsex[0].checked) /* esse codigo quer dizer -> se a variavel que foi criada acima fsex estiver marcado (checked) na posicção [0] que é a primeira vai fazer esse comando abaixo */
    {
        genero = 'Homem'
        if (idade >= 0 && idade < 4){
            img.setAttribute('src','imagens/criança.png') // aqui estou colocando um src='imagens/criançaf.png a tag img
            corpo.style.background = '#97B5BC'
        }
        else if (idade >= 4 && idade < 19){
            img.setAttribute('src','imagens/menino.png')
            corpo.style.background = '#7070E8' /* OBS.: para adicionar esse  background eu precisei criar uma variável que dei o nome de corpo e adicionei o body pra ela -> var copo = document.body*/

        }
        else if (idade >= 19 && idade < 61){
            img.setAttribute('src','imagens/homem.png')
            corpo.style.background = '#CFCCC8'
        }
        else if (idade >= 61) {
            img.setAttribute('src','imagens/velho.png')
            corpo.style.background = '#5C5542'
        }
        
    }
    else if (fsex[1].checked){
        var genero = 'Mulher'
        if (idade >= 0 && idade < 4){
            img.setAttribute('src','imagens/criançaf.png')
            corpo.style.background = '#EDDDCA'
        }
        else if (idade >= 4 && idade < 19){
            img.setAttribute('src','imagens/menina.png')
            corpo.style.background = '#F55078'
        }
        else if (idade >= 19 && idade < 61){
            img.setAttribute('src','imagens/mulher.png')
            corpo.style.background = '#FABAB8'
        }
        else if (idade >= 61) {
            img.setAttribute('src','imagens/velha.png')
            corpo.style.background = '#B1ACA9'
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild (img) // esse codigo é para aparecer o conteúdo logo abaixo do de cima
}
}