export default class Documento {
    constructor(numero, tipo, dataExpedicao) {
        this.numero = numero;
        this.tipo = tipo;
        this.dataExpedicao = dataExpedicao;
    }
    get Numero() {
        return this.numero;
    }
    get Tipo() {
        return this.tipo;
    }
    get DataExpedicao() {
        return this.dataExpedicao;
    }
}
