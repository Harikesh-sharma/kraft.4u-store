# Plan: Set Up Firebase for Persistent Admin Panel Data

## Information Gathered:
- Current admin panel uses localStorage - data only stored in browser
- Files: admin.html, data.js
- Need: Real-time sync across devices on Netlify

## Plan:
- [] Create firebase-config.js
  - Set up Firebase configuration and initialization
  - Initialize Firebase Firestore for product data storage
  - Create functions to read/write products to Firebase
  
- [] Modify admin.html
  - Include Firebase SDK scripts
  - Connect to Firebase Firestore
  - Update JavaScript to load products from Firebase
  - Save products to Firebase when adding/editing/deleting
  - Add real-time listeners for automatic updates

## Followup Steps:
- User needs to create a free Firebase project at console.firebase.google.com
- User will provide their Firebase config details
- Test the admin panel works with Firebase on Netlify
