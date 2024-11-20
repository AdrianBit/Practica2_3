function crearTablaConImagenes(imagenes) {
    // Mezcla las imágenes de manera aleatoria
    const imagenesMezcladas = imagenes.sort(() => Math.random() - 0.5);

    // Crea el elemento de tabla
    const tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    tabla.style.borderCollapse = "collapse";

    let index = 0;
    let huecoPosicion = null; // Posición actual del hueco

    // Itera para crear la tabla 4x4
    for (let i = 0; i < 4; i++) {
        const fila = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
            const celda = document.createElement("td");
            celda.style.border = "1px solid black";
            celda.style.padding = "10px";
            celda.style.width = "100px";
            celda.style.height = "100px";

            const img = document.createElement("img");
            img.src = imagenesMezcladas[index];
            img.style.width = "100px";
            img.style.height = "100px";

            if (img.src.includes("images/blanco.png")) {
                // Guarda la posición del hueco
                huecoPosicion = { fila: i, columna: j };
                celda.classList.add("hueco");
            } 
                // Añade un evento al hacer clic en la imagen
                img.onclick = function () {
                    moverImagen(i, j, img);
                };
            

            celda.appendChild(img);
            fila.appendChild(celda);
            index++;
        }

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);

    function moverImagen(fila, columna, img) {
        // Verifica si el hueco está adyacente en la misma fila o columna
        if (
            (fila === huecoPosicion.fila && Math.abs(columna - huecoPosicion.columna) === 1) ||
            (columna === huecoPosicion.columna && Math.abs(fila - huecoPosicion.fila) === 1)
        ) {
            // Obtener la celda del hueco
            const celdaHueco = tabla.rows[huecoPosicion.fila].cells[huecoPosicion.columna];

            // Mover la imagen al hueco
            celdaHueco.querySelector("img").src = img.src;
            img.src = "images/blanco.png";

            // Actualizar la posición del hueco
            huecoPosicion = { fila, columna };
        }
    }
}

var imagenes = 
["images/1.png",
"images/2.png",
"images/3.png",
"images/4.png",
"images/5.png",
"images/6.png",
"images/7.png",
"images/8.png",
"images/9.png",
"images/10.png",
"images/11.png",
"images/12.png",
"images/13.png",
"images/14.png",
"images/15.png",
"images/blanco.png"
]

// Llama a la función con el array de imágenes
crearTablaConImagenes(imagenes);
