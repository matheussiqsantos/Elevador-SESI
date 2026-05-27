let textSpan = document.getElementById('numero-carga');
let sistema = document.getElementById('sistema');
const cargaText = textSpan.textContent;
let numeroCarga = Number(cargaText);

function Adicionar() {

    if (numeroCarga < 400) {
        numeroCarga += 100;
        textSpan.innerHTML = numeroCarga;
    } else {
        alert('Você excedeu o limite de carga, não é possível adicionar mais carga ao elevador');
        sistema.style.backgroundColor = 'red';
        sistema.innerHTML = 'SOBRECARGA';
    }
}

function Retirar() {

    if (numeroCarga > 0) {
        numeroCarga -= 100;
        textSpan.innerHTML = numeroCarga;
        sistema.style.backgroundColor = 'white';
        sistema.innerHTML = 'SISTEMA OK';
    } else {
        alert('A carga já está mínima, não é possível tirar mais');
    }
}

function Resetar() {
    numeroCarga = 0;
    textSpan.innerHTML = numeroCarga;
    sistema.style.backgroundColor = 'white';
    sistema.innerHTML = 'SISTEMA OK';
}