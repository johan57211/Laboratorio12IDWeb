const saludo = (nombre = "Amigo") => {
    return "Hola "+nombre;
}

console.log(saludo());
console.log(saludo("Carlos"));
