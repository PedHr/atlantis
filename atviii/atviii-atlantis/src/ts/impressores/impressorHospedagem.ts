import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";

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