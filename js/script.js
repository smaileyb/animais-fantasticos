import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/menu-accordion.js"
import TabNav from "./modules/navegacao-tabs.js"
import Modal from "./modules/modal.js"
import Tooltip from './modules/tooltip.js';
import iniciarDropDownMenu from './modules/dropdown-menu.js';
import iniciarMenuMobile from "./modules/menu-mobile.js"
import iniciarHorarioFuncionamento from "./modules/horario-funcionamento.js"
import fetchAnimais from './modules/fetch-animais.js';
import iniciarFetchBitcoin from "./modules/fetch-bitcoin.js"
import animacaoScroll from "./modules/animacao-scroll.js"


// SCROLL SUAVE NO MENU INTERNO
const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']")
scrollSuave.init()
// LIST ACCORDION
const accordionList = new Accordion("[data-anime='accordion'] dt")
accordionList.init()
// NAVEGAÇÃO POR TABS
const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section")
tabNav.init()
//MODAL
const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']")
modal.init()
//TOOLTIP
const tooltip = new Tooltip('[data-tooltip')
tooltip.init()
//FETCH ANIMAIS DO JSON
fetchAnimais("../../animaisapi.json", ".numeros-grid")
//DROPDOWN MENU
iniciarDropDownMenu()
//MENU MOBILE
iniciarMenuMobile()
//HORÁRIO DE FUNCIONAMENTO
iniciarHorarioFuncionamento()
//FETCH BITCOINS
iniciarFetchBitcoin()
//ANIMAÇÃO AO SCROLL  
animacaoScroll()