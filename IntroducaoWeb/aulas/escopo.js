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
  },
  {
    nome: "Novo aluno",
    nota: 5
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
  },
  {
    nome: "outro aluno",
    nota: 8.5
  }
]


function calculaMedia(alunos) {
  let soma = 0;
  
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }

  const media = soma / alunos.length
  return media
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








