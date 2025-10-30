const filtrarArreglo = (arr, callback) => {
    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];

        if (callback(elemento)) {
            resultado.push(elemento);
        }
    }

    return resultado;
};


let numeros = [1, 2, 3, 4, 5, 6];

let pares = filtrarArreglo(numeros, (n) => n % 2 === 0);
console.log(pares);

let mayoresTres = filtrarArreglo(numeros, (n) => n > 3);
console.log(mayoresTres);
