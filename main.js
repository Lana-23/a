import { en } from './locales/en.js';
import { ru } from './locales/ru.js';

const translations = { en, ru };
let currentLanguage;

// All divination components used in the app
const allDivinationComponents = [
    'i-ching', 'greco-roman-oracles', 'runic-divination', 
    'slavic-kostromancy', 'druid-divination', 'thai-figurines', 
    'korean-pendulum', 'caribbean-dice', 
    'fortune-cookie', 'crystal-ball', 
    'mayan-glyphs', 'egyptian-pyramids' 
];

document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const mainScreen = document.getElementById('main-screen');
    const divinationScreen = document.getElementById('divination-screen');
    const backButton = document.getElementById('back-button');

    // Language initialization
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else {
        const userLanguage = tg.initDataUnsafe.user?.language_code || 'en';
        currentLanguage = translations[userLanguage] ? userLanguage : 'en';
    }

    const languageSelect = document.getElementById('language-select');
    languageSelect.value = currentLanguage;
    updateUI(currentLanguage); // Update main UI texts immediately

    // Wait for all custom elements to be defined before setting their language
    const allDefined = allDivinationComponents.map(tag => customElements.whenDefined(tag));

    Promise.all(allDefined).then(() => {
        setLanguage(currentLanguage, false); // Set language on components without re-updating main UI
    });

    languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value, true);
    });

    // Screen and tab navigation
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.nav-btn');

    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        
        // When returning to the main screen, remove any divination-specific background
        if (screenId === 'main-screen') {
            divinationScreen.className = 'screen'; // Reset classes
        }
    }

    function switchTab(targetId) {
        // Clear existing background classes
        divinationScreen.className = 'screen';
        // Add the new background class
        divinationScreen.classList.add(`divination-screen-${targetId}`);

        tabs.forEach(tab => {
            tab.classList.toggle('active', tab.id === targetId);
        });
        showScreen('divination-screen');
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (tg.HapticFeedback) {
                tg.HapticFeedback.impactOccurred('light');
            }
            switchTab(btn.dataset.target);
        });
    });

    if (backButton) {
        backButton.addEventListener('click', () => {
            if (window.Telegram.WebApp.HapticFeedback) {
                window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
            }
            showScreen('main-screen');
        });
    }
    
    // Initial setup
    showScreen('main-screen');
});

function setLanguage(lang, updateMainUI = true) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    if (updateMainUI) {
        updateUI(lang);
    }
    
    // Update the language attribute on all custom elements
    const componentSelector = allDivinationComponents.join(', ');
    document.querySelectorAll(componentSelector).forEach(el => {
        if (customElements.get(el.tagName.toLowerCase())) {
            el.setAttribute('language', lang);
        }
    });
}

function updateUI(lang) {
    const trans = translations[lang];
    if (!trans) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (trans[key]) {
            el.textContent = trans[key];
        }
    });
}