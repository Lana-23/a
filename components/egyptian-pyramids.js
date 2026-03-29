import { translations } from '../locales/index.js';

class EgyptianPyramids extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.symbols = [];
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

    revealSymbols() {
        const resultDiv = this.shadowRoot.querySelector('#result');
        const revealButton = this.shadowRoot.querySelector('#reveal-symbols');
        
        if (revealButton.disabled) return;

        revealButton.disabled = true;
        resultDiv.innerHTML = '';

        // Animate pyramids
        this.shadowRoot.querySelectorAll('.pyramid').forEach(p => p.classList.add('active'));

        setTimeout(() => {
            const lang = this.getAttribute('language') || 'en';
            const trans = translations[lang];
            const selectedSymbols = [];

            for (let i = 0; i < 3; i++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * this.symbols.length);
                } while (selectedSymbols.includes(this.symbols[randomIndex]));
                
                const symbolKey = this.symbols[randomIndex];
                selectedSymbols.push(symbolKey);

                const card = document.createElement('div');
                card.classList.add('symbol-card');
                card.innerHTML = `
                    <h3>${trans[symbolKey]}</h3>
                `;
                resultDiv.appendChild(card);
            }
            
            setTimeout(() => {
                 this.shadowRoot.querySelectorAll('.symbol-card').forEach(card => card.classList.add('active'));
            }, 100);

            revealButton.disabled = false;
            this.shadowRoot.querySelectorAll('.pyramid').forEach(p => p.classList.remove('active'));
        }, 2000); // Wait for pyramid animation to complete
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];

        // Dynamically load all 'egyptian-pyramids-symbol-' keys
        this.symbols = Object.keys(trans)
            .filter(key => key.startsWith('egyptian-pyramids-symbol-'));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://storage.googleapis.com/static.aifire.co/ad-egyptian-bg.webp');
                    background-size: cover;
                    background-position: center;
                    font-family: 'Cinzel', serif;
                    color: #fff7d9;
                    padding: 2rem;
                    border-radius: 15px;
                    position: relative;
                    overflow: hidden;
                }
                h2, p {
                   font-family: 'Cinzel', serif;
                   color: #fff7d9;
                   text-shadow: 0 1px 3px rgba(0,0,0,0.5);
                }
                .pyramid-container {
                    position: relative;
                    height: 150px;
                    margin: 1.5rem 0;
                }
                .pyramid {
                    position: absolute;
                    bottom: 0;
                    border-bottom: 100px solid;
                    border-left: 50px solid transparent;
                    border-right: 50px solid transparent;
                    transition: transform 1.5s ease-in-out, border-color 1.5s ease;
                }
                .pyramid1 { 
                    left: 50%; 
                    transform: translateX(-50%) scale(1.5);
                    border-bottom-color: #f1c40f;
                    z-index: 3;
                }
                .pyramid2 { 
                    left: 40%; 
                    transform: translateX(-50%) scale(1.2);
                    border-bottom-color: #d35400;
                    z-index: 2;
                }
                .pyramid3 { 
                    left: 60%;
                    transform: translateX(-50%) scale(1.2);
                    border-bottom-color: #c0392b;
                    z-index: 2;
                }
                .pyramid.active {
                    transform: translateX(-50%) scale(2.5) translateY(-30px);
                    border-bottom-color: #fff;
                }

                #reveal-symbols {
                    background-color: transparent;
                    color: #f1c40f;
                    border: 2px solid #f1c40f;
                    border-radius: 8px;
                    padding: 0.8rem 1.5rem;
                    font-family: 'Cinzel', serif;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                #reveal-symbols:hover:not(:disabled) {
                    background-color: #f1c40f;
                    color: #2c3e50;
                    box-shadow: 0 0 15px #f1c40f;
                }
                #reveal-symbols:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }
                #result {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: 2rem;
                }
                .symbol-card {
                    background: rgba(0,0,0,0.4);
                    padding: 1rem;
                    border-radius: 5px;
                    border-top: 2px solid #f1c40f;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.5s ease-out;
                    min-width: 80px;
                }
                .symbol-card.active {
                    opacity: 1;
                    transform: translateY(0);
                }
                 .symbol-card h3 {
                    margin: 0;
                    font-size: 0.9rem;
                 }

            </style>
            <div class="screen-content">
                <h2>${trans["egyptian-pyramids-title"]}</h2>
                <p>${trans["egyptian-pyramids-description"]}</p>
                <div class="pyramid-container">
                    <div class="pyramid pyramid2"></div>
                    <div class="pyramid pyramid3"></div>
                    <div class="pyramid pyramid1"></div>
                </div>
                <button id="reveal-symbols">${trans["egyptian-pyramids-reveal-button"]}</button>
                <div id="result"></div>
            </div>
        `;

        this.shadowRoot.querySelector('#reveal-symbols').addEventListener('click', () => this.revealSymbols());
    }
}

customElements.define('egyptian-pyramids', EgyptianPyramids);
