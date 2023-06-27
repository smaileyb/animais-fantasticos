export default class Tooltip {
  constructor(tooltip) {
    this.tooltip = document.querySelectorAll(tooltip)

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)

  }
  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div")
    const texto = element.getAttribute("aria-label")
    tooltipBox.classList.add("tooltip")
    tooltipBox.innerText = texto
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
  }
  // move a tooltip com base na posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 240}px`
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`

    }
  }
  // remove a tooltip e os eventos de mouseMove e mouseLeave
  onMouseLeave(event) {
    this.tooltipBox.remove()
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave)
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove)
  }
  // cria a tooltip e adiciona os eventos de mouseMove e mouseLeave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(currentTarget)

    currentTarget.addEventListener("mousemove", this.onMouseMove)
    currentTarget.addEventListener("mouseleave", this.onMouseLeave)
  }
  // adiciona os eventos de mouseOver a cada tooltip existente
  addTooltipEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver)
    })
  }
  init() {
    if (this.tooltip) {
      this.addTooltipEvent()
    }
    return this
  }
}
