const mostrarDatos = (nombre, edad, ...hobbies) => {
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);

    if (hobbies.length > 0) {
        console.log("Hobbies: " + hobbies.join(", "));
    } else {
        console.log("No tiene hobbies");
    }
};

mostrarDatos("Ana", 25, "leer", "bailar", "viajar");
mostrarDatos("Luis", 30);
