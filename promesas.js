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

let getEmpleado = (id) => {
    //El resolve se activara cuando todo lo que este definido dentro se cumple de manera correcta
    //Y el reject lo contrario
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(obj => obj.id === id);

        if (empleadoDB) {
            resolve(empleadoDB);
        } else {
            reject(`No existe el empleado con id ${id}`);
        }
    });

}

getEmpleado(10).then(empleado => {
    console.log(`Empleado de BD ${empleado.nombre}`);
}, (err) => {
    console.log("Error:", err);
});

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDBB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDBB) {
            reject(`No hay un salario definido para ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDBB.salario });
        }
    });
}

/*getEmpleado(6).then(empleado => {
    getSalario(empleado).then(respuesta => {
        console.log(`El salario de ${respuesta.nombre} es $ ${respuesta.sueldo}`);
    });
}, (err) => {
    console.log(err);
}, (err) => {
    console.log("Error:", err);
});*/

//Promesas en cascada
getEmpleado(20).then(empleado => {
    return getSalario(empleado);
}).then(respuesta => {
    console.log(`El salario de ${respuesta.nombre} es $ ${respuesta.salario}`);
}).catch(err => {
    console.log(err);
});