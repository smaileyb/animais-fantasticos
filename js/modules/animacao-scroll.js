export default class AnimacaoScroll {
  constructor(sectionsAnimados) {
    this.sectionsAnimados = document.querySelectorAll(sectionsAnimados)
    this.windowMetade = window.innerHeight * 0.6

    // bind
    this.animaScroll = this.animaScroll.bind(this)

  }
  animaScroll() {
    this.sectionsAnimados.forEach((section) => {
      //pegando o topo da seção com o método getBoundingClientRect().top e tirando cerca de 60% da altura da tela disponível, para que a animação fique gradativa
      const sectionTop = section.getBoundingClientRect().top
      const telaEstaVisível = (sectionTop - this.windowMetade) < 0
      if (telaEstaVisível) {
        section.classList.add("ativo")
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo")
      }
    })
  }
  init() {
    if (this.sectionsAnimados.length) {
      // Ativação inicial para o conteúdo inicial aparecer e ser animado
      this.animaScroll()
      window.addEventListener("scroll", this.animaScroll)
    }

  }
}