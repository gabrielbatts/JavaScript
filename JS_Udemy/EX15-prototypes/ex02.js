//
const objA = { // new Object -> Object.prototype
    chaveA: 'A'
}
const objB = {
    chaveB: 'B'
}
const objC = {
    chaveC: 'C'
}
Object.setPrototypeOf(objB, objA) // o objeto A vira herança do objeto B
Object.setPrototypeOf(objC, objB) // o objeto B e A vira herança do Objeto C