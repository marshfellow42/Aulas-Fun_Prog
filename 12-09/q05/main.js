let x = parseInt(prompt("Coloque um número"))
let a = 0
let b = 1
let c = 0;
while (c <= x) {
    c = a + b
    a = b 
    b = c
    console.log(b)
}
