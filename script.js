// Casino Website JavaScript - Optimized with Login System

class CasinoApp {
    constructor() {
        this.currentUser = null;
        this.balance = 10000;
        this.settings = {
            theme: 'dark',
            animations: true,
            particles: true,
            sound: false,
            volume: 50,
            autoPlaySpeed: 2000,
            showStatistics: true,
            language: 'en'
        };
        this.translations = {
            en: {
                // Navigation
                'balance': 'Balance',
                'signIn': 'Sign In',
                'logout': 'Logout',
                'welcome': 'Welcome!',
                'settings': 'Settings',
                
                // Games
                'diceRoll': 'Dice Roll',
                'blackjack': 'Blackjack',
                'slotMachine': 'Slot Machine',
                'roulette': 'Roulette',
                'poker': 'Poker',
                'baccarat': 'Baccarat',
                'craps': 'Craps',
                'keno': 'Keno',
                
                // Game Actions
                'roll': 'Roll',
                'autoPlay': 'Auto Play',
                'hit': 'Hit',
                'stand': 'Stand',
                'deal': 'Deal',
                'spin': 'Spin',
                'autoSpin': 'Auto Spin',
                'placeBet': 'Place Bet',
                'clearBet': 'Clear Bet',
                'bet': 'Bet',
                'win': 'Win',
                'lose': 'Lose',
                'draw': 'Draw',
                
                // Game Stats
                'wins': 'Wins',
                'losses': 'Losses',
                'totalGames': 'Total Games',
                'winRate': 'Win Rate',
                
                // Settings
                'theme': 'Theme',
                'darkMode': 'Dark Mode',
                'lightMode': 'Light Mode',
                'neonMode': 'Neon Mode',
                'animations': 'Animations',
                'enableAnimations': 'Enable Animations',
                'enableParticles': 'Enable Particle Effects',
                'sound': 'Sound',
                'enableSound': 'Enable Sound Effects',
                'volume': 'Volume',
                'gameSettings': 'Game Settings',
                'autoPlaySpeed': 'Auto Play Speed',
                'fast': 'Fast',
                'normal': 'Normal',
                'slow': 'Slow',
                'showStatistics': 'Show Game Statistics',
                'language': 'Language',
                
                // Promotional
                'welcomeToCasino': 'Welcome to Lucky Casino',
                'experienceThrills': 'Experience the thrill of casino games with fake money!',
                'newGames': 'New Games',
                'comingSoon': 'Coming Soon',
                'exclusiveOffers': 'Exclusive Offers',
                'bonusRewards': 'Bonus Rewards',
                'specialPromotions': 'Special Promotions',
                
                // Footer
                'allRightsReserved': 'All rights reserved. This is a fake money casino for entertainment purposes only.',
                'madeBy': 'Made By Ben'
            },
            de: {
                // Navigation
                'balance': 'Guthaben',
                'signIn': 'Anmelden',
                'logout': 'Abmelden',
                'welcome': 'Willkommen!',
                'settings': 'Einstellungen',
                
                // Games
                'diceRoll': 'Würfel',
                'blackjack': 'Blackjack',
                'slotMachine': 'Spielautomat',
                'roulette': 'Roulette',
                'poker': 'Poker',
                'baccarat': 'Baccarat',
                'craps': 'Craps',
                'keno': 'Keno',
                
                // Game Actions
                'roll': 'Würfeln',
                'autoPlay': 'Auto Spielen',
                'hit': 'Karte',
                'stand': 'Stehen',
                'deal': 'Geben',
                'spin': 'Drehen',
                'autoSpin': 'Auto Drehen',
                'placeBet': 'Wette platzieren',
                'clearBet': 'Wette löschen',
                'bet': 'Wette',
                'win': 'Gewonnen',
                'lose': 'Verloren',
                'draw': 'Unentschieden',
                
                // Game Stats
                'wins': 'Gewinne',
                'losses': 'Verluste',
                'totalGames': 'Gesamtspiele',
                'winRate': 'Gewinnrate',
                
                // Settings
                'theme': 'Design',
                'darkMode': 'Dunkler Modus',
                'lightMode': 'Heller Modus',
                'neonMode': 'Neon Modus',
                'animations': 'Animationen',
                'enableAnimations': 'Animationen aktivieren',
                'enableParticles': 'Partikeleffekte aktivieren',
                'sound': 'Ton',
                'enableSound': 'Soundeffekte aktivieren',
                'volume': 'Lautstärke',
                'gameSettings': 'Spieleinstellungen',
                'autoPlaySpeed': 'Auto-Spiel-Geschwindigkeit',
                'fast': 'Schnell',
                'normal': 'Normal',
                'slow': 'Langsam',
                'showStatistics': 'Spielstatistiken anzeigen',
                'language': 'Sprache',
                
                // Promotional
                'welcomeToCasino': 'Willkommen im Lucky Casino',
                'experienceThrills': 'Erleben Sie den Nervenkitzel von Casino-Spielen mit Spielgeld!',
                'newGames': 'Neue Spiele',
                'comingSoon': 'Demnächst verfügbar',
                'exclusiveOffers': 'Exklusive Angebote',
                'bonusRewards': 'Bonus-Belohnungen',
                'specialPromotions': 'Spezielle Aktionen',
                
                // Footer
                'allRightsReserved': 'Alle Rechte vorbehalten. Dies ist ein Casino mit Spielgeld nur zur Unterhaltung.',
                'madeBy': 'Erstellt von Ben'
            },
            fr: {
                // Navigation
                'balance': 'Solde',
                'signIn': 'Se connecter',
                'logout': 'Se déconnecter',
                'welcome': 'Bienvenue!',
                'settings': 'Paramètres',
                
                // Games
                'diceRoll': 'Dés',
                'blackjack': 'Blackjack',
                'slotMachine': 'Machine à sous',
                'roulette': 'Roulette',
                'poker': 'Poker',
                'baccarat': 'Baccarat',
                'craps': 'Craps',
                'keno': 'Keno',
                
                // Game Actions
                'roll': 'Lancer',
                'autoPlay': 'Jouer automatiquement',
                'hit': 'Tirer',
                'stand': 'Rester',
                'deal': 'Distribuer',
                'spin': 'Tourner',
                'autoSpin': 'Tourner automatiquement',
                'placeBet': 'Placer un pari',
                'clearBet': 'Effacer le pari',
                'bet': 'Pari',
                'win': 'Gagné',
                'lose': 'Perdu',
                'draw': 'Égalité',
                
                // Game Stats
                'wins': 'Victoires',
                'losses': 'Défaites',
                'totalGames': 'Total des parties',
                'winRate': 'Taux de victoire',
                
                // Settings
                'theme': 'Thème',
                'darkMode': 'Mode sombre',
                'lightMode': 'Mode clair',
                'neonMode': 'Mode néon',
                'animations': 'Animations',
                'enableAnimations': 'Activer les animations',
                'enableParticles': 'Activer les effets de particules',
                'sound': 'Son',
                'enableSound': 'Activer les effets sonores',
                'volume': 'Volume',
                'gameSettings': 'Paramètres de jeu',
                'autoPlaySpeed': 'Vitesse de jeu automatique',
                'fast': 'Rapide',
                'normal': 'Normal',
                'slow': 'Lent',
                'showStatistics': 'Afficher les statistiques de jeu',
                'language': 'Langue',
                
                // Promotional
                'welcomeToCasino': 'Bienvenue au Lucky Casino',
                'experienceThrills': 'Vivez le frisson des jeux de casino avec de l\'argent fictif!',
                'newGames': 'Nouveaux jeux',
                'comingSoon': 'Bientôt disponible',
                'exclusiveOffers': 'Offres exclusives',
                'bonusRewards': 'Récompenses bonus',
                'specialPromotions': 'Promotions spéciales',
                
                // Footer
                'allRightsReserved': 'Tous droits réservés. Ceci est un casino avec de l\'argent fictif uniquement pour le divertissement.',
                'madeBy': 'Créé par Ben'
            }
        };
        this.init();
    }

    init() {
        this.loadSettings();
        this.checkLoginStatus();
        this.setupNavigation();
        this.setupGameCards();
        this.setupSmoothScrolling();
        this.setupAnimations();
        this.setupLoginHandlers();
        this.setupSettingsHandlers();
        this.applyTheme();
        this.updateLanguage();
    }

    checkLoginStatus() {
        const currentUser = localStorage.getItem('casinoCurrentUser');
        if (currentUser) {
            this.currentUser = JSON.parse(currentUser);
            this.updateBalance();
            this.showUserInfo();
        } else {
            this.showSignInButton();
        }
    }

    showUserInfo() {
        const userInfo = document.getElementById('userInfo');
        const signInBtn = document.getElementById('signInBtn');
        const username = document.getElementById('username');
        
        if (userInfo && signInBtn && username) {
            userInfo.style.display = 'flex';
            signInBtn.style.display = 'none';
            username.textContent = `Welcome, ${this.currentUser.username}!`;
        }
    }

