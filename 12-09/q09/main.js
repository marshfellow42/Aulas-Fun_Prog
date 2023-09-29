let x = parseInt(prompt("Qual o preço do produto que você comprou?"))
let y = parseInt(prompt("Quantas unidades você comprou do produto?"))
let preco = y * x

if (y > 10) {
    let desc = preco * 10/100
    let new_preco = preco - desc
    console.log("O preço novo dos produtos que você comprou, após 10% de desconto, é:", new_preco, "reais")
}
else {
    console.log("O preço das coisas que você comprou é:", preco, "reais")
}
