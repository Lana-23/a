import { translations } from '../locales/index.js';

class FortuneCookie extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.fortunes = Array.from({ length: 100 }, (_, i) => `fortune-cookie-fortune-${i + 1}`);
    }

    static get observedAttributes() {
        return ['language'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'language' && oldValue !== null) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    crackCookie() {
        const resultDiv = this.shadowRoot.querySelector('#result');
        const crackButton = this.shadowRoot.querySelector('#crack-cookie');
        const leftHalf = this.shadowRoot.querySelector('#cookie-left');
        const rightHalf = this.shadowRoot.querySelector('#cookie-right');
        const cookieContainer = this.shadowRoot.querySelector('#cookie-container');

        if (crackButton.disabled) return;

        crackButton.disabled = true;
        crackButton.style.display = 'none';
        cookieContainer.classList.add('cracked-parent');

        leftHalf.classList.add('cracked');
        rightHalf.classList.add('cracked');

        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang] || translations['en'];
        const randomIndex = Math.floor(Math.random() * this.fortunes.length);
        const fortuneKey = this.fortunes[randomIndex];

        resultDiv.innerHTML = `
            <div class="fortune-paper">
                <p>${trans[fortuneKey] || trans['fortune-cookie-fortune-1']}</p>
            </div>
        `;
        const fortunePaper = this.shadowRoot.querySelector('.fortune-paper');

        setTimeout(() => {
            fortunePaper.classList.add('active');
            const resetButton = document.createElement('button');
            resetButton.textContent = trans['fortune-cookie-reset-button'];
            resetButton.id = 'reset-button';
            resetButton.addEventListener('click', () => this.render());
            this.shadowRoot.querySelector('.screen-content').appendChild(resetButton);
        }, 800);
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang] || translations['en'];
        console.log('Translations:', JSON.stringify(translations, null, 2));
        console.log('Current translation:', JSON.stringify(trans, null, 2));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://storage.googleapis.com/static.aifire.co/ad-fortune-cookie-bg.webp');
                    background-size: cover;
                    background-position: center;
                    font-family: 'Merriweather', serif;
                    color: #333;
                    padding: 2rem;
                    border-radius: 15px;
                    overflow: hidden;
                }
                .screen-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                h2, p {
                    font-family: 'Cinzel', serif;
                    color: white;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                }
                #cookie-container {
                    cursor: pointer;
                    width: 250px;
                    height: 220px;
                    margin: 1rem auto;
                    position: relative;
                    perspective: 1000px;
                }
                .cookie-half {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: url('images/fortune-cookie/Fortune_cookie_sm.png');
                    background-size: 250px 220px;
                    background-repeat: no-repeat;
                    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                }
                #cookie-left {
                    background-position: 0 0;
              /*      clip-path: polygon(0 0, 100% 0, 100% 10%, 0 90%); */
                     clip-path: polygon(0 0, 35% 0%, 90% 100%, 0 100%);
                }
                #cookie-right {
                    background-position: 0 0;
           /*         clip-path: polygon(0 100%, 100% 100%, 100% 10%, 0 90%); */
                     clip-path: polygon(35% 0%, 100% 0%, 100% 100%, 90% 100%);
                }
                #cookie-left.cracked {
                    transform: translate(-50px, -35px) rotate(-18deg);
                }
                 #cookie-right.cracked {
                    transform: translate(50px, 35px) rotate(18deg);
                }

                #cookie-container:hover:not(.cracked-parent) #cookie-left {
                    transform: translate(-3px, -2px) rotate(-1deg);
                }
                #cookie-container:hover:not(.cracked-parent) #cookie-right {
                     transform: translate(3px, 2px) rotate(1deg);
                }

                #crack-cookie, #reset-button {
                    background-color: #FFD700;
                    color: #A0522D;
                    border: none;
                    padding: 0.8rem 1.8rem;
                    border-radius: 8px;
                    font-family: 'Cinzel', serif;
                    cursor: pointer;
                    transition: background-color 0.2s, transform 0.2s;
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-top: 1rem;
                }
                #crack-cookie:hover:not(:disabled), #reset-button:hover {
                    background-color: #f1c40f;
                    transform: scale(1.05);
                }
                #crack-cookie:disabled { 
                    cursor: not-allowed; 
                    background-color: #999; 
                    display: none; 
                }
                
                #result {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    z-index: 10;
                }

                .fortune-paper {
                    background-color: #fff;
                    color: #000;
                    padding: 0.5rem;
                    border: 1px solid #000;
                    border-radius: 3px;
                    max-width: 160px;
                    margin: 0 auto;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.6);
                    font-family: 'Helvetica', sans-serif;
                    line-height: 1.3;
                    font-weight: bold;
                    transform: scale(0);
                    opacity: 0;
                    transition: all 0.5s 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                    position: relative;
                    z-index: 5;
                }
                .fortune-paper p {
                    color: #000;
                    text-shadow: none;
                    margin: 0;
                    font-size: 0.8rem;
                }
                 .fortune-paper.active {
                    transform: scale(1);
                    opacity: 1;
                 }
            </style>
            <div class="screen-content">
                <h2 data-i18n="fortune-cookie-title">${trans["fortune-cookie-title"]}</h2>
                <p data-i18n="fortune-cookie-description">${trans["fortune-cookie-description"]}</p>
                <div id="cookie-container" title="Crack the cookie!">
                     <div id="result"></div>
                    <div id="cookie-left" class="cookie-half"></div>
                    <div id="cookie-right" class="cookie-half"></div>
                </div>
                <button id="crack-cookie" data-i18n="fortune-cookie-crack-button">${trans["fortune-cookie-crack-button"]}</button>
            </div>
        `;

        const container = this.shadowRoot.querySelector('#cookie-container');
        const crackButton = this.shadowRoot.querySelector('#crack-cookie');

        if (container && crackButton) {
            const crackFunction = () => this.crackCookie();
            crackButton.addEventListener('click', crackFunction);
            container.addEventListener('click', crackFunction);
        } else {
            console.error('FortuneCookie component could not find its interactive elements.');
        }
    }
}

customElements.define('fortune-cookie', FortuneCookie);
