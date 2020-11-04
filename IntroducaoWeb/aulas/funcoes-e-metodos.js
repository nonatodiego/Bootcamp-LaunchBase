const alunosDaTurmaA = [
  {
      nome: "Diego",
      nota: 9.8
  },
  {
      nome: "Fulano",
      nota: 8.6 
  },
  {
      nome: "Siclano",
      nota: 5.5
  }
]

const alunosDaTurmaB = [
  {
      nome: "Miguel",
      nota: 4.8
  },
  {
      nome: "Maria",
      nota: 3.5
  },
  {
      nome: "João",
      nota: 4.5
  }
]


function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)



function enviaMensagem(media, turma) {
  if (media > 5) {
    //faz alguma coisa
    console.log(`A média da ${turma} foi ${media}. Parabéns você ganhou uma PIZZA!`)
  } else {
    //faz outra coisa
    console.log(`A média da ${turma} foi ${media}. SE F#deu!`)  
  }
}

enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')








