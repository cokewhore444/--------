// فایل اصلی فقط ماژول‌ها را وارد و اجرا می‌کند.
import { buildHeader } from "./Header/header.js";
import { initMegaMenu } from "./Header/megaMenu.js";
import { buildSearchBar } from "./Input/Input.js";
import { initBackToTop } from "./BackToTop/backToTop.js";
import { buildHeroSwiper } from "./Sections/Hero.js";
import { renderProducts, renderSuggestions, renderCollections } from "./Sections/Content.js";
import { buildFooter } from "./Sections/Footer.js";
import { initAllSwipers } from "./Swiper/swipersSlij.js";
import { initProductCardActions } from "./BookCard/BookCard.js";

buildHeader();
initMegaMenu();
buildSearchBar();
buildHeroSwiper();
renderProducts();
renderCollections();
renderSuggestions();
buildFooter();
initProductCardActions();
initAllSwipers();
initBackToTop();
