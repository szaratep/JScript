// POR FAVOR COMENTAR Y DESCOMENTAR CADA VEZ QUE SE UTILICE O SE PRUEBE EL EJERCICIO

// - convertidor a edad canina
let edad = Number(prompt('Dame la edad'));
let edadPerruna = 7;
console.log(`La edad canina es: ${edad * edadPerruna}`);

// - convertidor de pesos a dólares
let dolar = Number(prompt('¿Cuántos dólares quieres cambiar?'));
const tasa = 3693.19;
alert('La tasa de cambio a día de hoy es: 3,693.19 COP');

console.log(`El total en COP es: ${dolar * tasa}`);

// - convertidor de grados Celsius a Fahrenheit
let cel = Number(prompt('Dame los grados Celsius'));
let result = (cel * (9/5)) + 32;

console.log(`Los grados Fahrenheit son: ${result}`);

// - calcula el área de un cuadrado 
let altura = Number(prompt('Dame la altura del cuadrado'));
let base = Number(prompt('Dame la base del cuadrado'));

console.log(`El área del cuadrado es: ${base * altura}`);

// - calcular el perímetro de un cuadrado
let lado = Number(prompt('Dame un lado del cuadrado'));

console.log(`El área del cuadrado es: ${4 * lado}`);

// - convertidor de minutos a segundos
let min = Number(prompt('Dame los minutos'));

console.log(`Los segundos son: ${min * 60}`);

// - convertidor de segundos a minutos
let seg = Number(prompt('Dame los segundos'));

console.log(`Los minutos son: ${seg / 60}`);

// - área de un triángulo
let baseTri  = Number(prompt('Dame la base del triángulo'));
let alturaTri = Number(prompt('Dame la altura del triángulo'));

console.log(`El área del triángulo es: ${(baseTri * alturaTri) / 2}`);

// - convertidor de milímetros a centímetros
let milimetros = Number(prompt('Dame los milímetros:'));

console.log(`Los centímetros son: ${milimetros / 10}`);