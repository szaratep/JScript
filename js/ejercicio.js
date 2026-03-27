let precio = Number(prompt('Dame el valor de la cena: '));
let personas = Number(prompt('Dime cuantas personas son: '));
let comelon = prompt('Dime la persona que mas comio');
let esqueleto = prompt('quien comio menos');

let cadaUno = precio / (personas + 1);
let comeResult = precio * 2 / (personas +1);

console.log(`
    la cuenta es: ${precio}

    La persona que mas comio es: ${comelon} y tiene que pagar: ${comeResult.toFixed()}

    La persona que comio menos es: ${esqueleto} y tiene que pagar ${comeMenos.toFixed()} 

    Son: ${personas}
    Los demas tienen que pagar: ${cadaUno.toFixed()}`)