import { translations } from '../locales/index.js';

class IChing extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.hexagrams = [
            { number: 1, name: 'i-ching-1-name', description: 'i-ching-1-description', lines: [1, 1, 1, 1, 1, 1] },
            { number: 2, name: 'i-ching-2-name', description: 'i-ching-2-description', lines: [0, 0, 0, 0, 0, 0] },
            { number: 3, name: 'i-ching-3-name', description: 'i-ching-3-description', lines: [0, 1, 0, 0, 0, 1] },
            { number: 4, name: 'i-ching-4-name', description: 'i-ching-4-description', lines: [1, 0, 0, 0, 1, 0] },
            { number: 5, name: 'i-ching-5-name', description: 'i-ching-5-description', lines: [0, 1, 0, 1, 1, 1] },
            { number: 6, name: 'i-ching-6-name', description: 'i-ching-6-description', lines: [1, 1, 1, 0, 1, 0] },
            { number: 7, name: 'i-ching-7-name', description: 'i-ching-7-description', lines: [0, 0, 0, 0, 1, 0] },
            { number: 8, name: 'i-ching-8-name', description: 'i-ching-8-description', lines: [0, 1, 0, 0, 0, 0] },
            { number: 9, name: 'i-ching-9-name', description: 'i-ching-9-description', lines: [1, 1, 0, 1, 1, 1] },
            { number: 10, name: 'i-ching-10-name', description: 'i-ching-10-description', lines: [1, 1, 1, 0, 1, 1] },
            { number: 11, name: 'i-ching-11-name', description: 'i-ching-11-description', lines: [0, 0, 0, 1, 1, 1] },
            { number: 12, name: 'i-ching-12-name', description: 'i-ching-12-description', lines: [1, 1, 1, 0, 0, 0] },
            { number: 13, name: 'i-ching-13-name', description: 'i-ching-13-description', lines: [1, 1, 1, 0, 1, 1] },
            { number: 14, name: 'i-ching-14-name', description: 'i-ching-14-description', lines: [1, 0, 1, 1, 1, 1] },
            { number: 15, name: 'i-ching-15-name', description: 'i-ching-15-description', lines: [0, 0, 0, 1, 0, 0] },
            { number: 16, name: 'i-ching-16-name', description: 'i-ching-16-description', lines: [0, 0, 1, 0, 0, 0] },
            { number: 17, name: 'i-ching-17-name', description: 'i-ching-17-description', lines: [0, 1, 1, 0, 0, 1] },
            { number: 18, name: 'i-ching-18-name', description: 'i-ching-18-description', lines: [1, 0, 0, 1, 1, 0] },
            { number: 19, name: 'i-ching-19-name', description: 'i-ching-19-description', lines: [0, 0, 1, 1, 0, 0] },
            { number: 20, name: 'i-ching-20-name', description: 'i-ching-20-description', lines: [0, 0, 1, 1, 0, 1] },
            { number: 21, name: 'i-ching-21-name', description: 'i-ching-21-description', lines: [1, 0, 1, 0, 0, 1] },
            { number: 22, name: 'i-ching-22-name', description: 'i-ching-22-description', lines: [1, 0, 0, 1, 0, 1] },
            { number: 23, name: 'i-ching-23-name', description: 'i-ching-23-description', lines: [1, 0, 0, 0, 0, 0] },
            { number: 24, name: 'i-ching-24-name', description: 'i-ching-24-description', lines: [0, 0, 0, 0, 0, 1] },
            { number: 25, name: 'i-ching-25-name', description: 'i-ching-25-description', lines: [1, 1, 1, 0, 0, 1] },
            { number: 26, name: 'i-ching-26-name', description: 'i-ching-26-description', lines: [1, 0, 0, 1, 1, 1] },
            { number: 27, name: 'i-ching-27-name', description: 'i-ching-27-description', lines: [1, 0, 0, 0, 0, 1] },
            { number: 28, name: 'i-ching-28-name', description: 'i-ching-28-description', lines: [0, 1, 1, 1, 1, 0] },
            { number: 29, name: 'i-ching-29-name', description: 'i-ching-29-description', lines: [0, 1, 0, 0, 1, 0] },
            { number: 30, name: 'i-ching-30-name', description: 'i-ching-30-description', lines: [1, 0, 1, 1, 0, 1] },
            { number: 31, name: 'i-ching-31-name', description: 'i-ching-31-description', lines: [0, 1, 1, 1, 0, 0] },
            { number: 32, name: 'i-ching-32-name', description: 'i-ching-32-description', lines: [0, 0, 1, 1, 1, 0] },
            { number: 33, name: 'i-ching-33-name', description: 'i-ching-33-description', lines: [1, 1, 1, 1, 0, 0] },
            { number: 34, name: 'i-ching-34-name', description: 'i-ching-34-description', lines: [0, 0, 1, 1, 1, 1] },
            { number: 35, name: 'i-ching-35-name', description: 'i-ching-35-description', lines: [1, 0, 1, 0, 0, 0] },
            { number: 36, name: 'i-ching-36-name', description: 'i-ching-36-description', lines: [0, 0, 0, 1, 0, 1] },
            { number: 37, name: 'i-ching-37-name', description: 'i-ching-37-description', lines: [1, 1, 0, 1, 0, 1] },
            { number: 38, name: 'i-ching-38-name', description: 'i-ching-38-description', lines: [1, 0, 1, 0, 1, 1] },
            { number: 39, name: 'i-ching-39-name', description: 'i-ching-39-description', lines: [0, 1, 0, 1, 0, 0] },
            { number: 40, name: 'i-ching-40-name', description: 'i-ching-40-description', lines: [0, 0, 1, 0, 1, 0] },
            { number: 41, name: 'i-ching-41-name', description: 'i-ching-41-description', lines: [1, 0, 0, 0, 1, 1] },
            { number: 42, name: 'i-ching-42-name', description: 'i-ching-42-description', lines: [1, 1, 0, 0, 0, 1] },
            { number: 43, name: 'i-ching-43-name', description: 'i-ching-43-description', lines: [0, 1, 1, 1, 1, 1] },
            { number: 44, name: 'i-ching-44-name', description: 'i-ching-44-description', lines: [1, 1, 1, 1, 1, 0] },
            { number: 45, name: 'i-ching-45-name', description: 'i-ching-45-description', lines: [0, 1, 1, 0, 0, 0] },
            { number: 46, name: 'i-ching-46-name', description: 'i-ching-46-description', lines: [0, 0, 0, 1, 1, 0] },
            { number: 47, name: 'i-ching-47-name', description: 'i-ching-47-description', lines: [0, 1, 1, 0, 1, 0] },
            { number: 48, name: 'i-ching-48-name', description: 'i-ching-48-description', lines: [0, 1, 0, 1, 1, 0] },
            { number: 49, name: 'i-ching-49-name', description: 'i-ching-49-description', lines: [0, 1, 1, 1, 0, 1] },
            { number: 50, name: 'i-ching-50-name', description: 'i-ching-50-description', lines: [1, 0, 1, 1, 1, 0] },
            { number: 51, name: 'i-ching-51-name', description: 'i-ching-51-description', lines: [0, 0, 1, 0, 0, 1] },
            { number: 52, name: 'i-ching-52-name', description: 'i-ching-52-description', lines: [1, 0, 0, 1, 0, 0] },
            { number: 53, name: 'i-ching-53-name', description: 'i-ching-53-description', lines: [1, 1, 0, 1, 0, 0] },
            { number: 54, name: 'i-ching-54-name', description: 'i-ching-54-description', lines: [0, 0, 1, 0, 1, 1] },
            { number: 55, name: 'i-ching-55-name', description: 'i-ching-55-description', lines: [0, 0, 1, 1, 0, 1] },
            { number: 56, name: 'i-ching-56-name', description: 'i-ching-56-description', lines: [1, 0, 1, 1, 0, 0] },
            { number: 57, name: 'i-ching-57-name', description: 'i-ching-57-description', lines: [1, 1, 0, 1, 1, 0] },
            { number: 58, name: 'i-ching-58-name', description: 'i-ching-58-description', lines: [0, 1, 1, 0, 1, 1] },
            { number: 59, name: 'i-ching-59-name', description: 'i-ching-59-description', lines: [1, 1, 0, 0, 1, 0] },
            { number: 60, name: 'i-ching-60-name', description: 'i-ching-60-description', lines: [0, 1, 0, 0, 1, 1] },
            { number: 61, name: 'i-ching-61-name', description: 'i-ching-61-description', lines: [1, 1, 0, 0, 1, 1] },
            { number: 62, name: 'i-ching-62-name', description: 'i-ching-62-description', lines: [0, 0, 1, 1, 0, 0] },
            { number: 63, name: 'i-ching-63-name', description: 'i-ching-63-description', lines: [0, 1, 0, 1, 0, 1] },
            { number: 64, name: 'i-ching-64-name', description: 'i-ching-64-description', lines: [1, 0, 1, 0, 1, 0] },
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

    drawHexagram(lines) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute('width', '100');
        svg.setAttribute('height', '100');
        svg.setAttribute('viewBox', '-10 -10 120 120');

        for (let i = 0; i < 6; i++) {
            const y = 90 - i * 16;
            if (lines[i] === 1) { // Solid line
                const line = document.createElementNS(svgNS, "line");
                line.setAttribute('x1', '0');
                line.setAttribute('y1', y);
                line.setAttribute('x2', '100');
                line.setAttribute('y2', y);
                line.setAttribute('stroke', '#FFD700'); /* Gold */
                line.setAttribute('stroke-width', '8');
                svg.appendChild(line);
            } else { // Broken line
                const line1 = document.createElementNS(svgNS, "line");
                line1.setAttribute('x1', '0');
                line1.setAttribute('y1', y);
                line1.setAttribute('x2', '40');
                line1.setAttribute('y2', y);
                line1.setAttribute('stroke', '#FFD700'); /* Gold */
                line1.setAttribute('stroke-width', '8');

                const line2 = document.createElementNS(svgNS, "line");
                line2.setAttribute('x1', '60');
                line2.setAttribute('y1', y);
                line2.setAttribute('x2', '100');
                line2.setAttribute('y2', y);
                line2.setAttribute('stroke', '#FFD700'); /* Gold */
                line2.setAttribute('stroke-width', '8');

                svg.appendChild(line1);
                svg.appendChild(line2);
            }
        }
        return svg;
    }

    castCoins() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];
        const resultsContainer = this.shadowRoot.querySelector('#results');
        resultsContainer.innerHTML = '';

        const hexagram = this.hexagrams[Math.floor(Math.random() * this.hexagrams.length)];

        const hexagramEl = document.createElement('div');
        hexagramEl.classList.add('hexagram');
        
        const hexagramSVG = this.drawHexagram(hexagram.lines);

        hexagramEl.innerHTML = `
            <h3>Hexagram ${hexagram.number}: ${trans[hexagram.name]}</h3>
            <div class="hexagram-svg"></div>
            <p>${trans[hexagram.description]}</p>
        `;
        hexagramEl.querySelector('.hexagram-svg').appendChild(hexagramSVG);
        resultsContainer.appendChild(hexagramEl);
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background-color: #000000;
                }
                 h2, p {
                    font-family: 'Cinzel', serif;
                    color: #FFD700; /* Gold */
                }
                 #cast-coins {
                    background: linear-gradient(145deg, #FF0000, #8B0000);
                    border-color: #FFD700;
                    color: #FFD700;
                 }
                #cast-coins:hover {
                     background: linear-gradient(145deg, #DC143C, #A52A2A);
                     box-shadow: 0 6px 12px rgba(0,0,0,0.6),
                                 0 0 15px rgba(255, 215, 0, 0.6),
                                 inset 0 1px 2px rgba(255, 255, 255, 0.2);
                }
                #results {
                    margin-top: 2rem;
                }
                .hexagram {
                    background-color: #1a1a1a;
                    border: 1px solid #FFD700;
                    border-radius: 10px;
                    padding: 1.5rem;
                    margin: 0 auto;
                    max-width: 500px;
                }
                 h3 {
                    color: #FFD700; /* Gold */
                }
                .hexagram p {
                    font-size: 0.9rem;
                }
            </style>
            <div>
                <h2>${trans['i-ching-title']}</h2>
                <p>${trans['i-ching-description']}</p>
                <div>
                    <button id="cast-coins">${trans['i-ching-consult-oracle-button']}</button>
                </div>
                <div id="results"></div>
            </div>
        `;
        this.shadowRoot.querySelector('#cast-coins').addEventListener('click', () => this.castCoins());
    }
}

customElements.define('i-ching', IChing);