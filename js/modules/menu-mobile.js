import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, triggerEvents) {
    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    /* define o touchstart e o click como argumento padrão para os eventos que darão o trigger no dropdown menu, caso o usuário não especifique os próprios eventos em que quer inserir o Listener */
    if (this.triggerEvents === undefined) {
      this.triggerEvents = ['touchstart', 'click']
    } else {
      this.triggerEvents = triggerEvents
    }

    this.activeClass = "ativo"

    // bind da callback
    this.openMenu = this.openMenu.bind(this)

  }

  openMenu() {
    this.menuList.classList.toggle(this.activeClass)
    this.menuButton.classList.toggle(this.activeClass)
    outsideClick(this.menuList, this.triggerEvents, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuButton.classList.remove(this.activeClass)
    })
  }

  addListener() {
    this.triggerEvents.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu)
    })
  }
  // inicializa os métodos da classe
  init() {
    if (this.menuButton && this.menuList) {
      this.addListener()
    }
    return this
  }
}

