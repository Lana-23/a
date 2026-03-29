import { translations } from '../locales/index.js';

class KoreanPendulum extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.results = [
            { name: 'korean-pendulum-Earth-name', meaning: 'korean-pendulum-Earth-meaning', emoji: '🌍' },
            { name: 'korean-pendulum-Water-name', meaning: 'korean-pendulum-Water-meaning', emoji: '💧' },
            { name: 'korean-pendulum-Fire-name', meaning: 'korean-pendulum-Fire-meaning', emoji: '🔥' },
            { name: 'korean-pendulum-Air-name', meaning: 'korean-pendulum-Air-meaning', emoji: '💨' },
            { name: 'korean-pendulum-Wood-name', meaning: 'korean-pendulum-Wood-meaning', emoji: '🌳' },
            { name: 'korean-pendulum-Metal-name', meaning: 'korean-pendulum-Metal-meaning', emoji: '🔩' },
            { name: 'korean-pendulum-Light-name', meaning: 'korean-pendulum-Light-meaning', emoji: '✨' },
            { name: 'korean-pendulum-Shadow-name', meaning: 'korean-pendulum-Shadow-meaning', emoji: '🌑' },
            { name: 'korean-pendulum-Bamboo-name', meaning: 'korean-pendulum-Bamboo-meaning', emoji: '🎍' },
            { name: 'korean-pendulum-Pine-Tree-name', meaning: 'korean-pendulum-Pine-Tree-meaning', emoji: '🌲' },
            { name: 'korean-pendulum-Ginseng-name', meaning: 'korean-pendulum-Ginseng-meaning', emoji: '🌱' },
            { name: 'korean-pendulum-Kimchi-name', meaning: 'korean-pendulum-Kimchi-meaning', emoji: '🌶️' },
            { name: 'korean-pendulum-Hanbok-name', meaning: 'korean-pendulum-Hanbok-meaning', emoji: '👘' },
            { name: 'korean-pendulum-Taegeuk-name', meaning: 'korean-pendulum-Taegeuk-meaning', emoji: '☯️' },
            { name: 'korean-pendulum-Magpie-name', meaning: 'korean-pendulum-Magpie-meaning', emoji: '🐦' },
            { name: 'korean-pendulum-Haetae-name', meaning: 'korean-pendulum-Haetae-meaning', emoji: '🦁' },
            { name: 'korean-pendulum-Dokkebi-name', meaning: 'korean-pendulum-Dokkebi-meaning', emoji: '👹' },
            { name: 'korean-pendulum-Mountain-name', meaning: 'korean-pendulum-Mountain-meaning', emoji: '⛰️' },
            { name: 'korean-pendulum-River-name', meaning: 'korean-pendulum-River-meaning', emoji: '🏞️' },
            { name: 'korean-pendulum-Moon-Jar-name', meaning: 'korean-pendulum-Moon-Jar-meaning', emoji: '🏺' },
            { name: 'korean-pendulum-Celadon-name', meaning: 'korean-pendulum-Celadon-meaning', emoji: '⚱️' },
            { name: 'korean-pendulum-Fan-name', meaning: 'korean-pendulum-Fan-meaning', emoji: '🪭' },
            { name: 'korean-pendulum-Drum-name', meaning: 'korean-pendulum-Drum-meaning', emoji: '🥁' },
            { name: 'korean-pendulum-Bridge-name', meaning: 'korean-pendulum-Bridge-meaning', emoji: '🌉' },
            { name: 'korean-pendulum-Lotus-name', meaning: 'korean-pendulum-Lotus-meaning', emoji: '🪷' },
            { name: 'korean-pendulum-Persimmon-name', meaning: 'korean-pendulum-Persimmon-meaning', emoji: '🍊' },
            { name: 'korean-pendulum-Rice-name', meaning: 'korean-pendulum-Rice-meaning', emoji: '🍚' },
            { name: 'korean-pendulum-Seonbi-name', meaning: 'korean-pendulum-Seonbi-meaning', emoji: '👨‍🏫' },
            { name: 'korean-pendulum-Crown-name', meaning: 'korean-pendulum-Crown-meaning', emoji: '👑' },
            { name: 'korean-pendulum-Tale-name', meaning: 'korean-pendulum-Tale-meaning', emoji: '📖' },
            { name: 'korean-pendulum-Tiger-name', meaning: 'korean-pendulum-Tiger-meaning', emoji: '🐅' },
            { name: 'korean-pendulum-Dragon-name', meaning: 'korean-pendulum-Dragon-meaning', emoji: '🐉' },
            { name: 'korean-pendulum-Crane-name', meaning: 'korean-pendulum-Crane-meaning', emoji: '🦢' },
            { name: 'korean-pendulum-Turtle-name', meaning: 'korean-pendulum-Turtle-meaning', emoji: '🐢' },
            { name: 'korean-pendulum-Peony-name', meaning: 'korean-pendulum-Peony-meaning', emoji: '🌸' },
            { name: 'korean-pendulum-Sotdae-name', meaning: 'korean-pendulum-Sotdae-meaning', emoji: '🙏' },
            { name: 'korean-pendulum-Jangseung-name', meaning: 'korean-pendulum-Jangseung-meaning', emoji: '🗿' },
            { name: 'korean-pendulum-Dancheong-name', meaning: 'korean-pendulum-Dancheong-meaning', emoji: '🎨' },
            { name: 'korean-pendulum-Gourd-name', meaning: 'korean-pendulum-Gourd-meaning', emoji: '🍈' },
            { name: 'korean-pendulum-Bokjumeoni-name', meaning: 'korean-pendulum-Bokjumeoni-meaning', emoji: '💰' },
            { name: 'korean-pendulum-Dol-hareubang-name', meaning: 'korean-pendulum-Dol-hareubang-meaning', emoji: '🗿' },
            { name: 'korean-pendulum-Gomusin-name', meaning: 'korean-pendulum-Gomusin-meaning', emoji: '👟' },
            { name: 'korean-pendulum-Norigae-name', meaning: 'korean-pendulum-Norigae-meaning', emoji: '🎀' },
            { name: 'korean-pendulum-Buchaechum-name', meaning: 'korean-pendulum-Buchaechum-meaning', emoji: '💃' },
            { name: 'korean-pendulum-Hahoe-Tal-name', meaning: 'korean-pendulum-Hahoe-Tal-meaning', emoji: '🎭' },
            { name: 'korean-pendulum-Jegi-name', meaning: 'korean-pendulum-Jegi-meaning', emoji: '⚽' },
            { name: 'korean-pendulum-Hangul-name', meaning: 'korean-pendulum-Hangul-meaning', emoji: '🔠' },
            { name: 'korean-pendulum-Bibimbap-name', meaning: 'korean-pendulum-Bibimbap-meaning', emoji: '🍲' },
            { name: 'korean-pendulum-DMZ-name', meaning: 'korean-pendulum-DMZ-meaning', emoji: '🚧' },
            { name: 'korean-pendulum-Cheomseongdae-name', meaning: 'korean-pendulum-Cheomseongdae-meaning', emoji: '🔭' },
            { name: 'korean-pendulum-Hwarang-name', meaning: 'korean-pendulum-Hwarang-meaning', emoji: '⚔️' },
            { name: 'korean-pendulum-Turtle-Ship-name', meaning: 'korean-pendulum-Turtle-Ship-meaning', emoji: '🚢' },
            { name: 'korean-pendulum-Jindo-Dog-name', meaning: 'korean-pendulum-Jindo-Dog-meaning', emoji: '🐕' },
            { name: 'korean-pendulum-Sparrow-name', meaning: 'korean-pendulum-Sparrow-meaning', emoji: '🐦' },
            { name: 'korean-pendulum-Jade-name', meaning: 'korean-pendulum-Jade-meaning', emoji: '💎' },
            { name: 'korean-pendulum-Chestnut-name', meaning: 'korean-pendulum-Chestnut-meaning', emoji: '🌰' },
            { name: 'korean-pendulum-Salt-name', meaning: 'korean-pendulum-Salt-meaning', emoji: '🧂' },
            { name: 'korean-pendulum-Thread-name', meaning: 'korean-pendulum-Thread-meaning', emoji: '🧵' },
            { name: 'korean-pendulum-Chilseong-name', meaning: 'korean-_Chilseong-meaning', emoji: '🌌' },
            { name: 'korean-pendulum-Onggi-name', meaning: 'korean-pendulum-Onggi-meaning', emoji: '🏺' },
        ];
    }

    static get observedAttributes() {
        return ['language'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'language' && oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        // initial render
    }

    usePendulum() {
        const pendulum = this.shadowRoot.querySelector('#pendulum');
        const resultDiv = this.shadowRoot.querySelector('#result');
        const button = this.shadowRoot.querySelector('#use-pendulum-button');

        if (pendulum.classList.contains('swinging')) return;

        button.disabled = true;
        pendulum.classList.add('swinging');
        resultDiv.innerHTML = '';

        setTimeout(() => {
            pendulum.classList.remove('swinging');
            const lang = this.getAttribute('language') || 'en';
            const trans = translations[lang];
            const selectedResult = this.results[Math.floor(Math.random() * this.results.length)];

            resultDiv.innerHTML = `
                <div class="fortune-card active">
                    <h3>${trans[selectedResult.name]}</h3>
                    <p>${selectedResult.emoji} ${trans[selectedResult.meaning]}</p>
                </div>
            `;
            button.disabled = false;
        }, 2000); // Corresponds to animation duration
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = translations[lang];
        
        if (!trans) {
            // If translations are not loaded, wait for the next language attribute change
            this.shadowRoot.innerHTML = `<style>${this.getStyles()}</style><div></div>`;
            return;
        }

        this.shadowRoot.innerHTML = `
            <style>${this.getStyles()}</style>
            <div>
                <h2>${trans["korean-pendulum-title"]}</h2>
                <p>${trans["korean-pendulum-description"]}</p>
                <div id="pendulum-container">
                    <div id="pendulum">
                        <div id="pendulum-string"></div>
                        <div id="pendulum-bob"></div>
                    </div>
                </div>
                <button id="use-pendulum-button">${trans["use-pendulum-button"]}</button>
                <div id="result"></div>
            </div>
        `;
        this.shadowRoot.querySelector('#use-pendulum-button').addEventListener('click', () => this.usePendulum());
    }

    getStyles() {
        return `
            :host {
                display: block;
                text-align: center;
                font-family: 'Gowun Batang', serif;
                color: #000000;
                padding: 2rem;
                border-radius: 15px;
            }
            h2 {
                font-family: 'Gowun Dodum', serif;
                color: #000000;
            }
            p {
                color: #000000;
            }
            #pendulum-container {
                position: relative;
                width: 200px;
                height: 200px;
                margin: 0 auto; /* Reduced margin */
            }
            #pendulum {
                position: absolute;
                top: 0;
                left: 50%;
                transform-origin: top center;
            }
            #pendulum-string {
                width: 2px;
                height: 120px;
                background-color: #000000;
                margin: 0 auto;
            }
            #pendulum-bob {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #C0C0C0, #A9A9A9);
                border-radius: 50%;
                margin: 0 auto;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
            .swinging {
                animation: swing 2s ease-in-out;
            }
            @keyframes swing {
                0% { transform: translateX(0) rotate(0deg); }
                25% { transform: translateX(-50px) rotate(-30deg); }
                75% { transform: translateX(50px) rotate(30deg); }
                100% { transform: translateX(0) rotate(0deg); }
            }
            #use-pendulum-button {
                background-color:#901904;
                color: #C0C0C0;
                border: 2px solid transparent;
                border-radius: 8px;
                padding: 0.8rem 1.5rem;
                font-size: 1.1rem;
                font-family: 'Gowun Dodum', serif;
                cursor: pointer;
                transition: all 0.3s ease;
                margin-top: 0; /* Reduced margin */
            }
            #use-pendulum-button:hover:not(:disabled) {
                background-color: #C0C0C0;
                color: #901904;
                border-color: #901904;
            }
            #use-pendulum-button:disabled {
                cursor: not-allowed;
                opacity: 0.7;
            }
            #result {
                margin-top: 1.5rem;
            }
            .fortune-card {
                background: rgba(192, 192, 192, 0.4); /* Silver with transparency */
                border-radius: 15px;
                padding: 1.5rem;
                backdrop-filter: blur(5px);
                border: 1px solid #901904; /* Purple with transparency */
                box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
                width: 80%;
                max-width: 400px;
                margin: 1rem auto;
                transform: translateY(20px);
                opacity: 0;
                transition: transform 0.5s ease, opacity 0.5s ease;
            }
            .fortune-card.active {
                transform: translateY(0);
                opacity: 1;
            }
            h3 {
                color: #000000;
            }
            .fortune-card p {
                font-size: 0.9rem;
            }
        `;
    }
}

customElements.define('korean-pendulum', KoreanPendulum);
