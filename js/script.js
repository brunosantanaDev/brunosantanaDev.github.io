document.documentElement.className += " js";

import initScrollSuaveLinkInterno from "./modulos/scrollSuaveLinksInterno.js";
import initAnimaNome from "./modulos/animaNome.js";
import initMenuHamburgue from "./modulos/menu-hamburgue.js";
import initBarrinhas from "./modulos/barrinhas.js";
import {animacaoDesktop, animacaoMobile} from "./modulos/animacaoScroll.js";

initScrollSuaveLinkInterno();
initAnimaNome();
initMenuHamburgue();
initBarrinhas();
animacaoDesktop();
animacaoMobile();