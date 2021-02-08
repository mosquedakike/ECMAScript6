const obj = {
    name: 'Enrique',
    age: 26,
    country: 'MX'
};

let {name, ...all} = obj
console.log(name, all);
