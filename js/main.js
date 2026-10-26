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