let monto = Number(prompt('dame el monto'))
let meses = Number(prompt('dame los meses'))
const interes = 0.1;
let interesxMes = 0.1/12

console.log(`
    El monto original es ${monto}
    
    el interes por mes es: ${interesxMes}

    el interes generado es: ${monto*(meses*interesxMes)}

    el monto total es: ${monto+(monto*(meses*interesxMes))}
    `)
