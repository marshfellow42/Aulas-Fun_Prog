let x = parseInt(prompt("Coloque um número"))
let y = parseInt(prompt("Coloque outro número"))

let esc = prompt("Você deseja adição (a), subtração (s), multiplicação (m) ou divisão (d)")

switch (esc) {
    case "a":
        console.log(x + y)
        break
    case "s":
        console.log(x - y)
        break
    case "m":
        console.log(x * y)
        break
    case "d":
        console.log(x / y)
        break
}
