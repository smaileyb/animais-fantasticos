export default function iniciarFetchBitcoin() {
  const valorBitcoin = document.querySelector(".btc-preco")

  fetch("https://blockchain.info/ticker")
    .then(resposta => resposta.json())
    .then(respostaJSON => valorBitcoin.innerText = (100 / respostaJSON.BRL.sell).toFixed(4))
    .catch(erro => {
      console.log(Error(erro))
    })

}
