let alunos = [
    {nome: "Arthur", idade: 71, nota: 10},
    {nome: "Jonas", idade: 17, nota: 2},
    {nome: "João", idade: 18, nota: 3},
    {nome: "Lucas", idade: 54, nota: 4},
    {nome: "Luan", idade: 41, nota: 8},
    
]

function ordenaNome (a,b) {
    if (a.nome > b.nome) return 1
    if (a.nome < b.nome) return -1
    return 0
}

function ordenaIdade (a,b) {
    if (a.idade > b.idade) return 1
    if (a.idade < b.idade) return -1
    return 0
}

function ordenaNota (a,b) {
    if (a.nota > b.nota) return 1
    if (a.nota < b.nota) return -1
    return 0
}

//ou

function ordenaNota (a,b) {
    return a.nota-b.nota
}

function ordenaNome (a,b) {
    return a.nome-b.nome
}

function ordenaIdade (a,b) {
    return a.idade-b.idade
}

function ordenaTamanhoString (a,b) {
    return (a.nome).length-(b.nome).length
}

//alunos.sort(ordenaNome)
//alunos.sort(ordenaIdade)
//alunos.sort(ordenaNota)