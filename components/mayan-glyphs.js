import { translations } from '../locales/index.js';

class MayanGlyphs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.glyphs = Array.from({ length: 20 }, (_, i) => ({
            nameKey: `mayan-glyphs-glyph-${i + 1}`,
            img: `images/mayan-glyphs/glyph-${i + 1}.png`
        }));
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

    decipherGlyphs() {
        const resultDiv = this.shadowRoot.querySelector('#result');
        resultDiv.innerHTML = '';

        const shuffled = [...this.glyphs].sort(() => 0.5 - Math.random());
        const selectedGlyphs = shuffled.slice(0, 3);
        
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];

        selectedGlyphs.forEach((glyph, index) => {
            const card = document.createElement('div');
            card.classList.add('glyph-card');
            const glyphText = trans[glyph.nameKey] || "Translation not found";
            card.innerHTML = `
                <img src="${glyph.img}" alt="${glyphText}" class="glyph-image">
                <p>${glyphText}</p>
            `;
            resultDiv.appendChild(card);

            setTimeout(() => {
                card.classList.add('active');
            }, 100 * (index + 1));
        });
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang] || translations.en;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background-image: linear-gradient(to bottom, #FF4500, #FF8C00);
                    background-size: cover;
                    background-position: center;
                    font-family: 'Cinzel', serif;
                    color: #FFFFFF;
                    padding: 2rem;
                    border-radius: 15px;
                }
                 h2, p {
                    font-family: 'Cinzel', serif;
                    color: #FFFFFF;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
                }
                button {
                    background-color: #0b64bd;
                    color: white;
                    border: 1px solid white;
                    padding: 0.8rem 1.8rem;
                    border-radius: 8px;
                    font-family: 'Cinzel', serif;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    font-size: 1.1rem;
                    margin: 1.5rem 0;
                }
                button:hover {
                    background-color:#0b64bd;
                }
                #result {
                    margin-top: 2rem;
                    min-height: 150px;
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .glyph-card {
                    background: rgba(0, 0, 0, 0.4);
                    border: 1px solid #0b64bd;
                    border-radius: 10px;
                    padding: 1rem;
                    backdrop-filter: blur(3px);
                    transform: scale(0.9);
                    opacity: 0;
                    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
                    width: 120px;
                }
                .glyph-card.active {
                    transform: scale(1);
                    opacity: 1;
                }
                .glyph-image {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 0.5rem;
                }
                .glyph-card p {
                    font-size: 0.9rem;
                    color: #FFFFFF;
                    margin: 0;
                }
            </style>
            <div class="screen-content">
                <h2>${trans["mayan-glyphs-title"]}</h2>
                <p>${trans["mayan-glyphs-description"]}</p>
                <button id="decipher-button">${trans["mayan-glyphs-decipher-button"]}</button>
                <div id="result"></div>
            </div>
        `;

        this.shadowRoot.querySelector('#decipher-button').addEventListener('click', () => this.decipherGlyphs());
    }
}

customElements.define('mayan-glyphs', MayanGlyphs);
