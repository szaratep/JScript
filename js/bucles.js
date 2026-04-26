const names = [
    {
        nombres: 'Sebastian',
        apellidos: 'Zarate Pinilla',
        edad: '20',
        altura: '173',
        peso: '81'
    },
    {
        nombres: 'Javier',
        apellidos: 'Angulo',
        edad: '34',
        altura: '165',
        peso: '50'
    },
    {
        nombres: 'Alejandro',
        apellidos: 'Velandia Junguito',
        edad: '19',
        altura: '170',
        peso: '56'
    }
];

/*
for (let i = 0; i < names.length; i++) {
     console.log(names[i].nombres)
}
*/

/*
for ( let name of names){
    console.log(name.nombres)
}
*/

/*
for ( let name of names){
    let nombre = name.nombres;
    let peso = name.peso;
    let altura = name.altura;

    altura = altura/100

    console.log(`Nombre: ${nombre}, IMC: ${peso / (altura * altura)}`);
}
*/

/*
function calcular_imc(list) {
    for (let value of list) {
        let nombre = value.nombres;
        let peso = value.peso;
        let altura = value.altura;

        altura = altura / 100

        console.log(`Nombre: ${nombre}, IMC: ${peso / (altura * altura)}`);
    }
}

calcular_imc( names );
*/

function calcular_imc (peso, altura){
    altura = altura/100
    return peso / (altura ** 2);
}

function validar (imc){
    if (imc < 0){
        throw new Error(`EL imc ingresado es, invalido ${imc}`)
    }else if (imc < 18.5){
        return 'Peso inferior al normal'
    }else if (imc < 24.9){
        return 'Peso normal'
    }else if (imc < 29.9){
        return 'Peso superior a lo normal'
    }else{
        return 'Obesidad'
    }
}

for (let value of names){
    console.log (`Hola, ${value.nombres}, tienes un: ${validar(Number(calcular_imc(value.peso, value.altura).toFixed(2)))}`)
}

/*
for(let value of names){
    let imc = calcular_imc(value.peso, value.altura)
    if (imc >= 30.0){
        console.log(`${value.nombres} tu IMC es: ${imc} y estas en Obesidad`)
    }else if (imc >= 25.0 && imc <= 29.9){
        console.log(`${value.nombres} tu IMC es: ${imc} y estas en Peso superior al normal`)
    }else if (imc >= 18.5 && imc <= 24.9){
        console.log(`${value.nombres} tu IMC es: ${imc} y estas en Peso Normal`)
    }else{
        console.log(`${value.nombres} tu IMC es: ${imc} y estas en Peso Inferior al normal`)
    }
}
*/