// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Obtener elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigosSorteados = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultadoSorteo = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    if (inputAmigo.value.trim() === "") {
        alert("Debes ingresar un nombre.");
        return;
    }
    listaAmigosSorteados.push(inputAmigo.value.trim()); // Agregar nombre a la lista
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value.trim()}</li>`; // Mostrar en la lista
    inputAmigo.value = ""; // Limpiar el campo de entrada
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigosSorteados.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigosSorteados.length); // Índice aleatorio
    const amigoSorteado = listaAmigosSorteados[indiceAleatorio]; // Obtener el amigo sorteado
    ulResultadoSorteo.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`; // Mostrar resultado
}