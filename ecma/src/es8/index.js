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