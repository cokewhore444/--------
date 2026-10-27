// ============================================
// ===== راه‌اندازی Swiper ها =====
// ============================================
export function initAllSwipers() {
    if (typeof Swiper === 'undefined') { console.warn('Swiper بارگذاری نشده است.'); return; }

    // اسلایدر ویژه‌ها
    if (document.querySelector('.products-swiper .swiper-wrapper')?.children.length) new Swiper('.products-swiper', {
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
    if (document.querySelector('.suggestions-swiper .swiper-wrapper')?.children.length) new Swiper('.suggestions-swiper', {
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
