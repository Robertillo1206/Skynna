const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// Función para calcular cuánto desplazar (ancho de 1 foto + espacio)
function getScrollAmount() {
    const item = track.querySelector('.carrusel-item');
    return item ? item.offsetWidth + 15 : 300;
}

// Botones de navegación
btnNext.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

// Soporte para arrastrar con el dedo (Móvil)
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto'; // Instantáneo al arrastrar
}, { passive: true });

track.addEventListener('touchend', () => {
    isDown = false;
    track.style.scrollBehavior = 'smooth'; // Vuelve suave para botones
});

track.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; 
    track.scrollLeft = scrollLeft - walk;
}, { passive: true });

// Soporte para arrastrar con el ratón (PC)
track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
});
track.addEventListener('mouseleave', () => isDown = false);
track.addEventListener('mouseup', () => isDown = false);
track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
});

// Visor de imágenes
function verGrande(src) {
    const modal = document.getElementById('visorModal');
    const img = document.getElementById('imgGrande');
    modal.style.display = 'flex';
    img.src = src;
}

// Cerrar modal al hacer clic
document.getElementById('visorModal').onclick = function() {
    this.style.display = 'none';
};
