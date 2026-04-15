/*
let nombre = prompt('Dime tu nombre');
let precio = Number(prompt('Dime el precio de la compra'));
let cantidadDescuento = Number(prompt('de cuanto quieres el descuento?'));
let descuento = precio * (cantidadDescuento / 100);
precio -= descuento;
console.log(`tu precio final es: ${precio}`);

//si es menor a 100 +10
//si es de 100 - 200 -10
//si es mayor a 200 -20

if (precio < 0) {
    console.log('Precio Invalido');
} else if (precio == 0) {
    console.log('te invito a comprar algo ya que aun no tienes precio');
} else if (precio < 100) {
    console.log(precio += precio * 0.1);
} else if (precio >= 100 && precio < 200) {
    console.log(precio -= precio * 0.1);
} else {
    console.log(precio -= precio * 0.2);
};

alert('hola, puedes convertir de km a m y viceversa');
let tipo = prompt('Que quieres convertir');

if (tipo == ''){
    console.log('Necesito una unidad de medida valida');
} else if(tipo == 'km'){
    let valor = Number(prompt('Dame tu valor en m: '));
    if(valor < 0){
        console.log('necesito un valor valido');
    }else{
        console.log('tu valor en m es:', valor *= 1000);
    }
}else{
    let valor = Number(prompt('Dame tu valor en m: '));
    if(valor < 0){
        console.log('necesito un valor valido');
    }else{
        console.log('tu valor en km es:', valor /= 1000);
    }
    
};
*/

import { numeros } from "./data.js";
import { multipli, parOimpar, saludos } from "./functions.js";


//-------------- Modular - Funciones -----------------
multipli(numeros)
saludos(numeros)
parOimpar(numeros)