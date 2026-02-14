function seleccionarFlor(elemento, rutaImagen, texto) {
    // Desactivar clics para evitar errores durante la animación
    elemento.style.pointerEvents = "none";

    // Animación de salida: el girasol vuela hacia el frente
    elemento.style.zIndex = "1000";
    elemento.style.transition = "transform 0.8s ease-in, opacity 0.7s ease-in";
    elemento.style.transform = "scale(12) translateY(-100px)";
    elemento.style.opacity = "0";

    // Mostrar el overlay con la información
    setTimeout(() => {
        const overlay = document.getElementById('overlay');
        const imgDetalle = document.getElementById('imagen-detalle');
        const txtDetalle = document.getElementById('texto-detalle');

        imgDetalle.src = rutaImagen;
        txtDetalle.innerText = texto;
        
        overlay.style.display = 'flex';
    }, 750);
}

function cerrarFlor() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    // Resetear todos los girasoles a su estado original
    const girasoles = document.querySelectorAll('.girasol');
    girasoles.forEach(f => {
        f.style.transition = "none"; 
        f.style.transform = "none";
        f.style.opacity = "1";
        f.style.pointerEvents = "auto";
        
        setTimeout(() => {
            f.style.transition = "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s";
        }, 50);
    });
}