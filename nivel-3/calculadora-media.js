const input = require('readline-sync')

let qntdAlunosAvaliados = Number(input.question('Quantos alunes serao avaliades? '))
let qtdNotas = Number(input.question('Quantas notas vao ser calculadas? '))

let alunos = []

// coletando dados
for (let numAluno = 1; numAluno <= qntdAlunosAvaliados; numAluno++) {
    let nome = input.question(`Qual e o nome da aluna ${numAluno} avaliada? `)
    const aluno = {
        nome: nome,
        media: 0
    }
    
    // Criando uma variável neutra para a soma das notas
    let somatorio = 0

    for (let numProva = 1; numProva <= qtdNotas; numProva++) {
        let nota = Number(input.question(`Digite a nota ${numProva}: `))
        somatorio = somatorio + nota
    }

    // Dividindo essa nota 
    aluno.media = (somatorio / qtdNotas).toFixed(2) // deixa com duas casas decimais
    
    alunos.push(aluno) // empurrando para o final da lista
}


// exibindo resultados | dica: poderia ser mais legível com for of
for (let indexAluno = 0; indexAluno < qntdAlunosAvaliados; indexAluno++) {
    const aluno = alunos[indexAluno];

    console.log(`${aluno.nome} tirou ${aluno.media} nesse semestre.`)

    if (aluno.media >= 7) {
        console.log(`${aluno.nome} foi aprovade.`)
    } else if (aluno.media >= 5) {
        console.log(`${aluno.nome} está de recuperação.`)
    } else {
        console.log(`${aluno.nome} foi reprovade.`)
    }
}



