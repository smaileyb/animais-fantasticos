import AnimaNumeros from "./anima-numeros.js"

export default function fetchAnimais(url, target) {

  //cria div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div")
    div.classList.add("numeros-animal")
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
    return div
  }

  // utiliza o createAnimal e inclui a div criada na seção target
  const secaoNumeros = document.querySelector(target)
  function preencherAnimais(animal) {
    const divAnimais = createAnimal(animal)
    secaoNumeros.appendChild(divAnimais)
  }

  // iniciando função importada para animar números
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros")
    animaNumeros.init()
  }

  // Puxa os animais pelo JSON e cria cada animal utilizando o createAnimal()
  async function criarAnimais() {
    try {
      // faz o fetch e espera a resposta e transforma em json
      const animaisResposta = await fetch(url)
      const animaisJSON = await animaisResposta.json()
      // após transformar em JSON, ativa as funções para preencher e animar os números
      animaisJSON.forEach(animal => preencherAnimais(animal))
      animaAnimaisNumeros()
    } catch (erro) {
      console.log(erro)
    }
  }
  return criarAnimais()
}
