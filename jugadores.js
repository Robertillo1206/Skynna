const track = document.getElementById('track');

function mover(dir) {
    const itemWidth = track.querySelector('.carrusel-item').offsetWidth + 15;
    track.scrollBy({ left: dir * itemWidth, behavior: 'smooth' });
}

document.getElementById('btnNext').onclick = () => mover(1);
document.getElementById('btnPrev').onclick = () => mover(-1);

// FUNCIÓN VER GRANDE
function verGrande(src) {
    const modal = document.getElementById('visorModal');
    const img = document.getElementById('imgGrande');
    modal.style.display = 'flex';
    img.src = src;
    document.body.style.overflow = 'hidden'; // Evita que se mueva el fondo
}

function cerrarModal() {
    document.getElementById('visorModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar al hacer clic fuera
document.getElementById('visorModal').onclick = function(e) {
    if (e.target !== document.getElementById('imgGrande')) {
        cerrarModal();
    }
};
