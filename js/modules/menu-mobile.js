import outsideClick from "./outsideclick.js";

export default function iniciarMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']")
  const menuList = document.querySelector("[data-menu='list']")
  const eventos = ["click", "touchstart"]

  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu)
    })

    function openMenu(event) {
      menuList.classList.toggle("ativo")
      menuButton.classList.toggle("ativo")
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("ativo")
        menuButton.classList.remove("ativo")
      })
    }
  }
}

