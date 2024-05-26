function mostrarFondoOscuro() {
    var fondoOscuro = document.getElementById("fondoOscuro");
    fondoOscuro.style.display = "block";
}

function ocultarFondoOscuro() {
    var fondoOscuro = document.getElementById("fondoOscuro");
    fondoOscuro.style.display = "none";
}

let turno = 7; // Variable global. Turnos restantes.
let puntos = 0; // Variable global. Puntos acumulados
let palabra = ""; // Variable global. Palabra escogida
let categoria = ""; // Variable global. Categoría

const categorias = {
    "PAISES": [
        "Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Bolivia", 
        "Ecuador", "Colombia", "Venezuela", "Guyana", "Surinam", "Estados Unidos", 
        "Canada", "Mexico", "Guatemala", "Honduras", "El Salvador", "Nicaragua", 
        "Costa Rica", "Panama", "Cuba", "República Dominicana", "Haití", "Jamaica", 
        "Puerto Rico", "España", "Portugal", "Francia", "Alemania", "Italia", 
        "Reino Unido", "Irlanda", "Noruega", "Suecia", "Dinamarca", "Finlandia", 
        "Polonia", "Ucrania", "Rusia", "China", "Japón", "Corea del Sur", "India", 
        "Australia", "Nueva Zelanda", "Sudafrica", "Egipto", "Nigeria", "Kenia"
    ],
    "ADJETIVOS": [
        "Alegre", "Triste", "Rapido", "Lento", "Hermoso", "Feo", "Alto", "Bajo", 
        "Gordo", "Delgado", "Inteligente", "Tonto", "Fuerte", "Debil", "Joven", 
        "Viejo", "Nuevo", "Antiguo", "Claro", "Oscuro", "Grande", "Pequeño", 
        "Caliente", "Frio", "Suave", "Duro", "Seco", "Mojado", "Caro", "Barato", 
        "Luminoso", "Tenebroso", "Sano", "Enfermo", "Sencillo", "Complejo", 
        "Honesto", "Deshonesto", "Generoso", "Egoísta", "Paciente", "Impaciente", 
        "Limpio", "Sucio", "Famoso", "Desconocido", "Feliz", "Infeliz", 
        "Sabroso", "Insípido"
    ],
    "DEPORTES": [
        "Fútbol", "Baloncesto", "Tenis", "Beisbol", "Voleibol", "Natacion", 
        "Atletismo", "Boxeo", "Rugby", "Cricket", "Golf", "Ciclismo", "Hockey", 
        "Esqui", "Snowboard", "Surf", "Gimnasia", "Escalada", "Remo", "Judo", 
        "Karate", "Taekwondo", "Esgrima", "Lucha", "Haltera", "Bádminton", 
        "Polo", "Billar", "Bowling", "Caza", "Esgrima", "Kendo", "Lacrosse", 
        "Muay Thai", "Parkour", "Patinaje", "Pelota Vasca", "Pesca", 
        "Remo", "Rodeo", "Rugby", "Skateboarding", "Softball", "Squash", 
        "Sumo", "Tenis de Mesa", "Tiro con Arco", "Trampolin", "Triatlon"
    ],
    "VERBOS": [
        "Aceptar", "Acompañar", "Admirar", "Adivinar", "Ajustar", "Alojar", 
        "Analizar", "Añadir", "Apoyar", "Apreciar", "Aprobar", "Arreglar", 
        "Asistir", "Aumentar", "Averiguar", "Bailar", "Bendecir", "Calcular", 
        "Cambiar", "Cantar", "Causar", "Celebrar", "Clarificar", "Coleccionar", 
        "Comparar", "Comprar", "Comunicar", "Concentrar", "Confirmar", 
        "Considerar", "Construir", "Continuar", "Controlar", "Corregir", 
        "Crear", "Cruzar", "Describir", "Desear", "Detectar", "Descubrir", 
        "Discutir", "Diseñar", "Distribuir", "Elegir", "Entregar", "Establecer", 
        "Examinar", "Experimentar"
    ]
};


