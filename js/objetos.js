const estudiantes = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    notas: [4.5, 3.8, 4.2, 4.0]
  },
  {
    nombre: "María",
    apellido: "Gómez",
    notas: [3.5, 3.8, 3.9, 4.1]
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez",
    notas: [2.5, 2.8, 3.0, 2.9]
  },
  {
    nombre: "Laura",
    apellido: "Martínez",
    notas: [4.8, 4.9, 5.0, 4.7]
  },
  {
    nombre: "Andrés",
    apellido: "López",
    notas: [3.0, 3.2, 3.5, 3.3]
  }
];
let suma = 0;
let promedio = 0;

for(let i = 0; i < estudiantes.length; i++){
    let name = estudiantes[i].nombre + ' ' +estudiantes[i].apellido;
    suma = 0;

    for(let j = 0; j < estudiantes[i].notas.length; j++){  
        suma += estudiantes[i].notas[j];
    }

    promedio = suma / estudiantes[i].notas.length

    if (promedio < 3){
        console.log(`El estudiante: ${name} perdio con una nota de: ${promedio}`)
    } else if(promedio <= 5 && promedio >= 3.5){
        console.log(`El estudiante: ${name} paso con una promedio de: ${promedio}`)
    }else{
        console.log(`El estudiante: ${name} tiene que nivelar con una promedio de: ${promedio}`)
    }
}