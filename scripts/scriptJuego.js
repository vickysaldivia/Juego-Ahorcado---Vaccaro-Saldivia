function mostrarFondoOscuro() {
    var fondoOscuro = document.getElementById("fondoOscuro");
    fondoOscuro.style.display = "block";
}

function ocultarFondoOscuro() {
    var fondoOscuro = document.getElementById("fondoOscuro");
    fondoOscuro.style.display = "none";
}

let turno = 6; // Variable global. Turnos restantes.
let puntos = 0; // Variable global. Puntos acumulados
let palabra = "";

const paises = [
    "Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Bolivia", 
    "Ecuador", "Colombia", "Venezuela", "Guyana", "Surinam", "Estados Unidos", 
    "Canada", "Mexico", "Guatemala", "Honduras", "El Salvador", "Nicaragua", 
    "Costa Rica", "Panama", "Cuba", "República Dominicana", "Haití", "Jamaica", 
    "Puerto Rico", "España", "Portugal", "Francia", "Alemania", "Italia", 
    "Reino Unido", "Irlanda", "Noruega", "Suecia", "Dinamarca", "Finlandia", 
    "Polonia", "Ucrania", "Rusia", "China", "Japón", "Corea del Sur", "India", 
    "Australia", "Nueva Zelanda", "Sudafrica", "Egipto", "Nigeria", "Kenia"
]; //Lista de países

document.addEventListener("DOMContentLoaded", function(){
    palabra = obtenerPalabra();
    establecerGuiones(palabra);
    console.log(palabra);
});

// Funcion para obtener una palabra aleatoria de una lista
// La lista elegida dependerá de la categoria (session storage)
function obtenerPalabra(){
    const randomIndex = Math.floor(Math.random() * paises.length);
    return paises[randomIndex];
};


function escogerLista(){
    //Funcion para escoger lista
};

// Funcion para pintar guiones dependiendo del largo de la palabra
function establecerGuiones(palabra){
    let guiones = document.getElementById("palabra");
    for(let i = 0; i < palabra.length; i++){
        if (palabra[i] === " "){
            guiones.innerHTML += "<span>" + " "+"</span>";
        }else{
            guiones.innerHTML += "<span>" + "_"+"</span>"
        }
    }
};

function verificarLetra(letra){
    let guiones = document.getElementById("palabra").getElementsByTagName("span");
    for(let i = 0; i < palabra.length; i++){
        if(letra.toLowerCase() == palabra[i].toLowerCase()){
            guiones[i].textContent = letra.toUpperCase();
        }
    }
}




//jugador {nombre: a; puntaje: a; acierto: }
