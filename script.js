//
function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date()//traer tiempo del sistema
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;//convercion de tiempo
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);//este codigo redondeara el tiempo
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 * 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }

};

//console.log(obtenerTiempoFaltante('dec 25 2024 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante,reloj,mensaje) {
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        e.innerHTML = `${t.diasFaltantes}d:${t.horasFaltantes}h:${t.minutosFaltantes}m:${t.segundosFaltantes}s`;

        if(t.tiempoFaltante <0) {//cuando el tiempo sea inferior a "0"
            clearInterval(tiempoActual);//refrescara, mas no va a parar el reloj
            e.innerHTML = mensaje;
        }

    }, 1000)
};

cuentaRegresiva('Dec 25 2024 00:00:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad1!');

