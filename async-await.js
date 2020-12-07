/*let getNombre = async() => {
    throw new Error('No existe el dato solicitado');
    return "Rodrigo";
}*/

let getNombre = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rodrigo");
        }, 2000);
    });
}

/*let getNombre = () => {
    return new Promise((resolve, reject) => {
        resolve("Rodrigo");
    });
}*/

let saludar = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

/*
getNombre().then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log(e.message);
});
*/

saludar().then(mensaje => {
    console.log(mensaje);
});

console.log("Probando...");

//********************************