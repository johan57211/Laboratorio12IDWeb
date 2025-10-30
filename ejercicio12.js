const operacionesMatematicas = () => {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => a / b;

    return {sumar, restar, multiplicar, dividir};
}

const ops = operacionesMatematicas();

console.log(ops.sumar(4, 7));
console.log(ops.restar(10, 5));
console.log(ops.multiplicar(4, 2));
console.log(ops.dividir(6, 3));