export default class iniciarModal {
  constructor(abrir, fechar, container) {
    this.botaoAbrir = document.querySelector(abrir)
    this.botaoFechar = document.querySelector(fechar)
    this.modalContainer = document.querySelector(container)
    this.activeClass = "ativo"

    this.cliqueForaModal = this.cliqueForaModal.bind(this)

  }
  // abre ou fecha o modal
  toggleModal(event) {
    this.modalContainer.classList.toggle(this.activeClass)
  }
  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal(event)
  }
  fecharModal() {
    this.modalContainer.classList.remove(this.activeClass)
  }
  // fecha modal quando clica fora
  cliqueForaModal(event) {
    if (event.target === this.modalContainer)
      this.fecharModal()
  }
  // adiciona os eventos
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", (event) => this.eventToggleModal(event))
    this.botaoFechar.addEventListener("click", (event) => this.eventToggleModal(event))
    this.modalContainer.addEventListener("click", this.cliqueForaModal)
  }
  // inicia a classe
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvents()
    }
    return this
  }
}