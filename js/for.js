let numeros = [2, 5, 8, 9,10, 25, 15, 6, 8, 4, 20]

let par = []
let impar = []

for(let i=0; i < numeros.length; i++){
    if(numeros[i]%2 == 0){
        par.push(numeros[i])
    }else{
        impar.push(numeros[i])
    }
}

console.log(par);
console.log(impar);
