const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <i class="fa-solid fa-store me-2"></i>
      <strong>kraft.4u</strong>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html" data-page="index">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="store.html" data-page="store">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html" data-page="contact">Contact</a>
        </li>
      </ul>
      <form class="d-flex" id="search-form">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
          name="search"
        />
      </form>
      <a
        href="cart.html"
        class="btn btn-outline-dark ms-2 position-relative"
      >
        <i class="fa-solid fa-cart-shopping"></i> Cart
        <span
          id="cart-count"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style="display: none"
        >
          0
        </span>
      </a>
    </div>
  </div>
</nav>
`;

const footerHTML = `
<footer class="bg-light text-center text-lg-start mt-auto">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase fw-bold" style="color: var(--brand-pastel-indigo);">
          <i class="fa-solid fa-store me-2"></i>kraft.4u
        </h5>
        <p class="text-muted">
          Handcrafted with love. Discover unique handmade treasures for your home and loved ones.
        </p>
      </div>
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase fw-bold" style="color: var(--brand-dark);">Quick Links</h5>
        <ul class="list-unstyled mb-0">
          <li><a href="index.html" class="text-dark">Home</a></li>
          <li><a href="store.html" class="text-dark">Store</a></li>
          <li><a href="contact.html" class="text-dark">Contact</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase fw-bold" style="color: var(--brand-dark);">Follow Us</h5>
        <div class="d-flex gap-2 justify-content-lg-start justify-content-md-center">
          <a href="https://www.instagram.com/kraft.4u/" class="btn btn-outline-dark btn-sm" style="border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/+919541354578" class="btn btn-outline-dark btn-sm" style="border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center p-3" style="background-color: var(--brand-dark); color: var(--brand-white);">
    © 2025 Copyright: <a class="text-light" href="index.html">kraft.4u</a> | Handmade with <i class="fas fa-heart" style="color: var(--brand-pastel-indigo);"></i>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Handle search form submission
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = e.target.elements.search.value;
            window.location.href = `store.html?search=${encodeURIComponent(searchTerm)}`;
        });
    }
});
