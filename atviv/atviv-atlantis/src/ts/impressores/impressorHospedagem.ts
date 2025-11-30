import Impressor from "../interfaces/impressor.js";
import Hospedagem from "../modelos/hospedagem.js";

export default class ImpressorHospedagem implements Impressor {
    private hospedagem: Hospedagem
    constructor(hospedagem: Hospedagem) {
        this.hospedagem = hospedagem
    }
    imprimir(): string {
        let impressao = `| Cliente: ${this.hospedagem.Titular.Nome}\n`
            + `| Acomodação: ${this.hospedagem.Acomodacao.NomeAcomadacao}`
        return impressao
    }
}