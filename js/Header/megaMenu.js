
(function initMegaMenu() {
    function setupMegaMenu() {
        const dropdown = document.querySelector(
            '.header-nav > ul > li.has-dropdown'
        );

        if (!dropdown) {
            console.warn('منوی کتاب‌ها پیدا نشد.');
            return;
        }

        const toggle = dropdown.querySelector('.dropdown-toggle');
        const megaMenu = dropdown.querySelector('.mega-menu');

        if (!toggle || !megaMenu) {
            console.warn('دکمه یا محتوای منو پیدا نشد.');
            return;
        }

        if (toggle.dataset.menuInitialized === 'true') return;
        toggle.dataset.menuInitialized = 'true';

        toggle.setAttribute('role', 'button');
        toggle.setAttribute('aria-haspopup', 'true');
        toggle.setAttribute('aria-expanded', 'false');

        megaMenu.setAttribute('aria-hidden', 'true');

        function closeMenu() {
            dropdown.classList.remove('menu-open');
            toggle.setAttribute('aria-expanded', 'false');
            megaMenu.setAttribute('aria-hidden', 'true');
        }

        function openMenu() {
            dropdown.classList.add('menu-open');
            toggle.setAttribute('aria-expanded', 'true');
            megaMenu.setAttribute('aria-hidden', 'false');
        }

        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (dropdown.classList.contains('menu-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        document.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeMenu();
                toggle.focus();
            }
        });

        console.log('منوی کتاب‌ها آماده است.');
    }

    if (document.readyState === 'loading') {
        document.addEventListener(
            'DOMContentLoaded',
            setupMegaMenu,
            { once: true }
        );
    } else {
        setupMegaMenu();
    }
})();
