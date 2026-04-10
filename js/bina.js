//NO COLOCAR MAS DE 500 Y MENOS DE 1

let array = Array.from({ length: 500 }, (_, i) => i + 1);
let bajo = 0;
let alto = array.length - 1;
let number = Number(prompt('Dame un numero del 1 al 500.........'))
let found = false;

while(bajo <= alto){
    let mit = Math.floor((alto + bajo)/2);
    if (array[mit] === number){
        console.log(`El numero esta en el index: ${mit}`);
        found = true;
        break;
    }else if (number < array[mit]){
        alto = mit - 1;
    }else{
        bajo = mit + 1;
    }
}

if (!found){
    console.log('numero no encontrado');
}

