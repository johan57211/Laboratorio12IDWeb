const media = (...numeros) => {
    if (numeros.length === 0) {
        return 0;
    }

    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }

    return suma / numeros.length;
};

console.log(media(2, 4, 6));
console.log(media());
