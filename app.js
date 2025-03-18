let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("No se pueden agregar espacios vacíos.");
        return;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nombre)) {
        alert("Solo se permiten nombres (sin números ni caracteres especiales).");
        limpiarInput();
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe ingresar al menos un nombre para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es <strong>${amigoSecreto}</strong></li>`;
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}
