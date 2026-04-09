let array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]

array = array.sort((a,b) => a - b)

console.log(array)


let number = Number(prompt('Dame el numero a buscar del 1 al 500'));
let low = 0;

for(let i = 0; i <= array.length; i++){
    let mit = array.length/2
    if(array[mit] === number){
        console.log(`El numero esta en la posicion ${mit} del arreglo.`);
    }else if (number < array [mit]){ 
        array = (array.length/2) - 1
    }else{
        array = (array.length - (array.length/2)) + 1;
    }
}
