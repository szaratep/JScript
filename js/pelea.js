/*
1.el programa calcula cuanto peso debe de cortar
dependiendo de la categoria, tiene que deucirle 
cuanto tiene que cortar y en que categoria competir 
ademas de dale las calorias que consume
*/


let edad = Number(prompt('Dime que edad tienes'));
let sexo = prompt('Dime tu sexo');
let peso = Number(prompt('Dime tu peso actual (kg)'));
let altura = Number(prompt('Dime tu altura en (cm)'));

if(sexo == 'hombre'){
    let tmb = (10*peso) + (6.25*altura) - (5 * edad) + 5
    let kalDia = tmb * 1.9
    if(peso == 120.2){
        console.log('Peso Mosca')
    }
}else{
    let tmb = (10*peso) + (6.25*altura) - (5*edad) -161
    let kalDia = tmb * 1.9
}