// Declaracion tradicional
function suma(a, b) {
    return a + b;
}

console.log(`La suma de 3 + 4 = ${suma(3,4)}`);

// Declaracion funcion flecha

/*let sumar = (a, b) => {
    return a + b;
}
console.log(`La suma de 5 + 9 = ${sumar(5,9)}`);*/

// Otra
let sumar = (a, b) => a + b;
console.log(`La suma de 5 + 9 = ${sumar(5,9)}`);

//
let superman = {
    nombre: 'Clark',
    apellido: 'Ken',
    poder: 'Volar',
    getNombre: () => {
        return `${superman.nombre} ${superman.apellido} - poder: ${superman.poder}`
    }
};

console.log(superman.getNombre());