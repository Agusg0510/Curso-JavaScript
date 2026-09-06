let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let i = 0;
    let contador = 0;
    while (i < arr.length){
        if (arr[i] > 0) {
            contador++;
        }
        i++;
    }
    return contador;
}

let numeros = cuantosPositivos(array);
console.log(numeros);