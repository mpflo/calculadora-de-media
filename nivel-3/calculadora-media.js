const input = require('readline-sync');

let qtdMaterias = Number(input.question('Quantas materias vao ser avaliadas? '))

// coletando os nomes das matérias
let materias = []
for (let numMateria = 1; numMateria <= qtdMaterias; numMateria++) {
    let nomeMateria = input.question(`Qual e o nome da ${numMateria} materia? `)

    materias.push(nomeMateria) // empurrando para o final da lista
}

let qtdNotas = Number(input.question('Quantas notas vao ser calculadas? '))
let qtdAlunosAvaliados = Number(input.question('Quantos alunes serao avaliades? '))


// coletando média des alunes
let alunos = []
for (let numAluno = 1; numAluno <= qtdAlunosAvaliados; numAluno++) {
    let nome = input.question(`Qual e o nome da aluna ${numAluno} avaliada? `)
    const aluno = {
        nome: nome,
    }    

    for (let indexMateria = 0; indexMateria < qtdMaterias; indexMateria++) {
        const materia = materias[indexMateria]

        // Criando uma variável neutra para a soma das notas
        let somatorio = 0

        for (let numProva = 1; numProva <= qtdNotas; numProva++) {
            let nota = Number(input.question(`Digite a nota ${numProva} de ${materia}: `))
            somatorio = somatorio + nota
        }

        // Dividindo essa nota 
        let media = (somatorio / qtdNotas).toFixed(2) // deixa com duas casas decimais
        
        if (media >= 7) {
            aluno[materia] = `Aprovade ${media}`
        } else if (media >= 5) {
            aluno[materia] = `Recuperação ${media}`
        } else {
            aluno[materia] = `Reprovade ${media}`
        }
    }

    alunos.push(aluno)
    
}


// exibindo resultados 

console.table(alunos)


