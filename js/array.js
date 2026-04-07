let productos = []

let cont = 0;
let cant = prompt("¿Cuantos productos quieres agregar?");

while(cont < cant){
    cont++
    let pro = prompt(`Que producto quieres agregar #${cont}?`);
    productos.push(pro);
}


console.log(productos);