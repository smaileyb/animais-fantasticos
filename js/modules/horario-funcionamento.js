export default class HorarioFuncionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento)
    if (activeClass === undefined) {
      this.activeClass = "aberto"
    } else {
      this.activeClass = activeClass
    }

  }
  dadosFuncionamento() {
    //pegamos o conteúdo do atributo dataset "semana", utilizamos o método de string split() com o divisor na "," para criar um array com os itens e depois usamos o map() para iterar pelos elementos, usando como parâmetro o construtor Number - o que faz com que seja retornado um array com valores númericos resgatados do atributo
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number)
    this.horarioSemana = this.funcionamento.dataset.horario.split(",").map(Number)

  }

  dadosAgora() {
    this.dataAgora = new Date()
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getUTCHours() - 3

  }

  estaAberto() {
    //usando o método indexOf verificamos se o valor correspondente ao diaAgora (obtido com getDay()) está no array diasSemana e considerando que ele retorna -1 para quando não encontra nada, usamos isso para definir se o estabelecimento estaria aberto de acordo com a informação do dia da semana no momento da visita no site
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1

    //criamos um ternário que verifica se o horário atual (obtido com getHours()) é um valor entre o horário de abertura (horarioSemana[0]) e o horário de fechamento (horarioSemana[1])
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1])

    return semanaAberto && horarioAberto

  }

  ativaAberto() {
    //depois com base em ambas as verificações acima, estipulamos se é o caso de atribuir ou não uma classe específica para o elemento do html, criando um elemento visual para facilitar que o usuário saiba se o estabelecimento está ou não aberto na hora da consulta
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass)
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento()
      this.dadosAgora()
      this.ativaAberto()
    }
    return this
  }
}

