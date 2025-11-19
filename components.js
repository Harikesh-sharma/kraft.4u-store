const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
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
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2024 Copyright: <a class="text-dark" href="index.html">kraft.4u</a>
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