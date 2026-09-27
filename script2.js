const pantalla = document.getElementById("pantalla");

function agregar(valor) {

    const operadores = ["+", "-", "×", "÷"];
    const ultimoCaracter = pantalla.value.slice(-1);

    if (valor === ".") {
        const partes = pantalla.value.split(/[+\-×÷]/);
        const numeroActual = partes[partes.length - 1];

        if (numeroActual.includes(".")) {
            return;
        }
    }

    if (operadores.includes(valor) && operadores.includes(ultimoCaracter)) {
        pantalla.value = pantalla.value.slice(0, -1) + valor;
        return;
    }

    if (pantalla.value === "0") {
        if (valor === ".") {
            pantalla.value = "0.";
        } else {
            pantalla.value = valor;
        }
    } else {
        pantalla.value += valor;
    }
}

function calcular() {

    try {
        let operacion = pantalla.value;

        operacion = operacion.replaceAll("×", "*");
        operacion = operacion.replaceAll("÷", "/");

        let resultado = eval(operacion);

        if (!Number.isFinite(resultado)) {
            pantalla.value = "Error";
            return;
        }

        pantalla.value = resultado;

    } catch {
        pantalla.value = "Error";
    }
}

function limpiar() {
    pantalla.value = "0";
}

function borrar() {

    if (pantalla.value === "Error") {
        pantalla.value = "0";
        return;
    }

    pantalla.value = pantalla.value.slice(0, -1);

    if (pantalla.value === "") {
        pantalla.value = "0";
    }
}

function cambiarSigno() {

    if (pantalla.value === "0" || pantalla.value === "Error") {
        return;
    }

    if (pantalla.value.startsWith("-")) {
        pantalla.value = pantalla.value.slice(1);
    } else {
        pantalla.value = "-" + pantalla.value;
    }
}

function cuadrado() {

    const numero = Number(pantalla.value);

    if (isNaN(numero)) {
        pantalla.value = "Error";
        return;
    }

    pantalla.value = numero * numero;
}

function raiz() {

    const numero = Number(pantalla.value);

    if (isNaN(numero) || numero < 0) {
        pantalla.value = "Error";
        return;
    }

    pantalla.value = Math.sqrt(numero);
}

function porcentaje() {

    const numero = Number(pantalla.value);

    if (isNaN(numero)) {
        pantalla.value = "Error";
        return;
    }

    pantalla.value = numero / 100;
}