/* let name = 'Enrique'
let age = 26
//es5
obj = {
    name: name,
    age: age
}
//es6
obj2 = {name, age}

console.log(obj);
console.log(obj2);

const people = [
   { name: 'Enrique', age: 26 },
   { name: 'Erika', age: 22 }
];

//es5
let listOfPeople = people.map(function (item) {
    console.log(item.name);
})

let listOfPeople2 = people.map(item => { console.log(item.name)})

const listOfPeople3 = (name, age) => {
    ...
}

const listOfPeople4 = name => {
    ...
}

//es6
const square = num => num * num;


const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('La promesa se ejecuto con éxito')
        }else{
            reject('Algo salio mal')
        }
    }); 
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('Este es el segundo then'))
.catch(error => console.log(error));
*/

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    //metodo sum
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(5,10));


import { hello }  from './module';

hello();

function* helloWorld() {
    if (true) {
        yield 'Hello,'
    }if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);