const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

function getScrollAmount() {
    const item = track.querySelector('.carrusel-item');
    return item ? item.offsetWidth + 15 : 300;
}

btnNext.onclick = () => track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
btnPrev.onclick = () => track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });

// Soporte Táctil
let isDown = false, startX, scrollLeft;

track.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
});

track.addEventListener('touchend', () => {
    isDown = false;
    track.style.scrollBehavior = 'smooth';
});

track.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
});

function verGrande(src) {
    document.getElementById('visorModal').style.display = 'flex';
    document.getElementById('imgGrande').src = src;
}
