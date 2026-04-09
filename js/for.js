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

/*
let tabla = Number(prompt('Dime que tabla quieres hacer?'))
let rango = Number(prompt('Dime hasta que numero quieres multiplicar?'))

if (tabla >= 11 && tabla <= 0 || tabla <= 0 || rango <= 0) {
    console.log('Coloca por lo menos un valor mayor a 1 y menor o igual a 10 y ademas tienen que ser positivos');
} else {
    console.log(`la tabla del: ${tabla}, hasta el ${rango}
----------------------------------------`)
    for (let i = 1; i <= rango; i++) {
        console.log(`${tabla} * ${i} = ${i * tabla}`)
    }
}
*/

/*

let numeros = [2, 25, 45, 100, 8, 5]
let suma = 0;


for(let i = 0; i < numeros.length; i++){
    suma += numeros[i]
}
console.log(suma);

let mayor = 0;
let menor = 0;

for(let i = 0 ; i < numeros.length; i++){
    if (i === 0) {
        mayor = numeros[i];
        menor = numeros[i];
    }

    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log('el numero mayor:' ,mayor)
console.log('el numero menor:' ,menor

)

*/

let ar = ['juego1', 'jugando', 'comiendo', 'estudiando', 'javaScript', 'codigoss', 'ho', 'h']
let max = 0;
let min = 0;
let palMax = '';
let palMin = '';
let revez = [];

for(let i = 0; i < ar.length ; i++){
    console.log(`La palabla ${ar[i]} tiene: ${ar[i].length} letras`);

    if (ar[i].length > max){
        max = ar[i].length
        min = ar[i].length
        palMax = ar[i]
    }

    
    if (ar[i].length < min){
        min = ar[i].length
        palMin = ar[i]
    }

    revez.unshift(ar[i])


}

console.log(`La palabra mas Larga es: ${palMax}`)
console.log(`La palabra mas corta es: ${palMin}`)

console.log(`array original: ${ar}`)
console.log(`array original: ${revez}`)
