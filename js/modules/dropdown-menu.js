import outsideClick from "./outsideclick.js"

export default function iniciarDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown")
  // dropdownMenus.forEach((menu)=>{
  //   menu.addEventListener("click", handleClick)
  // })
  // ADICIONAR escutador de evento com mais de um fator desencadeante
  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })

  function handleClick(event) {
    event.preventDefault()
    this.classList.add("ativo")
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove("ativo")
    })

  }
}



