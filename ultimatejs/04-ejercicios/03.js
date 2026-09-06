function getbyIdx(arr, idx){
    if (arr.length <= idx || idx < 0) {
        return 'Fuera del limite'
    }
    return arr[idx];
}

let resultado = getbyIdx([1, 2], 0);
console.log(resultado);