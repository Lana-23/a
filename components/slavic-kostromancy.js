import { translations } from '../locales/index.js';

class SlavicKostromancy extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.stones = [
            { name: 'Key', nameKey: 'stone-Key-name', symbol: '🔑', meaning: 'stone-Key-meaning' },
            { name: 'Crossroads', nameKey: 'stone-Crossroads-name', symbol: '↔️', meaning: 'stone-Crossroads-meaning' },
            { name: 'Ring', nameKey: 'stone-Ring-name', symbol: '💍', meaning: 'stone-Ring-meaning' },
            { name: 'Sun', nameKey: 'stone-Sun-name', symbol: '☀️', meaning: 'stone-Sun-meaning' },
            { name: 'Moon', nameKey: 'stone-Moon-name', symbol: '🌙', meaning: 'stone-Moon-meaning' },
            { name: 'Bird', nameKey: 'stone-Bird-name', symbol: '🐦', meaning: 'stone-Bird-meaning' },
            { name: 'Wave', nameKey: 'stone-Wave-name', symbol: '🌊', meaning: 'stone-Wave-meaning' },
            { name: 'Anchor', nameKey: 'stone-Anchor-name', symbol: '⚓', meaning: 'stone-Anchor-meaning' },
            { name: 'Heart', nameKey: 'stone-Heart-name', symbol: '❤️', meaning: 'stone-Heart-meaning' },
            { name: 'Tree', nameKey: 'stone-Tree-name', symbol: '🌳', meaning: 'stone-Tree-meaning' },
            { name: 'Star', nameKey: 'stone-Star-name', symbol: '⭐', meaning: 'stone-Star-meaning' },
            { name: 'Boat', nameKey: 'stone-Boat-name', symbol: '⛵', meaning: 'stone-Boat-meaning' },
            { name: 'Serpent', nameKey: 'stone-Serpent-name', symbol: '🐍', meaning: 'stone-Serpent-meaning' },
            { name: 'Scythe', nameKey: 'stone-Scythe-name', symbol: '🔪', meaning: 'stone-Scythe-meaning' },
            { name: 'Fish', nameKey: 'stone-Fish-name', symbol: '🐟', meaning: 'stone-Fish-meaning' },
            { name: 'Feather', nameKey: 'stone-Feather-name', symbol: '🪶', meaning: 'stone-Feather-meaning' },
            { name: 'Eye', nameKey: 'stone-Eye-name', symbol: '👁️', meaning: 'stone-Eye-meaning' },
            { name: 'Wolf', nameKey: 'stone-Wolf-name', symbol: '🐺', meaning: 'stone-Wolf-meaning' },
            { name: 'Bear', nameKey: 'stone-Bear-name', symbol: '🐻', meaning: 'stone-Bear-meaning' },
            { name: 'Horse', nameKey: 'stone-Horse-name', symbol: '🐴', meaning: 'stone-Horse-meaning' },
            { name: 'Falcon', nameKey: 'stone-Falcon-name', symbol: '🦅', meaning: 'stone-Falcon-meaning' }
        ];
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

    castStones() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];
        const resultsContainer = this.shadowRoot.querySelector('#results');
        resultsContainer.innerHTML = '';

        let cast = [];
        while (cast.length < 3) {
            const randomStone = this.stones[Math.floor(Math.random() * this.stones.length)];
            if (!cast.find(stone => stone.name === randomStone.name)) {
                cast.push(randomStone);
            }
        }

        cast.forEach((stone, index) => {
            const stoneEl = document.createElement('div');
            stoneEl.classList.add('stone');
            
            const randomRotate = Math.random() * 20 - 10;
            stoneEl.style.setProperty('--random-rotate', `${randomRotate}deg`);

            stoneEl.innerHTML = `
                <div class="stone-symbol">${stone.symbol}</div>
                <h3>${trans[stone.nameKey] || stone.name}</h3>
                <p>${trans[stone.meaning]}</p>
            `;
            resultsContainer.appendChild(stoneEl);

            setTimeout(() => {
                stoneEl.classList.add('cast');
            }, 150 * (index + 1));
        });
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang] || translations['en'];
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background-image: linear-gradient(to bottom, #006400, #8B4513);
                    padding: 2rem;
                    border-radius: 15px;
                }
                h2, p {
                    font-family: 'Cinzel', serif;
                    color: #FFD700; /* Gold */
                    text-shadow: 1px 1px 2px #000;
                }
                #cast-stones {
                    font-family: 'Cinzel', serif;
                    background: #8B4513; /* Brown */
                    color: #FFD700; /* Gold */
                    border: 2px solid #DAA520; /* Goldenrod */
                    border-radius: 10px;
                    padding: 15px 30px;
                    font-size: 1.2rem;
                    cursor: pointer;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.1);
                    transition: all 0.2s ease;
                }
                #cast-stones:hover {
                     background: #A0522D; /* Lighter Brown */
                     transform: translateY(-2px);
                     box-shadow: 0 7px 20px rgba(0,0,0,0.5), 0 0 12px rgba(255, 210, 160, 0.5), inset 0 2px 3px rgba(255,255,255,0.1);
                }
                #results {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-top: 2.5rem;
                    perspective: 1000px;
                }
                .stone {
                    background: linear-gradient(145deg, #4a4a4a, #2c2c2c);
                    border: 2px solid #DAA520; /* Goldenrod */
                    border-radius: 50%;
                    width: 110px;
                    height: 110px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.6), inset 0 3px 5px rgba(0,0,0,0.4);
                    padding: 0.5rem;
                    text-align: center;
                    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease;
                    transform: scale(0) rotate(var(--random-rotate, 0deg));
                    opacity: 0;
                }
                .stone.cast {
                    transform: scale(1) rotate(var(--random-rotate, 0deg));
                    opacity: 1;
                }
                .stone-symbol {
                    font-size: 2.5rem;
                    line-height: 1;
                    filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.7));
                }
                h3 {
                    margin: 0.5rem 0 0.2rem;
                    color: #FFD700; /* Gold */
                    font-family: 'Cinzel', serif;
                    font-size: 0.8rem;
                    font-weight: bold;
                }
                 p {
                    font-family: 'Merriweather', serif;
                    font-size: 0.7rem;
                    color: #F0E68C; /* Khaki */
                    line-height: 1.3;
                    margin: 0;
                }
            </style>
            <div>
                <h2>${trans['slavic-kostromancy-title']}</h2>
                <p>${trans['slavic-kostromancy-description']}</p>
                <div>
                    <button id="cast-stones">${trans['cast-stones-button']}</button>
                </div>
                <div id="results"></div>
            </div>
        `;
        this.shadowRoot.querySelector('#cast-stones').addEventListener('click', () => this.castStones());
    }
}

customElements.define('slavic-kostromancy', SlavicKostromancy);