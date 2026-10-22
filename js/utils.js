
function toPersianNumber(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, d => persianDigits[d]);
}

function formatPrice(price) {
    return toPersianNumber(price.toLocaleString('en-US')) + ' تومان';
}
function showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'toast-notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 50);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

console.log('✅ utils.js لود شد');