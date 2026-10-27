import { toPersianNumber, formatPrice, showNotification } from "../utils.js";
import { productsData, suggestionsData } from "../data.js";


export function createProductCard(product) {
    const discountPercent = Math.round(
        ((product.discount - product.price) / product.discount) * 100
    );

    return `
        <div class="product-card swiper-slide" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <span class="badge-discount">${toPersianNumber(discountPercent)}٪</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <div>
                        <span class="price">${formatPrice(product.price)}</span>
                        <span class="discount">${formatPrice(product.discount)}</span>
                    </div>
                </div>
                <button class="add-to-cart" data-add-to-cart="${product.id}">
                    <i class="fas fa-cart-plus"></i>
                    افزودن به سبد
                </button>
            </div>
        </div>
    `;
}

console.log('✅ BookCard.js لود شد');

export function initProductCardActions(container = document) {
  container.querySelectorAll("[data-add-to-cart]:not([data-cart-ready])").forEach((button) => {
    button.dataset.cartReady = "true";
    button.addEventListener("click", () => {
      const id = Number(button.dataset.addToCart);
      const product = [...productsData, ...suggestionsData].find((item) => item.id === id);
      showNotification(product ? `«${product.title}» به سبد خرید اضافه شد.` : "محصول انتخاب شد.");
    });
  });
}
