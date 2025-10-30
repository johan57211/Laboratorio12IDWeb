const acumulador = (valorInicial = 0) => {
    let total = valorInicial;
    return (nuevoValor) => total += nuevoValor;
};

const acum = acumulador(10);
console.log(acum(5));
console.log(acum(3));
console.log(acum(6));