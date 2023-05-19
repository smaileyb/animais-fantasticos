export default function iniciarNavTab() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li")
  const tabContent = document.querySelectorAll("[data-tab='content'] section")
  if (tabMenu.length && tabContent.length) {
    //deixando o primeiro item da lista já ativado
    tabContent[0].classList.add("ativo")

    function activeTab(index) {
      //remove a classe 'ativo' das sections pra depois incluir em uma específica
      //removendo
      tabContent.forEach((section) => {
        section.classList.remove("ativo")
      })
      const direcaoAnimacao = tabContent[index].dataset.anime
      //adicionando em uma específica  
      tabContent[index].classList.add("ativo", direcaoAnimacao)
    }
    //adicionando eventlistener para cada imagem
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        activeTab(index)
      })
    })

  }
}