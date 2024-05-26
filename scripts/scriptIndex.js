/* 
* función para mostrar el fondo para el popup
*/
function mostrarFondoOscuro() {
    const fondoOscuro = document.getElementById("fondoOscuro")
    fondoOscuro.style.display = "block";
}

/*
* Función que permite mostrar el popup de instrucciones
*/
function mostrarInstruccion() {
    const ventanaContenedor = document.getElementById("ventanaContenedor");
    ventanaContenedor.style.display = "block";
}

/* 
* función para ocultar el fondo para el popup
*/
function ocultar() {
    const ocultarVentana = document.getElementById("ventanaContenedor");
    ocultarVentana.style.display = "none";
    const fondoOscuro = document.getElementById("fondoOscuro")
    fondoOscuro.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function(){
    actualizarTabla();
});

document
  .getElementById("datosJugador")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var jugadorInput = document.getElementById("jugador").value;
    var jugador = {nombre: jugadorInput, puntos: 0, palabras: 0};
    localStorage.removeItem("partida");
    sessionStorage.setItem("jugador", JSON.stringify(jugador));

      window.location.href = "juego.html";
});
document.getElementById("regresarInicio").addEventListener("click", function() {
    window.location.href = "index.html";
});


function formularioJugador() {
    const datos = document.getElementById("datosJugador")
    datos.style.display = "block";
}
function mostrarInstruccion2() {
    const ventanaContenedor = document.getElementById("ventanaContenedor2");
    ventanaContenedor.style.display = "block";
}


function actualizarTabla () {
    // Obtener la tabla de mejores puntajes
    let tabla = document.getElementById("tablero");

    // Obtener los puntajes del localStorage y ordenarlos
    let jugadores = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key !== 'jugador' || key !== 'partida') {
            let jugador = JSON.parse(localStorage.getItem(key));
            jugadores.push(jugador);
        }
    }
    // Ordenar la lista de manera decreciente
    jugadores.sort((a, b) => b.puntos - a.puntos);

    // Limpiar y llenar la tabla con los mejores puntajes
    for (let i = 1; i < tabla.rows.length && i - 1 < jugadores.length; i++) {
        tabla.rows[i].cells[1].textContent = jugadores[i - 1].nombre;
        tabla.rows[i].cells[2].textContent = jugadores[i - 1].puntos;
        tabla.rows[i].cells[3].textContent = jugadores[i - 1].palabras;
    }
}
