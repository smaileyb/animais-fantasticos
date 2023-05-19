export default function iniciarScrollSuave() {
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