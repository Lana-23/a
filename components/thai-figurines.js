class ThaiFigurines extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.translations = {
            en: {
                "thai-figurines-title": "Thai Figurines Divination",
                "shake-figurine-button": "Shake for a Figurine",
                "figurine-Buddha-name": "Buddha",
                "figurine-Buddha-meaning": "Represents enlightenment, peace, and spiritual wisdom.",
                "figurine-Elephant-name": "Elephant",
                "figurine-Elephant-meaning": "Symbolizes strength, royalty, and good fortune.",
                "figurine-Garuda-name": "Garuda",
                "figurine-Garuda-meaning": "A mythical bird-like creature, protector and a symbol of power.",
                "figurine-Naga-name": "Naga",
                "figurine-Naga-meaning": "A mythical serpent, represents wealth, fertility, and protection.",
                "figurine-Kinnara-name": "Kinnara",
                "figurine-Kinnara-meaning": "Celestial musicians, half-human, half-bird, symbolizing love and art.",
                "figurine-Singha-name": "Singha",
                "figurine-Singha-meaning": "A mythical lion, a guardian that brings courage and strength.",
                "figurine-Lotus-name": "Lotus",
                "figurine-Lotus-meaning": "Symbol of purity, spiritual awakening, and faithfulness.",
                "figurine-Bodhi Tree-name": "Bodhi Tree",
                "figurine-Bodhi Tree-meaning": "The tree under which Buddha attained enlightenment; symbolizes wisdom.",
                "figurine-Stupa (Chedi)-name": "Stupa (Chedi)",
                "figurine-Stupa (Chedi)-meaning": "A dome-shaped structure, represents the enlightened mind of a Buddha.",
                "figurine-Tuk-tuk-name": "Tuk-tuk",
                "figurine-Tuk-tuk-meaning": "A three-wheeled taxi, a symbol of journey and everyday life in Thailand.",
                "figurine-Rice Stalk-name": "Rice Stalk",
                "figurine-Rice Stalk-meaning": "Represents sustenance, prosperity, and the agricultural heart of Thailand.",
                "figurine-Orchid-name": "Orchid",
                "figurine-Orchid-meaning": "Symbol of love, beauty, and refinement. A cherished flower in Thailand.",
                "figurine-Gecko-name": "Gecko",
                "figurine-Gecko-meaning": "Believed to be a sign of good luck and a household protector.",
                "figurine-Nang Kwak (Waving Lady)-name": "Nang Kwak (Waving Lady)",
                "figurine-Nang Kwak (Waving Lady)-meaning": "A spirit who brings good business and attracts customers.",
                "figurine-Deer-name": "Deer",
                "figurine-Deer-meaning": "Represents gentleness, grace, and innocence. A symbol of peace.",
                "figurine-Monkey-name": "Monkey",
                "figurine-Monkey-meaning": "Associated with Hanuman, represents agility, intelligence, and devotion.",
                "figurine-Water Buffalo-name": "Water Buffalo",
                "figurine-Water Buffalo-meaning": "Symbol of strength, hard work, and rural life in Thailand."
            },
            ru: {
                "thai-figurines-title": "Гадание на тайских фигурках",
                "shake-figurine-button": "Потрясти для получения фигурки",
                "figurine-Buddha-name": "Будда",
                "figurine-Buddha-meaning": "Олицетворяет просветление, мир и духовную мудрость.",
                "figurine-Elephant-name": "Слон",
                "figurine-Elephant-meaning": "Символизирует силу, королевскую власть и удачу.",
                "figurine-Garuda-name": "Гаруда",
                "figurine-Garuda-meaning": "Мифическое птицеподобное существо, защитник и символ власти.",
                "figurine-Naga-name": "Нага",
                "figurine-Naga-meaning": "Мифический змей, олицетворяет богатство, плодородие и защиту.",
                "figurine-Kinnara-name": "Киннара",
                "figurine-Kinnara-meaning": "Небесные музыканты, полулюди-полуптицы, символизирующие любовь и искусство.",
                "figurine-Singha-name": "Сингха",
                "figurine-Singha-meaning": "Мифический лев, страж, приносящий мужество и силу.",
                "figurine-Lotus-name": "Лотос",
                "figurine-Lotus-meaning": "Символ чистоты, духовного пробуждения и верности.",
                "figurine-Bodhi Tree-name": "Дерево Бодхи",
                "figurine-Bodhi Tree-meaning": "Дерево, под которым Будда достиг просветления; символизирует мудрость.",
                "figurine-Stupa (Chedi)-name": "Ступа (Чеди)",
                "figurine-Stupa (Chedi)-meaning": "Куполообразное сооружение, олицетворяет просветленный ум Будды.",
                "figurine-Tuk-tuk-name": "Тук-тук",
                "figurine-Tuk-tuk-meaning": "Трехколесное такси, символ путешествий и повседневной жизни в Таиланде.",
                "figurine-Rice Stalk-name": "Рисовый стебель",
                "figurine-Rice Stalk-meaning": "Олицетворяет пропитание, процветание и сельскохозяйственное сердце Таиланда.",
                "figurine-Orchid-name": "Орхидея",
                "figurine-Orchid-meaning": "Символ любви, красоты и изысканности. Ценимый цветок в Таиланде.",
                "figurine-Gecko-name": "Геккон",
                "figurine-Gecko-meaning": "Считается знаком удачи и защитником дома.",
                "figurine-Nang Kwak (Waving Lady)-name": "Нанг Квак (Машущая леди)",
                "figurine-Nang Kwak (Waving Lady)-meaning": "Дух, приносящий удачу в делах и привлекающий клиентов.",
                "figurine-Deer-name": "Олень",
                "figurine-Deer-meaning": "Олицетворяет нежность, грацию и невинность. Символ мира.",
                "figurine-Monkey-name": "Обезьяна",
                "figurine-Monkey-meaning": "Ассоциируется с Хануманом, олицетворяет ловкость, интеллект и преданность.",
                "figurine-Water Buffalo-name": "Водяной буйвол",
                "figurine-Water Buffalo-meaning": "Символ силы, трудолюбия и сельской жизни в Таиланде."
            }
        };
        this.figurines = [
            { name: 'Buddha', nameKey: 'figurine-Buddha-name', meaning: 'figurine-Buddha-meaning', image: '🕉️' },
            { name: 'Elephant', nameKey: 'figurine-Elephant-name', meaning: 'figurine-Elephant-meaning', image: '🐘' },
            { name: 'Garuda', nameKey: 'figurine-Garuda-name', meaning: 'figurine-Garuda-meaning', image: '🦅' },
            { name: 'Naga', nameKey: 'figurine-Naga-name', meaning: 'figurine-Naga-meaning', image: '🐍' },
            { name: 'Kinnara', nameKey: 'figurine-Kinnara-name', meaning: 'figurine-Kinnara-meaning', image: '🧑‍🎤' },
            { name: 'Singha', nameKey: 'figurine-Singha-name', meaning: 'figurine-Singha-meaning', image: '🦁' },
            { name: 'Lotus', nameKey: 'figurine-Lotus-name', meaning: 'figurine-Lotus-meaning', image: '🌸' },
            { name: 'Bodhi Tree', nameKey: 'figurine-Bodhi Tree-name', meaning: 'figurine-Bodhi Tree-meaning', image: '🌳' },
            { name: 'Stupa (Chedi)', nameKey: 'figurine-Stupa (Chedi)-name', meaning: 'figurine-Stupa (Chedi)-meaning', image: '🛕' },
            { name: 'Tuk-tuk', nameKey: 'figurine-Tuk-tuk-name', meaning: 'figurine-Tuk-tuk-meaning', image: '🛺' },
            { name: 'Rice Stalk', nameKey: 'figurine-Rice Stalk-name', meaning: 'figurine-Rice Stalk-meaning', image: '🌾' },
            { name: 'Orchid', nameKey: 'figurine-Orchid-name', meaning: 'figurine-Orchid-meaning', image: '🌺' },
            { name: 'Gecko', nameKey: 'figurine-Gecko-name', meaning: 'figurine-Gecko-meaning', image: '🦎' },
            { name: 'Nang Kwak (Waving Lady)', nameKey: 'figurine-Nang Kwak (Waving Lady)-name', meaning: 'figurine-Nang Kwak (Waving Lady)-meaning', image: '👋' },
            { name: 'Deer', nameKey: 'figurine-Deer-name', meaning: 'figurine-Deer-meaning', image: '🦌' },
            { name: 'Monkey', nameKey: 'figurine-Monkey-name', meaning: 'figurine-Monkey-meaning', image: '🐒' },
            { name: 'Water Buffalo', nameKey: 'figurine-Water Buffalo-name', meaning: 'figurine-Water Buffalo-meaning', image: '🐃' }
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

    shakeFigurines() {
        const lang = this.getAttribute('language') || 'en';
        const trans = this.translations[lang] || this.translations['en'];
        const resultDiv = this.shadowRoot.querySelector('#result');

        const container = this.shadowRoot.querySelector('.figurine-container');
        container.classList.add('shaking');

        setTimeout(() => {
            container.classList.remove('shaking');

            const figurine = this.figurines[Math.floor(Math.random() * this.figurines.length)];
            resultDiv.innerHTML = `
                <div class="figurine-card active">
                    <span class="figurine-image">${figurine.image}</span>
                    <h3>${trans[figurine.nameKey]}</h3>
                    <p>${trans[figurine.meaning]}</p>
                </div>
            `;
        }, 1000);
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = this.translations[lang] || this.translations['en'];

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    background: #a0522d url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M25 0 L50 25 L25 50 L0 25 Z" fill="rgba(255,255,255,0.05)"/></svg>');
                    padding: 2rem;
                    border-radius: 15px;
                    font-family: 'Arial', sans-serif;
                }
                h2{
                    font-family: 'Cinzel', serif;
                    color: #FFFFF0;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
                }
                p {
                    font-family: 'Cinzel', serif;
                    color: #FFFFF0;
                }
                .figurine-container {
                    position: relative;
                    margin: 2rem auto;
                    width: 250px;
                    height: 90px;
                    perspective: 1000px;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px) rotate(-3deg); }
                    20%, 40%, 60%, 80% { transform: translateX(10px) rotate(3deg); }
                }
                .shaking {
                    animation: shake 1s ease-in-out;
                }
                #shake-figurines {
                    background: linear-gradient(145deg, #8B4513, #CD7F32);
                    color: #FFFFF0;
                    border: none;
                    border-radius: 50px;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-family: 'Cinzel', serif;
                    cursor: pointer;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    transition: all 0.3s ease;
                }
                #shake-figurines:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.4), 0 0 15px #CD7F32;
                }
                #result {
                    margin-top: 1rem;
                }
                .figurine-card {
                    background: rgba(255, 255, 240, 0.1);
                    border-radius: 15px;
                    padding: 1.5rem;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 240, 0.2);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                    width: 250px;
                    margin: 1rem auto;
                    transform: scale(0.95);
                    opacity: 0;
                    transition: transform 0.4s ease, opacity 0.4s ease;
                }
                .figurine-card.active {
                    transform: scale(1);
                    opacity: 1;
                }
                .figurine-image {
                    font-size: 4rem;
                    display: block;
                    margin-bottom: 1rem;
                }
                h3 {
                    margin: 0 0 0.5rem;
                    font-size: 1.5rem;
                    color: #FFFFF0;
                    font-family: 'Cinzel', serif;
                }
            </style>
            <div>
                <h2>${trans["thai-figurines-title"]}</h2>
                  <div class="figurine-container">
                    <button id="shake-figurines">${trans["shake-figurine-button"]}</button>
                </div>
                <div id="result"></div>
            </div>
        `;

        this.shadowRoot.querySelector('#shake-figurines').addEventListener('click', () => this.shakeFigurines());
    }
}

customElements.define('thai-figurines', ThaiFigurines);
