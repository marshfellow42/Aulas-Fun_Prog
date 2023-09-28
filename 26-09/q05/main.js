let largura = parseInt(prompt())
let altura = parseInt(prompt())

function criarRetangulo (largura, altura) {
    this.calcularArea = largura * altura
    return this.calcularArea
}

criarRetangulo(largura,altura)
