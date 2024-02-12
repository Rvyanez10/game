
let titulo = document.querySelector('h1');
titulo.innerHTML ="Hora del Desafío";

function mostraralerta() { 
let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert('Estuve en'   + ciudad +   'y me acorde de ti');
}
function yoamo() {
    alert("Yo amo JS");
}

function intentoDeUsuario() {
     console.log('El botón fue clicado');
}

function sumadosnumeros() {
    let primernumero = parseInt(prompt('Digite el primer numero'));
    let segundonumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primernumero + segundonumero;
    alert("La suma es" + resultado);
}
