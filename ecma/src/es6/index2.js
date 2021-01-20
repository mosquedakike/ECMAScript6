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
*/

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