document.addEventListener("DOMContentLoaded", function(){
    palabra = obtenerPalabra();
    establecerGuiones(palabra);
    console.log(palabra)
    actualizarTurno();
});

// Funcion para obtener una palabra aleatoria de una lista
// La lista elegida dependerá de la categoria (session storage)
function obtenerPalabra(){
    // Array de las claves que se encuentran en el Objeto de categorías
    let claves = Object.keys(categorias);

    // Índice aleatorio para escoger una categoría aleatoria
    const indexCategoria = Math.floor(Math.random() * claves.length);
    
    // Obtener la categoría en el índice
    categoria = claves[indexCategoria];

    // Evaluar el valor de la categoría obtenida para escoger la palabra
    const randomIndex = Math.floor(Math.random() * categorias[categoria].length);
    return categorias[categoria][randomIndex];
};


// Funcion para pintar guiones dependiendo del largo de la palabra
function establecerGuiones(palabra){
    // Obtener el espacio donde se colocarán los guiones
    let guiones = document.getElementById("palabra");

    // Asignar guiones según sea necesario
    for(let i = 0; i < palabra.length; i++){
        if (palabra[i] === " "){
            guiones.innerHTML += "<span>" + " "+"</span>";
        }else{
            guiones.innerHTML += "<span>" + "_"+"</span>"
        }
    }
};

// Función para verificar si la letra escogida se encuentra dentro de la palabra a adivinar
function verificarLetra(letra){
    // Se obtienen los span donde se colocarán las letras si existen
    let guiones = document.getElementById("palabra").getElementsByTagName("span");
    
    // Verificar si la letra existe o no
    if(palabra.toLowerCase().includes(letra.toLowerCase())){

        // Sustituir la letra en cada espacio donde exista
        for(let i = 0; i < palabra.length; i++){
            if(letra.toLowerCase() == palabra[i].toLowerCase()){
                guiones[i].textContent = letra.toUpperCase();
            }
        puntos += 1;
        }
    }else{
        turno -= 1;
        console.log(turno)
        actualizarTurno();
        cambiarImagen();
    }   
    comprobarfin();
    console.log(verificarSpans())
}

// Función que permite mostrar el muñeco a medida de que 
function cambiarImagen(){
    let imagen = document.getElementById("ImagenAhorcado");
    if(turno<= 5){
        imagen.src = "img/ahorcado__" + turno + ".jpg";
    }else{
        imagen.src = "img/ahorcado__" + turno + ".jpeg";
    }
};

// Función que verifica si quedan letras por adivinar
function verificarSpans() {
    let spans = document.querySelectorAll("#palabra span");
    let quedanSpans = false;
    // Recorre todos los spans y verifica su contenido
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].textContent === "_" || spans[i].textContent === " ") {
        quedanSpans = true;
        break; // Si se encuentra al menos un span con contenido "_" o " ", se sale del bucle
        }
    }
    return quedanSpans;
}

// Función que verifica si se debe finalizar el juego
function comprobarfin(){
    console.log("antes")
    if(verificarSpans() == false || turno == 0){
        mostrarFondoOscuro();
        let popup = document.getElementById("popup");
        popup.style.display = "block";
        mostrarFondoOscuro();

        let palabraCorrecta = document.getElementById("palabraCorrecta");
        palabraCorrecta.textContent = palabra;

        let msgFinal = document.getElementById("msgFinal");
        if(turno === 0){
            msgFinal.textContent = "Intenta de Nuevo";
        }
        else{
            msgFinal.textContent = "¡Felicidades!\n\nHaz adivinado";
            puntos += 20;
        }

    }
}

// Función que actualiza los turnos en caso de perder alguno
function actualizarTurno(){
    let turnos = document.getElementById("intentos");
    turnos.textContent = turno;
    if(turno <=3){
        turnos.style.color = "red";
    }
}

// Función que hace desaparecer los botones al seleccionarlos
function desaparecerBoton(){

}

//jugador {nombre: a; puntaje: a; acierto: }
