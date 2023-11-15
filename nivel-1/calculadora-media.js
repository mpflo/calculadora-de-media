const input = require('readline-sync')

let qntdAlunosAvaliados

let nome = input.question('Qual e o nome da aluna avaliada? ')
let qtdNotas = Number(input.question('Quantas notas vao ser calculadas? '))

// Criando uma variável neutra para a soma das notas
let somatorio = 0

for (let numProva = 1; numProva <= qtdNotas; numProva++) {
    let nota = Number(input.question(`Digite a nota ${numProva}: `))
    somatorio = somatorio + nota
}

// Dividindo essa nota 
let media = (somatorio / qtdNotas).toFixed(2) // deixa com duas casas decimais
console.log(`${nome} tirou ${media} nesse semestre.`)

if (media >= 7) {
    console.log(`${nome} foi aprovade.`)
} else if (media >= 5) {
    console.log(`${nome} está de recuperação.`)
} else {
    console.log(`${nome} foi reprovade.`)
}

