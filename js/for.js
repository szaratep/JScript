/*
let numeros = [2, 5, 8, 9,10, 25, 15, 6, 8, 4, 20]

let par = []
let impar = []

for(let i=0; i < numeros.length; i++){
    if(numeros[i]%2 == 0){
        par.push(numeros[i])
    }else{
        impar.push(numeros[i])
    }
}

console.log(par);
console.log(impar);
*/

let tabla = Number(prompt('Dime que tabla quieres hacer?'))
let rango = Number(prompt('Dime hasta que numero quieres multiplicar?'))

if (tabla < 0 || rango < 0) {
    console.log('recuerda que los valores son positivos')
} else if (tabla >= 11) {
    console.log('recuerda que las tablan pueden ir hasta el 10');
} else if (rango == 0) {
    console.log('Coloca un dijito mayor a 0')
} else {
    console.log(`la tabla del: ${tabla}, hasta el ${rango}
----------------------------------------`)
    for (let i = 1; i < rango + 1; i++) {
        console.log(`${tabla} * ${i} = ${i * tabla}`)
    }
}


