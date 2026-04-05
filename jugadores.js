const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// Scroll de flechas
const scroll = (direction) => {
    const item = track.querySelector('.carrusel-item');
    if (item) {
        const step = item.offsetWidth + 15;
        track.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
};

btnNext.onclick = () => scroll(1);
btnPrev.onclick = () => scroll(-1);

// Arrastre táctil
let isDown = false, startX, scrollLeft;

track.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
}, {passive: true});

track.addEventListener('touchend', () => {
    isDown = false;
    track.style.scrollBehavior = 'smooth';
});

track.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
}, {passive: true});

// --- FUNCIÓN VER EN GRANDE ---
function verGrande(src) {
    const modal = document.getElementById('visorModal');
    const img = document.getElementById('imgGrande');
    if (modal && img) {
        modal.style.display = 'flex';
        img.src = src;
    }
}

// Cerrar modal al hacer clic en cualquier parte del mismo
document.getElementById('visorModal').onclick = function() {
    this.style.display = 'none';
};
