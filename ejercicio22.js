const crearSecuencia = (inicio, paso) => {
    let valorActual = inicio;

    return () => {
        const valorParaDevolver = valorActual;
        valorActual += paso;
        return valorParaDevolver;
    };
};


const secuencia = crearSecuencia(0, 4);
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
