import { translations } from '../locales/index.js';

class RunicDivination extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.runes = {
            Fehu: { nameKey: 'rune-Fehu-name', meaningKey: 'rune-Fehu-meaning' },
            Uruz: { nameKey: 'rune-Uruz-name', meaningKey: 'rune-Uruz-meaning' },
            Thurisaz: { nameKey: 'rune-Thurisaz-name', meaningKey: 'rune-Thurisaz-meaning' },
            Ansuz: { nameKey: 'rune-Ansuz-name', meaningKey: 'rune-Ansuz-meaning' },
            Raidho: { nameKey: 'rune-Raidho-name', meaningKey: 'rune-Raidho-meaning' },
            Kenaz: { nameKey: 'rune-Kenaz-name', meaningKey: 'rune-Kenaz-meaning' },
            Gebo: { nameKey: 'rune-Gebo-name', meaningKey: 'rune-Gebo-meaning' },
            Wunjo: { nameKey: 'rune-Wunjo-name', meaningKey: 'rune-Wunjo-meaning' },
            Hagalaz: { nameKey: 'rune-Hagalaz-name', meaningKey: 'rune-Hagalaz-meaning' },
            Nauthiz: { nameKey: 'rune-Nauthiz-name', meaningKey: 'rune-Nauthiz-meaning' },
            Isa: { nameKey: 'rune-Isa-name', meaningKey: 'rune-Isa-meaning' },
            Jera: { nameKey: 'rune-Jera-name', meaningKey: 'rune-Jera-meaning' },
            Eihwaz: { nameKey: 'rune-Eihwaz-name', meaningKey: 'rune-Eihwaz-meaning' },
            Perthro: { nameKey: 'rune-Perthro-name', meaningKey: 'rune-Perthro-meaning' },
            Algiz: { nameKey: 'rune-Algiz-name', meaningKey: 'rune-Algiz-meaning' },
            Sowilo: { nameKey: 'rune-Sowilo-name', meaningKey: 'rune-Sowilo-meaning' },
            Tiwaz: { nameKey: 'rune-Tiwaz-name', meaningKey: 'rune-Tiwaz-meaning' },
            Berkano: { nameKey: 'rune-Berkano-name', meaningKey: 'rune-Berkano-meaning' },
            Ehwaz: { nameKey: 'rune-Ehwaz-name', meaningKey: 'rune-Ehwaz-meaning' },
            Mannaz: { nameKey: 'rune-Mannaz-name', meaningKey: 'rune-Mannaz-meaning' },
            Laguz: { nameKey: 'rune-Laguz-name', meaningKey: 'rune-Laguz-meaning' },
            Ingwaz: { nameKey: 'rune-Ingwaz-name', meaningKey: 'rune-Ingwaz-meaning' },
            Othala: { nameKey: 'rune-Othala-name', meaningKey: 'rune-Othala-meaning' },
            Dagaz: { nameKey: 'rune-Dagaz-name', meaningKey: 'rune-Dagaz-meaning' },
            Ac: { nameKey: 'rune-Ac-name', meaningKey: 'rune-Ac-meaning' },
            Aesc: { nameKey: 'rune-Aesc-name', meaningKey: 'rune-Aesc-meaning' },
            Yr: { nameKey: 'rune-Yr-name', meaningKey: 'rune-Yr-meaning' },
            Ior: { nameKey: 'rune-Ior-name', meaningKey: 'rune-Ior-meaning' },
            Ear: { nameKey: 'rune-Ear-name', meaningKey: 'rune-Ear-meaning' },
            Gar: { nameKey: 'rune-Gar-name', meaningKey: 'rune-Gar-meaning' },
            Gwynn: { nameKey: 'rune-Gwynn-name', meaningKey: 'rune-Gwynn-meaning' },
            Hraefn: { nameKey: 'rune-Hraefn-name', meaningKey: 'rune-Hraefn-meaning' },
            Isg: { nameKey: 'rune-Isg-name', meaningKey: 'rune-Isg-meaning' },
            Lagu: { nameKey: 'rune-Lagu-name', meaningKey: 'rune-Lagu-meaning' },
            Manna: { nameKey: 'rune-Manna-name', meaningKey: 'rune-Manna-meaning' },
            Nyth: { nameKey: 'rune-Nyth-name', meaningKey: 'rune-Nyth-meaning' },
            Peorth: { nameKey: 'rune-Peorth-name', meaningKey: 'rune-Peorth-meaning' },
            Rad: { nameKey: 'rune-Rad-name', meaningKey: 'rune-Rad-meaning' },
            Sigel: { nameKey: 'rune-Sigel-name', meaningKey: 'rune-Sigel-meaning' },
            Tir: { nameKey: 'rune-Tir-name', meaningKey: 'rune-Tir-meaning' },
            Ur: { nameKey: 'rune-Ur-name', meaningKey: 'rune-Ur-meaning' },
            Wyn: { nameKey: 'rune-Wyn-name', meaningKey: 'rune-Wyn-meaning' },
            Geofu: { nameKey: 'rune-Geofu-name', meaningKey: 'rune-Geofu-meaning' },
            Haegl: { nameKey: 'rune-Haegl-name', meaningKey: 'rune-Haegl-meaning' },
            Nyd: { nameKey: 'rune-Nyd-name', meaningKey: 'rune-Nyd-meaning' },
            Is: { nameKey: 'rune-Is-name', meaningKey: 'rune-Is-meaning' },
            Ger: { nameKey: 'rune-Ger-name', meaningKey: 'rune-Ger-meaning' },
            Eoh: { nameKey: 'rune-Eoh-name', meaningKey: 'rune-Eoh-meaning' },
            Stan: { nameKey: 'rune-Stan-name', meaningKey: 'rune-Stan-meaning' },
            Cweorth: { nameKey: 'rune-Cweorth-name', meaningKey: 'rune-Cweorth-meaning' },
            Calc: { nameKey: 'rune-Calc-name', meaningKey: 'rune-Calc-meaning' },
            Cealc: { nameKey: 'rune-Cealc-name', meaningKey: 'rune-Cealc-meaning' }
        };
    }

    static get observedAttributes() {
        return ['language'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'language') {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    castRunes(count) {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];
        const resultDiv = this.shadowRoot.querySelector('#result');
        resultDiv.innerHTML = '';
        const runeKeys = Object.keys(this.runes);
        const selectedRunes = [];

        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * runeKeys.length);
            const runeKey = runeKeys[randomIndex];
            if (selectedRunes.includes(runeKey)) {
                i--;
                continue;
            }
            selectedRunes.push(runeKey);

            const rune = this.runes[runeKey];
            const card = document.createElement('div');
            card.classList.add('rune-card');
            card.innerHTML = `
                <div class="rune-symbol">${this.getRuneSymbol(runeKey)}</div>
                <h3>${trans[rune.nameKey]}</h3>
                <p>${trans[rune.meaningKey]}</p>
            `;
            resultDiv.appendChild(card);
        }
        
        setTimeout(() => {
            this.shadowRoot.querySelectorAll('.rune-card').forEach(card => {
                card.classList.add('active');
            });
        }, 100);
    }

    getRuneSymbol(runeKey) {
        const symbols = {
            Fehu: 'ᚠ', Uruz: 'ᚢ', Thurisaz: 'ᚦ', Ansuz: 'ᚨ', Raidho: 'ᚱ',
            Kenaz: 'ᚲ', Gebo: 'ᚷ', Wunjo: 'ᚹ', Hagalaz: 'ᚺ', Nauthiz: 'ᚾ',
            Isa: 'ᛁ', Jera: 'ᛃ', Eihwaz: 'ᛇ', Perthro: 'ᛈ', Algiz: 'ᛉ',
            Sowilo: 'ᛊ', Tiwaz: 'ᛏ', Berkano: 'ᛒ', Ehwaz: 'ᛖ', Mannaz: 'ᛗ',
            Laguz: 'ᛚ', Ingwaz: 'ᛜ', Othala: 'ᛟ', Dagaz: 'ᛞ',
            Ac: 'ᚪ', Aesc: 'ᚫ', Yr: 'ᛦ', Ior: 'ᛡ', Ear: 'ᛠ',
            Gar: 'ᚸ', Stan: 'ᛥ', Cweorth: 'ᛢ', Calc: 'ᛣ', Sigel: 'ᛋ',
            Gwynn: 'ᚹ', Hraefn: 'ᚼ', Isg: 'ᛁ', Lagu: 'ᛚ', Manna: 'ᛗ',
            Nyth: 'ᚾ', Peorth: 'ᛈ', Rad: 'ᚱ', Tir: 'ᛏ', Ur: 'ᚢ',
            Wyn: 'ᚹ', Geofu: 'ᚷ', Haegl: 'ᚺ', Nyd: 'ᚾ', Is: 'ᛁ',
            Ger: 'ᛃ', Eoh: 'ᛇ', Cealc: 'ᛣ'
        };
        return symbols[runeKey] || '?';
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background-image: linear-gradient(to bottom, #8B4513, #5C4033);
                    background-size: cover;
                    background-position: center;
                    font-family: 'Cinzel', serif;
                    color: white;
                    padding: 1rem;
                    border-radius: 15px;
                }
                h2 {
                    font-family: 'Cinzel', serif;
                    color: #87CEEB; /* SkyBlue */
                    text-shadow: 0 0 10px #00008B; /* DarkBlue */
                }
                p {
                    font-family: 'Cinzel', serif;
                    color: #e0e0e0;
                }
                .button-group {
                    margin: 1.5rem 0;
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                button {
                    background-color: #5C4033; /* Dark Wood */
                    color: #87CEEB; /* SkyBlue */
                    border: 1px solid #4682B4; /* SteelBlue */
                    border-radius: 8px;
                    padding: 0.8rem 1.2rem;
                    font-size: 0.9rem;
                    font-family: 'Cinzel', serif;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                }
                button:hover {
                    background-color: #4682B4; /* SteelBlue */
                    color: white;
                    transform: translateY(-2px);
                }
                #result {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                    gap: 1rem;
                    margin-top: 2rem;
                }
                .rune-card {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(70, 130, 180, 0.6); /* SteelBlue with transparency */
                    border-radius: 10px;
                    padding: 1rem;
                    backdrop-filter: blur(5px);
                    transform: translateY(20px);
                    opacity: 0;
                    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
                }
                .rune-card.active {
                    transform: translateY(0);
                    opacity: 1;
                }
                .rune-symbol {
                    font-size: 2rem;
                    color: #87CEEB; /* SkyBlue */
                    text-shadow: 0 0 10px #0000CD; /* MediumBlue */
                    margin-bottom: 0.5rem;
                }
                h3 {
                    margin: 0.5rem 0 0.2rem 0;
                    font-size: 0.9rem;
                    font-weight: normal;
                    color: #ecf0f1;
                }
                .rune-card p {
                    font-size: 0.8rem;
                    color: #bdc3c7;
                    line-height: 1.4;
                }
                 @media (min-width: 400px) {
                    #result {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            </style>
            <div class="screen-content">
                <h2>${trans["runic-divination-title"]}</h2>
                <p>${trans["runic-divination-description"]}</p>
                <div class="button-group">
                    <button id="cast-1">${trans["cast-1-rune-button"]}</button>
                    <button id="cast-3">${trans["cast-3-runes-button"]}</button>
                    <button id="cast-9">${trans["cast-9-runes-button"]}</button>
                </div>
                <div id="result"></div>
            </div>
        `;

        this.shadowRoot.querySelector('#cast-1').addEventListener('click', () => this.castRunes(1));
        this.shadowRoot.querySelector('#cast-3').addEventListener('click', () => this.castRunes(3));
        this.shadowRoot.querySelector('#cast-9').addEventListener('click', () => this.castRunes(9));
    }
}

customElements.define('runic-divination', RunicDivination);