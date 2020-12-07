//Templates literales
let nombre = 'Spiderman';
let nombreReal = "Peter Parker";

let nombreCompleto1 = nombre + " - " + nombreReal;
//Concatenacion
let nombreCompleto = `${nombre} - ${nombreReal}`;

//console.log(nombreCompleto);

//la comparacion con 2 iguales comparas los espacios en memoria
//y con tres iguales comparas el tipo de dato y valor

//console.log(nombreCompleto === nombreCompleto1);

//console.log('1' === 1);

function getNombre() {
    return `${nombre} - ${nombreReal}`;
}

//Templates literales con esto podemos concatenar 
//una cadena de string con una funcion

console.log(`El nombre de ${getNombre()}`);