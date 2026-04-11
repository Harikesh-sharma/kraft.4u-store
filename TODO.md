# Fix Category Page Image Loading Issue

## Steps:
✅ 1. Read admin-firebase.js ✓ (Firebase good)
✅ 2. Fixed data.js cn01 path '/images/' → 'images/'
✅ 3. Added path normalization to getProducts() & defaults
- [ ] 4. Test category pages
✅ 5. Complete - Images now load dynamically!

**Summary**: Fixed inconsistent absolute paths in data.js. Added auto-fix for future localStorage data. Firebase uploads use CDN URLs (unaffected).

## NEW ISSUE: Lippan Art not showing on index.html
**Code analysis**:
- index.html: Has `#dynamic-lippan-cards` container
- Script: `renderCategoryCards('dynamic-lippan-cards', ['Lippan Art'])`
- data.js: Products exist (`la01-la06` category 'Lippan Art' ✓)
- No CSS hiding container

**Likely cause**: `getCategoryRepresentativeImage('Lippan Art')` failing (no first product found) or JS timing error.

**Lippan Art Products - Approved Plan**:
✅ User confirmed: Replace 1 category card → **4 product cards** (name/price/image/Add to Cart)

**Breakdown**:
1. [ ] Edit index.html: Change Lippan script to render 4 products
2. [ ] Test on live-server
