/* Firebase Configuration & Utils for kraft.4u Admin Panel - Enhanced v2 */
const firebaseConfig = {
  apiKey: "AIzaSyBtS-p7CSWUbFriUlKZLuC94yrKMEPuJ8g",
  authDomain: "kraft4u-f7f2d.firebaseapp.com",
  projectId: "kraft4u-f7f2d",
  storageBucket: "kraft4u-f7f2d.firebasestorage.app",
  messagingSenderId: "928403844937",
  appId: "1:928403844937:web:95ca7a7640d31e4e5db498",
  measurementId: "G-L3R3SEBMQE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

// Collections
const productsRef = db.collection('products');
const ordersRef = db.collection('orders');
const categoriesRef = db.collection('categories');

// ==================== AUTH ====================
let currentUser = null;

async function signInAdmin(email, password) {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    currentUser = result.user;
    // Check admin role (custom claim or simple email check)
    if (email === 'admin@kraft4u.com') { // Configurable admin email
      localStorage.setItem('firebase_admin_auth', 'true');
      return { success: true, user: result.user };
    }
    return { success: false, error: 'Insufficient permissions' };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function signOutAdmin() {
  try {
    await auth.signOut();
    currentUser = null;
    localStorage.removeItem('firebase_admin_auth');
    localStorage.removeItem('adminAuth'); // Legacy
  } catch (error) {
    console.error('Signout error:', error);
  }
}

function onAuthStateChanged(callback) {
  auth.onAuthStateChanged((user) => {
    currentUser = user;
    callback(user);
  });
}

// ==================== PRODUCTS ====================
async function getAllProducts() {
  try {
    const snapshot = await productsRef.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function addProduct(product) {
  try {
    const docRef = await productsRef.add(product);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding product:", error);
    return { success: false, error: error.message };
  }
}

async function updateProduct(id, product) {
  try {
    await productsRef.doc(id).update(product);
    return { success: true };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: error.message };
  }
}

async function deleteProduct(id) {
  try {
    await productsRef.doc(id).delete();
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: error.message };
  }
}

function listenToProducts(callback) {
  return productsRef.onSnapshot(
    snapshot => callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))),
    error => console.error("Products listener error:", error)
  );
}

// Dynamic categories
async function getCategories() {
  const products = await getAllProducts();
  const cats = [...new Set(products.map(p => p.category))].sort();
  return cats.length ? cats : ['Resin Items', 'Candles', 'Keychains', 'Wall Art', 'Lippan Art'];
}

// ==================== ORDERS ====================
async function getOrders() {
  try {
    const snapshot = await ordersRef.orderBy('timestamp', 'desc').limit(50).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

async function addOrder(order) {
  try {
    await ordersRef.add({ ...order, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function listenToOrders(callback) {
  return ordersRef.orderBy('timestamp', 'desc').onSnapshot(
    snapshot => callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))),
    error => console.error("Orders listener error:", error)
  );
}

// ==================== STORAGE (Images) ====================
async function uploadImage(file) {
  try {
    const ref = storage.ref(`images/${Date.now()}_${file.name}`);
    const snapshot = await ref.put(file);
    const downloadURL = await snapshot.ref.getDownloadURL();
    return { success: true, url: downloadURL };
  } catch (error) {
    console.error("Upload error:", error);
    return { success: false, error: error.message };
  }
}

// Init defaults
async function initializeDefaults() {
  const productCount = (await productsRef.get()).size;
  if (productCount === 0 && typeof allProducts !== 'undefined') {
    console.log(`Initializing ${allProducts.length} default products...`);
    for (const product of allProducts) {
      await productsRef.add(product);
    }
    console.log('Defaults initialized!');
  }
}

// Migrate localStorage (one-time)
async function migrateLocalStorage() {
  const localKey = 'kraft4u_products';
  const data = localStorage.getItem(localKey);
  if (data && (await productsRef.get()).empty) {
    const products = JSON.parse(data);
    for (const p of products) {
      await productsRef.add(p);
    }
    console.log(`Migrated ${products.length} products from localStorage`);
    localStorage.removeItem(localKey);
  }
}

// Expose globals
window.KraftFirebase = {
  auth: { signInAdmin, signOutAdmin, onAuthStateChanged },
  products: { getAllProducts, addProduct, updateProduct, deleteProduct, listenToProducts, getCategories },
  orders: { getOrders, addOrder, listenToOrders },
  storage: { uploadImage },
  init: { initializeDefaults, migrateLocalStorage }
};

a// Firebase Configuration for kraft.4u Admin Panel
// Replace the config values with your Firebase project settings

const firebaseConfig = {
  apiKey: "AIzaSyBtS-p7CSWUbFriUlKZLuC94yrKMEPuJ8g",
  authDomain: "kraft4u-f7f2d.firebaseapp.com",
  projectId: "kraft4u-f7f2d",
  storageBucket: "kraft4u-f7f2d.firebasestorage.app",
  messagingSenderId: "928403844937",
  appId: "1:928403844937:web:95ca7a7640d31e4e5db498",
  measurementId: "G-L3R3SEBMQE"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Products collection reference
const productsRef = db.collection('products');

// Function to fetch all products
async function getAllProducts() {
    try {
        const snapshot = await productsRef.get();
        const products = [];
        snapshot.forEach(doc => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

// Function to add a new product
async function addProduct(product) {
    try {
        const docRef = await productsRef.add(product);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding product:", error);
        return { success: false, error: error.message };
    }
}

// Function to update a product
async function updateProduct(id, product) {
    try {
        await productsRef.doc(id).update(product);
        return { success: true };
    } catch (error) {
        console.error("Error updating product:", error);
        return { success: false, error: error.message };
    }
}

// Function to delete a product
async function deleteProduct(id) {
    try {
        await productsRef.doc(id).delete();
        return { success: true };
    } catch (error) {
        console.error("Error deleting product:", error);
        return { success: false, error: error.message };
    }
}

// Real-time listener for products
function listenToProducts(callback) {
    productsRef.onSnapshot(snapshot => {
        const products = [];
        snapshot.forEach(doc => {
            products.push({ id: doc.id, ...doc.data() });
        });
        callback(products);
    }, error => {
        console.error("Error listening to products:", error);
    });
}

// Function to initialize default products in Firebase (only runs once)
async function initializeDefaultProducts() {
    const snapshot = await productsRef.get();
    if (snapshot.empty) {
        console.log("No products found. Initializing with default products...");
        for (const product of allProducts) {
            await productsRef.add(product);
        }
        console.log("Default products initialized!");
    }
}
