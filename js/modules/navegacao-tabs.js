export default class iniciarNavTab {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = "ativo"
  }
  // ativa a tab com base no index
  activeTab(index) {
    //remove a classe 'ativo' das sections pra depois incluir em uma específica
    //removendo
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass)
    })
    const direcaoAnimacao = this.tabContent[index].dataset.anime
    //adicionando em uma específica  
    this.tabContent[index].classList.add(this.activeClass, direcaoAnimacao)
  }
  // adiciona os eventos nas tabs
  addTabNavEvent() {
    //adicionando eventlistener para cada imagem
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // deixando o primeiro item da lista já ativado
      this.activeTab(0)
      // inserindo eventos para ativar demais itens
      this.addTabNavEvent()
    }
  }



}