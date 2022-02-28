const result = document.querySelector('#result')
const text = document.querySelector('#txtl')
const btnTarefas = document.querySelector('#adicionar')


function criaLi(){ // função só para criar o elemento li
    const li = document.createElement('li')
    return li
}
// Esse codigo abaixo, foi criado um evento o qual quando for pressionado a tecla enter vai executar a função criaTarefa
text.addEventListener('keypress', function(e){ 
    if (e.keyCode === 13){ // 13 é o keyCode da tecla enter
        return criaTarefa(text.value)
    }
})

btnTarefas.addEventListener('click',function(){ //Aqui estou adicionando uma tarefa para o botão atraves do evento de clicar 
    return criaTarefa(text.value) //aqui ta jogando o que foi escrito para a função cria tarefa, a qual vai fazer aparecer
})

function criaTarefa(textImput){// essa função está capturando o texto escrito no input text e jogando colocando para aparecer
    const li = criaLi() // essa const li esta sendo atribuida à ela a function criaLi, a qual cria uma linha na lista
    li.innerHTML = textImput // aqui esta sendo atribuída o texto digitado  da função do btnTarefas
    result.appendChild(li) // isso vai fazer aparecer no navegador
    limpaImput() // chamando a função para limpar a caixa de input
    criaBotaoApagar(li)
    salvarTarefa()
}

function limpaImput(){// essa função é para limpar o texto depois de enviado
    text.value = '' // adicionando nada a const text
    text.focus()   // e aqui esta determinando aonde é 
}


function criaBotaoApagar(li){
    li.innerHTML += `  `
    const botaoApagar = document.createElement('button') // cria uma tag button
    botaoApagar.innerHTML = 'Apagar' // colocar o nome Apagar dentro da tag
    botaoApagar.setAttribute('class', 'apagar') // cria uma class com o nome apagar
    botaoApagar.setAttribute('title', 'Apagar esta tarefa') // quando passar o mouse em cima vai aparecer essa mensagem
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function(e){// nesse evento vai capturar o click
    const el = e.target // aqui captura o click e joga na const
    if (el.classList.contains('apagar')){ // se onde foi clicado tem a class apagar execut o codigo abaixo
        el.parentElement.remove() // vai remover o pai do elemento clicacdo, o qual é o button apagar
        salvarTarefa()
    }
})

function salvarTarefa(){
    const liTarefas = result.querySelectorAll('li') // const criada e armazenada tds os li
    const listaDeTarefas = [] // array criada para armazenar os textos de  li
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText // recebe o texto que contem em cada li
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() // o replace substitui a palavra apagar por ''. o trim() serve para tirar o espaço sobrando
        listaDeTarefas.push(tarefaTexto) // é adicionado o texto de cada li para esse array
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas) // essa const vai armazena os dados em formato string do json
    localStorage.setItem('Tarefas', tarefasJSON)// aqui vai armazenar os dados da const a cima, no mini banco de dados do navegador. o nome Tarefas que eu dei pode ser qualquer um é a palavra chave do dados armazenado.
}

function adicionarTarefas(){
    const tarefas = localStorage.getItem('Tarefas') // essa const esta recebendo os dados armazenados do navegador
    const listaDeTarefas = JSON.parse(tarefas)// essa const está recebendo o valor de tarefas de const de cima e transformando em objeto, pq o JSON.stringify transforma os valores em string

    for (let tarefa in listaDeTarefas){
        criaTarefa(tarefa) // vai criar tarefas como base nos dados armazenados
    }
}
adicionarTarefas()