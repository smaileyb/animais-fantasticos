export default class AnimaNumeros {
  constructor(numeros, observerClass, alvoObservador) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerClass = observerClass
    this.alvoObservador = document.querySelector(alvoObservador)

    // bind
    this.handleMutation = this.handleMutation.bind(this)

  }
  // recebe um elemento do DOM com um número em seu texto e incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
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
  }
  // ativa incrementar número para cada número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observador.disconnect()
      this.animaNumeros()
    }
  }
  addMutationObserver() {
    //COLOCANDO UM OBSERVADOR PARA VERIFICAR MUDANÇAS NESTA SECTION, DE MODO QUE A ANIMAÇÃO ACONTEÇA APENAS QUANDO ELA RECEBER A CLASSE .ativo DO SCRIPT animacao-scroll.js
    this.observador = new MutationObserver(this.handleMutation)
    this.observador.observe(this.alvoObservador, { attributes: true })
  }
  init() {
    if (this.numeros.length && this.alvoObservador) {
      this.addMutationObserver()
      this.animaNumeros()
    }
    return this
  }



}
