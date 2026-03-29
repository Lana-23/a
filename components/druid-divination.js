import { translations } from '../locales/index.js';

class DruidDivination extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.oghamStaves = [
            { name: 'Birch', symbol: 'ᚁ', nameKey: 'ogham-Birch-name', meaningKey: 'ogham-Birch-meaning' },
            { name: 'Rowan', symbol: 'ᚂ', nameKey: 'ogham-Rowan-name', meaningKey: 'ogham-Rowan-meaning' },
            { name: 'Alder', symbol: 'ᚃ', nameKey: 'ogham-Alder-name', meaningKey: 'ogham-Alder-meaning' },
            { name: 'Willow', symbol: 'ᚄ', nameKey: 'ogham-Willow-name', meaningKey: 'ogham-Willow-meaning' },
            { name: 'Ash', symbol: 'ᚅ', nameKey: 'ogham-Ash-name', meaningKey: 'ogham-Ash-meaning' },
            { name: 'Hawthorn', symbol: 'ᚆ', nameKey: 'ogham-Hawthorn-name', meaningKey: 'ogham-Hawthorn-meaning' },
            { name: 'Oak', symbol: 'ᚇ', nameKey: 'ogham-Oak-name', meaningKey: 'ogham-Oak-meaning' },
            { name: 'Holly', symbol: 'ᚈ', nameKey: 'ogham-Holly-name', meaningKey: 'ogham-Holly-meaning' },
            { name: 'Hazel', symbol: 'ᚉ', nameKey: 'ogham-Hazel-name', meaningKey: 'ogham-Hazel-meaning' },
            { name: 'Apple', symbol: 'ᚊ', nameKey: 'ogham-Apple-name', meaningKey: 'ogham-Apple-meaning' },
            { name: 'Vine', symbol: 'ᚋ', nameKey: 'ogham-Vine-name', meaningKey: 'ogham-Vine-meaning' },
            { name: 'Ivy', symbol: 'ᚌ', nameKey: 'ogham-Ivy-name', meaningKey: 'ogham-Ivy-meaning' },
            { name: 'Reed', symbol: 'ᚍ', nameKey: 'ogham-Reed-name', meaningKey: 'ogham-Reed-meaning' },
            { name: 'Blackthorn', symbol: 'ᚎ', nameKey: 'ogham-Blackthorn-name', meaningKey: 'ogham-Blackthorn-meaning' },
            { name: 'Elder', symbol: 'ᚏ', nameKey: 'ogham-Elder-name', meaningKey: 'ogham-Elder-meaning' },
            { name: 'Elm', symbol: 'ᚐ', nameKey: 'ogham-Elm-name', meaningKey: 'ogham-Elm-meaning' },
            { name: 'Gorse', symbol: 'ᚑ', nameKey: 'ogham-Gorse-name', meaningKey: 'ogham-Gorse-meaning' },
            { name: 'Heather', symbol: 'ᚒ', nameKey: 'ogham-Heather-name', meaningKey: 'ogham-Heather-meaning' },
            { name: 'Aspen', symbol: 'ᚓ', nameKey: 'ogham-Aspen-name', meaningKey: 'ogham-Aspen-meaning' },
            { name: 'Yew', symbol: 'ᚔ', nameKey: 'ogham-Yew-name', meaningKey: 'ogham-Yew-meaning' },
            { name: 'Spindle', symbol: 'ᚕ', nameKey: 'ogham-Spindle-name', meaningKey: 'ogham-Spindle-meaning' },
            { name: 'Honeysuckle', symbol: 'ᚖ', nameKey: 'ogham-Honeysuckle-name', meaningKey: 'ogham-Honeysuckle-meaning' },
            { name: 'Pine', symbol: 'ᚗ', nameKey: 'ogham-Pine-name', meaningKey: 'ogham-Pine-meaning' },
            { name: 'Witch-Hazel', symbol: 'ᚘ', nameKey: 'ogham-Witch-Hazel-name', meaningKey: 'ogham-Witch-Hazel-meaning' },
            { name: 'Sea', symbol: 'ᚙ', nameKey: 'ogham-Sea-name', meaningKey: 'ogham-Sea-meaning' },
            { name: 'Mistletoe', symbol: '🌿', nameKey: 'ogham-Mistletoe-name', meaningKey: 'ogham-Mistletoe-meaning' }
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

    drawStave() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang] || translations['en'];
        const resultDiv = this.shadowRoot.getElementById('results');
        const stave = this.oghamStaves[Math.floor(Math.random() * this.oghamStaves.length)];
        
        resultDiv.innerHTML = ''; 
        const staveInfo = document.createElement('div');
        staveInfo.classList.add('stave-info');
        
        staveInfo.innerHTML = `
            <h3><span>${stave.symbol}</span> ${trans[stave.nameKey] || stave.name}</h3>
            <p>${trans[stave.meaningKey]}</p>
        `;
        
        resultDiv.appendChild(staveInfo);
        
        setTimeout(() => {
            staveInfo.classList.add('drawn');
        }, 50);
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang] || translations['en'];

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 2rem;
                    border-radius: 10px;
                    color: #E0E0E0; 
                    font-family: 'Merriweather', serif;
                    background: linear-gradient(to bottom right, #1a2a1a, #2a3b2a);
                    border: 1px solid #4F7942;
                }
                h2 {
                    font-family: 'Cinzel', serif;
                    color: #A4C6A4;
                    text-align: center;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
                }
                p {
                    text-align: center;
                    margin-bottom: 2rem;
                    color: #C0C0C0;
                }
                button {
                    display: block;
                    margin: 1rem auto;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-family: 'Cinzel', serif;
                    background-color: #4F7942;
                    color: #E0E0E0;
                    border: 2px solid #6B8E23;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.1);
                }
                button:hover {
                    background-color: #556B2F;
                    border-color: #8FBC8F;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(0,0,0,0.6), 0 0 10px rgba(79, 121, 66, 0.4), inset 0 1px 2px rgba(255,255,255,0.1);
                }
                #results {
                    margin-top: 2rem;
                    text-align: center;
                    perspective: 800px;
                }
                .stave-info {
                    display: inline-block;
                    margin-top: 1rem;
                    padding: 1.5rem 2rem;
                    background: rgba(0,0,0,0.4);
                    border-radius: 10px;
                    border-left: 7px solid #4F7942;
                    transform: rotateX(-20deg) scale(0.9);
                    opacity: 0;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .stave-info.drawn {
                    transform: rotateX(0deg) scale(1);
                    opacity: 1;
                }
                .stave-info h3 {
                    margin: 0 0 0.7rem;
                    color: #A4C6A4;
                    font-size: 1.8rem;
                    font-family: 'Cinzel', serif;
                }
                 .stave-info h3 span {
                    font-size: 2.5rem;
                    vertical-align: middle;
                    margin-right: 10px;
                    color: #6B8E23;
                    text-shadow: 0 0 5px #6B8E23;
                 }
                 .stave-info p {
                    color: #C0C0C0;
                    font-size: 0.9rem;
                    line-height: 1.6;
                 }
            </style>
            <div>
                <h2>${trans['druid-divination-title']}</h2>
                <p>${trans['druid-divination-description']}</p>
                <div>
                    <button id="draw-stave">${trans['draw-stave-button']}</button>
                </div>
                <div id="results"></div>
            </div>
        `;

        this.shadowRoot.getElementById('draw-stave').addEventListener('click', () => this.drawStave());
    }
}

customElements.define('druid-divination', DruidDivination);