export default class ImpressorHospedagem {
    constructor(hospedagem) {
        this.hospedagem = hospedagem;
    }
    imprimir() {
        let impressao = `| Cliente: ${this.hospedagem.Titular.Nome}\n`
            + `| Acomodação: ${this.hospedagem.Acomodacao.NomeAcomadacao}`;
        return impressao;
    }
}
