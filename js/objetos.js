const estudiantes = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    notaFinal: 4.5
  },
  {
    nombre: "María",
    apellido: "Gómez",
    notaFinal: 3.8
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez",
    notaFinal: 2.9
  },
  {
    nombre: "Laura",
    apellido: "Martínez",
    notaFinal: 4.9
  },
  {
    nombre: "Andrés",
    apellido: "López",
    notaFinal: 3.2
  }
];


for(let i = 0; i < estudiantes.length; i++){
    let name = estudiantes[i].nombre + ' ' +estudiantes[i].apellido
    let nota = estudiantes[i].notaFinal

    if (nota < 3){
        console.log(`El estudiante: ${name} perdio con una nota de: ${nota}`)
    } else if(nota <= 5 && nota >= 3.5){
        console.log(`El estudiante: ${name} paso con una nota de: ${nota}`)
    }else{
        console.log(`El estudiante: ${name} tiene que nivelar con una nota de: ${nota}`)
    }
}