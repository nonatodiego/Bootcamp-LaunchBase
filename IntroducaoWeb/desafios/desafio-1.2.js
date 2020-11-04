// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco:"Programação",
  End: {
    rua: "Rua Guilherme Gembala",
    numero: "260"
  }
}

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.End.rua}, ${empresa.End.numero}` )






// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }

const programador = {
  nome: "Diego",
  idade: 23,
  tecnologias:  [
      { nome: 'JavaScript', especialidade: 'Desktop' }, 
      { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)

