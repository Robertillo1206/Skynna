const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// --- NAVEGACIÓN FLECHAS ---
btnNext.addEventListener('click', () => {
    track.scrollBy({ left: 200, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -200, behavior: 'smooth' });
});

// --- ARRASTRAR (MOUSE Y TOUCH) ---
let isDown = false;
let startX;
let scrollLeft;

const getX = (e) => (e.pageX || e.touches[0].pageX);

const start = (e) => {
    isDown = true;
    startX = getX(e) - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
};

const end = () => {
    isDown = false;
    track.style.scrollBehavior = 'smooth';
};

const move = (e) => {
    if (!isDown) return;
    const x = getX(e) - track.offsetLeft;
    const walk = (x - startX) * 1.5; 
    track.scrollLeft = scrollLeft - walk;
};

track.addEventListener('mousedown', start);
track.addEventListener('touchstart', start);
track.addEventListener('mouseup', end);
track.addEventListener('touchend', end);
track.addEventListener('mouseleave', end);
track.addEventListener('mousemove', move);
track.addEventListener('touchmove', move);

// --- VISOR ---
function verGrande(src) {
    document.getElementById('visorModal').style.display = 'flex';
    document.getElementById('imgGrande').src = src;
}
