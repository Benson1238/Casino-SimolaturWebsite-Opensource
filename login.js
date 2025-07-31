// Login System for Lucky Casino

class CasinoLogin {
    constructor() {
        this.users = this.loadUsers();
        this.currentUser = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAutoLogin();
    }

    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Register form
        const registerForm = document.getElementById('registerForm');
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister();
        });

        // Toggle between login and register
        const toggleBtn = document.getElementById('toggleForm');
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleForm();
        });
    }

    toggleForm() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const toggleText = document.getElementById('toggleText');
        const toggleBtn = document.getElementById('toggleForm');

        if (loginForm.style.display === 'none') {
            // Show login form
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            toggleText.textContent = "Don't have an account? ";
            toggleBtn.textContent = "Sign Up";
        } else {
            // Show register form
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            toggleText.textContent = "Already have an account? ";
            toggleBtn.textContent = "Sign In";
        }

        this.hideMessages();
    }

    handleLogin() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!username || !password) {
            this.showError('Please fill in all fields');
            return;
        }

        const user = this.users.find(u => u.username === username);
        
        if (!user) {
            this.showError('User not found');
            return;
        }

        if (user.password !== password) {
            this.showError('Incorrect password');
            return;
        }

        this.currentUser = user;
        this.saveCurrentUser(user);
        this.showSuccess('Login successful! Redirecting...');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }

    handleRegister() {
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!username || !password || !confirmPassword) {
            this.showError('Please fill in all fields');
            return;
        }

        if (username.length < 3) {
            this.showError('Username must be at least 3 characters long');
            return;
        }

        if (password.length < 6) {
            this.showError('Password must be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            this.showError('Passwords do not match');
            return;
        }

        if (this.users.find(u => u.username === username)) {
            this.showError('Username already exists');
            return;
        }

        // Create new user
        const newUser = {
            username: username,
            password: password,
            balance: 10000, // Starting balance
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
            stats: {
                gamesPlayed: 0,
                totalWon: 0,
                totalLost: 0,
                biggestWin: 0
            },
            transactions: []
        };

        this.users.push(newUser);
        this.saveUsers();
        
        this.currentUser = newUser;
        this.saveCurrentUser(newUser);
        
        this.showSuccess('Account created successfully! Redirecting...');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }

    checkAutoLogin() {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
            // Auto-login if user is already logged in
            this.currentUser = currentUser;
            window.location.href = 'index.html';
        }
    }

    loadUsers() {
        try {
            const usersData = localStorage.getItem('casinoUsers');
            return usersData ? JSON.parse(usersData) : [];
        } catch (error) {
            console.error('Error loading users:', error);
            return [];
        }
    }

    saveUsers() {
        try {
            localStorage.setItem('casinoUsers', JSON.stringify(this.users));
        } catch (error) {
            console.error('Error saving users:', error);
        }
    }

    saveCurrentUser(user) {
        try {
            localStorage.setItem('casinoCurrentUser', JSON.stringify(user));
        } catch (error) {
            console.error('Error saving current user:', error);
        }
    }

    getCurrentUser() {
        try {
            const userData = localStorage.getItem('casinoCurrentUser');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }

    showError(message) {
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000);
    }

    showSuccess(message) {
        const successDiv = document.getElementById('successMessage');
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    }

    hideMessages() {
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('successMessage').style.display = 'none';
    }
}

// Initialize login system
const casinoLogin = new CasinoLogin(); 