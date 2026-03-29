import { translations } from '../locales/index.js';

class CrystalBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.answers = [];
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

    askQuestion() {
        const resultDiv = this.shadowRoot.querySelector('#result');
        const crystalBall = this.shadowRoot.querySelector('#crystal-ball');
        const askButton = this.shadowRoot.querySelector('#ask-button');
        
        if (askButton.disabled) return;
        
        askButton.disabled = true;
        resultDiv.innerHTML = '';
        crystalBall.classList.add('shaking');

        setTimeout(() => {
            crystalBall.classList.remove('shaking');
            const randomIndex = Math.floor(Math.random() * this.answers.length);
            const answerKey = this.answers[randomIndex];
            const lang = this.getAttribute('language') || 'en';
            const trans = translations[lang];

            resultDiv.innerHTML = `
                <div class="answer-card active">
                    <p>${trans[answerKey]}</p>
                </div>
            `;
            askButton.disabled = false;
        }, 1500); // Shaking animation duration
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];

        // Dynamically load all 'crystal-ball-answer-' keys
        this.answers = Object.keys(trans)
            .filter(key => key.startsWith('crystal-ball-answer-'));

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    font-family: 'Merriweather', serif;
                    color: #C0C0C0; /* Silver */
                    padding: 2rem;
                    border-radius: 15px;
                    overflow: hidden;
                }
                h2 {
                    font-family: 'Cinzel', serif;
                    color: #C0C0C0; /* Silver */
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
                }
                .crystal-ball-container {
                    position: relative;
                    width: 250px;
                    height: 250px;
                    margin: 2rem auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #crystal-ball {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border-radius: 50%;
                    background: radial-gradient(circle at 50% 40%, #E6E6FA, #8A2BE2 70%);
                    box-shadow: 
                        inset 0 0 50px rgba(230, 230, 250, 0.2), /* Inner highlight */
                        inset 0 -20px 30px rgba(75, 0, 130, 0.4), /* Bottom inner glow */
                        0 0 35px rgba(230, 230, 250, 0.2), /* Soft white halo */
                        0 0 60px rgba(138, 43, 226, 0.7), /* Main purple glow */
                        0 0 90px rgba(65, 105, 225, 0.5); /* Royal blue glow */
                    animation: pulse 4s infinite ease-in-out, shake 0.5s linear 0;
                    transform-origin: center;
                }
                
                #crystal-ball::before { /* Stand */
                    content: '';
                    position: absolute;
                    bottom: -25px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60%;
                    height: 30px;
                    background: radial-gradient(circle, #A9A9A9, #696969);
                    border-radius: 50%;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
                    z-index: -1;
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 
                            inset 0 0 50px rgba(230, 230, 250, 0.2),
                            inset 0 -20px 30px rgba(75, 0, 130, 0.4),
                            0 0 35px rgba(230, 230, 250, 0.2),
                            0 0 60px rgba(138, 43, 226, 0.7),
                            0 0 90px rgba(65, 105, 225, 0.5);
                    }
                    50% {
                        transform: scale(1.02);
                        box-shadow: 
                            inset 0 0 60px rgba(230, 230, 250, 0.3),
                            inset 0 -25px 40px rgba(75, 0, 130, 0.5),
                            0 0 45px rgba(230, 230, 250, 0.3),
                            0 0 75px rgba(138, 43, 226, 0.9),
                            0 0 110px rgba(65, 105, 225, 0.7);
                    }
                }

                @keyframes shake {
                    0%, 100% { transform: translate(0, 0) rotate(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translate(-6px, 0) rotate(-2deg); }
                    20%, 40%, 60%, 80% { transform: translate(6px, 0) rotate(2deg); }
                }
                
                .shaking {
                    animation-name: shake, pulse;
                    animation-iteration-count: 3, infinite;
                    animation-timing-function: linear, ease-in-out;
                    animation-duration: 0.5s, 4s;
                }
                
                #ask-button {
                    background: linear-gradient(45deg, #8A2BE2, #4169E1);
                    color: #C0C0C0; /* Silver */
                    border: 1px solid #C0C0C0; /* Silver */
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-family: 'Cinzel', serif;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                    margin-top: 1.5rem;
                }

                #ask-button:hover:not(:disabled) {
                    transform: scale(1.05);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
                }
                 #ask-button:disabled {
                    cursor: not-allowed;
                    background: #555;
                }

                .answer-card {
                    background: rgba(75, 0, 130, 0.5);
                    border-radius: 10px;
                    padding: 1.5rem;
                    margin-top: 1.5rem;
                    width: 80%;
                    max-width: 400px;
                    margin: 1.5rem auto 0;
                    border: 1px solid rgba(192, 192, 192, 0.2); /* Silver with transparency */
                    backdrop-filter: blur(5px);
                    transform: scale(0.9);
                    opacity: 0;
                    transition: all 0.4s ease-out;
                }
                .answer-card.active {
                    transform: scale(1);
                    opacity: 1;
                }
                 .answer-card p {
                    margin: 0;
                    font-size: 0.9rem;
                    font-style: italic;
                    color: #C0C0C0; /* Silver */
                 }
            </style>
            <div class="screen-content">
                <h2>${trans["crystal-ball-title"]}</h2>
                <p>${trans["crystal-ball-description"]}</p>
                <div class="crystal-ball-container">
                    <div id="crystal-ball"></div>
                </div>
                <button id="ask-button">${trans["crystal-ball-ask-button"]}</button>
                <div id="result"></div>
            </div>
        `;

        this.shadowRoot.querySelector('#ask-button').addEventListener('click', () => this.askQuestion());
    }
}

customElements.define('crystal-ball', CrystalBall);
