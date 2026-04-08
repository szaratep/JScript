/*
1.el programa calcula cuanto peso debe de cortar
dependiendo de la categoria, tiene que deucirle 
cuanto tiene que cortar y en que categoria competir 
ademas de dale las calorias que consume
*/


let edad = Number(prompt('Dime que edad tienes'));
let sexo = prompt('Dime tu sexo');
let peso = Number(prompt('Dime tu peso actual (kg)'));
let altura = Number(prompt('Dime tu altura en (cm)'));
let pesoMax = 0;

if(sexo == 'hombre'){
    let tmb = (10*peso) + (6.25*altura) - (5 * edad) + 5 // Tasa metabolica Basal
    let kalDia = tmb * 1.9 // kalorias consumidad * dia 
    pesoMax = peso - (peso * 0.1); // peso maximo a cortar
    let mcm = (0.407 * peso) + (0.267*altura) -19.2  // Masa corporal Magra 
    if(peso > 120.2){
         console.log('tu peso supera el limite saludable');
    }else if (peso <= 120.2 && peso > 100){
        console.log('tu categoria es: Peso Pesado');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }else if (peso <= 100 && peso > 93 ){
         console.log('tu categoria es: Peso Semipesado');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }else if (peso <= 93&& peso > 83.9){
         console.log('tu categoria es: Peso Medio');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }else if (peso <= 83.9 && peso > 77.1){
         console.log('tu categoria es: Peso Wélter');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }else if (peso <= 77.1 && peso > 70.3){
         console.log('tu categoria es: Peso Ligero');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }else if (peso <= 70.3 && peso > 65.8){
         console.log('tu categoria es: Peso Pluma');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }else if (peso <= 65.8 && peso > 61.2){
         console.log('tu categoria es: Peso Gallo');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }else{
         console.log('tu categoria es: Peso Mosca');
         if(pesoMax < mcm){
             console.log('No te recomendamos cortar el maximo establecido, si no un 5% por tu salud');
             pesoMax = 0;
             pesoMax = peso - (peso * 0.05);
             console.log();
        }else{
             console.log(`Tu peso maximo a llegar es: ${pesoMax} kg`);
             console.log(`Tu tasa metabolica basal es: ${tmb}`);
             console.log(`Las calorias que tendrias que consumir son: ${kalDia}`);
             console.log(`Tu masa corporal magra es: ${mcm} kg`);
         }
    }

}else{
    let tmb = (10*peso) + (6.25*altura) - (5*edad) -161
    let kalDia = tmb * 1.9
    pesoMax = peso - (peso * 0.1); // peso maximo a cortar
    let mcm = (0.252 * peso) + (0.473*altura) - 48.3
}