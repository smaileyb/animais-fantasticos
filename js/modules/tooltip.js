export default function iniciarTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip')

  if (tooltips) {
    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver)
    })

    function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this)

      onMouseMove.tooltipBox = tooltipBox
      this.addEventListener("mousemove", onMouseMove)

      this.addEventListener("mouseleave", () => {
        tooltipBox.remove()
        this.removeEventListener("mousemove", onMouseMove)
      })
    }

    //passando objeto como callback com o handleEvent
    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px"
        this.tooltipBox.style.left = event.pageX + 20 + "px"
      }
    }

    function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div")
      const texto = element.getAttribute("aria-label")
      tooltipBox.classList.add("tooltip")
      tooltipBox.innerText = texto
      document.body.appendChild(tooltipBox)
      return tooltipBox
    }
  }
}

