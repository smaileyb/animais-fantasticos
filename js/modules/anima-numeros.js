export default function iniciaAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]")

    numeros.forEach((numero) => {
      const total = Number(numero.innerText)
      const incremento = Math.floor(total / 100)
      let start = 0
      const timer = setInterval(() => {
        start += incremento
        numero.innerText = start
        if (start > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observador.disconnect()
      animaNumeros()
    }
  }

  const alvoObservador = document.querySelector(".numeros")
  //COLOCANDO UM OBSERVADOR PARA VERIFICAR MUDANÇAS NESTA SECTION, DE MODO QUE A ANIMAÇÃO ACONTEÇA APENAS QUANDO ELA RECEBER A CLASSE .ativo DO SCRIPT animacao-scroll.js
  const observador = new MutationObserver(handleMutation)
  observador.observe(alvoObservador, { attributes: true })

}
