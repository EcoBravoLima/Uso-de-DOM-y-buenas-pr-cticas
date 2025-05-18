import { crearTabla } from "./funcionesAvanzadas.js";

function leerDatos() {
    try {
        const filas = parseInt(document.getElementById("filas").value);
        const columnas = parseInt(document.getElementById("columnas").value);
        
        if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
            throw new Error("Ingresa números válidos mayores a 0.");
        }
        crearTabla(filas, columnas);
    } catch (error) {
        alert("Error: " + error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-generar").addEventListener("click", leerDatos);
});