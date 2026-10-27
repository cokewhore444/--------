import { showNotification } from "../utils.js";

export function buildSearchBar() {
    const searchBar = document.getElementById('searchBar');
    if (!searchBar) return;

    searchBar.innerHTML = `
        <input type="text" placeholder="جستجو در خیلی سبز..." id="searchInput">
        <button id="searchBtn"><i class="fas fa-search"></i></button>
    `;

    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');

    function doSearch() {
        const query = input.value.trim();
        if (query) {
            showNotification(`جستجو برای: ${query}`);
        }
    }

    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSearch();
            }
        });
    }

    if (btn) btn.addEventListener('click', doSearch);

    console.log('✅ نوار جستجو ساخته شد');
}