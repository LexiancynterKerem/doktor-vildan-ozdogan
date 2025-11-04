document.addEventListener("DOMContentLoaded", function() {
    
    // Mobil Menü Fonksiyonu
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Mobil menüdeki linklere tıklayınca menüyü kapat
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    });

    
    // Not: Masaüstü menüdeki linkler için scroll-behavior: smooth CSS'de ayarlandı.
// ===== YENİ EKLENEN SLIDER KODU =====
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('next-slide');
    const prevButton = document.getElementById('prev-slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Tüm slide'lardan 'active' class'ını kaldır
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Gelen index'teki slide'a 'active' class'ını ekle
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Başa dön
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Sona git
        }
        showSlide(currentSlide);
    }

    // Butonlara tıklama olaylarını ekle
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }

    // İlk slide'ı göster (sayfa yüklendiğinde)
    if(slides.length > 0) {
        showSlide(currentSlide);
    }
    // ===== SLIDER KODU SONU =====
});
