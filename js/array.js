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
let cant = Number(prompt("¿Cuantas notas quieres agregar?"));

while(cont < cant){
    cont++
    let pro = Number(prompt(`Dame la nota #${cont}`));
    notas.push(pro);
    prom = prom + pro;
}

console.log(notas);
console.log(prom/notas.length);