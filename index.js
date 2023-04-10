const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];

console.log('Array Original')
console.log(personajesSimpsons)


console.log('Ahora paso a filtrar los menores de 18')
const pernajesMenoresEdad = personajesSimpsons.filter(personajesSimpsons => personajesSimpsons.edad <18);

console.log(pernajesMenoresEdad)

console.log("-----------------------------------------------")
console.log("---------------SEGUNDO EJERCICIO---------------")
console.log("-----------------------------------------------")

const resultadoAcumuladoEdad = personajesSimpsons.reduce((acumulador, personajesSimpsons) => acumulador + personajesSimpsons.edad,0);

console.log("El total de las edades acumuladas es " + resultadoAcumuladoEdad)

console.log("----------------------------------------------")
console.log("---------------TERCER EJERCICIO---------------")
console.log("----------------------------------------------")

const arrayNombre = personajesSimpsons.map(personajesSimpsons => {
    return personajesSimpsons.nombre
})
console.log(arrayNombre)