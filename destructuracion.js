/*Creacion  de un objeto
abrimos llave y ponemos el atributo o valor
mas conocido como formato json*/
//Este atributo de objeto por eso usamos el this
let superman = {
    nombre: 'Clark',
    apellido: 'Ken',
    poder: 'Volar',
    //Asi se declara un método (tenemos un objeto)
    getNombre: function() {
        //Usamos this para hacer la llamada de la variable qu queremos pero 
        //del objeto superman en especifico, porque con this hacemos el llamado
        //a lo que esta encima de él
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};
//Para impirmir un objeto lo declaramos y llamamos el método
console.log(superman.getNombre());
/*Podemos crear objetos para citar especificamente un
atributo ya definido en otra estancia de codigo*/
let nom = superman.nombre;
let ape = superman.apellido;
let pod = superman.poder;

console.log('nombre', nom);
//Destructuracion
//La destructuración nos sirve para llamar objetos de otras partes
let { nombre: primerNombre, apellido, poder } = superman;

console.log(primerNombre, apellido, poder);

//Creando uan referencia al mismo objeto
let superman2 = superman

superman.nombre = 'Juan'

console.log(superman.nombre, superman2.nombre);

//Copiando objetos
let superman3 = {...superman }

superman.nombre = 'Pepe'

console.log(superman.nombre, superman2.nombre, superman3.nombre);