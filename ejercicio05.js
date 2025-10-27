const promedio = function(notas) {
    let totalNotas = notas.length;
    let suma = 0;
    for (let i = 0; i < totalNotas; i++) {
        suma += notas[i];
    }
    return suma / totalNotas;
}
console.log(promedio([4, 5, 6, 7, 8]));
console.log(promedio([10, 9, 8, 7, 6]));