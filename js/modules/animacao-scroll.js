export default function animacaoScroll() {
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