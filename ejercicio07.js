const calcularDescuento = (precio, porcentaje) => {
    return precio - (precio * porcentaje / 100);
}
console.log(calcularDescuento(100, 15));
console.log(calcularDescuento(200, 25));
