// Firebase Configuration for kraft.4u Admin Panel
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
