let res = document.querySelector('#res')
const elementos = [
   {tag: 'p', texto: 'Qualquer Coisa'},
   {tag: 'div', texto: 'Frase 2'},
   {tag: 'section', texto: 'frase 3'},
   {tag: 'footer', texto: 'frase 4'}
]
// esse código cria as tag através da estrutura de repetição combinado com objeto
for (let c in elementos){
    let {tag, texto} = elementos[c] // vai pegar o valor do objeto elementos
    let TagCriada = document.createElement(tag) // vai criar as tag de acordo com o valor de cada valor contido no objeto elementos nas tag 
    TagCriada.innerText = texto // vai atribuir o texto do objeto la em cima para essa variável
    res.appendChild(TagCriada) // vai aparecer na tela do document 
}
    
