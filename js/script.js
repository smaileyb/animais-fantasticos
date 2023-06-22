import ScrollSuave from "./modules/scroll-suave.js"
import iniciarAccordion from "./modules/menu-accordion.js"
import iniciarNavTab from "./modules/navegacao-tabs.js"
import iniciarModal from "./modules/modal.js"
import iniciarTooltip from './modules/tooltip.js';
import iniciarDropDownMenu from './modules/dropdown-menu.js';
import iniciarMenuMobile from "./modules/menu-mobile.js"
import iniciarHorarioFuncionamento from "./modules/horario-funcionamento.js"
import iniciarFetchAnimais from './modules/fetch-animais.js';
import iniciarFetchBitcoin from "./modules/fetch-bitcoin.js"
import animacaoScroll from "./modules/animacao-scroll.js"


// SCROLL SUAVE NO MENU INTERNO
const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']")
scrollSuave.init()
// MENU ACCORDION
iniciarAccordion()
// NAVEGAÇÃO POR TABS
iniciarNavTab()
//MODAL
iniciarModal()
//TOOLTIP
iniciarTooltip()
//DROPDOWN MENU
iniciarDropDownMenu()
//MENU MOBILE
iniciarMenuMobile()
//HORÁRIO DE FUNCIONAMENTO
iniciarHorarioFuncionamento()
//FETCH ANIMAIS DO JSON
iniciarFetchAnimais()
//FETCH BITCOINS
iniciarFetchBitcoin()
//ANIMAÇÃO AO SCROLL  
animacaoScroll()