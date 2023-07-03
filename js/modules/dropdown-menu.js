import outsideClick from "./outsideclick.js"

export default class DropDownMenu {
  constructor(dropdownMenus, triggerEvents) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeClass = "ativo"
    /* define o touchstart e o click como argumento padrão para os eventos que darão o trigger no dropdown menu, caso o usuário não especifique os próprios eventos em que quer inserir o Listener */
    if (this.triggerEvents === undefined) {
      this.triggerEvents = ['touchstart', 'click']
    } else {
      this.triggerEvents = triggerEvents
    }

    //bind
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this)

  }
  // ativa o dropdownmenu e adiciona a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.triggerEvents, () => {
      element.classList.remove(this.activeClass)
    })
  }
  // adiciona os eventos para ativar o dropdown menu
  addListener() {
    this.dropdownMenus.forEach((menu) => {
      this.triggerEvents.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropDownMenu)
      })
    })
  }
  // inicia os métodos da classe
  init() {
    if (this.dropdownMenus.length) {
      this.addListener()
    }
  }
}



