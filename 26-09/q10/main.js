let raio = parseInt(prompt("Coloque o raio de um círculo"))

function circulo (raio) {
    this.raio = raio
    this.calcularArea = 3.14 * Math.pow(this.raio, 2)
    return this.calcularArea
}

circulo(raio)
