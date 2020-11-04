// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
  { nome: "Diego", tecnologias:["HTML", "Node.js","CSS"]}
];

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuário
for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}


// Busca por tecnologia
// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == 'CSS') return true
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}


// Soma de despesas e receitas
// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// Utilize o array de usuários abaixo:

const usuarios2 = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  },
  {
    nome: "Dom",
    receitas: [4.8, 167.3, 540.2, 45.3],
    despesas: [890.2, 293.9]
  }
];

function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)
  
  return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
  let soma = 0

  for (let numero of numeros) {
    soma = soma + numero
  }

  return soma
}

for (let usuario of usuarios2) {
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
  } else {
    console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
  }
}


