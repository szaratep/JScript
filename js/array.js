//productos

/*
let productos = []

let cont = 0;
let cant = prompt("¿Cuantos productos quieres agregar?");

while(cont < cant){
    cont++
    let pro = prompt(`Que producto quieres agregar #${cont}?`);
    productos.push(pro);
}


console.log(productos);
*/

//promedio

let notas = [];
let cont = 0;
let prom = 0;
let i = 0;
let cant = Number(prompt("¿Cuantas notas quieres agregar?"));

while(cont < cant){
    i++
    let pro = Number(prompt(`Dame la nota #${i}`));
    notas.push(pro);
    prom = prom + notas[cont];
    cont++
}

console.log(notas);
console.log("El promedio es:" , prom/notas.length);