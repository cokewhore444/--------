let products = [
  { id: 1, title: "ماجرا انگلیسی دوازدهم +", price: 260000, discount: 320000, image: "./Images/book-1.png" },
  { id: 2, title: "فیزیک جامع کنکور", price: 285000, discount: 350000, image: "./Images/book-2.png" },
  { id: 3, title: "زیست‌شناسی جامع جلد ۱", price: 245000, discount: 300000, image: "./Images/book-3.png" },
  { id: 4, title: "ماجرا دین و زندگی دوازدهم", price: 320000, discount: 400000, image: "./Images/book-4.png" },
  { id: 5, title: "زیست‌شناسی جامع جلد ۲", price: 198000, discount: 240000, image: "./Images/book-5.png" },
  { id: 6, title: "انگلیسی دوازدهم Beast Mode", price: 215000, discount: 260000, image: "./Images/book-6.png" }
];

let suggestions = [
  { id: 101, title: "سررسید ۱۴۰۵ خیلی سبز طرح رنگ زرد To Do", price: 225000, discount: 250000, image: "./Images/sug-1.png" },
  { id: 102, title: "سررسید ۱۴۰۵ خیلی سبز طرح نئونی رنگ سبز زرد", price: 225000, discount: 250000, image: "./Images/sug-2.png" },
  { id: 103, title: "سررسید ۱۴۰۵ خیلی سبز رنگ سبز Calender", price: 225000, discount: 250000, image: "./Images/sug-3.png" },
  { id: 104, title: "سررسید ۱۴۰۵ خیلی سبز طرح رنگ آبی To Do", price: 225000, discount: 250000, image: "./Images/sug-4.png" },
  { id: 105, title: "سررسید ۱۴۰۵ خیلی سبز طرح رنگ صورتی To Do", price: 225000, discount: 250000, image: "./Images/sug-5.png" },
  { id: 106, title: "سررسید ۱۴۰۵ خیلی سبز رنگ بنفش 365", price: 225000, discount: 250000, image: "./Images/sug-6.png" }
];

let categories = [
  { id: 1, title: "کنکور تجربی", icon: "fa-dna" },
  { id: 2, title: "کنکور ریاضی", icon: "fa-calculator" },
  { id: 3, title: "کنکور انسانی", icon: "fa-globe" },
  { id: 4, title: "متوسطه اول", icon: "fa-pencil-alt" },
  { id: 5, title: "ابتدایی", icon: "fa-child" },
  { id: 6, title: "پیش‌دبستانی", icon: "fa-star" }
];

let collections = [];

const heroBanners = [
  { image: "./Images/banner-1.png", alt: "سبد جامع انسانی" },
  { image: "./Images/banner-2.png", alt: "بسته جامع کنکور" },
  { image: "./Images/banner-3.png", alt: "BEAST MODE ON" },
  { image: "./Images/banner-4.png", alt: "دیلی سبز" },
  { image: "./Images/banner-5.png", alt: "زیست رو بسباربه" },
];

function buildHeroSwiper() {
  const wrapper = document.getElementById("heroWrapper");
  if (!wrapper) return;

  wrapper.innerHTML = heroBanners.map(banner => `
        <div class="swiper-slide">
            <img src="${banner.image}" alt="${banner.alt}" loading="lazy">
        </div>
  `).join("");

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

function renderProducts() {
  const wrapper = document.getElementById("productWrapper");
  if (!wrapper) return;

  if (typeof createProductCard !== "function") {
    console.error("تابع createProductCard پیدا نشد.");
    return;
  }

  wrapper.innerHTML = products.map(product => createProductCard(product)).join("");
}

function renderSuggestions() {
  const wrapper = document.getElementById("suggestionWrapper");
  if (!wrapper) return;

  if (typeof createProductCard !== "function") {
    console.error("تابع createProductCard پیدا نشد.");
    return;
  }

  wrapper.innerHTML = suggestions.map(product => createProductCard(product)).join("");
}

function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;

  grid.innerHTML = categories.map(category => `
        <div class="category-card">
            <i class="fas ${category.icon}"></i>
            <h3>${category.title}</h3>
        </div>
  `).join("");
}

