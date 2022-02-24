const pessoa = { // obejeto criado 
    nome: 'Erica',           
    sobrenome: 'Dolores',   
    idade: 30              
}

for (let chave in pessoa){ // o for in tbm serve para objeto
    console.log(chave, pessoa[chave]) 
}
