
# kraft.4u - Handmade Crafts E-Commerce Store

A beautiful e-commerce website for handmade crafts including resin items, candles, keychains, wall art, and lippan art.

## 🌟 Features

- **Product Catalog** - Browse handmade crafts across 5 categories:
  - Resin Items
  - Candles
  - Keychains
  - Wall Art
  - Lippan Art

- **Shopping Cart** - Add products to cart with quantity management

- **Product Details** - View detailed specifications, descriptions, and customer reviews

- **Search & Filter** - Find products by name, category, or price range

- **Admin Panel** - Manage products (add, edit, delete) with authentication

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- An internet connection (for CDN resources)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/kraft.git
```

2. Navigate to the project directory:
```bash
cd kraft
```

3. Open `index.html` in your browser:
```bash
# Using Windows
start index.html

# Using macOS
open index.html

# Using Linux
xdg-open index.html
```

Or simply double-click `index.html` to open it in your default browser.

## 📁 Project Structure

```
kraft/
├── index.html          # Main store homepage
├── admin.html          # Admin panel for product management
├── cart.html           # Shopping cart page
├── category.html       # Category browsing page
├── product.html        # Individual product details
├── store.html          # Store layout/page
├── style.css           # Main stylesheet
├── script.js           # Main JavaScript
├── store-script.js     # Store-specific JavaScript
├── components.js       # Reusable components
├── data.js             # Product data
├── admin-auth.js       # Admin authentication
├── firebase-config.js  # Firebase configuration
├── images/             # Product images
└── README.md           # This file
```
<<<<<<< HEAD

## 🔐 Admin Panel

### Access
Navigate to `admin.html` to access the admin panel.

### Default Password
 ------Data Hidden------
=======
>>>>>>> 51a5aa8feebec77fdbca15649716043774bf9296
### Features
- Dashboard with product statistics
- Add new products with specifications
- Edit existing products
- Delete products
- Export product data
- Clear and restore data

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling with CSS variables
- **JavaScript (ES6+)** - Interactivity
- **Bootstrap 5** - Responsive framework
- **Firebase** - Cloud database (optional)
- **Font Awesome** - Icons

## 🔧 Configuration

### Firebase Setup (Optional)
To enable Firebase cloud storage:
1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database
3. Copy your config to `firebase-config.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... other config
};
```

## 📱 Responsive Design

The store is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 📄 License

This project is for demonstration purposes.

## 👏 Acknowledgments

- Bootstrap Framework
- Font Awesome Icons
- Google Fonts

