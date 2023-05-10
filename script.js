// NAVEGAÇÃO POR TABS

function iniciarNavTab() {
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
iniciarNavTab()

// MENU ACCORDION

function iniciarAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt")
  // verificação pra evitar erro
  if (accordionList.length) {
    accordionList[0].classList.add("ativo")
    accordionList[0].nextElementSibling.classList.add("ativo")

    accordionList.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("ativo")
        this.nextElementSibling.classList.toggle("ativo")
      })
    })

  }
}
iniciarAccordion()

// SCROLL SUAVE NO MENU INTERNO
function iniciarScrollSuave() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#'")
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href")
        const section = document.querySelector(href)

        section.scrollIntoView({
          behavior: "smooth",
          // a propriedade a seguir indica que o scroll tem que ser feito até o topo da seção
          block: "start",
        })

        // FORMA ALTERNATIVA
        /*const topoSection = section.offsetTop
         window.scrollTo({
          top: topoSection,
          behavior: 'smooth'
        }) */

      })
    })
  }
}
iniciarScrollSuave()

//ANIMAÇÃO AO SCROLL  
function animacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']")
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6


    function animaScroll() {
      sections.forEach((section) => {
        //pegando o topo da seção com o método getBoundingClientRect().top e tirando cerca de 60% da altura da tela disponível, para que a animação fique gradativa
        const sectionTop = section.getBoundingClientRect().top
        const telaEstaVisível = (sectionTop - windowMetade) < 0
        if (telaEstaVisível) {
          section.classList.add("ativo")
        } else {
          section.classList.remove("ativo")
        }
      })
    }
    // Ativação inicial para o conteúdo inicial aparecer e ser animado
    animaScroll()

    window.addEventListener("scroll", animaScroll)
  }
}
animacaoScroll()
