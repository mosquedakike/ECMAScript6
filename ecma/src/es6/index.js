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
newFunctionTwo('juan', 49, 'bogota');

// Templates
let hello = 'Hello'
let world = 'World'
let comment = hello + ' ' + world
console.log(comment);

//templates literals
let commentTwo = `${hello} ${world}`
console.log(commentTwo);

