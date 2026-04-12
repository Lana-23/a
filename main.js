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


// --- Main Application Logic ---

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize the platform
    vkBridge.send('VKWebAppInit');

    const mainScreen = document.getElementById('main-screen');
    const divinationScreen = document.getElementById('divination-screen');
    const manualScreen = document.getElementById('manual-screen');
    const backButton = document.getElementById('back-button');
    const manualLink = document.getElementById('manual-link');
    const manualBackButton = document.getElementById('manual-back-button');
    const manualContent = document.getElementById('manual-content');

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

    if (manualLink) {
        manualLink.addEventListener('click', async (e) => {
            e.preventDefault();
            triggerHapticFeedback('light');
            await loadManualContent();
            showScreen('manual-screen');
        });
    }

    if (manualBackButton) {
        manualBackButton.addEventListener('click', () => {
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
/*
    if (platform === 'vk') {
        const params = new URLSearchParams(window.location.search);
        const vkLang = params.get('vk_language');
        if (vkLang && translations[vkLang]) return vkLang;
    }

    if (platform === 'telegram') {
        const userLanguage = window.Telegram.WebApp.initDataUnsafe.user?.language_code || 'en';
        if (translations[userLanguage]) return userLanguage;
    }
*/
    return 'en'; // Default language
}

function setLanguage(lang, updateMainUI = true) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    if (updateMainUI) {
        updateUI(lang);
    }
    setLanguageOnComponents(lang);
    loadManualContent(); // Reload manual content on language change
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

async function loadManualContent() {
    const manualContentEl = document.getElementById('manual-content');
    if (!manualContentEl) return;

    const fileName = currentLanguage === 'ru' ? 'MANUAL_RU.md' : 'MANUAL_EN.md';

    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            manualContentEl.innerHTML = `<p>Error loading manual. Please try again later.</p>`;
            return;
        }
        const markdown = await response.text();
        // Super simple markdown to HTML conversion
        let html = markdown
            .split('\n').map(line => {
                if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
                if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
                if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
                if (line.trim() === '') return '<br>';
                return `<p>${line}</p>`;
            }).join('');
        manualContentEl.innerHTML = html;
    } catch (error) {
        console.error('Error fetching or parsing manual:', error);
        manualContentEl.innerHTML = `<p>Error loading manual. Please try again later.</p>`;
    }
}
