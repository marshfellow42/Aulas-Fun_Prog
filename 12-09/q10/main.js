let x = parseInt(prompt("Coloque um número"))
let y = parseInt(prompt("Coloque outro número"))
let z = parseInt(prompt("Coloque mais outro número"))

if (x > y && x > z) {
    console.log(x, "é o maior entre os três")
}
if (y > x && y > z) {
    console.log(y, "é o maior entre os três")
}
if (z > y && z > x) {
    console.log(z, "é o maior entre os três")
}