function renderCollections() {
  const grid = document.getElementById("collectionsGrid");
  if (!grid) {
    console.warn("عنصر collectionsGrid در index.html پیدا نشد.");
    return;
  }

  const svgFiles = [
    "test1.svg", "Test2.svg", "Test3.svg", "Test4.svg", "Test5.svg",
    "Test6.svg", "Test7.svg", "Test8.svg", "Test9.svg", "Test10.svg",
    "Test11.svg", "Test12.svg", "Test13.svg", "Test14.svg", "Test15.svg",
    "Test16.svg", "Test17.svg", "Test18.svg", "Test19.svg", "Test20.svg",
    "Test21.svg"
  ];

  grid.innerHTML = svgFiles.map((file, index) => `
        <div class="collection-card">
            <img src="./svg/${file}" alt="لوگوی مجموعه ${index + 1}" loading="lazy">
        </div>
  `).join("");

  console.log("۲۱ لوگوی SVG به صفحه اضافه شدند.");
}

function buildFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
        <div class="container footer-grid">
            <div>
                <h3>درباره خیلی سبز</h3>
                <p>انتشارات خیلی سبز یکی از بزرگترین ناشران کتاب‌های کمک درسی در ایران است.</p>
            </div>

            <div>
                <h3>لینک‌های مفید</h3>
                <ul>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">تماس با ما</a></li>
                    <li><a href="#">قوانین و مقررات</a></li>
                    <li><a href="#">سوالات متداول</a></li>
                </ul>
            </div>

            <div>
                <h3>خدمات مشتریان</h3>
                <ul>
                    <li><a href="#">پیگیری سفارش</a></li>
                    <li><a href="#">روش‌های ارسال</a></li>
                    <li><a href="#">شرایط بازگشت</a></li>
                </ul>
            </div>

            <div>
                <h3>ما را دنبال کنید</h3>
                <div class="social-icons">
                    <a href="#" class="social-link telegram" aria-label="تلگرام" title="تلگرام">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                    </a>

                    <a href="#" class="social-link instagram" aria-label="اینستاگرام" title="اینستاگرام">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                    </a>

                    <!-- آپارات -->
                    <a href="#" class="social-link aparat" aria-label="آپارات" title="آپارات">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle class="aparat-bg" cx="16" cy="16" r="11" fill="#fff" />
                            <circle class="aparat-dot" cx="12" cy="12" r="3.2" fill="#2a2a2a" />
                            <circle class="aparat-dot" cx="20" cy="12" r="3.2" fill="#2a2a2a" />
                            <circle class="aparat-dot" cx="12" cy="20" r="3.2" fill="#2a2a2a" />
                            <circle class="aparat-dot" cx="20" cy="20" r="3.2" fill="#2a2a2a" />
                            <circle class="aparat-dot" cx="16" cy="16" r="1.2" fill="#2a2a2a" />
                            <path class="aparat-line" d="M24 4 Q27 6 28 9" stroke="#fff" stroke-width="2.2" stroke-linecap="round" fill="none" />
                            <path class="aparat-line" d="M28 23 Q27 26 24 28" stroke="#fff" stroke-width="2.2" stroke-linecap="round" fill="none" />
                            <path class="aparat-line" d="M8 28 Q5 26 4 23" stroke="#fff" stroke-width="2.2" stroke-linecap="round" fill="none" />
                            <path class="aparat-line" d="M4 9 Q5 6 8 4" stroke="#fff" stroke-width="2.2" stroke-linecap="round" fill="none" />
                        </svg>
                    </a>

                    <a href="#" class="social-link youtube" aria-label="یوتیوب" title="یوتیوب">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="copyright">
            <p>© ۱۴۰۳ انتشارات خیلی سبز - تمامی حقوق محفوظ است.</p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  try {


    buildHeroSwiper();
    renderProducts();
    renderCollections();
    renderSuggestions();
    renderCategories();
    buildFooter();

    if (typeof initAllSwipers === "function") {
      initAllSwipers();
    }

    console.log("✅ صفحه خیلی سبز با موفقیت بارگذاری شد.");
  } catch (error) {
    console.error("❌ خطا در راه‌اندازی صفحه:", error);
  }
});