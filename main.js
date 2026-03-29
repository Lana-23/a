import { en } from './locales/en.js';
import { ru } from './locales/ru.js';

const translations = { en, ru };
let currentLanguage;
let platform = 'web'; // Default platform

// All divination components used in the app
const allDivinationComponents = [
    'i-ching', 'greco-roman-oracles', 'runic-divination', 
    'slavic-kostromancy', 'druid-divination', 'thai-figurines', 
    'korean-pendulum', 'caribbean-dice', 
    'fortune-cookie', 'crystal-ball', 
    'mayan-glyphs', 'egyptian-pyramids' 
];

// --- Platform Initialization and Mocks ---

// Check for VK Mini Apps environment
if (window.location.search.includes('vk_user_id')) {
    platform = 'vk';
} 
// Check for Telegram Web App environment
else if (typeof window.Telegram !== 'undefined' && window.Telegram.WebApp.initData) {
    platform = 'telegram';
}

// Mock Telegram WebApp for development in a standard browser
if (platform === 'web' && typeof window.Telegram === 'undefined') {
    window.Telegram = {
        WebApp: {
            ready: () => console.log('Telegram WebApp mock: ready()'),
            HapticFeedback: {
                impactOccurred: (style) => console.log(`Telegram WebApp mock: HapticFeedback.impactOccurred(${style})`)
            },
            initDataUnsafe: { user: { language_code: 'en' } }
        }
    };
}

// Mock VK Bridge for development in a standard browser
if (platform === 'web' && typeof vkBridge === 'undefined') {
    window.vkBridge = {
        send: (method, params) => {
            console.log(`vkBridge mock: send('${method}', ${JSON.stringify(params)})`);
            if (method === 'VKWebAppInit') return Promise.resolve({});
            return Promise.resolve({});
        },
        subscribe: (event, callback) => console.log(`vkBridge mock: subscribe('${event}')`)
    };
}

// --- Main Application Logic ---

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize the platform
    if (platform === 'telegram') {
        window.Telegram.WebApp.ready();
    } else if (platform === 'vk') {
        vkBridge.send('VKWebAppInit');
    }

    const mainScreen = document.getElementById('main-screen');
    const divinationScreen = document.getElementById('divination-screen');
    const backButton = document.getElementById('back-button');

    // Language initialization
    currentLanguage = await initializeLanguage();
    updateUI(currentLanguage);

    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', (event) => {
            setLanguage(event.target.value, true);
        });
    }

    // Wait for all custom elements to be defined before processing them
    const allDefined = allDivinationComponents.map(tag => customElements.whenDefined(tag));
    Promise.all(allDefined).then(() => {
        setLanguageOnComponents(currentLanguage);
        updateUI(currentLanguage);
    });

    // --- Navigation ---

    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.nav-btn');

    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        if (screenId === 'main-screen') {
            divinationScreen.className = 'screen';
        }
    }

    function switchTab(targetId) {
        divinationScreen.className = 'screen';
        divinationScreen.classList.add(`divination-screen-${targetId}`);
        tabs.forEach(tab => tab.classList.toggle('active', tab.id === targetId));
        showScreen('divination-screen');
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            triggerHapticFeedback('light');
            switchTab(btn.dataset.target);
        });
    });

    if (backButton) {
        backButton.addEventListener('click', () => {
            triggerHapticFeedback('light');
            showScreen('main-screen');
        });
    }
    
    showScreen('main-screen');
});

// --- Helper Functions ---

async function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) return savedLanguage;

    if (platform === 'vk') {
        const params = new URLSearchParams(window.location.search);
        const vkLang = params.get('vk_language');
        if (vkLang && translations[vkLang]) return vkLang;
    }

    if (platform === 'telegram') {
        const userLanguage = window.Telegram.WebApp.initDataUnsafe.user?.language_code || 'en';
        if (translations[userLanguage]) return userLanguage;
    }

    return 'en'; // Default language
}

function setLanguage(lang, updateMainUI = true) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    if (updateMainUI) {
        updateUI(lang);
    }
    setLanguageOnComponents(lang);
}

function setLanguageOnComponents(lang) {
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

function triggerHapticFeedback(style = 'light') {
    if (platform === 'telegram' && window.Telegram.WebApp.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
    } else if (platform === 'vk') {
        const vkStyle = style === 'light' ? 'light' : (style === 'medium' ? 'medium' : 'heavy');
        vkBridge.send('VKWebAppTapticImpactOccurred', { style: vkStyle });
    }
}
