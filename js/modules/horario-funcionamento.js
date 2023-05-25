export default function iniciarHorarioFuncionamento() {
  const funcionamento = document.querySelector("[data-semana")
  //pegamos o conteúdo do atributo dataset "semana", utilizamos o método de string split() com o divisor na "," para criar um array com os itens e depois usamos o map() para iterar pelos elementos, usando como parâmetro o construtor Number - o que faz com que seja retornado um array com valores númericos resgatados do atributo
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number)
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number)


  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  //usando o método indexOf verificamos se o valor correspondente ao diaAgora (obtido com getDay()) está no array diasSemana e considerando que ele retorna -1 para quando não encontra nada, usamos isso para definir se o estabelecimento estaria aberto de acordo com a informação do dia da semana no momento da visita no site
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

  //criamos um ternário que verifica se o horário atual (obtido com getHours()) é um valor entre o horário de abertura (horarioSemana[0]) e o horário de fechamento (horarioSemana[1])
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

  //depois com base em ambas as verificações acima, estipulamos se é o caso de atribuir ou não uma classe específica para o elemento do html, criando um elemento visual para facilitar que o usuário saiba se o estabelecimento está ou não aberto na hora da consulta
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto")
  }

}

