//NO COLOCAR MAS DE 500 Y MENOS DE 1

let array = Array.from({ length: 500 }, (_, i) => i + 1);

array = array.sort((a,b) => a - b)

console.log(array)



let number = Number(prompt('Dame el numero a buscar del 1 al 500'));
let cont = true;


while(cont){
    if(array[0] == number){
        console.log(`El numero esta en la posicion 0 del arreglo.`);
        cont = false;
    }else if(array [array.length-1] == number ){
        console.log(`El numero esta en la posicion ${array.length - 1} del arreglo.`);
        cont = false;
    }
    
    let mit = Math.floor(array.length/2)
    if(array[mit] == number){
        console.log(`El numero esta en la posicion ${mit} del arreglo.`);
        cont = false;
    }else if (number < array [mit]){ 
        array = array.slice(0, mit);
    }else{
        array = array.slice(mit, array.length - 1);
    }

}
