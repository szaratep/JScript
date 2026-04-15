//numero *2

export function multipli (numeros){
    let multiplos = []
    for (let i = 0; i < numeros.length; i++) {
        multiplos.push(numeros[i] * 2)
    }

    console.log(multiplos);
}

//Un hola por cada numero

export function saludos (numeros){
    let holas = []
    for (let i = 0; i < numeros.length; i++) {
        holas.push("hola")
    }

    console.log(holas);
}

//numero par o impar

export function parOimpar (numeros){
    let par = []
    let impar = []
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] % 2 === 0 ? par.push(numeros[i]) : impar.push(numeros[i])
    }

    console.log('los pares son: ' + par)
    console.log('los impares son: ' + impar)
}