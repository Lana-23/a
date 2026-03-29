import { ru } from '../locales/ru.js';
import { en } from '../locales/en.js';

class GrecoRomanOracles extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.translations = { en, ru };

        this.oracles = [
            { name: 'Delphi', message: 'oracle-Delphi-message' },
            { name: 'Cumae', message: 'oracle-Cumae-message' },
            { name: 'Dodona', message: 'oracle-Dodona-message' },
            { name: 'Siwa', message: 'oracle-Siwa-message' },
            { name: 'Trophonius', message: 'oracle-Trophonius-message' },
            { name: 'Claros', message: 'oracle-Claros-message' },
            { name: 'Didyma', message: 'oracle-Didyma-message' },
            { name: 'Olympia', message: 'oracle-Olympia-message' },
            { name: 'Ammon', message: 'oracle-Ammon-message' },
            { name: 'Tegyra', message: 'oracle-Tegyra-message' },
            { name: 'Abae', message: 'oracle-Abae-message' },
            { name: 'Ptoion', message: 'oracle-Ptoion-message' },
            { name: 'Gryneion', message: 'oracle-Gryneion-message' },
            { name: 'Pergamum', message: 'oracle-Pergamum-message' },
            { name: 'Cyaneae', message: 'oracle-Cyaneae-message' },
            { name: 'Patara', message: 'oracle-Patara-message' },
            { name: 'Seleucia', message: 'oracle-Seleucia-message' },
            { name: 'Heraclea', message: 'oracle-Heraclea-message' },
            { name: 'Ephyra', message: 'oracle-Ephyra-message' },
            { name: 'Praeneste', message: 'oracle-Praeneste-message' },
            { name: 'Tibur', message: 'oracle-Tibur-message' },
            { name: 'Caere', message: 'oracle-Caere-message' },
            { name: 'Antium', message: 'oracle-Antium-message' },
            { name: 'Rome', message: 'oracle-Rome-message' },
            { name: 'Tarentum', message: 'oracle-Tarentum-message' },
            { name: 'Veii', message: 'oracle-Veii-message' },
            { name: 'Nicaea', message: 'oracle-Nicaea-message' },
            { name: 'Alexandria', message: 'oracle-Alexandria-message' },
            { name: 'Antioch', message: 'oracle-Antioch-message' },
            { name: 'Apamea', message: 'oracle-Apamea-message' },
            { name: 'Dura-Europos', message: 'oracle-Dura-Europos-message' },
            { name: 'Heliopolis', message: 'oracle-Heliopolis-message' },
            { name: 'Palmyra', message: 'oracle-Palmyra-message' },
            { name: 'Pessinus', message: 'oracle-Pessinus-message' },
            { name: 'Sardis', message: 'oracle-Sardis-message' },
            { name: 'Ephesus', message: 'oracle-Ephesus-message' },
            { name: 'Miletus', message: 'oracle-Miletus-message' },
            { name: 'Colophon', message: 'oracle-Colophon-message' },
            { name: 'Hierapolis', message: 'oracle-Hierapolis-message' },
            { name: 'Aphrodisias', message: 'oracle-Aphrodisias-message' },
            { name: 'Side', message: 'oracle-Side-message' },
            { name: 'Tarsus', message: 'oracle-Tarsus-message' },
            { name: 'Mallus', message: 'oracle-Mallus-message' },
            { name: 'Argos', message: 'oracle-Argos-message' },
            { name: 'Thebes', message: 'oracle-Thebes-message' },
            { name: 'Corinth', message: 'oracle-Corinth-message' },
            { name: 'Megara', message: 'oracle-Megara-message' },
            { name: 'Sparta', message: 'oracle-Sparta-message' },
            { name: 'Epidaurus', message: 'oracle-Epidaurus-message' },
            { name: 'Eleusis', message: 'oracle-Eleusis-message' },
            { name: 'Samothrace', message: 'oracle-Samothrace-message' },
            { name: 'Delos', message: 'oracle-Delos-message' },
            { name: 'Rhodes', message: 'oracle-Rhodes-message' },
            { name: 'Cyprus', message: 'oracle-Cyprus-message' },
            { name: 'Crete', message: 'oracle-Crete-message' },
            { name: 'Sicily', message: 'oracle-Sicily-message' },
            { name: 'Carthage', message: 'oracle-Carthage-message' },
            { name: 'Leptis Magna', message: 'oracle-Leptis-Magna-message' },
            { name: 'Cyrene', message: 'oracle-Cyrene-message' },
            { name: 'Memphis', message: 'oracle-Memphis-message' },
            { name: 'Thebes Egypt', message: 'oracle-Thebes-Egypt-message' },
            { name: 'Abydos', message: 'oracle-Abydos-message' },
            { name: 'Dendera', message: 'oracle-Dendera-message' },
            { name: 'Edfu', message: 'oracle-Edfu-message' },
            { name: 'Philae', message: 'oracle-Philae-message' },
            { name: 'Kom Ombo', message: 'oracle-Kom-Ombo-message' },
            { name: 'Canopus', message: 'oracle-Canopus-message' },
            { name: 'Erythrae', message: 'oracle-Erythrae-message' },
            { name: 'Gortyna', message: 'oracle-Gortyna-message' },
            { name: 'Hybla', message: 'oracle-Hybla-message' },
            { name: 'Ismenius', message: 'oracle-Ismenius-message' },
            { name: 'Labranda', message: 'oracle-Labranda-message' },
            { name: 'Oropus', message: 'oracle-Oropus-message' },
            { name: 'Telmessus', message: 'oracle-Telmessus-message' },
            { name: 'Xanthus', message: 'oracle-Xanthus-message' },
            { name: 'Aegae', message: 'oracle-Aegae-message' },
            { name: 'Aegina', message: 'oracle-Aegina-message' },
            { name: 'Aigai Macedonia', message: 'oracle-Aigai-Macedonia-message' },
            { name: 'Akrai Sicily', message: 'oracle-Akrai-Sicily-message' },
            { name: 'Aliphera', message: 'oracle-Aliphera-message' },
            { name: 'Amphiareion of Oropus', message: 'oracle-Amphiareion-of-Oropus-message' },
            { name: 'Ankyra', message: 'oracle-Ankyra-message' },
            { name: 'Anthedon', message: 'oracle-Anthedon-message' },
            { name: 'Aornum', message: 'oracle-Aornum-message' },
            { name: 'Aricia', message: 'oracle-Aricia-message' },
            { name: 'Arka Cyprus', message: 'oracle-Arka-Cyprus-message' },
            { name: 'Askalon', message: 'oracle-Askalon-message' },
            { name: 'Assos', message: 'oracle-Assos-message' },
            { name: 'Besa Egypt', message: 'oracle-Besa-Egypt-message' },
            { name: 'Boiotian Thebes', message: 'oracle-Boiotian-Thebes-message' },
            { name: 'Branchidae', message: 'oracle-Branchidae-message' },
            { name: 'Buto Egypt', message: 'oracle-Buto-Egypt-message' },
            { name: 'Byblos', message: 'oracle-Byblos-message' },
            { name: 'Calchas', message: 'oracle-Calchas-message' },
            { name: 'Castabala Cilicia', message: 'oracle-Castabala-Cilicia-message' },
            { name: 'Chalcis', message: 'oracle-Chalcis-message' },
            { name: 'Corope Thessaly', message: 'oracle-Corope-Thessaly-message' },
            { name: 'Corycian Cave', message: 'oracle-Corycian-Cave-message' },
            { name: 'Cume Italy', message: 'oracle-Cume-Italy-message' },
            { name: 'Daunia Italy', message: 'oracle-Daunia-Italy-message' },
            { name: 'Dion Macedonia', message: 'oracle-Dion-Macedonia-message' },
            { name: 'Erythrai Ionia', message: 'oracle-Erythrai-Ionia-message' },
            { name: 'Gargara', message: 'oracle-Gargara-message' },
            { name: 'Gela Sicily', message: 'oracle-Gela-Sicily-message' },
            { name: 'Histiaea', message: 'oracle-Histiaea-message' },
            { name: 'Hyampolis', message: 'oracle-Hyampolis-message' },
            { name: 'Hysiae', message: 'oracle-Hysiae-message' },
            { name: 'Ida Crete', message: 'oracle-Ida-Crete-message' },
            { name: 'Ikaros Cilicia', message: 'oracle-Ikaros-Cilicia-message' },
            { name: 'Kabeirion at Thebes', message: 'oracle-Kabeirion-at-Thebes-message' },
            { name: 'Klaros', message: 'oracle-Klaros-message' },
            { name: 'Kythnos', message: 'oracle-Kythnos-message' },
            { name: 'Laodicea on the Lycus', message: 'oracle-Laodicea-on-the-Lycus-message' },
            { name: 'Larissa on the Hermos', message: 'oracle-Larissa-on-the-Hermos-message' },
            { name: 'Lebadea', message: 'oracle-Lebadea-message' },
            { name: 'Lykosoura', message: 'oracle-Lykosoura-message' },
            { name: 'Magnesia on the Maeander', message: 'oracle-Magnesia-on-the-Maeander-message' },
            { name: 'Mallos Cilicia', message: 'oracle-Mallos-Cilicia-message' },
            { name: 'Mantineia', message: 'oracle-Mantineia-message' },
            { name: 'Marathon', message: 'oracle-Marathon-message' },
            { name: 'Megalopolis', message: 'oracle-Megalopolis-message' },
            { name: 'Myra Lycia', message: 'oracle-Myra-Lycia-message' },
            { name: 'Nasamones Libya', message: 'oracle-Nasamones-Libya-message' },
            { name: 'Nysa', message: 'oracle-Nysa-message' },
            { name: 'Olbia Scythia', message: 'oracle-Olbia-Scythia-message' },
            { name: 'Onchestos', message: 'oracle-Onchestos-message' },
            { name: 'Orchomenos Boeotia', message: 'oracle-Orchomenos-Boeotia-message' },
            { name: 'Pagasae', message: 'oracle-Pagasae-message' },
            { name: 'Patrai', message: 'oracle-Patrai-message' },
            { name: 'Pharai Achaea', message: 'oracle-Pharai-Achaea-message' },
            { name: 'Phaselis Lycia', message: 'oracle-Phaselis-Lycia-message' },
            { name: 'Phigalia', message: 'oracle-Phigalia-message' },
            { name: 'Phocis', message: 'oracle-Phocis-message' },
            { name: 'Pinara Lycia', message: 'oracle-Pinara-Lycia-message' },
            { name: 'Pitsa Corinthia', message: 'oracle-Pitsa-Corinthia-message' },
            { name: 'Praeneste Italy', message: 'oracle-Praeneste-Italy-message' },
            { name: 'Selinus Sicily', message: 'oracle-Selinus-Sicily-message' },
            { name: 'Smyrna', message: 'oracle-Smyrna-message' },
            { name: 'Sounion', message: 'oracle-Sounion-message' },
            { name: 'Stena in Aetolia', message: 'oracle-Stena-in-Aetolia-message' },
            { name: 'Syene Egypt', message: 'oracle-Syene-Egypt-message' },
            { name: 'Tanagra', message: 'oracle-Tanagra-message' },
            { name: 'Telphousa Boeotia', message: 'oracle-Telphousa-Boeotia-message' },
            { name: 'Tenos', message: 'oracle-Tenos-message' },
            { name: 'Thalamai Laconia', message: 'oracle-Thalamai-Laconia-message' },
            { name: 'Acheron', message: 'oracle-Acheron-message' },
            { name: 'Aegira', message: 'oracle-Aegira-message' },
            { name: 'Alexandria Troas', message: 'oracle-Alexandria-Troas-message' },
            { name: 'Amphilochian Argos', message: 'oracle-Amphilochian-Argos-message' },
            { name: 'Anabura', message: 'oracle-Anabura-message' },
            { name: 'Andros', message: 'oracle-Andros-message' },
            { name: 'Aornum in Thesprotia', message: 'oracle-Aornum-in-Thesprotia-message' },
            { name: 'Apollonia', message: 'oracle-Apollonia-message' },
            { name: 'Arca', message: 'oracle-Arca-message' },
            { name: 'Argos Amphilochicum', message: 'oracle-Argos-Amphilochicum-message' },
            { name: 'Asclepieion at Epidaurus', message: 'oracle-Asclepieion-at-Epidaurus-message' },
            { name: 'Asclepieion at Pergamum', message: 'oracle-Asclepieion-at-Pergamum-message' },
            { name: 'Asclepieion of Athens', message: 'oracle-Asclepieion-of-Athens-message' },
            { name: 'Asea', message: 'oracle-Asea-message' },
            { name: 'Athena Pronaia', message: 'oracle-Athena-Pronaia-message' },
            { name: 'Boeae', message: 'oracle-Boeae-message' },
            { name: 'Bura', message: 'oracle-Bura-message' },
            { name: 'Chaeronea', message: 'oracle-Chaeronea-message' },
            { name: 'Chalcedon', message: 'oracle-Chalcedon-message' },
            { name: 'Colossae', message: 'oracle-Colossae-message' },
            { name: 'Corone', message: 'oracle-Corone-message' },
            { name: 'Cyzicus', message: 'oracle-Cyzicus-message' },
            { name: 'Daulis', message: 'oracle-Daulis-message' },
            { name: 'Dodoni', message: 'oracle-Dodoni-message' },
            { name: 'Eryx', message: 'oracle-Eryx-message' },
            { name: 'Euromus', message: 'oracle-Euromus-message' },
            { name: 'Gaza', message: 'oracle-Gaza-message' },
            { name: 'Hermione', message: 'oracle-Hermione-message' },
            { name: 'Hypata', message: 'oracle-Hypata-message' },
            { name: 'Iasus', message: 'oracle-Iasus-message' },
            { name: 'Idalium', message: 'oracle-Idalium-message' },
            { name: 'Ilium', message: 'oracle-Ilium-message' },
            { name: 'Imbros', message: 'oracle-Imbros-message' },
            { name: 'Ischia', message: 'oracle-Ischia-message' },
            { name: 'Ithaca', message: 'oracle-Ithaca-message' },
            { name: 'Lapethus', message: 'oracle-Lapethus-message' },
            { name: 'Lerna', message: 'oracle-Lerna-message' },
            { name: 'Leucas', message: 'oracle-Leucas-message' },
            { name: 'Lindos', message: 'oracle-Lindos-message' },
            { name: 'Lycosura', message: 'oracle-Lycosura-message' },
            { name: 'Maeonia', message: 'oracle-Maeonia-message' },
            { name: 'Magarsus', message: 'oracle-Magarsus-message' },
            { name: 'Melos', message: 'oracle-Melos-message' },
            { name: 'Methone', message: 'oracle-Methone-message' },
            { name: 'Mopsium', message: 'oracle-Mopsium-message' },
            { name: 'Mopsuestia', message: 'oracle-Mopsuestia-message' },
            { name: 'Mostene', message: 'oracle-Mostene-message' },
            { name: 'Mycale', message: 'oracle-Mycale-message' },
            { name: 'Myndus', message: 'oracle-Myndus-message' },
            { name: 'Naxos', message: 'oracle-Naxos-message' },
            { name: 'Oenoe', message: 'oracle-Oenoe-message' },
            { name: 'Oeta', message: 'oracle-Oeta-message' },
            { name: 'Olynthus', message: 'oracle-Olynthus-message' },
            { name: 'Onchestus', message: 'oracle-Onchestus-message' },
            { name: 'Opus', message: 'oracle-Opus-message' },
            { name: 'Orchomenus', message: 'oracle-Orchomenus-message' },
            { name: 'Oricos', message: 'oracle-Oricos-message' },
            { name: 'Oropos', message: 'oracle-Oropos-message' },
            { name: 'Pellene', message: 'oracle-Pellene-message' },
            { name: 'Pherae', message: 'oracle-Pherae-message' },
            { name: 'Phlius', message: 'oracle-Phlius-message' },
            { name: 'Pisa', message: 'oracle-Pisa-message' },
            { name: 'Potniae', message: 'oracle-Potniae-message' },
            { name: 'Prasiae', message: 'oracle-Prasiae-message' },
            { name: 'Samos', message: 'oracle-Samos-message' },
            { name: 'Segesta', message: 'oracle-Segesta-message' },
            { name: 'Sicyon', message: 'oracle-Sicyon-message' },
            { name: 'Soli', message: 'oracle-Soli-message' },
            { name: 'Stratonicea', message: 'oracle-Stratonicea-message' },
            { name: 'Styra', message: 'oracle-Styra-message' }
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

    consultOracle() {
        const lang = this.getAttribute('language') || 'en';
        const trans = this.translations[lang];
        const resultsContainer = this.shadowRoot.querySelector('#results');
        resultsContainer.innerHTML = '';

        const oracle = this.oracles[Math.floor(Math.random() * this.oracles.length)];
        const oracleName = trans[`oracle-name-${oracle.name}`] || oracle.name;

        const oracleEl = document.createElement('div');
        oracleEl.classList.add('oracle');
        
        oracleEl.innerHTML = `
            <h3>${trans['oracle-speaks'].replace('{oracleName}', oracleName)}</h3>
            <p>${trans[oracle.message]}</p>
        `;
        resultsContainer.appendChild(oracleEl);
        
        setTimeout(() => {
            oracleEl.classList.add('revealed');
        }, 100);
    }

    render() {
        const lang = this.getAttribute('language') || 'en';
        const trans = this.translations[lang];
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    font-family: 'Cinzel', serif;
                    color: #333;
                    background: var(--tg-theme-bg-color, #f5f5dc) url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M0 0 H100 V100 H0Z" fill="none" stroke="rgba(210,180,140,0.3)" stroke-width="1"/></svg>');
                    padding: 2rem;
                    border-radius: 15px;
                }
                 .meander-border {
                    border: 10px solid transparent;
                    border-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 25h25v25h25v25h25v25h25M75 0v25h-25v25h-25v25h-25' fill='none' stroke='%23c0a080' stroke-width='10'/%3E%3C/svg%3E") 10 round;
                    padding: 1rem;
                }
                h2, p {
                    font-family: 'Cinzel', serif;
                    color: var(--tg-theme-text-color, #333);
                }
                 #consult-oracle {
                    font-family: 'Cinzel', serif;
                    background: linear-gradient(145deg, #d4af37, #b08f26);
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    padding: 15px 30px;
                    font-size: 1.2rem;
                    cursor: pointer;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3), inset 0 -2px 2px rgba(0,0,0,0.4);
                    transition: all 0.2s ease;
                    position: relative;
                    overflow: hidden;
                }
                #consult-oracle:before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 40%);
                    transition: all 0.5s ease;
                    transform: scale(0);
                }
                #consult-oracle:hover:before {
                    transform: scale(2);
                }
                #results {
                    margin-top: 2.5rem;
                    perspective: 1000px;
                }
                .oracle {
                    background-color: rgba(255,255,255,0.8);
                    border: 1px solid rgba(210,180,140,0.5);
                    border-radius: 15px;
                    padding: 2rem;
                    margin: 0 auto;
                    max-width: 600px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    transform: rotateX(90deg);
                    opacity: 0;
                    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease;
                    transform-origin: top center;
                }
                .oracle.revealed {
                    transform: rotateX(0deg);
                    opacity: 1;
                }
                .oracle h3 {
                    font-size: 1.8rem;
                    color: #8B4513;
                    margin-top: 0;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
                }
                .oracle p {
                    font-family: 'Merriweather', serif;
                    font-size: 1.2rem;
                    line-height: 1.8;
                    color: #333;
                }
            </style>
            <div class="meander-border">
                <h2>${trans['greco-roman-oracles-title']}</h2>
                <p>${trans['greco-roman-oracles-description']}</p>
                <div>
                    <button id="consult-oracle">${trans['consult-oracle-button']}</button>
                </div>
                <div id="results"></div>
            </div>
        `;
        this.shadowRoot.querySelector('#consult-oracle').addEventListener('click', () => this.consultOracle());
    }
}

customElements.define('greco-roman-oracles', GrecoRomanOracles);
