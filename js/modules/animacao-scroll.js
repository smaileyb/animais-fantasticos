export default class AnimacaoScroll {
  constructor(sectionsAnimados) {
    this.sectionsAnimados = document.querySelectorAll(sectionsAnimados)
    this.windowMetade = window.innerHeight * 0.6

    // bind
    this.checkDistance = this.checkDistance.bind(this)

  }
  // pega a distância de cada item em relação ao topo do site e salva em um objeto, utilizando-se da desestruturação para transformar a nodeList em um Array
  getDistance() {
    this.distance = [...this.sectionsAnimados].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      }
    })
  }
  // Verifica a distância de cada section em relação ao scroll do site
  checkDistance() {
    this.distance.forEach(item => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo")
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo")
      }

    })
  }
  // inicialização
  init() {
    if (this.sectionsAnimados.length) {
      // Ativação inicial para o conteúdo inicial aparecer e ser animado
      this.getDistance()
      this.checkDistance()
      window.addEventListener("scroll", this.checkDistance)
    }
    return this
  }
  // remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance)
  }
}