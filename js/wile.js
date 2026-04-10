let number = Number(prompt('Cuantos años quieres evaluar?'))
let i = 0;

while( i < number){
    let year = Number(prompt('Dime el año:'))

    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? console.log(`El año ${year}, es bisiesto`): console.log(`El año ${year}, no es bisiesto`)
    i++;
}