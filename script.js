document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Ajustado para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Lógica del Carrusel (Flechas)
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if(carousel && prevBtn && nextBtn) {
        const scrollAmount = 315; // Ancho foto + gap aprox

        nextBtn.addEventListener('click', () => {
            carousel.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollLeft -= scrollAmount;
        });
    }

    // 3. Lógica para ampliar fotos (Modal)
    const modal = document.getElementById("galeria-modal");
    const modalImg = document.getElementById("img-ampliada");
    const closeBtn = document.querySelector(".close-modal");

    // Seleccionamos todas las imágenes dentro del carrusel
    document.querySelectorAll('.photo-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // Cerrar con la X
    if(closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        }
    }

    // Cerrar al hacer clic fuera de la imagen
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
