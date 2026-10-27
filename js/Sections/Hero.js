const heroBanners = [
  { image: "./images/banner-1.png", alt: "سبد جامع انسانی" },
  { image: "./images/banner-2.png", alt: "بسته جامع کنکور" },
  { image: "./images/banner-3.png", alt: "BEAST MODE ON" },
  { image: "./images/banner-4.png", alt: "دیلی سبز" },
  { image: "./images/banner-5.png", alt: "زیست رو بسباربه" },
];

export function buildHeroSwiper() {
  const wrapper = document.getElementById("heroWrapper");
  if (!wrapper) return;

  wrapper.innerHTML = heroBanners
    .map(
      (banner) => `
        <div class="swiper-slide">
            <img src="${banner.image}" alt="${banner.alt}" loading="lazy">
        </div>
  `,
    )
    .join("");

  if (typeof Swiper === "undefined") {
    console.error("کتابخانه Swiper بارگذاری نشده است.");
    return;
  }

  new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,
    allowTouchMove: true,
    pagination: {
      el: ".hero-swiper .swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    effect: "slide",
    speed: 400,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  console.log("اسلایدر بنرها آماده شد.");
}
