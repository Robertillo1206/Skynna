const track = document.getElementById('track');

// Navegación
function mover(dir) {
    const item = track.querySelector('.carrusel-item');
    const step = item.offsetWidth + 15;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
}

document.getElementById('btnNext').onclick = () => mover(1);
document.getElementById('btnPrev').onclick = () => mover(-1);

// Visor
function verGrande(src) {
    const modal = document.getElementById('visorModal');
    const img = document.getElementById('imgGrande');
    modal.style.display = 'flex';
    img.src = src;
    document.body.style.overflow = 'hidden'; // Bloquea scroll
}

function cerrarModal() {
    document.getElementById('visorModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Devuelve scroll
}

// Cerrar al clicar fuera
document.getElementById('visorModal').onclick = function(e) {
    if (e.target.id === 'visorModal' || e.target.className === 'close-visor') {
        cerrarModal();
    }
};
