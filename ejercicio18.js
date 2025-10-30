const ejecutarOperacion = (fn, x, y) => {
    const resultado = fn(x, y);

    console.log("El resultado es: " + resultado);

    return resultado;
};

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

ejecutarOperacion(sumar, 5, 3);
ejecutarOperacion(restar, 10, 5);
ejecutarOperacion(multiplicar, 4, 6);