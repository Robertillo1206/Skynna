const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// --- LÓGICA DE DESPLAZAMIENTO (FLECHAS) ---
// Calculamos el ancho dinámicamente para que funcione en PC y Móvil
function getScrollAmount() {
    const item = track.querySelector('.carrusel-item');
    const gap = 15; // El espacio definido en tu CSS (gap: 15px)
    return item ? item.offsetWidth + gap : 300;
}

btnNext.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

// --- INTERACCIÓN (RATÓN Y TÁCTIL) ---
let isDown = false;
let startX;
let scrollLeft;

// Función común para iniciar el arrastre
const startDragging = (e) => {
    isDown = true;
    track.classList.add('active');
    // Detecta si es evento de ratón o táctil
    const pageX = e.pageX || e.touches[0].pageX;
    startX = pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto'; // Desactiva el smooth para que el dedo mande
};

// Función común para detener el arrastre
const stopDragging = () => {
    isDown = false;
    track.classList.remove('active');
    track.style.scrollBehavior = 'smooth'; // Reactiva el smooth para las flechas
};

// Función común para mover
const move = (e) => {
    if (!isDown) return;
    const pageX = e.pageX || e.touches[0].pageX;
    const x = pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidad de arrastre
    track.scrollLeft = scrollLeft - walk;
};

// Eventos de Ratón
track.addEventListener('mousedown', startDragging);
track.addEventListener('mouseleave', stopDragging);
track.addEventListener('mouseup', stopDragging);
track.addEventListener('mousemove', move);

// Eventos Táctiles (Móvil)
track.addEventListener('touchstart', startDragging, { passive: true });
track.addEventListener('touchend', stopDragging);
track.addEventListener('touchmove', move, { passive: true });

// --- VISOR MODAL ---
function verGrande(src) {
    const modal = document.getElementById('visorModal');
    const img = document.getElementById('imgGrande');
    if (modal && img) {
        modal.style.display = 'flex';
        img.src = src;
    }
}

// Cerrar modal al hacer clic fuera de la imagen (opcional pero recomendado)
document.getElementById('visorModal').addEventListener('click', function(e) {
    if (e.target === this || e.target.className === 'close-visor') {
        this.style.display = 'none';
    }
});
