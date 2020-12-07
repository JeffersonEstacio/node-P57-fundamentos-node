//Concepto basico de callback
setTimeout(function() {
    console.log('Hola chic@s');
}, 2000);
//Mandeme el id del usuario que quiere consultar y mandeme una funcion
//cuando yo termine de hacer el trabajo yo te llamo
let getUsuarioById = (id, callback) => {
        let usuario = {
                nombre: 'Samantha',
                //Si quieres que la propiedad de un objeto sea igual a una variable ponemos asi
                id: id
            }
            //El callback tiene que tener minimo un parametro para traer lo que esta pidiendo la funcion
        if (id === 20) {
            //Cuando se realize la tarea, entra el callback
            callback(`El usuario ${id} no existe`);
        } else {
            callback(null, usuario)
        }
    }
    //Dame buscando el usuario con id=10 y cuando termine traeme el usuario
getUsuarioById(20, (err, usuario) => {

    if (err) {
        console.log("ERROR:", err);
        return;
    }
    console.log("Usuario de la BDD: ", usuario);
});