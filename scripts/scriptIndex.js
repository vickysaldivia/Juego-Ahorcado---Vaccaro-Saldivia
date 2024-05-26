function mostrarFondoOscuro() {
    const fondoOscuro = document.getElementById("fondoOscuro")
    fondoOscuro.style.display = "block";
}
function mostrarInstruccion() {
    const ventanaContenedor = document.getElementById("ventanaContenedor");
    ventanaContenedor.style.display = "block";
}

function ocultar() {
    const ocultarVentana = document.getElementById("ventanaContenedor");
    ocultarVentana.style.display = "none";
    const fondoOscuro = document.getElementById("fondoOscuro")
    fondoOscuro.style.display = "none";
}

document
  .getElementById("datosJugador")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var jugadorInput = document.getElementById("jugador").value;
    // console.log(jugadorInput);
    var jugador = { nombsre: jugadorInput, puntos: 0};
    sessionStorage.setItem("jugador", JSON.stringify(jugador));

      window.location.href = "juego.html";
});

function formularioJugador() {
    const datos = document.getElementById("datosJugador")
    datos.style.display = "block";
}
function mostrarInstruccion2() {
    const ventanaContenedor = document.getElementById("ventanaContenedor2");
    ventanaContenedor.style.display = "block";
}

// class Jugador {
//     constructor(nombre, puntaje, aciertos) {
//         this.nombre = nombre;
//         this.puntaje = puntaje;
//         this.aciertos = aciertos;
//     }    

//     verificarJugador(nombre) {
//         if(nombre = ) {
//             console.log("Este nombre ya se encuentra en la tabla")
//         }
//     }
// }