export default function fetchBitcoin(url, target) {
  const valorBitcoin = document.querySelector(target)

  fetch(url)
    .then(resposta => resposta.json())
    .then(respostaJSON => valorBitcoin.innerText = (100 / respostaJSON.BRL.sell).toFixed(4))
    .catch(erro => {
      console.log(Error(erro))
    })

}
