// Matriz Original é criada
let tarefas =  [
    {nome: "Ligar para o cliente", duracao: 60},
    {nome: "Fazer a contabilidade", duracao: 180},
    {nome: "Revisar o relatório", duracao: 240},
    {nome: "Ligar para o cliente", duracao: 120}
]


// Cria nova matriz com excluido os menores ou igual a 60
let tarefasNova = tarefas.filter(x => x.duracao>60)


// Dobra os tempos da nova matriz
let tarefasDobro = tarefasNova.map(x => ({nome: x.nome, duracao: x.duracao*2}))


// Imprime as tarefas com seus respectivos tempos de duração
tarefasDobro.forEach(x => console.log(x.nome + ': ' + x.duracao + ' minutos'))


// Duração total das tarefas
let tarefasSoma = tarefasDobro.reduce((a, b) => a+b.duracao, 0)
console.log('\nA duração total é de ' + tarefasSoma + ' minutos\n')

// Exluir menor que 60 com forEache
let tarefasNova2 = []
tarefas.forEach(x => {
    if (x.duracao>60) {
        tarefasNova2.push({nome: x.nome, duracao: x.duracao})
    }
})

tarefasNova2.forEach(x => console.log(x.nome + ': ' + x.duracao + ' minutos'))