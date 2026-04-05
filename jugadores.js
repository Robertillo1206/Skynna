const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// Función de desplazamiento exacto
function getScrollAmount() {
    const item = track.querySelector('.carrusel-item');
    return item ? item.offsetWidth + 15 : 300;
}

btnNext.onclick = () => track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
btnPrev.onclick = () => track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });

// --- SOPORTE MULTI-TOUCH Y RATÓN ---
let isDown = false, startX, scrollLeft;

const start = (e) => {
    isDown = true;
    startX = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
};

const end = () => {
    isDown = false;
    track.style.scrollBehavior = 'smooth';
};

const move = (e) => {
    if (!isDown) return;
    const x = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
};

// Eventos Ratón
track.addEventListener('mousedown', start);
track.addEventListener('mouseleave', end);
track.addEventListener('mouseup', end);
track.addEventListener('mousemove', move);

// Eventos Táctiles
track.addEventListener('touchstart', start, {passive: true});
track.addEventListener('touchend', end);
track.addEventListener('touchmove', move, {passive: true});

// Visor Modal
function verGrande(src) {
    const modal = document.getElementById('visorModal');
    modal.style.display = 'flex';
    document.getElementById('imgGrande').src = src;
}
