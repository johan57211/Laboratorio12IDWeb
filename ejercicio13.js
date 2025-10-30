const crearContador = (valorInicial = 0) => {
    let valor = valorInicial;

    return {
        incrementar: () => ++valor,
        resetear: () => (valor = valorInicial)
    };
};

const contador = crearContador(5);
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.resetear());
