const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// Cálculo dinámico según el tamaño de la pantalla en ese momento
const getStep = () => {
    const item = track.querySelector('.carrusel-item');
    return item.offsetWidth + 15; 
};

btnNext.onclick = () => track.scrollBy({ left: getStep(), behavior: 'smooth' });
btnPrev.onclick = () => track.scrollBy({ left: -getStep(), behavior: 'smooth' });

// SOPORTE TÁCTIL Y RATÓN
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

track.addEventListener('mousedown', start);
track.addEventListener('mousemove', move);
track.addEventListener('mouseup', end);
track.addEventListener('mouseleave', end);

track.addEventListener('touchstart', start, {passive: true});
track.addEventListener('touchmove', move, {passive: true});
track.addEventListener('touchend', end);

function verGrande(src) {
    const modal = document.getElementById('visorModal');
    modal.style.display = 'flex';
    document.getElementById('imgGrande').src = src;
}
