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

/*
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
*/

/*
1. preguntar al usuario cuanto costo el producto
2. si el producto cuesta - 100 se suma el 10$
3. si el producto cuesta entre 100 y 200 - 10%
4. si el producto cuesta mas de 200 - 25%
*/

/*
let precio = Number(prompt('Dame el precio del producto'))

if (precio <= 0) {
    console.log('Precio Invalido');
} else if (precio < 100) {
    console.log(precio += precio * 0.1);
} else if (precio >= 100 && precio < 200) {
    console.log(precio -= precio * 0.1);
} else {
    console.log(precio -= precio * 0.25);
};
*/

/*
let con = true;

while(con == true){
    let number1 = Number(prompt('Dame el primer numero'));
    let number2 = Number(prompt('Dame el primer numero'));
    
    let operacion = Number(prompt(
        `
        ¿Que operacion quieres hacer?
        1) Suma
        2) Resta
        3) Multiplicacion
        4) Division
        5) Potencia
        6) Par o Impar
        7) cancelar
        `))
    
    if(operacion > 7 ){
        alert('numero invalido');
    }
    else if(operacion == 1 || operacion == 'Suma'){
        console.log(number1 + number2);
        con = false;
    }else if(operacion == 2 || operacion == 'Resta'){
        console.log(number1 - number2);
        con = false;
    }else if(operacion == 3 || operacion == 'Multiplicacion'){
        console.log(number1 * number2);
        con = false;
    }else if(operacion == 4 || operacion == 'Division'){
        console.log(number1 / number2);
        con = false;
    }else if(operacion == 5 || operacion == 'Potencia'){
        console.log(number1 ** number2);
        con = false;
    }else{
        if((number1%2) == 0){
            console.log('El numero 1 es par ');
            con = false;
        }else{
            console.log('El numero 1 es impar');
            con = false;
        }
        
        if((number2%2) == 0){
            console.log('El numero 2 es par ');
            con = false;
        }else{
            console.log('El numero 2 es impar');
            con = false;
        }
    }

    if(operacion == 7){
        con = false;
    }else{
        con = true
    }
}
*/

let option = ['piedra', 'papel', 'tijera'];
let azar = Math.floor(Math.random( ) * 3);
let resultUser = [];
let resultPc = [];
let computer = option[azar];
let ganaUs = 0;
let ganaPc = 0;
let empate = 0;

for(let i=0; i < 3; i++){
    let user = prompt('Escoge una entre: piedra papel o tijera')
    resultUser.push(user);
    let pc = computer;
    resultPc.push(pc)
}

console.log(`Resultado pc ${resultPc}`)
console.log(`Resultado user ${resultUser}`)

for(let i=0; i < 3; i++){
    if(resultPc[i] == 'tijera' && resultUser[i] == 'papel' || resultPc[i] == 'piedra' && resultUser[i] == 'tijera' || resultPc[i] == 'papel' && resultUser[i] == 'piedra'){
        ganaPc++;
    }else if(resultUser[i] == 'tijera' && resultPc[i] == 'papel' || resultUser[i] == 'piedra' && resultPc[i] == 'tijera' || resultUser[i] == 'papel' && resultPc[i] == 'piedra'){
        ganaUs++;
    }else{
      empate++;  
    };
}

console.log(ganaPc);
console.log(ganaUs);
console.log(empate);  

if(ganaPc == 1 && ganaUs == 1 && empate == 1){
    console.log('Es un empate')
}else if(ganaPc >= 2){
    console.log('El ganador es: Hoffman')
}else{
    console.log('El ganador es: Clancy')
}