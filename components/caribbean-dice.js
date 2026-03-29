import { translations } from '../locales/index.js';

class CaribbeanDice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.language = 'en'; // Default language
        this.dice = [1, 1, 1, 1, 1]; // Initial dice values
    }

    static get observedAttributes() {
        return ['language'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'language' && oldValue !== newValue) {
            this.language = newValue;
            this.updateUI();
        }
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
        this.displayDice(); // Display initial dice
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 1rem;
                    font-family: 'Cinzel', serif;
                }
                .divination-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #d4af37; /* Gold color */
                    margin-bottom: 1rem;
                }
                #dice-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1rem;
                    width: 100%;
                    max-width: 250px;
                    margin: 0 auto 1.5rem;
                    padding: 1rem;
                    background: radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%);
                    border-radius: 10px;
                    box-shadow: inset 0 0 15px rgba(0,0,0,0.5);
                    min-height: 100px; /* Give some height */
                    align-items: center;
                }
                .dice {
                    width: 60px;
                    height: 60px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                    padding: 6px;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(3, 1fr);
                    gap: 4px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    animation: roll 0.5s ease-out;
                }
                .dot {
                    width: 12px;
                    height: 12px;
                    background-color: #333;
                    border-radius: 50%;
                    justify-self: center;
                    align-self: center;
                }
                @keyframes roll {
                    0% { transform: rotate(0deg) scale(0.8); opacity: 0.5; }
                    100% { transform: rotate(360deg) scale(1); opacity: 1; }
                }
                .action-button {
                    padding: 12px 25px;
                    font-size: 1.1rem;
                    font-family: 'Merriweather', serif;
                    color: white;
                    background-color: #3b5158;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    transition: all 0.2s ease-in-out;
                    margin-bottom: 1.5rem;
                }
                .action-button:disabled {
                    background: #555;
                    cursor: not-allowed;
                }
                .action-button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(0,0,0,0.4);
                }
                 .result-container {
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    padding: 1.5rem;
                    margin-top: 1rem;
                    width: 100%;
                    max-width: 500px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                    display: none; /* Initially hidden */
                }
                .result-container h3 {
                    font-size: 1.4rem;
                    color: #d4af37;
                    margin-top: 0;
                }
                .result-container p {
                    font-size: 0.9rem;
                    color: #eee;
                    line-height: 1.6;
                }
            </style>
            
            <div class="divination-container">
                <h2 class="divination-title" data-i18n="caribbean-dice-title"></h2>
                <div id="dice-container"></div>
                <button id="roll-button" class="action-button"></button>
                <div id="result-container" class="result-container">
                    <h3 id="dice-sum-title"></h3> 
                    <p id="result-description"></p>
                </div>
            </div>
        `;
        this.updateUI();
    }

    updateUI() {
        const trans = translations[this.language] || translations['en'];
        this.shadowRoot.querySelector('[data-i18n="caribbean-dice-title"]').textContent = trans['caribbean-dice-title'] || 'Caribbean Dice';
        this.shadowRoot.querySelector('#roll-button').textContent = trans['caribbean-dice-roll-button'] || 'Roll Dice';
        
        const resultContainer = this.shadowRoot.getElementById('result-container');
        if (resultContainer) {
            resultContainer.style.display = 'none';
        }
        this.displayDice();
    }

    addEventListeners() {
        const rollButton = this.shadowRoot.getElementById('roll-button');
        rollButton.addEventListener('click', () => this.roll());
    }

    displayDice() {
        const container = this.shadowRoot.getElementById('dice-container');
        container.innerHTML = ''; // Clear previous dice

        const dotPatterns = {
            1: [5],
            2: [1, 9],
            3: [1, 5, 9],
            4: [1, 3, 7, 9],
            5: [1, 3, 5, 7, 9],
            6: [1, 4, 7, 3, 6, 9]
        };

        this.dice.forEach(value => {
            const die = document.createElement('div');
            die.classList.add('dice');
            die.setAttribute('aria-label', `Dice with value ${value}`);
            
            const dotsToShow = dotPatterns[value] || [];
            
            for (let i = 1; i <= 9; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (!dotsToShow.includes(i)) {
                    dot.style.visibility = 'hidden';
                }
                die.appendChild(dot);
            }
            container.appendChild(die);
        });
    }

    roll() {
        const rollButton = this.shadowRoot.getElementById('roll-button');
        rollButton.disabled = true;

        this.shadowRoot.getElementById('result-container').style.display = 'none';

        this.dice = this.dice.map(() => Math.floor(Math.random() * 6) + 1);
        
        this.displayDice();

        setTimeout(() => {
            rollButton.disabled = false;
            const total = this.dice.reduce((sum, value) => sum + value, 0);
            this.showResult(total);
        }, 500); // Should match animation duration
    }

    showResult(total) {
        const trans = translations[this.language] || translations['en'];
        const fortuneKey = `caribbean-dice-fortune-${total}`;
        const fortuneText = trans[fortuneKey];

        const sumTitle = `${trans['caribbean-dice-your-fortune'] || 'Your Fortune:'} ${total}`;

        const resultContainer = this.shadowRoot.getElementById('result-container');
        const sumTitleEl = this.shadowRoot.getElementById('dice-sum-title');
        const resultDescEl = this.shadowRoot.getElementById('result-description');

        if (fortuneText) {
            sumTitleEl.textContent = sumTitle;
            resultDescEl.textContent = fortuneText;
            resultContainer.style.display = 'block';
        } else {
            sumTitleEl.textContent = 'Error';
            resultDescEl.textContent = `Could not find a prediction for the sum ${total}.`;
            resultContainer.style.display = 'block';
        }
    }
}

if (!customElements.get('caribbean-dice')) {
    customElements.define('caribbean-dice', CaribbeanDice);
}
