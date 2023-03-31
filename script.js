// Retorne no console todas as imagens do site
// console.log(document.querySelectorAll("img"));

// Retorne no console apenas as imagens que começaram com a palavra imagem

// console.log(document.querySelectorAll("[src^='img/imagem']"))

// Selecione todos os links internos (onde o href começa com #)

// const linksInternos = document.querySelectorAll("[href^='#']")
// console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

// const primeiroH2 = document.querySelector(".animais-descricao h2")
// console.log(primeiroH2);

// Selecione o último p do site
// console.log(document.querySelector(".copy p"));

// Mostre no console cada parágrado do site

/* const paragrafos = document.querySelectorAll("p")
paragrafos.forEach((p) => console.log(p)) */

// Mostre o texto dos parágrafos no console

/* paragrafos.forEach((p) => console.log(p.innerText)) */

// Como corrigir os erros abaixo:
/* const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++); */

// Adicione a classe ativo a todos os itens do menu
/* const itensMenu = document.querySelectorAll(".menu a")
itensMenu.forEach((item) => {
  item.classList.add("ativo")
}) */

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
/* const ativos = document.querySelectorAll(".ativo")

ativos.forEach((item) => {
  console.log(item.href);
  if (item.innerText.toLowerCase() !== "animais") {
    item.classList.remove("ativo")
  }
}) */

// Verifique se as imagens possuem o atributo alt
/* const imgs = document.querySelectorAll("img")
imgs.forEach((img) => {
  if (img.hasAttribute("alt")) {
    console.log(`Tudo ok com a imagem de src ${img.getAttribute("src")}!`)
  } else {
    console.log(`A imagem com src ${img.getAttribute("src")} não tem atributo alt`);
  }
}) */


// Modifique o href do link externo no menu

/* const linkExterno = document.querySelector(".menu [href^='https://']")
console.log(linkExterno)
linkExterno.setAttribute("href", "https://google.com")
console.log(linkExterno) */

// Verifique a distância da primeira imagem
// em relação ao topo da página

/* const primeiraImg = document.querySelector("img")
console.log(`A distância da primeira imagem para o topo da página é ${primeiraImg.offsetTop}px`)
console.log(primeiraImg.clientHeight); */

// Retorne a soma da largura de todas as imagens

/* const imgs = document.querySelectorAll("img")
let somaLargura = 0
imgs.forEach((img) => {
  const larguraImg = img.getBoundingClientRect().width
  console.log(larguraImg)
  somaLargura += larguraImg
})
console.log(`A soma da largura das imagens é ${somaLargura}`); */


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

/* const links = document.querySelectorAll("a")

links.forEach((link, index) => {
  let larguraLink = link.getBoundingClientRect().width
  let alturaLink = link.getBoundingClientRect().height

  console.log(`O link ${index + 1} tem ${larguraLink} de largura e ${alturaLink} de altura`);
  if (larguraLink >= 48 && alturaLink >= 48) {
    console.log(`O link ${index + 1} tem o mínimo recomendado`);
  } else {
    console.log(`O link ${index + 1} não tem o mínimo recomendado`);
  }
}) */

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

/* const navegadorPequeno = window.matchMedia("(max-width: 720px)").matches

if (navegadorPequeno) {
  const menu = document.querySelector(".menu")
  menu.classList.add("menu-mobile")
} */


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

/* const links = document.querySelectorAll("a[href^='#']")

function checkAndRemove() {
  links.forEach((link) => {
    if (link.classList.contains("ativo")) {
      link.classList.remove("ativo")
    }
  })
}

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault()
    checkAndRemove()
    event.target.classList.add("ativo")
  })
})

console.log(links); */


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/* const body = document.body

body.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.remove()
}) */


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
/* window.addEventListener("keydown", (event) => {
  if (event.key == "t")
    document.documentElement.style.fontSize = "120%"
}) */




// Duplique o menu e adicione ele em copy

/* const menu = document.querySelector(".menu")
const footer = document.querySelector(".copy")

const menuClone = menu.cloneNode(true)

footer.appendChild(menuClone) */


// Selecione o primeiro DT da dl de Faq

/* const faqLista = document.querySelector(".faq-lista")
const primeiroDt = faqLista.querySelector("dt")
console.log(primeiroDt) */


// Selecione o DD referente ao primeiro DT

/* const primeiroDd = primeiroDt.nextElementSibling
console.log(primeiroDd)
 */
// Substitua o conteúdo html de .faq pelo de .animais

/* const faq = document.querySelector(".faq")
const animais = document.querySelector(".animais")

faq.innerHTML = animais.innerHTML

faq.classList.add("animais") */


// SUMIR COM A IMAGEM CLICADA
// const imgs = document.querySelectorAll("img")
// imgs.forEach((img) => {
//   img.addEventListener("click", (event) => {
//     event.target.style.display = "none"
//   })
// })

// NAVEGAÇÃO POR TABS

function iniciarNavTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li")
  const tabContent = document.querySelectorAll(".js-tabcontent section")
  if (tabMenu.length && tabContent.length) {
    //deixando o primeiro item da lista já ativado
    tabContent[0].classList.add("ativo")

    function activeTab(index) {
      //remove a classe 'ativo' das sections pra depois incluir em uma específica
      //removendo
      tabContent.forEach((section) => {
        section.classList.remove("ativo")
      })
      //adicionando em uma específica  
      tabContent[index].classList.add("ativo")
    }
    //adicionando eventlistener para cada imagem
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        activeTab(index)
      })
    })

  }
}
iniciarNavTab()

// MENU ACCORDION

function iniciarAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt")
  // verificação pra evitar erro
  if (accordionList.length) {
    accordionList[0].classList.add("ativo")
    accordionList[0].nextElementSibling.classList.add("ativo")

    accordionList.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("ativo")
        this.nextElementSibling.classList.toggle("ativo")
      })
    })

  }
}
iniciarAccordion()

// SCROLL SUAVE NO MENU INTERNO
function iniciarScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#'")
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href")
        const section = document.querySelector(href)

        section.scrollIntoView({
          behavior: "smooth",
          // a propriedade a seguir indica que o scroll tem que ser feito até o topo da seção
          block: "start",
        })

        // FORMA ALTERNATIVA
        /*const topoSection = section.offsetTop
         window.scrollTo({
          top: topoSection,
          behavior: 'smooth'
        }) */

      })
    })
  }
}
iniciarScrollSuave()

//ANIMAÇÃO AO SCROLL  
function animacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll")
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
animacaoScroll()
