// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// crea un array para almacenar los nombres.
let nombres = [];

//implementa una función que reciba un nombre y lo agregue al array.
function agregarAmigo(){
    let nombre = document.querySelector("#amigo").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    nombres.push(nombre);
    document.querySelector("#amigo").value = "";
    console.log(nombres);
    mostrarAmigos();
}
//funcion que muestra en pantalla los amigos ingresados
function mostrarAmigos() { 
    let nombresList = document.getElementById("listaAmigos");
    nombresList.innerHTML = "";  
    let amigosHTML = ""; 
    nombres.forEach(function(amigo) {
        amigosHTML += `<li>${amigo}</li>`; 
    });
    nombresList.innerHTML = amigosHTML;
}
  

//implementa una funcion para sortear un nombre.
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debes ingresar al menos dos amigos!");
        return;
    }
    let amigoSorteado = nombres[Math.floor(Math.random() * nombres.length)];

    document.getElementById("resultado").innerHTML = (`El amigo secreto es ${amigoSorteado}!`);
    console.log(amigoSorteado);
}





