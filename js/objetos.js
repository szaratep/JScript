const estudiantes = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    notas: [4.5, 3.8, 4.2, 4.0],
    semestre: 3,
    precioSemestre: 2500000
  },
  {
    nombre: "María",
    apellido: "Gómez",
    notas: [3.5, 3.8, 3.9, 4.1],
    semestre: 5,
    precioSemestre: 2800000
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez",
    notas: [2.5, 2.8, 3.0, 2.9],
    semestre: 2,
    precioSemestre: 2300000
  },
  {
    nombre: "Laura",
    apellido: "Martínez",
    notas: [4.8, 4.9, 5.0, 4.7],
    semestre: 7,
    precioSemestre: 3000000
  },
  {
    nombre: "Andrés",
    apellido: "López",
    notas: [3.0, 3.2, 3.5, 3.3],
    semestre: 1,
    precioSemestre: 2200000
  }
];
let suma = 0;
let promedio = 0;
let aumento = 0;

for(let i = 0; i < estudiantes.length; i++){
    let name = estudiantes[i].nombre + ' ' +estudiantes[i].apellido;
    suma = 0;
    aumento = 0;

    for(let j = 0; j < estudiantes[i].notas.length; j++){  
        suma += estudiantes[i].notas[j];
    }

    promedio = suma / estudiantes[i].notas.length

    if (promedio < 3){
        aumento = estudiantes[i].precioSemestre * 0.2
        console.log(`El estudiante: ${name} perdio con una nota de: ${Math.trunc(promedio)}`)
        console.log(`Tiene que repetir el semestre ${estudiantes[i].semestre}, con un valor del 20% adicional, es decir: ${Math.trunc(estudiantes[i].precioSemestre + aumento)} \n`)
    } else if(promedio <= 5 && promedio >= 3.5){
        aumento = estudiantes[i].precioSemestre * 0.2
        console.log(`El estudiante: ${name} paso con una promedio de: ${Math.trunc(promedio)}`)
        console.log(`Pasa a el semestre ${estudiantes[i].semestre+1}, con un descuento del 20%, es decir: ${Math.trunc(estudiantes[i].precioSemestre - aumento)} \n`)
    }else{
        console.log(`El estudiante: ${name} tiene que nivelar con una promedio de: ${Math.trunc(promedio)}`)
        console.log(`Tiene que nivelar el semestre ${estudiantes[i].semestre}, con un precio de: ${estudiantes[i].precioSemestre} \n`)
    }
}