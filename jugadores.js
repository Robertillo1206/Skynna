 const track = document.getElementById('track');
        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');

        // --- FLECHAS (CORREGIDAS) ---
        btnNext.addEventListener('click', () => {
            const itemWidth = track.querySelector('.carrusel-item').offsetWidth + 15;
            track.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            const itemWidth = track.querySelector('.carrusel-item').offsetWidth + 15;
            track.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });

        // --- ARRASTRAR CON RATÓN ---
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.classList.add('active');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            track.style.scrollBehavior = 'auto'; // Desactiva smooth para que el arrastre sea instantáneo
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.style.scrollBehavior = 'smooth'; // Reactiva smooth para las flechas
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 2; 
            track.scrollLeft = scrollLeft - walk;
        });

        // --- VISOR MODAL ---
        function verGrande(src) {
            document.getElementById('visorModal').style.display = 'flex';
            document.getElementById('imgGrande').src = src;
        }