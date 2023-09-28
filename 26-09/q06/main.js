function produto (nome, preco) {
    this.nome = nome
    this.preco = preco
    let desc = parseInt(prompt("Quantos por cento de desconto vc deseja?"))
    this.desc = this.preco * desc/100
    this.new_price = this.preco - this.desc
    return this.new_price
}

const remedio = new produto ("Rivotril", 15)

console.log(remedio)
