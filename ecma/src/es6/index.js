function newFunction(name, age, country) {
    var name = name || 'Enrique'
    var age = age ||  25
    var country = country || 'Memxico'
    console.log(name, age, country);
}

//es6
function newFunctionTwo(name = 'Luis', age = 28, country = 'Morelos') {
    console.log(name, age, country);
}

newFunction();
newFunctionTwo('Pablo', 49, 'bogota');

//versiones previas a ES6
let hello = 'Hello'
let world = 'World'
let comment = hello + ' ' + world
console.log(comment);

//es6
let commentTwo = `${hello} ${world}`
console.log(commentTwo);

//multilineas en versiones previas
let lorem = 'Esto es una frase \n' + 'Otra parrafo concatenado'

//em6
let loremTwo = `segunda parrafo
esto ya es otra linea en el codigo`

console.log(lorem);
console.log(loremTwo);


//destructuracion de elementos
let person = {
    'name': 'enrique',
    'age': 26,
    'country': 'MX' 
}

console.log(person.name, person.age, person.country);

let {name, age, country} = person2;
console.log(name, age, country);