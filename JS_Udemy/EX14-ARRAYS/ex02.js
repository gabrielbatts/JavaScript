//               -5       -4        -3         -2        -1
//  Indices       0        1         2          3         4
const nomes = ['Julia', 'Maria', 'Ricardo', 'Mariana', 'Diego']
// nomes.splice(indice, delete, addElement1, addElement2, addElement3 e assim por diante)
// o splice fazendo a função do pop 
const removidos = nomes.splice(2, 0, 'Cabral') // Aqui no indice 2 adicionou Cabral, e Ricardo virou indice 3
console.log(nomes)
