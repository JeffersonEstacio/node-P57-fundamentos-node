//Vector de objetos
let empleados = [{
        id: 1,
        nombre: 'Samantha'
    },
    {
        id: 2,
        nombre: 'Kate'
    },
    {
        id: 3,
        nombre: 'Ariel'
    }
];

let salarios = [{
        id: 1,
        salario: 600
    },
    {
        id: 2,
        salario: 3000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(obj => obj.id === id);

    if (empleadoDB) {
        callback(null, empleadoDB);
    } else {
        callback(`No existe el empleado con id ${id}`);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDBB = salarios.find(obj => obj.id === empleado.id);

    if (salarioDBB) {
        callback(null, { nombre: empleado.nombre, sueldo: salarioDBB.salario });
    } else {
        callback(`No hay un salario definido para ${empleado.nombre}`);
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log("ERROR:", err);
    }
    //console.log("Empleado hallado:", empleado.nombre);
    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log("ERROR:", err);
        }
        console.log(`El salario de ${respuesta.nombre} es $ ${respuesta.sueldo}`);
    })
});