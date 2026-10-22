// ============================================
// ===== راه‌اندازی Swiper ها =====
// ============================================
function initAllSwipers() {
    // اسلایدر ویژه‌ها
    new Swiper('.products-swiper', {
        slidesPerView: 5,
        spaceBetween: 18,
        loop: true,
        navigation: {
            nextEl: '.products-swiper .swiper-button-next',
            prevEl: '.products-swiper .swiper-button-prev',
        },
        breakpoints: {
            0:    { slidesPerView: 2 },
            576:  { slidesPerView: 3 },
            992:  { slidesPerView: 4 },
            1200: { slidesPerView: 5 }
        }
    });

    // اسلایدر پیشنهادات
    new Swiper('.suggestions-swiper', {
        slidesPerView: 5,
        spaceBetween: 18,
        loop: true,
        navigation: {
            nextEl: '.suggestions-swiper .swiper-button-next',
            prevEl: '.suggestions-swiper .swiper-button-prev',
        },
        breakpoints: {
            0:    { slidesPerView: 2 },
            576:  { slidesPerView: 3 },
            992:  { slidesPerView: 4 },
            1200: { slidesPerView: 5 }
        }
    });

    console.log('✅ Swiper ها راه‌اندازی شدن');
}