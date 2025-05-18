export function crearTabla(filas, columnas) {
    const tabla = document.createElement("table");
    for (let i = 0; i < filas; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            const td = document.createElement("td");
            td.textContent = `F${i + 1}C${j + 1}`;
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    const container = document.getElementById("tabla-container");
    container.innerHTML = ""; // Limpia el contenedor antes de agregar
    container.appendChild(tabla);
}