export default class Hospedagem {
    constructor(titular, acomodacao) {
        this.titular = titular;
        this.acomodacao = acomodacao;
    }
    get Titular() { return this.titular; }
    get Acomodacao() { return this.acomodacao; }
}
