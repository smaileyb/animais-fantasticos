export default function iniciarModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']")
  const botaoFechar = document.querySelector("[data-modal='fechar']")
  const modalContainer = document.querySelector("[data-modal='container']")

  if (botaoAbrir && botaoFechar && modalContainer) {

    function toggleModal(event) {
      event.preventDefault()
      modalContainer.classList.toggle("ativo")
    }
    function cliqueForaModal(event) {
      /* como a função está sendo executada dentro do escutador de eventos colocado no MediaElementAudioSourceNode, o this é o próprio elemento, assim, quando conferimos se event.target, isto é, o local exato onde foi feito o clique é exatamente igual ao this, conseguimos fazer com que somente os cliques fora do modal também fechem ele */
      if (event.target === this)
        fecharModal()
    }

    botaoAbrir.addEventListener("click", toggleModal)
    botaoFechar.addEventListener("click", toggleModal)
    modalContainer.addEventListener("click", cliqueForaModal)
  }
}


