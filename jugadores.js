const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// Mover el carrusel
function moveCarousel(direction) {
    const item = track.querySelector('.carrusel-item');
    const step = item.offsetWidth + 15; // Ancho + Gap
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
}

btnNext.addEventListener('click', () => moveCarousel(1));
btnPrev.addEventListener('click', () => moveCarousel(-1));

// Soporte para arrastrar (Touch y Ratón)
let isDown = false, startX, scrollLeft;

const startDragging = (e) => {
    isDown = true;
    startX = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
};

const stopDragging = () => {
    isDown = false;
    track.style.scrollBehavior = 'smooth';
};

const move = (e) => {
    if (!isDown) return;
    const x = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
};

track.addEventListener('mousedown', startDragging);
track.addEventListener('mousemove', move);
track.addEventListener('mouseup', stopDragging);
track.addEventListener('mouseleave', stopDragging);

track.addEventListener('touchstart', startDragging, {passive: true});
track.addEventListener('touchmove', move, {passive: true});
track.addEventListener('touchend', stopDragging);

function verGrande(src) {
    const modal = document.getElementById('visorModal');
    modal.style.display = 'flex';
    document.getElementById('imgGrande').src = src;
}
