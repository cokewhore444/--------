
function createProductCard(product) {
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
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    افزودن به سبد
                </button>
            </div>
        </div>
    `;
}

console.log('✅ BookCard.js لود شد');