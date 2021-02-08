//es8
const data = {
    frontend: 'Enrique',
    backend: 'Luis',
    design: 'Ana',
}

//contenido del objeto
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//valores
const values = Object.values(data)
console.log(values);
console.log(values.length);

//padStart & padEnd
const cadena = 'hello'
console.log(cadena.padStart(7,'hi'));
console.log(cadena.padEnd(12,'------------'));


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
           ? setTimeout(() => resolve ('Hello world'), 3000)
           : reject(new Error('Esto es un error'));
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();