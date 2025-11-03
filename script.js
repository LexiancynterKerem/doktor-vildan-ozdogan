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
});