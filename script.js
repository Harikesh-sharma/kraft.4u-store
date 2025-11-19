/**
 * Global state to hold data for the QR modal
 */
let modalData = {
    whatsappURL: '',
    baseMessage: '',
};

/**
 * Simulates a "Buy Now" action for checkout.
 * If product details are passed, it adds that item to the cart first.
 * Then, it constructs a WhatsApp message with the cart contents and redirects.
 * @param {string} [id] - The product ID (optional).
 * @param {string} [name] - The product name (optional).
 * @param {number} [price] - The product price (optional).
 * @param {string} [image] - The product image URL (optional).
 */
function buyNow(id, name, price, image) {
    // If called from a product page, add that single item to the cart first.
    if (id && name && price && image) {
        addToCart(id, name, price, image, false); // Add to cart without showing alert
    }

    const cart = getCart();
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before proceeding.");
        return;
    }

    const phoneNumber = "+919541354578"; // Your WhatsApp number
    let message = "Hello kraft.4u! I would like to place an order for the following items:\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `*${item.name}*\n`;
        message += `Quantity: ${item.quantity}\n`;
        message += `Price: ₹${item.price}\n\n`;
        total += item.price * item.quantity;
    });

    message += `*Total Amount: ₹${total.toFixed(2)}*`;

    // Encode the message for a URL
    modalData.baseMessage = message; // Store the message without UTR
    modalData.phoneNumber = phoneNumber;

    // --- QR Code Modal Logic ---
    const qrModalElement = document.getElementById('qrCodeModal');
    const qrModal = new bootstrap.Modal(qrModalElement);

    // Update modal content
    // Clear previous UTR input
    const utrInput = qrModalElement.querySelector('input[id^="utr-input"]');
    if (utrInput) utrInput.value = '';
    document.getElementById('modal-total-amount').textContent = `₹${total.toFixed(2)}`;

    // Set the default view to PhonePe QR
    switchQr('phonepe');

    // Show the modal
    qrModal.show();

    // Handle the confirm button click dynamically
    document.getElementById('whatsapp-confirm-btn').onclick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        const utr = utrInput ? utrInput.value.trim() : '';
        // Validate that the UTR is exactly 12 digits
        if (!/^\d{12}$/.test(utr)) {
            alert('Please enter a valid 12-digit UTR/Transaction ID.');
            return;
        }
        const finalMessage = `${modalData.baseMessage}\n\n*Payment UTR: ${utr}*\n\n(Order will be confirmed after payment verification.)`;
        const finalWhatsappURL = `https://wa.me/${modalData.phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
        window.open(finalWhatsappURL, '_blank');

        // Clear the cart and hide the modal ONLY after successful confirmation
        localStorage.removeItem("cart");
        updateCartIcon();
        qrModal.hide();
    };
}

/**
 * Switches the QR code and instructions shown in the modal.
 * @param {'phonepe' | 'gpay' | 'whatsapp'} type - The type of QR to display.
 */
function switchQr(type) {
    const qrContainer = document.getElementById('qrcode-container');
    const instructions = document.getElementById('qr-instructions');
    qrContainer.innerHTML = ''; // Clear previous QR

    // Update active button state
    const buttons = document.querySelectorAll('.btn-group .btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(type)) {
            btn.classList.add('active');
        }
    });

    if (type === 'phonepe') {
        // IMPORTANT: Replace with your actual PhonePe QR code image path
        qrContainer.innerHTML = `<img src="WhatsApp%20Image%202025-11-19%20at%2000.52.51_c4a836f6.jpg" alt="PhonePe QR Code" style="width: 200px; height: 350px;">`;
        instructions.textContent = "1. Scan to pay. 2. Enter the UTR below. 3. Click 'Confirm Order'.";
    } else if (type === 'gpay') {
        // IMPORTANT: Replace with your actual Google Pay QR code image path
        qrContainer.innerHTML = `<img src="WhatsApp%20Image%202025-11-19%20at%2000.55.03_a36cdbe5.jpg" alt="Google Pay QR Code" style="width: 200px; height: 200px;">`;
        instructions.textContent = "1. Scan to pay. 2. Enter the UTR below. 3. Click 'Confirm Order'.";
    } else if (type === 'whatsapp') {
        const whatsappURL = `https://wa.me/${modalData.phoneNumber}?text=${encodeURIComponent(modalData.baseMessage)}`;
        new QRCode(qrContainer, {
            text: whatsappURL,
            width: 200,
            height: 200,
        });
        instructions.textContent = "Scan this QR to send your order details directly on WhatsApp.";
    }
}

/**
 * Retrieves the cart from localStorage.
 * @returns {Array} The cart items.
 */
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

/**
 * Saves the cart to localStorage.
 * @param {Array} cart - The cart items.
 */
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartIcon();
}

/**
 * Adds a product to the cart.
 * @param {string} id - The product ID.
 * @param {string} name - The product name.
 * @param {number} price - The product price.
 * @param {string} image - The product image URL.
 * @param {boolean} [showAlert=true] - Whether to show an alert.
 */
function addToCart(id, name, price, image, showAlert = true) {
    const cart = getCart();
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity++;
    } else {
        // Otherwise, add the new item with quantity 1
        cart.push({ id, name, price, image, quantity: 1 });
    }

    saveCart(cart);
    if (showAlert) {
        alert(`${name} has been added to your cart!`);
    }
}

/**
 * Removes a product from the cart.
 * @param {string} id - The product ID to remove.
 */
function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter((item) => item.id !== id);
    saveCart(cart);
    // This function is called from cart.html, so we reload the items
    if (window.location.pathname.endsWith('cart.html') && typeof displayCartItems === "function") {
        displayCartItems();
    }
}

/**
 * Updates the quantity of a product in the cart.
 * @param {string} id - The product ID.
 * @param {number} quantity - The new quantity.
 */
function updateQuantity(id, quantity) {
    let cart = getCart();
    const item = cart.find((item) => item.id === id);

    if (item) {
        if (quantity > 0) {
            item.quantity = quantity;
        } else {
            // If quantity is 0 or less, remove the item
            cart = cart.filter((item) => item.id !== id);
        }
    }

    saveCart(cart);
    // This function is called from cart.html, so we reload the items
    if (window.location.pathname.endsWith('cart.html') && typeof displayCartItems === "function") {
        displayCartItems();
    }
}

/**
 * Updates the cart icon count in the navbar.
 */
function updateCartIcon() {
    const cart = getCart();
    // Calculate total number of items, not just unique products
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");

    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        if (totalItems > 0) {
            cartCountElement.style.display = "block";
        } else {
            cartCountElement.style.display = "none";
        }
    }
}

// Run this function when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    updateCartIcon();
});