    showSignInButton() {
        const userInfo = document.getElementById('userInfo');
        const signInBtn = document.getElementById('signInBtn');
        
        if (userInfo && signInBtn) {
            userInfo.style.display = 'none';
            signInBtn.style.display = 'block';
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

    updateUIForLoggedInUser() {
        const balanceElement = document.getElementById('balance');
        const userInfo = document.getElementById('userInfo');
        const signInBtn = document.getElementById('signInBtn');
        const username = document.getElementById('username');

        if (this.currentUser) {
            balanceElement.textContent = `$${this.currentUser.balance.toLocaleString()}`;
            username.textContent = `Welcome, ${this.currentUser.username}!`;
            userInfo.style.display = 'flex';
            signInBtn.style.display = 'none';
        }
    }

    updateUIForGuest() {
        const userInfo = document.getElementById('userInfo');
        const signInBtn = document.getElementById('signInBtn');
        userInfo.style.display = 'none';
        signInBtn.style.display = 'block';
    }

    setupLoginHandlers() {
        const signInBtn = document.getElementById('signInBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (signInBtn) {
            signInBtn.addEventListener('click', () => {
                window.location.href = 'login.html';
            });
        }
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('casinoCurrentUser');
                this.currentUser = null;
                this.showSignInButton();
                this.updateBalance();
            });
        }
    }

    logout() {
        localStorage.removeItem('casinoCurrentUser');
        this.currentUser = null;
        this.updateUIForGuest();
        window.location.reload();
    }

    // Settings Management
    loadSettings() {
        this.settings = JSON.parse(localStorage.getItem('casinoSettings')) || {
            theme: 'dark',
            animations: true,
            particles: true,
            sound: false,
            volume: 50,
            autoPlaySpeed: 2000,
            showStatistics: true,
            language: 'en'
        };
    }

    saveSettings() {
        localStorage.setItem('casinoSettings', JSON.stringify(this.settings));
    }

    setupSettingsHandlers() {
        const settingsBtn = document.getElementById('settingsBtn');
        const settingsModal = document.getElementById('settingsModal');
        const closeSettings = document.getElementById('closeSettings');

        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                if (settingsModal) {
                    settingsModal.style.display = 'flex';
                    this.updateSettingsUI();
                }
            });
        }

        if (closeSettings) {
            closeSettings.addEventListener('click', () => {
                if (settingsModal) {
                    settingsModal.style.display = 'none';
                }
            });
        }

        if (settingsModal) {
            settingsModal.addEventListener('click', (e) => {
                if (e.target === settingsModal) {
                    settingsModal.style.display = 'none';
                }
            });
        }

        // Theme buttons
        const themeButtons = document.querySelectorAll('.theme-btn');
        themeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.getAttribute('data-theme');
                this.settings.theme = theme;
                this.saveSettings();
                this.applyTheme();
                this.updateThemeButtons();
            });
        });

        // Animation toggles
        const enableAnimations = document.getElementById('enableAnimations');
        const enableParticles = document.getElementById('enableParticles');
        
        if (enableAnimations) {
            enableAnimations.addEventListener('change', () => {
                this.settings.animations = enableAnimations.checked;
                this.saveSettings();
            });
        }

        if (enableParticles) {
            enableParticles.addEventListener('change', () => {
                this.settings.particles = enableParticles.checked;
                this.saveSettings();
            });
        }

        // Sound controls
        const enableSound = document.getElementById('enableSound');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeValue = document.getElementById('volumeValue');
        
        if (enableSound) {
            enableSound.addEventListener('change', () => {
                this.settings.sound = enableSound.checked;
                this.saveSettings();
            });
        }

        if (volumeSlider && volumeValue) {
            volumeSlider.addEventListener('input', () => {
                this.settings.volume = parseInt(volumeSlider.value);
                volumeValue.textContent = volumeSlider.value;
                this.saveSettings();
            });
        }

        // Game settings
        const autoPlaySpeed = document.getElementById('autoPlaySpeed');
        const showStatistics = document.getElementById('showStatistics');
        
        if (autoPlaySpeed) {
            autoPlaySpeed.addEventListener('change', () => {
                this.settings.autoPlaySpeed = parseInt(autoPlaySpeed.value);
                this.saveSettings();
            });
        }

        if (showStatistics) {
            showStatistics.addEventListener('change', () => {
                this.settings.showStatistics = showStatistics.checked;
                this.saveSettings();
            });
        }

        // Language selection
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', () => {
                this.settings.language = languageSelect.value;
                this.saveSettings();
                this.updateLanguage();
            });
        }
    }

    updateSettingsUI() {
        const enableAnimations = document.getElementById('enableAnimations');
        const enableParticles = document.getElementById('enableParticles');
        const enableSound = document.getElementById('enableSound');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeValue = document.getElementById('volumeValue');
        const autoPlaySpeed = document.getElementById('autoPlaySpeed');
        const showStatistics = document.getElementById('showStatistics');
        const languageSelect = document.getElementById('languageSelect');

        if (enableAnimations) enableAnimations.checked = this.settings.animations;
        if (enableParticles) enableParticles.checked = this.settings.particles;
        if (enableSound) enableSound.checked = this.settings.sound;
        if (volumeSlider) volumeSlider.value = this.settings.volume;
        if (volumeValue) volumeValue.textContent = this.settings.volume;
        if (autoPlaySpeed) autoPlaySpeed.value = this.settings.autoPlaySpeed;
        if (showStatistics) showStatistics.checked = this.settings.showStatistics;
        if (languageSelect) languageSelect.value = this.settings.language;

        this.updateThemeButtons();
        this.updateSettingsLanguage();
    }

    updateThemeButtons() {
        const themeButtons = document.querySelectorAll('.theme-btn');
        themeButtons.forEach(btn => {
            const theme = btn.getAttribute('data-theme');
            if (theme === this.settings.theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    applyTheme() {
        document.body.className = `theme-${this.settings.theme}`;
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    setupGameCards() {
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            const playBtn = card.querySelector('.btn');
            if (playBtn) {
                playBtn.addEventListener('click', () => {
                    const gameName = card.getAttribute('data-game') || card.querySelector('h3').textContent;
                    this.showGameModal(gameName);
                });
            }
        });
    }

    showGameModal(gameName) {
        // Create modal if it doesn't exist
        let modal = document.getElementById('gameModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'gameModal';
            modal.className = 'game-modal';
            document.body.appendChild(modal);
        }

        // Create modal content
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${gameName}</h2>
                    <button class="close-btn" id="closeGameModal">&times;</button>
                </div>
                <div class="modal-body" id="gameInterface">
                    <!-- Game interface will be loaded here -->
                </div>
            </div>
        `;

        // Load game interface
        const gameInterface = document.getElementById('gameInterface');
        let interfaceHTML = '';

        switch (gameName) {
            case 'Dice Roll':
                interfaceHTML = this.createDiceRollInterface();
                break;
            case 'Blackjack':
                interfaceHTML = this.createBlackjackInterface();
                break;
            case 'Slot Machine':
                interfaceHTML = this.createSlotMachineInterface();
                break;
            case 'Roulette':
                interfaceHTML = this.createRouletteInterface();
                break;
            case 'Poker':
                interfaceHTML = this.createPokerInterface();
                break;
            case 'Baccarat':
                interfaceHTML = this.createBaccaratInterface();
                break;
            case 'Craps':
                interfaceHTML = this.createCrapsInterface();
                break;
            case 'Keno':
                interfaceHTML = this.createKenoInterface();
                break;
            default:
                interfaceHTML = this.createDefaultInterface();
        }

        gameInterface.innerHTML = interfaceHTML;

        // Show modal
        modal.style.display = 'flex';

        // Setup close button
        const closeBtn = modal.querySelector('#closeGameModal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeGameModal();
            });
        }

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeGameModal();
            }
        });

        // Setup game-specific events
        this.setupGameEventListeners(modal, gameName);

        // Play sound
        this.playSound('click');
    }

    closeGameModal() {
        const modal = document.getElementById('gameModal');
        if (modal) {
            modal.style.display = 'none';
            // Clean up any ongoing animations or timers
            this.cleanupGameState();
            // Clear modal reference
            this.currentModal = null;
        }
    }

    cleanupGameState() {
        // Clear any ongoing intervals or timeouts
        if (window.intervals) {
            window.intervals.forEach(interval => clearInterval(interval));
            window.intervals = [];
        }
        
        // Clear any ongoing timeouts
        if (window.gameTimeouts) {
            window.gameTimeouts.forEach(timeout => clearTimeout(timeout));
            window.gameTimeouts = [];
        }
        
        // Reset any game state
        this.currentGameState = null;
        
        // Remove any floating chips
        const floatingChips = document.querySelectorAll('.floating-chip');
        floatingChips.forEach(chip => {
            if (chip.parentNode) {
                chip.parentNode.removeChild(chip);
            }
        });
        
        // Remove any particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
    }

    createDiceRollInterface() {
        return `
            <div class="game-interface">
                <div class="game-area">
                    <div class="dice-game">
                        <div class="dice-container">
                            <div class="dice" id="playerDice">⚀</div>
                            <div class="vs">VS</div>
                            <div class="dice" id="dealerDice">⚀</div>
                        </div>
                        <div class="dice-buttons">
                            <button class="btn btn-primary" id="rollDiceBtn">Roll Dice</button>
                            <button class="btn btn-secondary" id="autoPlayBtn">Auto Play</button>
                        </div>
                    </div>
                </div>
                <div class="bet-controls">
                    <label>Bet Amount: $<span id="betValue">100</span></label>
                    <input type="range" min="10" max="1000" value="100" class="bet-slider" id="betSlider">
                </div>
                <div class="game-stats">
                    <div class="stat">Wins: <span id="wins">0</span></div>
                    <div class="stat">Losses: <span id="losses">0</span></div>
                    <div class="stat">Balance: $<span id="currentBalance">${this.currentUser.balance}</span></div>
                </div>
            </div>
        `;
    }

    createBlackjackInterface() {
        return `
            <div class="game-interface">
                <div class="game-area">
                    <div class="blackjack-game">
                        <div class="dealer-area">
                            <h4>Dealer's Hand</h4>
                            <div class="cards" id="dealerCards"></div>
                            <div class="total" id="dealerTotal"></div>
                        </div>
                        <div class="player-area">
                            <h4>Your Hand</h4>
                            <div class="cards" id="playerCards"></div>
                            <div class="total" id="playerTotal"></div>
                        </div>
                        <div class="blackjack-controls">
                            <button class="btn btn-primary" id="hitBtn" disabled>Hit</button>
                            <button class="btn btn-secondary" id="standBtn" disabled>Stand</button>
                            <button class="btn btn-game" id="dealBtn">Deal Cards</button>
                        </div>
                    </div>
                </div>
                <div class="bet-controls">
                    <label>Bet Amount: $<span id="betValue">100</span></label>
                    <input type="range" min="10" max="1000" value="100" class="bet-slider" id="betSlider">
                </div>
                <div class="game-stats">
                    <div class="stat">Wins: <span id="wins">0</span></div>
                    <div class="stat">Losses: <span id="losses">0</span></div>
                    <div class="stat">Balance: $<span id="currentBalance">${this.currentUser.balance}</span></div>
                </div>
            </div>
        `;
    }

    createSlotMachineInterface() {
        return `
            <div class="game-interface">
                <div class="game-area">
                    <div class="slot-machine">
                        <div class="slot-reels">
                            <div class="reel" id="reel1">🎰</div>
                            <div class="reel" id="reel2">🎰</div>
                            <div class="reel" id="reel3">🎰</div>
                        </div>
                        <div class="slot-controls">
                            <button class="btn btn-primary" id="spinBtn">Spin!</button>
                            <button class="btn btn-secondary" id="autoSpinBtn">Auto Spin</button>
                        </div>
                        <div class="slot-info">
                            <div class="paytable">
                                <h5>Paytable:</h5>
                                <div>🍒🍒🍒 = 2x | 🍊🍊🍊 = 3x | 💎💎💎 = 5x | 7️⃣7️⃣7️⃣ = 10x</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bet-controls">
                    <label>Bet Amount: $<span id="betValue">100</span></label>
                    <input type="range" min="10" max="1000" value="100" class="bet-slider" id="betSlider">
                </div>
                <div class="game-stats">
                    <div class="stat">Wins: <span id="wins">0</span></div>
                    <div class="stat">Losses: <span id="losses">0</span></div>
                    <div class="stat">Balance: $<span id="currentBalance">${this.currentUser.balance}</span></div>
                </div>
            </div>
        `;
    }

    createRouletteInterface() {
        return `
            <div class="roulette-game">
                <div class="wheel-display">
                    <div class="wheel-number">00</div>
                </div>
                <div class="betting-area">
                    <div class="number-grid">
                        <div class="number-row">
                            <button class="number-btn" data-number="0">0</button>
                            <button class="number-btn" data-number="1">1</button>
                            <button class="number-btn" data-number="2">2</button>
                            <button class="number-btn" data-number="3">3</button>
                            <button class="number-btn" data-number="4">4</button>
                            <button class="number-btn" data-number="5">5</button>
                            <button class="number-btn" data-number="6">6</button>
                            <button class="number-btn" data-number="7">7</button>
                            <button class="number-btn" data-number="8">8</button>
                            <button class="number-btn" data-number="9">9</button>
                            <button class="number-btn" data-number="10">10</button>
                            <button class="number-btn" data-number="11">11</button>
                            <button class="number-btn" data-number="12">12</button>
                        </div>
                        <div class="number-row">
                            <button class="number-btn" data-number="13">13</button>
                            <button class="number-btn" data-number="14">14</button>
                            <button class="number-btn" data-number="15">15</button>
                            <button class="number-btn" data-number="16">16</button>
                            <button class="number-btn" data-number="17">17</button>
                            <button class="number-btn" data-number="18">18</button>
                            <button class="number-btn" data-number="19">19</button>
                            <button class="number-btn" data-number="20">20</button>
                            <button class="number-btn" data-number="21">21</button>
                            <button class="number-btn" data-number="22">22</button>
                            <button class="number-btn" data-number="23">23</button>
                            <button class="number-btn" data-number="24">24</button>
                            <button class="number-btn" data-number="25">25</button>
                        </div>
                        <div class="number-row">
                            <button class="number-btn" data-number="26">26</button>
                            <button class="number-btn" data-number="27">27</button>
                            <button class="number-btn" data-number="28">28</button>
                            <button class="number-btn" data-number="29">29</button>
                            <button class="number-btn" data-number="30">30</button>
                            <button class="number-btn" data-number="31">31</button>
                            <button class="number-btn" data-number="32">32</button>
                            <button class="number-btn" data-number="33">33</button>
                            <button class="number-btn" data-number="34">34</button>
                            <button class="number-btn" data-number="35">35</button>
                            <button class="number-btn" data-number="36">36</button>
                        </div>
                    </div>
                    <div class="color-bets">
                        <button class="color-btn red" data-color="red">Red</button>
                        <button class="color-btn black" data-color="black">Black</button>
                        <button class="color-btn green" data-color="green">Green</button>
                    </div>
                </div>
                <div class="game-controls">
                    <input type="number" id="betAmount" placeholder="Bet Amount" min="1" max="1000" value="10">
                    <button class="btn btn-primary" id="spinBtn">${this.getText('spin')}</button>
                    <button class="btn btn-secondary" id="clearBetBtn">${this.getText('clearBet')}</button>
                </div>
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">${this.getText('wins')}:</span>
                        <span class="stat-value" id="wins">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('losses')}:</span>
                        <span class="stat-value" id="losses">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('totalGames')}:</span>
                        <span class="stat-value" id="totalGames">0</span>
                    </div>
                </div>
            </div>
        `;
    }

    createPokerInterface() {
        return `
            <div class="poker-game">
                <div class="poker-table">
                    <div class="community-cards">
                        <h4>Community Cards</h4>
                        <div class="cards" id="communityCards"></div>
                    </div>
                    <div class="player-hand">
                        <h4>Your Hand</h4>
                        <div class="cards" id="playerCards"></div>
                    </div>
                    <div class="pot-info">
                        <h4>Pot: $<span id="potAmount">0</span></h4>
                        <h4>Your Bet: $<span id="playerBet">0</span></h4>
                    </div>
                </div>
                <div class="game-controls">
                    <input type="number" id="betAmount" placeholder="Bet Amount" min="1" max="1000" value="10">
                    <button class="btn btn-primary" id="callBtn">Call</button>
                    <button class="btn btn-secondary" id="raiseBtn">Raise</button>
                    <button class="btn btn-danger" id="foldBtn">Fold</button>
                    <button class="btn btn-success" id="dealBtn">${this.getText('deal')}</button>
                </div>
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">${this.getText('wins')}:</span>
                        <span class="stat-value" id="wins">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('losses')}:</span>
                        <span class="stat-value" id="losses">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('totalGames')}:</span>
                        <span class="stat-value" id="totalGames">0</span>
                    </div>
                </div>
            </div>
        `;
    }

    createBaccaratInterface() {
        return `
            <div class="baccarat-game">
                <div class="baccarat-table">
                    <div class="player-section">
                        <h4>Player</h4>
                        <div class="cards" id="playerCards"></div>
                        <div class="score" id="playerScore">Score: 0</div>
                    </div>
                    <div class="banker-section">
                        <h4>Banker</h4>
                        <div class="cards" id="bankerCards"></div>
                        <div class="score" id="bankerScore">Score: 0</div>
                    </div>
                </div>
                <div class="betting-area">
                    <div class="bet-options">
                        <button class="bet-btn player-bet" data-bet="player">
                            <span>Player</span>
                            <span class="payout">1:1</span>
                        </button>
                        <button class="bet-btn banker-bet" data-bet="banker">
                            <span>Banker</span>
                            <span class="payout">0.95:1</span>
                        </button>
                        <button class="bet-btn tie-bet" data-bet="tie">
                            <span>Tie</span>
                            <span class="payout">8:1</span>
                        </button>
                    </div>
                </div>
                <div class="game-controls">
                    <input type="number" id="betAmount" placeholder="Bet Amount" min="1" max="1000" value="10">
                    <button class="btn btn-primary" id="dealBtn">${this.getText('deal')}</button>
                    <button class="btn btn-secondary" id="clearBetBtn">${this.getText('clearBet')}</button>
                </div>
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">${this.getText('wins')}:</span>
                        <span class="stat-value" id="wins">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('losses')}:</span>
                        <span class="stat-value" id="losses">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('totalGames')}:</span>
                        <span class="stat-value" id="totalGames">0</span>
                    </div>
                </div>
            </div>
        `;
    }

    createCrapsInterface() {
        return `
            <div class="craps-game">
                <div class="dice-area">
                    <div class="dice-container">
                        <div class="dice" id="dice1">⚀</div>
                        <div class="dice" id="dice2">⚀</div>
                    </div>
                    <div class="dice-result" id="diceResult">Roll the dice!</div>
                </div>
                <div class="betting-area">
                    <div class="bet-options">
                        <button class="bet-btn" data-bet="pass">Pass Line</button>
                        <button class="bet-btn" data-bet="dontPass">Don't Pass</button>
                        <button class="bet-btn" data-bet="come">Come</button>
                        <button class="bet-btn" data-bet="dontCome">Don't Come</button>
                        <button class="bet-btn" data-bet="field">Field</button>
                        <button class="bet-btn" data-bet="any7">Any 7</button>
                    </div>
                </div>
                <div class="game-controls">
                    <input type="number" id="betAmount" placeholder="Bet Amount" min="1" max="1000" value="10">
                    <button class="btn btn-primary" id="rollBtn">${this.getText('roll')}</button>
                    <button class="btn btn-secondary" id="clearBetBtn">${this.getText('clearBet')}</button>
                </div>
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">${this.getText('wins')}:</span>
                        <span class="stat-value" id="wins">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('losses')}:</span>
                        <span class="stat-value" id="losses">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('totalGames')}:</span>
                        <span class="stat-value" id="totalGames">0</span>
                    </div>
                </div>
            </div>
        `;
    }

    createKenoInterface() {
        return `
            <div class="keno-game">
                <div class="keno-board">
                    <h4>Select up to 10 numbers (1-80)</h4>
                    <div class="number-grid" id="kenoNumbers">
                        ${Array.from({length: 80}, (_, i) => i + 1).map(num => 
                            `<button class="keno-number" data-number="${num}">${num}</button>`
                        ).join('')}
                    </div>
                    <div class="selected-numbers">
                        <h5>Selected: <span id="selectedCount">0</span>/10</h5>
                        <div id="selectedNumbers"></div>
                    </div>
                </div>
                <div class="drawn-numbers">
                    <h4>Drawn Numbers</h4>
                    <div class="drawn-grid" id="drawnNumbers"></div>
                </div>
                <div class="game-controls">
                    <input type="number" id="betAmount" placeholder="Bet Amount" min="1" max="1000" value="10">
                    <button class="btn btn-primary" id="drawBtn">Draw Numbers</button>
                    <button class="btn btn-secondary" id="clearSelectionBtn">Clear Selection</button>
                </div>
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">${this.getText('wins')}:</span>
                        <span class="stat-value" id="wins">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('losses')}:</span>
                        <span class="stat-value" id="losses">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${this.getText('totalGames')}:</span>
                        <span class="stat-value" id="totalGames">0</span>
                    </div>
                </div>
            </div>
        `;
    }

    createDefaultInterface() {
        return `
            <div class="game-interface">
                <div class="game-area">
                    <div id="gameDisplay">Click Start to begin!</div>
                </div>
                <div class="bet-controls">
                    <label>Bet Amount: $<span id="betValue">100</span></label>
                    <input type="range" min="10" max="1000" value="100" class="bet-slider" id="betSlider">
                </div>
                <div class="game-controls">
                    <button class="btn btn-primary" id="startGameBtn">Start Game</button>
                    <button class="btn btn-secondary" id="closeGameBtn">Close</button>
                </div>
            </div>
        `;
    }

    setupGameEventListeners(modal, gameName) {
        // Store modal reference for cleanup
        this.currentModal = modal;
        
        switch (gameName) {
            case 'Dice Roll':
                this.setupDiceRollEvents(modal);
                break;
            case 'Blackjack':
                this.setupBlackjackEvents(modal);
                break;
            case 'Slot Machine':
                this.setupSlotMachineEvents(modal);
                break;
            case 'Roulette':
                this.setupRouletteEvents(modal);
                break;
            case 'Poker':
                this.setupPokerEvents(modal);
                break;
            case 'Baccarat':
                this.setupBaccaratEvents(modal);
                break;
            case 'Craps':
                this.setupCrapsEvents(modal);
                break;
            case 'Keno':
                this.setupKenoEvents(modal);
                break;
            default:
                this.setupDefaultEvents(modal);
        }
    }

    setupDiceRollEvents(modal) {
        const rollBtn = modal.querySelector('#rollDiceBtn');
        const autoPlayBtn = modal.querySelector('#autoPlayBtn');
        const betSlider = modal.querySelector('#betSlider');
        const playerDice = modal.querySelector('#playerDice');
        const dealerDice = modal.querySelector('#dealerDice');
        
        rollBtn.addEventListener('click', () => {
            this.playSound('click');
            const betAmount = parseInt(betSlider.value);
            if (betAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }
            
            this.currentUser.balance -= betAmount;
            this.updateBalance();
            
            // Animate dice
            this.animateDice(playerDice, dealerDice, () => {
                const playerRoll = Math.floor(Math.random() * 6) + 1;
                const dealerRoll = Math.floor(Math.random() * 6) + 1;
                
                playerDice.textContent = this.getDiceSymbol(playerRoll);
                dealerDice.textContent = this.getDiceSymbol(dealerRoll);
                
                let result;
                if (playerRoll > dealerRoll) {
                    result = { won: true, amount: betAmount * 2, message: `You win! ${playerRoll} vs ${dealerRoll}` };
                    this.playSound('win');
                } else if (playerRoll < dealerRoll) {
                    result = { won: false, amount: betAmount, message: `You lose! ${playerRoll} vs ${dealerRoll}` };
                    this.playSound('lose');
                } else {
                    result = { won: true, amount: betAmount, message: `It's a tie! ${playerRoll} vs ${dealerRoll}` };
                    this.playSound('win');
                }
                
                if (result.won) {
                    this.currentUser.balance += result.amount;
                    this.createParticleEffect();
                }
                
                this.updateBalance();
                this.saveUserData();
                this.updateGameStats(modal, result.won);
            });
        });
        
        autoPlayBtn.addEventListener('click', () => {
            // Auto play 10 rounds
            let rounds = 0;
            const autoPlay = () => {
                if (rounds >= 10) return;
                rollBtn.click();
                rounds++;
                setTimeout(autoPlay, 2000);
            };
            autoPlay();
        });
    }

    setupBlackjackEvents(modal) {
        const dealBtn = modal.querySelector('#dealBtn');
        const hitBtn = modal.querySelector('#hitBtn');
        const standBtn = modal.querySelector('#standBtn');
        const betSlider = modal.querySelector('#betSlider');
        
        let gameState = { playerCards: [], dealerCards: [], betAmount: 0, gameActive: false };
        
        dealBtn.addEventListener('click', () => {
            const betAmount = parseInt(betSlider.value);
            if (betAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }
            
            this.currentUser.balance -= betAmount;
            this.updateBalance();
            
            gameState = {
                playerCards: [this.getRandomCard(), this.getRandomCard()],
                dealerCards: [this.getRandomCard(), this.getRandomCard()],
                betAmount: betAmount,
                gameActive: true
            };
            
            this.updateBlackjackDisplay(modal, gameState);
            dealBtn.disabled = true;
            hitBtn.disabled = false;
            standBtn.disabled = false;
        });
        
        hitBtn.addEventListener('click', () => {
            gameState.playerCards.push(this.getRandomCard());
            this.updateBlackjackDisplay(modal, gameState);
            
            const playerTotal = this.calculateHand(gameState.playerCards);
            if (playerTotal > 21) {
                this.endBlackjackGame(modal, gameState, false);
            }
        });
        
        standBtn.addEventListener('click', () => {
            this.endBlackjackGame(modal, gameState, true);
        });
    }

    setupSlotMachineEvents(modal) {
        const spinBtn = modal.querySelector('#spinBtn');
        const autoSpinBtn = modal.querySelector('#autoSpinBtn');
        const betSlider = modal.querySelector('#betSlider');
        const reels = [
            modal.querySelector('#reel1'),
            modal.querySelector('#reel2'),
            modal.querySelector('#reel3')
        ];
        
        spinBtn.addEventListener('click', () => {
            const betAmount = parseInt(betSlider.value);
            if (betAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }
            
            this.currentUser.balance -= betAmount;
            this.updateBalance();
            
            this.animateSlotReels(reels, () => {
                const symbols = ['🍒', '🍊', '🍇', '💎', '7️⃣', '🎰'];
                const results = reels.map(() => symbols[Math.floor(Math.random() * symbols.length)]);
                
                reels.forEach((reel, i) => {
                    reel.textContent = results[i];
                });
                
                let result;
                if (results[0] === results[1] && results[1] === results[2]) {
                    const multiplier = results[0] === '7️⃣' ? 10 : results[0] === '💎' ? 5 : 3;
                    result = { won: true, amount: betAmount * multiplier, message: `Jackpot! ${results.join(' ')}` };
                } else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
                    result = { won: true, amount: Math.floor(betAmount * 1.5), message: `Two of a kind! ${results.join(' ')}` };
                } else {
                    result = { won: false, amount: betAmount, message: `No match! ${results.join(' ')}` };
                }
                
                if (result.won) {
                    this.currentUser.balance += result.amount;
                    this.createParticleEffect();
                }
                
                this.updateBalance();
                this.saveUserData();
                this.updateGameStats(modal, result.won);
            });
        });
        
        autoSpinBtn.addEventListener('click', () => {
            let spins = 0;
            const autoSpin = () => {
                if (spins >= 10) return;
                spinBtn.click();
                spins++;
                setTimeout(autoSpin, 2000);
            };
            autoSpin();
        });
    }

    setupRouletteEvents(modal) {
        const spinBtn = modal.querySelector('#spinBtn');
        const clearBetBtn = modal.querySelector('#clearBetBtn');
        const betAmount = modal.querySelector('#betAmount');
        const wheelNumber = modal.querySelector('.wheel-number');
        const numberBtns = modal.querySelectorAll('.number-btn');
        const colorBtns = modal.querySelectorAll('.color-btn');

        let selectedNumbers = [];
        let selectedColors = [];
        let currentBet = 0;

        // Number button events
        numberBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const number = btn.getAttribute('data-number');
                if (btn.classList.contains('selected')) {
                    btn.classList.remove('selected');
                    selectedNumbers = selectedNumbers.filter(n => n !== number);
                } else {
                    btn.classList.add('selected');
                    selectedNumbers.push(number);
                }
            });
        });

        // Color button events
        colorBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const color = btn.getAttribute('data-color');
                if (btn.classList.contains('selected')) {
                    btn.classList.remove('selected');
                    selectedColors = selectedColors.filter(c => c !== color);
                } else {
                    btn.classList.add('selected');
                    selectedColors.push(color);
                }
            });
        });

        spinBtn.addEventListener('click', () => {
            const betValue = parseInt(betAmount.value);
            if (betValue > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }

            if (selectedNumbers.length === 0 && selectedColors.length === 0) {
                alert('Please select at least one number or color!');
                return;
            }

            this.currentUser.balance -= betValue;
            this.updateBalance();

            // Animate wheel
            let spins = 0;
            const maxSpins = 20;
            
            const spin = () => {
                if (spins >= maxSpins) {
                    const result = Math.floor(Math.random() * 37); // 0-36
                    wheelNumber.textContent = result === 0 ? '00' : result;
                    
                    // Check for wins
                    let won = false;
                    let winnings = 0;
                    
                    if (selectedNumbers.includes(result.toString())) {
                        won = true;
                        winnings = betValue * 35; // 35:1 payout for single number
                    } else if (selectedColors.length > 0) {
                        const resultColor = this.getRouletteColor(result);
                        if (selectedColors.includes(resultColor)) {
                            won = true;
                            winnings = betValue * 2; // 2:1 payout for colors
                        }
                    }
                    
                    if (won) {
                        this.currentUser.balance += winnings;
                        this.createParticleEffect();
                        this.playSound('win');
                    } else {
                        this.playSound('lose');
                    }
                    
                    this.updateBalance();
                    this.saveUserData();
                    this.updateGameStats(modal, won);
                    return;
                }
                
                const randomNum = Math.floor(Math.random() * 37);
                wheelNumber.textContent = randomNum === 0 ? '00' : randomNum;
                
                spins++;
                setTimeout(spin, 100);
            };
            
            spin();
        });

        clearBetBtn.addEventListener('click', () => {
            selectedNumbers = [];
            selectedColors = [];
            numberBtns.forEach(btn => btn.classList.remove('selected'));
            colorBtns.forEach(btn => btn.classList.remove('selected'));
            betAmount.value = 10;
        });
    }

    getRouletteColor(number) {
        if (number === 0) return 'green';
        const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        return redNumbers.includes(number) ? 'red' : 'black';
    }

    setupPokerEvents(modal) {
        const dealBtn = modal.querySelector('#dealBtn');
        const callBtn = modal.querySelector('#callBtn');
        const raiseBtn = modal.querySelector('#raiseBtn');
        const foldBtn = modal.querySelector('#foldBtn');
        const betSlider = modal.querySelector('#betAmount');
        const potAmount = modal.querySelector('#potAmount');
        const playerBet = modal.querySelector('#playerBet');
        const communityCards = modal.querySelector('#communityCards');
        const playerCards = modal.querySelector('#playerCards');

        let gameState = {
            pot: 0,
            playerBet: 0,
            playerBalance: this.currentUser.balance,
            communityCards: [],
            playerHand: [],
            playerActive: true,
            gameActive: false
        };

        dealBtn.addEventListener('click', () => {
            const betAmount = parseInt(betSlider.value);
            if (betAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }

            this.currentUser.balance -= betAmount;
            this.updateBalance();

            gameState = {
                pot: betAmount,
                playerBet: betAmount,
                playerBalance: this.currentUser.balance,
                communityCards: [this.getRandomCard(), this.getRandomCard()],
                playerHand: [this.getRandomCard(), this.getRandomCard()],
                playerActive: true,
                gameActive: true
            };

            this.updatePokerDisplay(modal, gameState);
            dealBtn.disabled = true;
            callBtn.disabled = false;
            raiseBtn.disabled = false;
            foldBtn.disabled = false;
        });

        callBtn.addEventListener('click', () => {
            const callAmount = gameState.playerBet - gameState.playerBalance;
            if (callAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }

            this.currentUser.balance -= callAmount;
            this.updateBalance();

            gameState.pot += callAmount;
            gameState.playerBalance -= callAmount;
            this.updatePokerDisplay(modal, gameState);

            // Simulate AI turn
            this.simulatePokerTurn(modal, gameState, 'AI');
        });

        raiseBtn.addEventListener('click', () => {
            const raiseAmount = parseInt(betSlider.value);
            if (raiseAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }

            this.currentUser.balance -= raiseAmount;
            this.updateBalance();

            gameState.pot += raiseAmount;
            gameState.playerBet += raiseAmount;
            this.updatePokerDisplay(modal, gameState);

            // Simulate AI turn
            this.simulatePokerTurn(modal, gameState, 'AI');
        });

        foldBtn.addEventListener('click', () => {
            this.endPokerGame(modal, gameState, 'folded');
        });
    }

    simulatePokerTurn(modal, gameState, playerType) {
        if (!gameState.gameActive) return;

        if (playerType === 'AI') {
            // Simple AI logic: always call if player can afford, otherwise fold
            const callAmount = gameState.playerBet - gameState.playerBalance;
            if (callAmount <= this.currentUser.balance) {
                this.currentUser.balance -= callAmount;
                this.updateBalance();
                gameState.pot += callAmount;
                gameState.playerBalance -= callAmount;
                this.updatePokerDisplay(modal, gameState);
            } else {
                this.endPokerGame(modal, gameState, 'folded');
            }
        } else {
            // Simulate a human player's turn (e.g., a button to call/raise)
            // For now, we'll just end the game as a placeholder
            this.endPokerGame(modal, gameState, 'human');
        }
    }

    endPokerGame(modal, gameState, reason) {
        gameState.gameActive = false;
        this.updatePokerDisplay(modal, gameState);

        // Simulate a winner (e.g., player wins if AI folds)
        // In a real game, you'd calculate the winner based on poker rules
        let result;
        if (reason === 'folded') {
            result = { won: true, amount: gameState.pot, message: 'You won by folding!' };
        } else {
            result = { won: false, amount: gameState.pot, message: 'You lost the pot!' };
        }

        this.currentUser.balance += result.amount;
        this.updateBalance();
        this.saveUserData();
        this.updateGameStats(modal, result.won);

        // Reset game
        const dealBtn = modal.querySelector('#dealBtn');
        dealBtn.disabled = false;
        callBtn.disabled = true;
        raiseBtn.disabled = true;
        foldBtn.disabled = true;
    }

    updatePokerDisplay(modal, gameState) {
        const communityCards = modal.querySelector('#communityCards');
        const playerCards = modal.querySelector('#playerCards');
        const potAmount = modal.querySelector('#potAmount');
        const playerBet = modal.querySelector('#playerBet');

        communityCards.innerHTML = gameState.communityCards.map(card => `<span class="card">${card}</span>`).join('');
        playerCards.innerHTML = gameState.playerHand.map(card => `<span class="card">${card}</span>`).join('');
        potAmount.textContent = gameState.pot;
        playerBet.textContent = gameState.playerBet;
    }

    setupBaccaratEvents(modal) {
        const dealBtn = modal.querySelector('#dealBtn');
        const betSlider = modal.querySelector('#betAmount');
        const playerCards = modal.querySelector('#playerCards');
        const bankerCards = modal.querySelector('#bankerCards');
        const playerScore = modal.querySelector('#playerScore');
        const bankerScore = modal.querySelector('#bankerScore');

        let gameState = {
            playerHand: [],
            bankerHand: [],
            playerBet: 0,
            bankerBet: 0,
            playerTotal: 0,
            bankerTotal: 0,
            gameActive: false,
            playerActive: true,
            bankerActive: true
        };

        dealBtn.addEventListener('click', () => {
            const betAmount = parseInt(betSlider.value);
            if (betAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }

            this.currentUser.balance -= betAmount;
            this.updateBalance();

            gameState = {
                playerHand: [this.getRandomCard(), this.getRandomCard()],
                bankerHand: [this.getRandomCard(), this.getRandomCard()],
                playerBet: betAmount,
                bankerBet: 0, // Baccarat starts with no banker bet
                playerTotal: this.calculateBaccaratHand(gameState.playerHand),
                bankerTotal: this.calculateBaccaratHand(gameState.bankerHand),
                gameActive: true,
                playerActive: true,
                bankerActive: true
            };

            this.updateBaccaratDisplay(modal, gameState);
            dealBtn.disabled = true;
            // No specific buttons for player/banker turns in this simplified version
        });

        // Simulate a turn for the player (e.g., a button to draw a card)
        // For now, we'll just end the game as a placeholder
        this.simulateBaccaratTurn(modal, gameState, 'player');
    }

    simulateBaccaratTurn(modal, gameState, playerType) {
        if (!gameState.gameActive) return;

        if (playerType === 'player') {
            gameState.playerHand.push(this.getRandomCard());
            gameState.playerTotal = this.calculateBaccaratHand(gameState.playerHand);
            this.updateBaccaratDisplay(modal, gameState);

            if (gameState.playerTotal > 9) {
                this.endBaccaratGame(modal, gameState, 'player');
            }
        } else {
            // Simulate a turn for the banker
            gameState.bankerHand.push(this.getRandomCard());
            gameState.bankerTotal = this.calculateBaccaratHand(gameState.bankerHand);
            this.updateBaccaratDisplay(modal, gameState);

            if (gameState.bankerTotal > 9) {
                this.endBaccaratGame(modal, gameState, 'banker');
            }
        }
    }

    endBaccaratGame(modal, gameState, winner) {
        gameState.gameActive = false;
        this.updateBaccaratDisplay(modal, gameState);

        let result;
        if (winner === 'player') {
            result = { won: true, amount: gameState.playerBet * 2, message: 'Player wins!' };
        } else if (winner === 'banker') {
            result = { won: false, amount: gameState.playerBet, message: 'Banker wins!' };
        } else { // Tie
            result = { won: true, amount: gameState.playerBet * 8, message: 'Tie! Banker wins!' };
        }

        this.currentUser.balance += result.amount;
        this.updateBalance();
        this.saveUserData();
        this.updateGameStats(modal, result.won);

        // Reset game
        const dealBtn = modal.querySelector('#dealBtn');
        dealBtn.disabled = false;
        // No specific buttons for player/banker turns in this simplified version
    }

    updateBaccaratDisplay(modal, gameState) {
        const playerCards = modal.querySelector('#playerCards');
        const bankerCards = modal.querySelector('#bankerCards');
        const playerScore = modal.querySelector('#playerScore');
        const bankerScore = modal.querySelector('#bankerScore');

        playerCards.innerHTML = gameState.playerHand.map(card => `<span class="card">${card}</span>`).join('');
        bankerCards.innerHTML = gameState.bankerHand.map(card => `<span class="card">${card}</span>`).join('');
        playerScore.textContent = `Score: ${gameState.playerTotal}`;
        bankerScore.textContent = `Score: ${gameState.bankerTotal}`;
    }

    setupCrapsEvents(modal) {
        const rollBtn = modal.querySelector('#rollBtn');
        const clearBetBtn = modal.querySelector('#clearBetBtn');
        const betAmount = modal.querySelector('#betAmount');
        const dice1 = modal.querySelector('#dice1');
        const dice2 = modal.querySelector('#dice2');
        const diceResult = modal.querySelector('#diceResult');
        const betBtns = modal.querySelectorAll('.bet-btn');

        let selectedBet = null;
        let point = null;
        let gameState = 'comeOut'; // comeOut, point

        // Bet button events
        betBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const betType = btn.getAttribute('data-bet');
                if (btn.classList.contains('selected')) {
                    btn.classList.remove('selected');
                    selectedBet = null;
                } else {
                    betBtns.forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selectedBet = betType;
                }
            });
        });

        rollBtn.addEventListener('click', () => {
            const betValue = parseInt(betAmount.value);
            if (betValue > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }

            if (!selectedBet) {
                alert('Please select a bet type!');
                return;
            }

            this.currentUser.balance -= betValue;
            this.updateBalance();

            this.animateDice(dice1, dice2, () => {
                const die1 = Math.floor(Math.random() * 6) + 1;
                const die2 = Math.floor(Math.random() * 6) + 1;
                const total = die1 + die2;
                
                dice1.textContent = this.getDiceSymbol(die1);
                dice2.textContent = this.getDiceSymbol(die2);
                diceResult.textContent = `You rolled: ${die1} + ${die2} = ${total}`;

                let result = this.evaluateCrapsBet(selectedBet, total, point, betValue);
                
                if (result.won) {
                    this.currentUser.balance += result.amount;
                    this.createParticleEffect();
                    this.playSound('win');
                } else {
                    this.playSound('lose');
                }

                // Update point if needed
                if (gameState === 'comeOut' && [4, 5, 6, 8, 9, 10].includes(total)) {
                    point = total;
                    gameState = 'point';
                    diceResult.textContent += ` - Point is ${point}`;
                } else if (gameState === 'point' && total === 7) {
                    point = null;
                    gameState = 'comeOut';
                    diceResult.textContent += ' - Seven out!';
                } else if (gameState === 'point' && total === point) {
                    point = null;
                    gameState = 'comeOut';
                    diceResult.textContent += ' - Point made!';
                }

                this.updateBalance();
                this.saveUserData();
                this.updateGameStats(modal, result.won);
            });
        });

        clearBetBtn.addEventListener('click', () => {
            selectedBet = null;
            betBtns.forEach(btn => btn.classList.remove('selected'));
            betAmount.value = 10;
            diceResult.textContent = 'Roll the dice!';
        });
    }

    evaluateCrapsBet(betType, total, point, betAmount) {
        switch (betType) {
            case 'pass':
                if (point === null) { // Come out roll
                    if (total === 7 || total === 11) {
                        return { won: true, amount: betAmount * 2 };
                    } else if (total === 2 || total === 3 || total === 12) {
                        return { won: false, amount: betAmount };
                    }
                } else { // Point roll
                    if (total === point) {
                        return { won: true, amount: betAmount * 2 };
                    } else if (total === 7) {
                        return { won: false, amount: betAmount };
                    }
                }
                return { won: false, amount: 0 }; // No win/loss yet
                
            case 'dontPass':
                if (point === null) { // Come out roll
                    if (total === 2 || total === 3) {
                        return { won: true, amount: betAmount * 2 };
                    } else if (total === 7 || total === 11) {
                        return { won: false, amount: betAmount };
                    } else if (total === 12) {
                        return { won: false, amount: 0 }; // Push
                    }
                } else { // Point roll
                    if (total === 7) {
                        return { won: true, amount: betAmount * 2 };
                    } else if (total === point) {
                        return { won: false, amount: betAmount };
                    }
                }
                return { won: false, amount: 0 }; // No win/loss yet
                
            case 'field':
                if ([2, 3, 4, 9, 10, 11, 12].includes(total)) {
                    const multiplier = [2, 12].includes(total) ? 3 : 2;
                    return { won: true, amount: betAmount * multiplier };
                }
                return { won: false, amount: betAmount };
                
            case 'any7':
                if (total === 7) {
                    return { won: true, amount: betAmount * 5 };
                }
                return { won: false, amount: betAmount };
                
            default:
                return { won: false, amount: betAmount };
        }
    }

    setupKenoEvents(modal) {
        const drawBtn = modal.querySelector('#drawBtn');
        const clearSelectionBtn = modal.querySelector('#clearSelectionBtn');
        const betAmount = modal.querySelector('#betAmount');
        const kenoNumbers = modal.querySelector('#kenoNumbers');
        const selectedNumbers = modal.querySelector('#selectedNumbers');
        const selectedCount = modal.querySelector('#selectedCount');
        const drawnNumbers = modal.querySelector('#drawnNumbers');

        let drawn = [];
        let selected = [];

        // Create number grid
        kenoNumbers.innerHTML = '';
        for (let i = 1; i <= 80; i++) {
            const numberBtn = document.createElement('button');
            numberBtn.className = 'keno-number';
            numberBtn.textContent = i;
            numberBtn.setAttribute('data-number', i);
            numberBtn.addEventListener('click', () => {
                if (selected.length >= 10 && !selected.includes(i.toString())) {
                    alert('You can only select up to 10 numbers!');
                    return;
                }
                
                numberBtn.classList.toggle('selected');
                if (numberBtn.classList.contains('selected')) {
                    selected.push(i.toString());
                } else {
                    selected = selected.filter(num => num !== i.toString());
                }
                selectedCount.textContent = selected.length;
                selectedNumbers.innerHTML = selected.map(num => `<span class="keno-number-tag">${num}</span>`).join('');
            });
            kenoNumbers.appendChild(numberBtn);
        }

        drawBtn.addEventListener('click', () => {
            const betValue = parseInt(betAmount.value);
            if (betValue > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }

            if (selected.length === 0) {
                alert('Please select at least one number!');
                return;
            }

            this.currentUser.balance -= betValue;
            this.updateBalance();

            this.animateKenoDraw(drawnNumbers, () => {
                drawn = [];
                const numbers = Array.from({length: 80}, (_, i) => i + 1);
                
                // Draw 20 numbers
                for (let i = 0; i < 20; i++) {
                    const randomIndex = Math.floor(Math.random() * numbers.length);
                    drawn.push(numbers[randomIndex]);
                    numbers.splice(randomIndex, 1);
                }
                
                drawnNumbers.innerHTML = drawn.map(num => `<span class="keno-number-tag">${num}</span>`).join('');

                // Check for wins
                const winningNumbers = selected.filter(num => drawn.includes(parseInt(num)));
                let result;
                
                if (winningNumbers.length > 0) {
                    const payout = this.calculateKenoPayout(winningNumbers.length, selected.length);
                    result = { 
                        won: true, 
                        amount: betValue * payout, 
                        message: `You won! ${winningNumbers.length} numbers hit.` 
                    };
                } else {
                    result = { 
                        won: false, 
                        amount: betValue, 
                        message: `No numbers hit.` 
                    };
                }

                if (result.won) {
                    this.currentUser.balance += result.amount;
                    this.createParticleEffect();
                    this.playSound('win');
                } else {
                    this.playSound('lose');
                }

                this.updateBalance();
                this.saveUserData();
                this.updateGameStats(modal, result.won);
            });
        });

        clearSelectionBtn.addEventListener('click', () => {
            selected = [];
            selectedCount.textContent = 0;
            selectedNumbers.innerHTML = '';
            drawnNumbers.innerHTML = '';
            kenoNumbers.querySelectorAll('.keno-number').forEach(btn => {
                btn.classList.remove('selected');
            });
        });
    }

    calculateKenoPayout(hits, picks) {
        // Simple payout structure
        const payouts = {
            1: { 1: 3, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1 },
            2: { 2: 15, 3: 2, 4: 2, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1 },
            3: { 3: 45, 4: 4, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1, 10: 1 },
            4: { 4: 130, 5: 20, 6: 4, 7: 2, 8: 1, 9: 1, 10: 1 },
            5: { 5: 350, 6: 35, 7: 8, 8: 3, 9: 2, 10: 1 },
            6: { 6: 800, 7: 100, 8: 20, 9: 5, 10: 2 },
            7: { 7: 1500, 8: 200, 9: 50, 10: 10 },
            8: { 8: 2500, 9: 500, 10: 100 },
            9: { 9: 5000, 10: 1000 },
            10: { 10: 10000 }
        };
        
        return payouts[picks]?.[hits] || 0;
    }

    animateKenoDraw(drawnNumbers, callback) {
        let spins = 0;
        const maxSpins = 20;
        const numbers = Array.from({length: 80}, (_, i) => i + 1);
        
        const draw = () => {
            if (spins >= maxSpins) {
                callback();
                return;
            }
            const randomIndex = Math.floor(Math.random() * numbers.length);
            const drawnNumber = numbers[randomIndex];
            drawnNumbers.innerHTML += `<span class="keno-number-tag">${drawnNumber}</span>`;
            numbers.splice(randomIndex, 1); // Remove drawn number from pool
            spins++;
            setTimeout(draw, 100);
        };
        
        drawnNumbers.innerHTML = '';
        draw();
    }

    setupDefaultEvents(modal) {
        const startBtn = modal.querySelector('#startGameBtn');
        const betSlider = modal.querySelector('#betSlider');
        const gameDisplay = modal.querySelector('#gameDisplay');
        
        startBtn.addEventListener('click', () => {
            const betAmount = parseInt(betSlider.value);
            if (betAmount > this.currentUser.balance) {
                alert('Insufficient funds!');
                return;
            }
            this.playGame('Default', betAmount, gameDisplay, startBtn);
        });
    }

    // Helper methods for enhanced games
    getDiceSymbol(number) {
        const symbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        return symbols[number - 1];
    }

    animateDice(dice1, dice2, callback) {
        let spins = 0;
        const maxSpins = 10;
        
        const spin = () => {
            if (spins >= maxSpins) {
                callback();
                return;
            }
            
            const symbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
            dice1.textContent = symbols[Math.floor(Math.random() * 6)];
            dice2.textContent = symbols[Math.floor(Math.random() * 6)];
            
            spins++;
            setTimeout(spin, 100);
        };
        
        spin();
    }

    updateBlackjackDisplay(modal, gameState) {
        const playerCards = modal.querySelector('#playerCards');
        const dealerCards = modal.querySelector('#dealerCards');
        const playerTotal = modal.querySelector('#playerTotal');
        const dealerTotal = modal.querySelector('#dealerTotal');
        
        playerCards.innerHTML = gameState.playerCards.map(card => `<span class="card">${card}</span>`).join('');
        dealerCards.innerHTML = gameState.dealerCards.map(card => `<span class="card">${card}</span>`).join('');
        
        playerTotal.textContent = `Total: ${this.calculateHand(gameState.playerCards)}`;
        dealerTotal.textContent = `Total: ${this.calculateHand(gameState.dealerCards)}`;
    }

    endBlackjackGame(modal, gameState, playerStood) {
        const playerTotal = this.calculateHand(gameState.playerCards);
        const dealerTotal = this.calculateHand(gameState.dealerCards);
        
        let result;
        if (playerTotal > 21) {
            result = { won: false, amount: gameState.betAmount, message: `Bust! Your total: ${playerTotal}` };
        } else if (playerTotal === 21) {
            result = { won: true, amount: Math.floor(gameState.betAmount * 2.5), message: 'Blackjack! You win!' };
        } else if (dealerTotal > 21) {
            result = { won: true, amount: gameState.betAmount * 2, message: `Dealer bust! You win!` };
        } else if (playerTotal > dealerTotal) {
            result = { won: true, amount: gameState.betAmount * 2, message: `You win! ${playerTotal} vs ${dealerTotal}` };
        } else {
            result = { won: false, amount: gameState.betAmount, message: `Dealer wins! ${dealerTotal} vs ${playerTotal}` };
        }
        
        if (result.won) {
            this.currentUser.balance += result.amount;
            this.createParticleEffect();
        }
        
        this.updateBalance();
        this.saveUserData();
        this.updateGameStats(modal, result.won);
        
        // Reset game
        const dealBtn = modal.querySelector('#dealBtn');
        const hitBtn = modal.querySelector('#hitBtn');
        const standBtn = modal.querySelector('#standBtn');
        
        dealBtn.disabled = false;
        hitBtn.disabled = true;
        standBtn.disabled = true;
    }

    animateSlotReels(reels, callback) {
        let spins = 0;
        const maxSpins = 20;
        const symbols = ['🍒', '🍊', '🍇', '💎', '7️⃣', '🎰'];
        
        const spin = () => {
            reels.forEach(reel => {
                reel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            });
            
            spins++;
            if (spins < maxSpins) {
                setTimeout(spin, 100);
            } else {
                callback();
            }
        };
        
        spin();
    }

    animateRouletteWheel(wheelDisplay, callback) {
        let spins = 0;
        const maxSpins = 30;
        
        const spin = () => {
            wheelDisplay.textContent = Math.floor(Math.random() * 37);
            
            spins++;
            if (spins < maxSpins) {
                setTimeout(spin, 100);
            } else {
                callback();
            }
        };
        
        spin();
    }

    updateGameStats(modal, won) {
        const winsElement = modal.querySelector('#wins');
        const lossesElement = modal.querySelector('#losses');
        const totalGamesElement = modal.querySelector('#totalGames');
        
        if (winsElement && lossesElement && totalGamesElement) {
            let wins = parseInt(winsElement.textContent) || 0;
            let losses = parseInt(lossesElement.textContent) || 0;
            let totalGames = parseInt(totalGamesElement.textContent) || 0;
            
            if (won) {
                wins++;
            } else {
                losses++;
            }
            totalGames++;
            
            winsElement.textContent = wins;
            lossesElement.textContent = losses;
            totalGamesElement.textContent = totalGames;
        }
    }

    playBlackjack(betAmount) {
        const playerCards = [this.getRandomCard(), this.getRandomCard()];
        const dealerCards = [this.getRandomCard(), this.getRandomCard()];
        
        const playerTotal = this.calculateHand(playerCards);
        const dealerTotal = this.calculateHand(dealerCards);
        
        if (playerTotal === 21) {
            return { won: true, amount: Math.floor(betAmount * 2.5), message: 'Blackjack! You win!' };
        } else if (playerTotal > 21) {
            return { won: false, amount: betAmount, message: `Bust! Your total: ${playerTotal}` };
        } else if (dealerTotal > 21) {
            return { won: true, amount: betAmount * 2, message: `Dealer bust! You win!` };
        } else if (playerTotal > dealerTotal) {
            return { won: true, amount: betAmount * 2, message: `You win! ${playerTotal} vs ${dealerTotal}` };
        } else {
            return { won: false, amount: betAmount, message: `Dealer wins! ${dealerTotal} vs ${playerTotal}` };
        }
    }

    getRandomCard() {
        const suits = ['♠', '♥', '♦', '♣'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const suit = suits[Math.floor(Math.random() * suits.length)];
        const rank = ranks[Math.floor(Math.random() * ranks.length)];
        return rank + suit;
    }

    calculateBaccaratHand(hand) {
        let total = 0;
        for (let card of hand) {
            const rank = card.replace(/[♠♥♦♣]/g, '');
            if (rank === 'A') {
                total += 1;
            } else if (['K', 'Q', 'J'].includes(rank)) {
                total += 0;
            } else {
                total += parseInt(rank);
            }
        }
        return total % 10;
    }

    playSlotMachine(betAmount) {
        const symbols = ['🍒', '🍊', '🍇', '💎', '7️⃣', '🎰'];
        const reels = [
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        
        if (reels[0] === reels[1] && reels[1] === reels[2]) {
            const multiplier = reels[0] === '7️⃣' ? 10 : reels[0] === '💎' ? 5 : 3;
            return { won: true, amount: betAmount * multiplier, message: `Jackpot! ${reels.join(' ')}` };
        } else if (reels[0] === reels[1] || reels[1] === reels[2] || reels[0] === reels[2]) {
            return { won: true, amount: Math.floor(betAmount * 1.5), message: `Two of a kind! ${reels.join(' ')}` };
        } else {
            return { won: false, amount: betAmount, message: `No match! ${reels.join(' ')}` };
        }
    }

    playRoulette(betAmount) {
        const number = Math.floor(Math.random() * 37); // 0-36
        const isRed = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36].includes(number);
        const isBlack = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35].includes(number);
        
        // Simple bet on red
        if (isRed) {
            return { won: true, amount: betAmount * 2, message: `Red ${number}! You win!` };
        } else {
            return { won: false, amount: betAmount, message: `Number ${number}! You lose!` };
        }
    }

    updateBalance() {
        if (this.currentUser) {
            const balanceElement = document.getElementById('balance');
            if (balanceElement) {
                balanceElement.textContent = `$${this.currentUser.balance.toLocaleString()}`;
            }
        }
    }

    saveUserData() {
        if (this.currentUser) {
            const users = JSON.parse(localStorage.getItem('casinoUsers') || '[]');
            const userIndex = users.findIndex(user => user.username === this.currentUser.username);
            
            if (userIndex !== -1) {
                users[userIndex] = this.currentUser;
            }
            
            localStorage.setItem('casinoUsers', JSON.stringify(users));
            localStorage.setItem('casinoCurrentUser', JSON.stringify(this.currentUser));
        }
    }

    setupSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    setupAnimations() {
        if (!this.settings.animations) return;
        
        try {
            // Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe elements for animation
            const animateElements = document.querySelectorAll('.game-card, .promo-card, .hero');
            animateElements.forEach(el => observer.observe(el));
            
            // Floating chip animation
            this.createFloatingChips();
        } catch (error) {
            console.warn('Animation setup failed:', error);
        }
    }

    createFloatingChips() {
        if (!this.settings.animations) return;
        
        try {
            const chip = document.createElement('div');
            chip.className = 'floating-chip';
            chip.innerHTML = '🪙';
            chip.style.left = Math.random() * window.innerWidth + 'px';
            chip.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(chip);
            
            setTimeout(() => {
                if (chip.parentNode) {
                    chip.parentNode.removeChild(chip);
                }
            }, 5000);
            
            // Create new chip every 3-8 seconds
            setTimeout(() => this.createFloatingChips(), Math.random() * 5000 + 3000);
        } catch (error) {
            console.warn('Floating chip animation failed:', error);
        }
    }

    createParticleEffect() {
        if (!this.settings.particles) return;
        
        try {
            const particles = [];
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.top = Math.random() * window.innerHeight + 'px';
                particle.style.animationDelay = Math.random() * 0.5 + 's';
                document.body.appendChild(particle);
                
                particles.push(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1000);
            }
        } catch (error) {
            console.warn('Particle effect failed:', error);
        }
    }

    playSound(type) {
        if (!this.settings.sound) return;
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const volume = this.settings.volume / 100;
            gainNode.gain.setValueAtTime(volume * 0.1, audioContext.currentTime);
            
            switch (type) {
                case 'win':
                    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
                    break;
                case 'lose':
                    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
                    break;
                case 'click':
                    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.05);
                    break;
                default:
                    oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
            }
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (error) {
            console.warn('Audio playback failed:', error);
        }
    }

    // Language Management
    updateLanguage() {
        const lang = this.settings.language;
        const texts = this.translations[lang];
        
        // Update navigation
        const signInBtn = document.querySelector('#signInBtn');
        const logoutBtn = document.querySelector('#logoutBtn');
        const username = document.querySelector('#username');
        
        if (signInBtn) signInBtn.textContent = texts.signIn;
        if (logoutBtn) logoutBtn.textContent = texts.logout;
        if (username) username.textContent = texts.welcome;
        
        // Update game cards
        const gameCards = document.querySelectorAll('.game-card h3');
        gameCards.forEach(card => {
            const gameName = card.getAttribute('data-game');
            if (gameName && texts[gameName.toLowerCase().replace(/\s+/g, '')]) {
                card.textContent = texts[gameName.toLowerCase().replace(/\s+/g, '')];
            }
        });
        
        // Update promotional content
        const welcomeTitle = document.querySelector('.hero h1');
        if (welcomeTitle) welcomeTitle.textContent = texts.welcomeToCasino;
        
        const welcomeSubtitle = document.querySelector('.hero p');
        if (welcomeSubtitle) welcomeSubtitle.textContent = texts.experienceThrills;
        
        // Update section titles
        const newGamesTitle = document.querySelector('.new-games h2');
        if (newGamesTitle) newGamesTitle.textContent = texts.newGames;
        
        const comingSoonText = document.querySelector('.coming-soon');
        if (comingSoonText) comingSoonText.textContent = texts.comingSoon;
        
        const exclusiveTitle = document.querySelector('.exclusive-offers h2');
        if (exclusiveTitle) exclusiveTitle.textContent = texts.exclusiveOffers;
        
        // Update footer
        const footerText = document.querySelector('.footer-bottom p');
        if (footerText) footerText.textContent = texts.allRightsReserved;
        
        // Update settings modal
        this.updateSettingsLanguage();
    }

    updateSettingsLanguage() {
        const lang = this.settings.language;
        const texts = this.translations[lang];
        
        const settingsModal = document.querySelector('#settingsModal');
        if (!settingsModal) return;
        
        // Update settings header
        const settingsTitle = settingsModal.querySelector('.settings-header h3');
        if (settingsTitle) {
            settingsTitle.innerHTML = `<i class="fas fa-cog"></i> ${texts.settings}`;
        }
        
        // Update theme section
        const themeTitle = settingsModal.querySelector('.setting-group h4');
        if (themeTitle) themeTitle.textContent = texts.theme;
        
        const themeButtons = settingsModal.querySelectorAll('.theme-btn span');
        if (themeButtons.length >= 3) {
            themeButtons[0].textContent = texts.darkMode;
            themeButtons[1].textContent = texts.lightMode;
            themeButtons[2].textContent = texts.neonMode;
        }
        
        // Update animations section
        const animationsTitle = settingsModal.querySelectorAll('.setting-group h4')[1];
        if (animationsTitle) animationsTitle.textContent = texts.animations;
        
        const enableAnimationsLabel = settingsModal.querySelector('#enableAnimations');
        if (enableAnimationsLabel && enableAnimationsLabel.parentElement) {
            enableAnimationsLabel.parentElement.textContent = texts.enableAnimations;
        }
        
        const enableParticlesLabel = settingsModal.querySelector('#enableParticles');
        if (enableParticlesLabel && enableParticlesLabel.parentElement) {
            enableParticlesLabel.parentElement.textContent = texts.enableParticles;
        }
        
        // Update sound section
        const soundTitle = settingsModal.querySelectorAll('.setting-group h4')[2];
        if (soundTitle) soundTitle.textContent = texts.sound;
        
        const enableSoundLabel = settingsModal.querySelector('#enableSound');
        if (enableSoundLabel && enableSoundLabel.parentElement) {
            enableSoundLabel.parentElement.textContent = texts.enableSound;
        }
        
        const volumeLabel = settingsModal.querySelector('#volumeSlider');
        if (volumeLabel && volumeLabel.previousElementSibling) {
            volumeLabel.previousElementSibling.textContent = `${texts.volume}: `;
        }
        
        // Update game settings section
        const gameSettingsTitle = settingsModal.querySelectorAll('.setting-group h4')[3];
        if (gameSettingsTitle) gameSettingsTitle.textContent = texts.gameSettings;
        
        const autoPlayLabel = settingsModal.querySelector('#autoPlaySpeed');
        if (autoPlayLabel && autoPlayLabel.previousElementSibling) {
            autoPlayLabel.previousElementSibling.textContent = texts.autoPlaySpeed + ':';
        }
        
        const autoPlayOptions = settingsModal.querySelectorAll('#autoPlaySpeed option');
        if (autoPlayOptions.length >= 3) {
            autoPlayOptions[0].textContent = texts.fast;
            autoPlayOptions[1].textContent = texts.normal;
            autoPlayOptions[2].textContent = texts.slow;
        }
        
        const showStatsLabel = settingsModal.querySelector('#showStatistics');
        if (showStatsLabel && showStatsLabel.parentElement) {
            showStatsLabel.parentElement.textContent = texts.showStatistics;
        }
        
        // Update language section
        const languageTitle = settingsModal.querySelectorAll('.setting-group h4')[4];
        if (languageTitle) languageTitle.textContent = texts.language;
        
        const languageLabel = settingsModal.querySelector('#languageSelect');
        if (languageLabel && languageLabel.previousElementSibling) {
            languageLabel.previousElementSibling.textContent = texts.language + ':';
        }
        
        // Update language selection
        const languageSelect = settingsModal.querySelector('#languageSelect');
        if (languageSelect) {
            languageSelect.value = lang;
        }
    }

    getText(key) {
        const lang = this.settings.language;
        return this.translations[lang][key] || this.translations.en[key] || key;
    }
}

// Global error handler
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Show user-friendly error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = 'An error occurred. Please refresh the page.';
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
});

// Performance optimization: Debounce function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Initialize Casino App with error handling
document.addEventListener('DOMContentLoaded', () => {
    try {
        const app = new CasinoApp();
        console.log('Casino App initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Casino App:', error);
        // Show error message to user
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = 'Failed to load the casino. Please refresh the page.';
        errorDiv.style.position = 'fixed';
        errorDiv.style.top = '20px';
        errorDiv.style.left = '50%';
        errorDiv.style.transform = 'translateX(-50%)';
        errorDiv.style.zIndex = '10000';
        document.body.appendChild(errorDiv);
    }
}); 