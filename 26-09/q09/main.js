let largura = parseInt(prompt())
let altura = parseInt(prompt())

function criarRetangulo (largura, altura) {
    if (isNaN(largura)) {
        largura = 1
    }
    if (isNaN(altura)) {
        altura = 1
    }
    this.calcularArea = largura * altura
    return this.calcularArea
}

criarRetangulo(largura,altura)
