const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// --- FLECHAS (CÁLCULO DINÁMICO) ---
function getScrollAmount() {
    const item = track.querySelector('.carrusel-item');
    const gap = 15; // Gap definido en CSS
    return item.offsetWidth + gap;
}

btnNext.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

// --- ARRASTRAR (RATÓN Y TÁCTIL) ---
let isDown = false;
let startX;
let scrollLeft;

// Eventos de Ratón
track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
});

track.addEventListener('mouseleave', () => isDown = false);
track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.scrollBehavior = 'smooth';
});

track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; 
    track.scrollLeft = scrollLeft - walk;
});

// Eventos Táctiles (Móvil)
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
});

track.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; 
    track.scrollLeft = scrollLeft - walk;
});

track.addEventListener('touchend', () => {
    track.style.scrollBehavior = 'smooth';
});

// --- VISOR MODAL ---
function verGrande(src) {
    document.getElementById('visorModal').style.display = 'flex';
    document.getElementById('imgGrande').src = src;
}
