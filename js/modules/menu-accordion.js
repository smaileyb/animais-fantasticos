export default function iniciarAccordion() {
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