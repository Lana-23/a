import { en as enCore } from './en.js';
import { ru as ruCore } from './ru.js';
import { runicDivination as enRunic } from './en/runic-divination.js';
import { runicDivination as ruRunic } from './ru/runic-divination.js';
import { slavicKostromancy as enSlavic } from './en/slavic-kostromancy.js';
import { slavicKostromancy as ruSlavic } from './ru/slavic-kostromancy.js';
import { druidDivination as enDruid } from './en/druid-divination.js';
import { druidDivination as ruDruid } from './ru/druid-divination.js';
import { iChing as enIChing } from './en/i-ching.js';
import { iChing as ruIChing } from './ru/i-ching.js';
import { koreanPendulum as enKoreanPendulum } from './en/korean-pendulum.js';
import { koreanPendulum as ruKoreanPendulum } from './ru/korean-pendulum.js';
import { caribbeanDice as enCaribbean } from './en/caribbean-dice.js';
import { caribbeanDice as ruCaribbean } from './ru/caribbean-dice.js';
import { fortuneCookie as enFortuneCookie } from './en/fortune-cookie.js';
import { fortuneCookie as ruFortuneCookie } from './ru/fortune-cookie.js';
import { crystalBall as enCrystalBall } from './en/crystal-ball.js';
import { crystalBall as ruCrystalBall } from './ru/crystal-ball.js';
import { egyptianPyramids as enEgyptianPyramids } from './en/egyptian-pyramids.js';
import { egyptianPyramids as ruEgyptianPyramids } from './ru/egyptian-pyramids.js';
import { grecoRomanOracles as enGrecoRomanOracles } from './en/greco-roman-oracles.js';
import { grecoRomanOracles as ruGrecoRomanOracles } from './ru/greco-roman-oracles.js';
import { mayanGlyphs as enMayanGlyphs } from './en/mayan-glyphs.js';
import { mayanGlyphs as ruMayanGlyphs } from './ru/mayan-glyphs.js';
import { thaiFigurines as enThaiFigurines } from './en/thai-figurines.js';
import { thaiFigurines as ruThaiFigurines } from './ru/thai-figurines.js';


export const translations = {
    en: {
        ...enCore,
        ...enRunic,
        ...enSlavic,
        ...enDruid,
        ...enIChing,
        ...enKoreanPendulum,
        ...enCaribbean,
        ...enFortuneCookie,
        ...enCrystalBall,
        ...enEgyptianPyramids,
        ...enGrecoRomanOracles,
        ...enMayanGlyphs,
        ...enThaiFigurines
    },
    ru: {
        ...ruCore,
        ...ruRunic,
        ...ruSlavic,
        ...ruDruid,
        ...ruIChing,
        ...ruKoreanPendulum,
        ...ruCaribbean,
        ...ruFortuneCookie,
        ...ruCrystalBall,
        ...ruEgyptianPyramids,
        ...ruGrecoRomanOracles,
        ...ruMayanGlyphs,
        ...ruThaiFigurines
    }
};
