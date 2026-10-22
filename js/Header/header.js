(function buildHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    header.className = 'main-header';
    header.innerHTML = `
        <div class="container header-content">
            <div class="logo">
                <div class="logo-text">
                    <span class="logo-icon">🍏</span>
                    <div>
                        <h1>خیلی سبز</h1>
                        <small>انتشارات</small>
                    </div>
                </div>
            </div>

            <nav class="header-nav">
                <ul>
                    <li class="has-dropdown">
                        <a href="#" class="dropdown-toggle">
                            کتاب‌ها <i class="fas fa-chevron-down"></i>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-inner">
                                <div class="mega-column">
                                    <h4 class="mega-title">کنکور</h4>
                                    <ul>
                                        <li><a href="#">دوازدهم</a></li>
                                        <li><a href="#">یازدهم</a></li>
                                        <li><a href="#">دهم</a></li>
                                        <li><a href="#">متوسطه اول</a></li>
                                        <li><a href="#">دبستان</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4 class="mega-title">جامع</h4>
                                    <ul>
                                        <li><a href="#">علوم تجربی</a></li>
                                        <li><a href="#">ریاضی و فیزیک</a></li>
                                        <li><a href="#">علوم انسانی</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4 class="mega-title">سری کتاب‌ها</h4>
                                    <ul>
                                        <li><a href="#">تست</a></li>
                                        <li><a href="#">جمع بندی</a></li>
                                        <li><a href="#">چند کنکور</a></li>
                                        <li><a href="#">فصل آزمون</a></li>
                                        <li><a href="#">موضوعی</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h4 class="mega-title">جیبی</h4>
                                    <ul>
                                        <li><a href="#">جیبی کنکور</a></li>
                                        <li><a href="#">جیبی پایه</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">وبلاگ</a></li>
                    <li><a href="#">آزمون</a></li>
                    <li><a href="#">باشگاه مشتریان</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">همکاری با ما</a></li>
                    <li><a href="#">تماس با ما</a></li>
                </ul>
            </nav>

            <div class="header-actions">
                <a href="#" class="cart-btn" id="cartBtn">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count">۰</span>
                </a>
                <a href="#" class="login-btn">ورود یا ثبت‌نام</a>
                <button class="menu-toggle" id="menuToggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>

        <div class="mobile-menu" id="mobileMenu">
            <ul>
                <li><a href="#">کتاب‌ها</a></li>
                <li><a href="#">وبلاگ</a></li>
                <li><a href="#">آزمون</a></li>
                <li><a href="#">باشگاه مشتریان</a></li>
                <li><a href="#">درباره ما</a></li>
                <li><a href="#">همکاری با ما</a></li>
                <li><a href="#">تماس با ما</a></li>
            </ul>
        </div>
    `;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });


    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    console.log('✅ هدر ساخته شد');
})();