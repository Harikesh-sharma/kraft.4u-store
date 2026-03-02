// Get products from localStorage or use default data
const getProducts = () => {
    const stored = localStorage.getItem('adminProducts');
    if (stored) {
        return JSON.parse(stored);
    }
    return allProducts;
};

function renderProducts(products) {
    const productListContainer = document.getElementById("product-list");
    productListContainer.innerHTML = ""; // Clear existing products

    if (products.length === 0) {
        productListContainer.innerHTML =
            '<p class="text-center">No products found matching your search.</p>';
        return;
    }

    const currentProducts = getProducts();

    products.forEach((product) => {
    const newBadge = product.isNew ? '<span class="badge bg-success new-arrival-badge">NEW</span>' : '';
        const productCard = `
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 product-card">
              ${newBadge}
              <a href="product.html?id=${product.id}">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
              </a>
              <div class="card-body">
                <h5 class="card-title">
                  <a href="product.html?id=${product.id}" class="text-decoration-none text-dark">${product.name}</a>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">₹${product.price}</h6>
              </div>
              <div class="card-footer text-center" style="background: transparent; border-top: none;">
                <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">
                  <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>`;
        productListContainer.innerHTML += productCard;
    });

    // Add event listeners to the new buttons
    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const productId = e.currentTarget.dataset.id;
            const product = currentProducts.find((p) => p.id === productId);
            if (product) {
                addToCart(product.id, product.name, product.price, product.image);
            }
        });
    });
}

function updateProductDisplay() {
    const searchInput = document.getElementById("search-input");
    const sortSelect = document.getElementById("sort-select");

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
    const sortValue = sortSelect.value;

    const currentProducts = getProducts();

    // 1. Filter by search term
    let displayedProducts = currentProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );

    // 2. Sort the filtered products
    switch (sortValue) {
        case "price-asc":
            displayedProducts.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            displayedProducts.sort((a, b) => b.price - a.price);
            break;
        case "name-asc":
            displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            displayedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // No sorting or "default"
            break;
    }

    // 3. Render the final list
    renderProducts(displayedProducts);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sort-select").addEventListener("change", updateProductDisplay);
    // Initial display on page load
    updateProductDisplay();
});
