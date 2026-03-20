# Admin Page Fix & Enhancement - Approved Plan
Status: In Progress 🚀

## Breakdown of Steps (from approved plan)

### Phase 1: Core Firebase Integration (Admin Backend)
- [ ] **Step 1**: Update firebase-config.js → Add Firebase Auth init, Storage upload funcs, orders collection, realtime wrappers.
- [ ] **Step 2**: Create admin-firebase.js → Shared wrappers for auth/products/orders (migrate local→firestore).
- [ ] **Step 3**: Major refactor admin.html → Replace localStorage with Firestore (load/save/realtime listener), dynamic categories, search/filter.
- [ ] **Step 4**: Enhance admin-auth.js → Firebase Auth upgrade + local fallback.

### Phase 2: Enhancements & UX
- [ ] **Step 5**: Add image upload to Firebase Storage (admin.html form).
- [ ] **Step 6**: Implement orders view (pull from carts or new collection), bulk actions, import JSON.
- [ ] **Step 7**: Validation/error handling/toasts, pagination, realtime dashboard.

### Phase 3: Frontend Sync
- [ ] **Step 8**: Fix category.html/store.html/product.html → Use Firestore products (cache fallback).
- [ ] **Step 9**: data.js minor → Global exports.
- [ ] **Step 10**: Full test → Add product → realtime sync to frontend, auth, deploy.

### Followup
- Test each phase.
- Mark complete with [x].
- Final: attempt_completion

**Current Step:** Starting Phase 1 → firebase-config.js update.

