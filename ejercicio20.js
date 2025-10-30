const descargarArchivo = (url, callback) => {
    console.log("Descargando...");

    setTimeout(() => {
        callback(url);
    }, 2000);
};

const mostrarMensaje = (url) => {
    console.log("Descarga completa de " + url);
};

descargarArchivo("https://unsa.com/archivo.pdf", mostrarMensaje);
