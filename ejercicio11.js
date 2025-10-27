const procesarTexto = (texto) => {
    const limpiarEspacios = (texto) => {
        return texto.replace(/\s+/g, "");
    }

    const contarPalabras = (texto) => {
        const palabras = texto.trim().split(" ");
        return palabras.length;
    }
    
    const sinEspacios = limpiarEspacios(texto);
    const cantidadPalabras = contarPalabras(texto);

    console.log ("Texto sin espacios: "+sinEspacios+
        "\nNumero de palabras: "+cantidadPalabras
    )
}

procesarTexto("El motta es un cabro de mrd")


