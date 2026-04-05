const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// --- FLECHAS ---
btnNext.addEventListener('click', () => {
    const itemWidth = track.querySelector('.carrusel-item').offsetWidth + 15;
    track.scrollBy({ left: itemWidth, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    const itemWidth = track.querySelector('.carrusel-item').offsetWidth + 15;
    track.scrollBy({ left: -itemWidth, behavior: 'smooth' });
});

// --- ARRASTRAR (RATÓN Y TÁCTIL) ---
let isDown = false;
let startX;
let scrollLeft;

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

const moveDragging = (e) => {
    if (!isDown) return;
    const x = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
    const walk = (x - startX) * 1.5; 
    track.scrollLeft = scrollLeft - walk;
};

// Eventos Ratón
track.addEventListener('mousedown', startDragging);
track.addEventListener('mouseleave', stopDragging);
track.addEventListener('mouseup', stopDragging);
track.addEventListener('mousemove', moveDragging);

// Eventos Táctiles
track.addEventListener('touchstart', startDragging);
track.addEventListener('touchend', stopDragging);
track.addEventListener('touchmove', moveDragging);

// --- VISOR MODAL ---
function verGrande(src) {
    document.getElementById('visorModal').style.display = 'flex';
    document.getElementById('imgGrande').src = src;
}
