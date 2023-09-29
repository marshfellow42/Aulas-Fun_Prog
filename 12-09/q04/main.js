let i = 0

while (i < 1) {
    let x = parseInt(prompt())
    let y = Math.floor(Math.random() * 11)
    if (x == y) {
        console.log("Parabéns")
        i++
    }
    else {
        console.log("Tente novamente")
    }
}
