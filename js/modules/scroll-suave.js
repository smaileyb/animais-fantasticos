export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links)
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        // a propriedade a seguir indica que o scroll tem que ser feito até o topo da seção
        block: "start",
      }
    } else {
      this.options = options
    }
    // supostamente é um padrão fazer o "bind" de uma função que você usará como callback
    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView(this.options)
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection)
    })

  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent()
    }
    return this
  }
}