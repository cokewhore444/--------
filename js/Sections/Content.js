import { productsData, suggestionsData, categoriesData } from "../data.js";
import { createProductCard } from "../BookCard/BookCard.js";

export function renderProducts() {
  const wrapper = document.getElementById("productWrapper");
  if (!wrapper) return;

  if (typeof createProductCard !== "function") {
    console.error("تابع createProductCard پیدا نشد.");
    return;
  }

  wrapper.innerHTML = productsData
    .map((product) => createProductCard(product))
    .join("");
}

export function renderSuggestions() {
  const wrapper = document.getElementById("suggestionWrapper");
  if (!wrapper) return;

  if (typeof createProductCard !== "function") {
    console.error("تابع createProductCard پیدا نشد.");
    return;
  }

  wrapper.innerHTML = suggestionsData
    .map((product) => createProductCard(product))
    .join("");
}

export function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;

  grid.innerHTML = categoriesData
    .map(
      (category) => `
        <div class="category-card">
            <i class="fas ${category.icon}"></i>
            <h3>${category.title}</h3>
        </div>
  `,
    )
    .join("");
}

export function renderCollections() {
  const grid = document.getElementById("collectionsGrid");
  if (!grid) {
    console.warn("عنصر collectionsGrid در index.html پیدا نشد.");
    return;
  }

  const svgFiles = [
    "test1.svg",
    "Test2.svg",
    "Test3.svg",
    "Test4.svg",
    "Test5.svg",
    "Test6.svg",
    "Test7.svg",
    "Test8.svg",
    "Test9.svg",
    "Test10.svg",
    "Test11.svg",
    "Test12.svg",
    "Test13.svg",
    "Test14.svg",
    "Test15.svg",
    "Test16.svg",
    "Test17.svg",
    "Test18.svg",
    "Test19.svg",
    "Test20.svg",
    "Test21.svg",
  ];

  grid.innerHTML = svgFiles
    .map(
      (file, index) => `
        <div class="collection-card">
            <img src="./svg/${file}" alt="لوگوی مجموعه ${index + 1}" loading="lazy">
        </div>
  `,
    )
    .join("");

  console.log("۲۱ لوگوی SVG به صفحه اضافه شدند.");
}
