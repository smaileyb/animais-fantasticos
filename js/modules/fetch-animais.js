import AnimaNumeros from "./anima-numeros.js"

export default function iniciarFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResposta = await fetch(url)
      const animaisJSON = await animaisResposta.json()
      const secaoNumeros = document.querySelector(".numeros-grid")

      animaisJSON.forEach(animal => {
        const divAnimais = createAnimal(animal)
        secaoNumeros.appendChild(divAnimais)
      })
      // iniciando anima números
      const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros")
      animaNumeros.init()

    } catch (erro) {
      console.log(erro)
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div")
    div.classList.add("numeros-animal")
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  fetchAnimais("./animaisapi.json")
}
