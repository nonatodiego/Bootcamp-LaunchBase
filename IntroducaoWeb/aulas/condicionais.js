// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

const aluno01 = "Diego"
const notaAluno01 = 9.8

const aluno02 = "Taylor"
const notaAluno02 = 4

const aluno03 = "Ujut"
const notaAluno03 = 0

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

//Se a média for maior que 5, parabenizar a turma
if (media > 5) {
  //faz alguma coisa
  console.log(`A média da turma foi ${media}. Parabéns você ganhou uma PIZZA!`)
} else {
  //faz outra coisa
  console.log(`A média da turma foi ${media}. SE F#deu!`)

}
console.log(media < 5)