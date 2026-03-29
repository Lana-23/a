import { ru } from '../locales/ru.js';
import { en } from '../locales/en.js';

class DigitalFortuneteller extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.translations = { en, ru };
        this.fortunes = Array.from({ length: 50 }, (_, i) => `digital-fortuneteller-fortune-${i + 1}`);
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

    revealFortune() {
        const resultDiv = this.shadowRoot.querySelector('#result');
        const revealButton = this.shadowRoot.querySelector('#reveal-fortune');
        const scanline = this.shadowRoot.querySelector('.scanline');

        if (revealButton.disabled) return;

        revealButton.disabled = true;
        resultDiv.innerHTML = '';
        scanline.style.display = 'block';

        let progress = 0;
        const progressBar = this.shadowRoot.querySelector('.progress-bar-inner');
        const progressInterval = setInterval(() => {
            progress += 1;
            progressBar.style.width = `${progress}%`;
            if (progress >= 100) {
                clearInterval(progressInterval);
                scanline.style.display = 'none';

                const randomIndex = Math.floor(Math.random() * this.fortunes.length);
                const fortuneKey = this.fortunes[randomIndex];
                const lang = this.getAttribute('language') || 'en';
                const trans = this.translations[lang];

                resultDiv.innerHTML = `
                    <div class="fortune-card active">
                        <p class="glitch" data-text="${trans[fortuneKey] || trans['digital-fortuneteller-fortune-1']}">
                            ${trans[fortuneKey] || trans['digital-fortuneteller-fortune-1']}
                        </p>
                    </div>
                `;
                revealButton.disabled = false;
            }
        }, 30);
    }


    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = this.translations[lang];

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://storage.googleapis.com/static.aifire.co/ad-digital-bg.webp');
                    background-size: cover;
                    background-position: center;
                    font-family: 'VT323', monospace;
                    color: #00ff00;
                    padding: 2rem;
                    border: 2px solid #00ff00;
                    border-radius: 15px;
                    box-shadow: 0 0 20px #00ff00, inset 0 0 15px rgba(0,255,0,0.5);
                    text-shadow: 0 0 5px #00ff00;
                }
                 h2, p {
                    font-family: 'VT323', monospace;
                 }
                #reveal-fortune {
                    background-color: #00ff00;
                    color: #1a1a1a;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    font-size: 1.2rem;
                    font-family: 'VT323', monospace;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 0 10px #00ff00;
                }
                #reveal-fortune:hover:not(:disabled) {
                    background-color: #fff;
                    color: #00ff00;
                }
                 #reveal-fortune:disabled {
                    cursor: not-allowed;
                    background-color: #555;
                    color: #222;
                }
                .progress-bar {
                    width: 80%;
                    height: 20px;
                    background-color: #1a1a1a;
                    border: 1px solid #00ff00;
                    margin: 1.5rem auto;
                }
                .progress-bar-inner {
                    width: 0%;
                    height: 100%;
                    background-color: #00ff00;
                    transition: width 0.1s linear;
                }
                .fortune-card {
                    margin-top: 1.5rem;
                }
                .glitch {
                    font-size: 1.5rem;
                    position: relative;
                }
                .glitch:before, .glitch:after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #1a1a1a;
                    overflow: hidden;
                }
                .glitch:before {
                    left: 2px;
                    text-shadow: -1px 0 red;
                    animation: glitch-anim-1 2s infinite linear alternate-reverse;
                }
                .glitch:after {
                    left: -2px;
                    text-shadow: -1px 0 blue;
                    animation: glitch-anim-2 2s infinite linear alternate-reverse;
                }
                @keyframes glitch-anim-1 {
                    /* ... full keyframes from previous example ... */
                }
                @keyframes glitch-anim-2 {
                    /* ... full keyframes from previous example ... */
                }
                 .scanline {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #00ff00;
                    box-shadow: 0 0 10px #00ff00;
                    animation: scan 2s linear infinite;
                }

                @keyframes scan {
                    from { top: 0; }
                    to { top: 100%; }
                }

            </style>
            <div class="screen-content">
                 <div class="scanline"></div>
                <h2>${trans["digital-fortuneteller-title"]}</h2>
                <p>${trans["digital-fortuneteller-description"]}</p>
                <button id="reveal-fortune">${trans["digital-fortuneteller-reveal-button"]}</button>
                <div class="progress-bar">
                    <div class="progress-bar-inner"></div>
                </div>
                <div id="result"></div>
            </div>
        `;

        this.shadowRoot.querySelector('#reveal-fortune').addEventListener('click', () => this.revealFortune());
    }
}

customElements.define('digital-fortuneteller', DigitalFortuneteller);
