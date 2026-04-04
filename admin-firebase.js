// admin-firebase.js - Convenience wrappers & init for admin panel
// Uses window.KraftFirebase from firebase-config.js

class AdminFirebase {
  constructor() {
    this.productsUnsub = null;
    this.ordersUnsub = null;
    this.init();
  }

  async init() {
    try {
      // Migrate old local data
      await window.KraftFirebase.init.migrateLocalStorage();
      
      // Init defaults if empty
      await window.KraftFirebase.init.initializeDefaults();
      
      // Auth listener
      window.KraftFirebase.auth.onAuthStateChanged((user) => {
        if (user && user.email === 'admin@kraft4u.com') {
          console.log('Admin authenticated:', user.email);
        } else {
          console.log('Not admin or unauthenticated');
        }
      });

      console.log('AdminFirebase initialized successfully');
    } catch (error) {
      console.error('AdminFirebase init error:', error);
    }
  }

  // Products
  async loadProducts() {
    return await window.KraftFirebase.products.getAllProducts();
  }

  listenProducts(callback) {
    if (this.productsUnsub) this.productsUnsub();
    this.productsUnsub = window.KraftFirebase.products.listenToProducts(callback);
  }

  async getCategories() {
    return await window.KraftFirebase.products.getCategories();
  }

  async saveProduct(product) {
    if (product.id) {
      return await window.KraftFirebase.products.updateProduct(product.id, product);
    } else {
      const result = await window.KraftFirebase.products.addProduct(product);
      if (result.success) product.id = result.id;
      return result;
    }
  }

  async deleteProduct(id) {
    return await window.KraftFirebase.products.deleteProduct(id);
  }

  // Orders  
  async loadOrders() {
    return await window.KraftFirebase.orders.getOrders();
  }

  listenOrders(callback) {
    if (this.ordersUnsub) this.ordersUnsub();
    this.ordersUnsub = window.KraftFirebase.orders.listenToOrders(callback);
  }

  // Auth (fallback to legacy if no Firebase Auth)
  async legacyLogin(password) {
    if (window.KraftFirebase.auth.signInAdmin) {
      return await window.KraftFirebase.auth.signInAdmin('admin@kraft4u.com', password);
    }
    // Legacy local auth fallback
    if (password === 'Ladnajarurihai') {
      localStorage.setItem('adminAuth', 'true');
      return { success: true };
    }
    return { success: false, error: 'Invalid password' };
  }

  logout() {
    window.KraftFirebase.auth.signOutAdmin();
  }

  isAuthenticated() {
    return localStorage.getItem('firebase_admin_auth') === 'true' || localStorage.getItem('adminAuth') === 'true';
  }

  // Images
  async uploadImage(file) {
    return await window.KraftFirebase.storage.uploadImage(file);
  }

  // Cleanup
  destroy() {
    if (this.productsUnsub) {
      this.productsUnsub();
      this.productsUnsub = null;
    }
    if (this.ordersUnsub) {
      this.ordersUnsub();
      this.ordersUnsub = null;
    }
  }
}

// Global instance
window.AdminFirebase = new AdminFirebase();

