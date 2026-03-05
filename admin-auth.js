// Simple Admin Authentication
// Set your admin password here
const ADMIN_PASSWORD = "Ladnajarurihai"; // Change this to your desired password

// Check if user is authenticated
function isAdminAuthenticated() {
    return sessionStorage.getItem('adminAuth') === 'true';
}

// Login function
function adminLogin(password) {
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminAuth', 'true');
        return true;
    }
    return false;
}

// Logout function
function adminLogout() {
    sessionStorage.removeItem('adminAuth');
}

// Show login modal as overlay (doesn't replace body content)
function showLoginModal() {
    // Check if modal already exists
    if (document.getElementById('admin-login-modal')) {
        return;
    }

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'admin-login-modal';
    modalOverlay.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 9999; font-family: Arial, sans-serif;">
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); text-align: center; max-width: 400px; width: 90%;">
                <h2 style="color: #333; margin-bottom: 10px;"><i class="fas fa-crown"></i> Admin Login</h2>
                <p style="color: #666; margin-bottom: 30px;">Enter your password to access the admin panel</p>
                <input type="password" id="admin-password" placeholder="Enter Password" 
                    style="width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; margin-bottom: 15px; box-sizing: border-box;">
                <button onclick="attemptLogin()" 
                    style="width: 100%; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
                    Login
                </button>
                <p id="login-error" style="color: red; margin-top: 15px; display: none;">Incorrect password. Please try again.</p>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.appendChild(modalOverlay);

    // Allow Enter key to submit
    const passwordInput = document.getElementById('admin-password');
    passwordInput.focus();
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            attemptLogin();
        }
    });
}

// Attempt login
function attemptLogin() {
    const password = document.getElementById('admin-password').value;
    if (adminLogin(password)) {
        // Remove modal and show main content
        const modal = document.getElementById('admin-login-modal');
        if (modal) {
            modal.remove();
        }
        // Show main content
        document.querySelector('.container-fluid').style.display = 'block';
        // Initialize data
        initializeData();
        initImageUpload();
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

