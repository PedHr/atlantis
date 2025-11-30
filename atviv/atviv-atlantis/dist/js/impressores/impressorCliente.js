import ImpressorDocumentos from "./impressorDocumentos.js";
import ImpressorEndereco from "./impressorEndereco.js";
export default class ImpressaorCliente {
    constructor(cliente) {
        this.cliente = cliente;
    }
    imprimir() {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`;
        this.impressor = new ImpressorEndereco(this.cliente.Endereco);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        this.impressor = new ImpressorDocumentos(this.cliente.Documentos);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        impressao = impressao + `\n****************************`;
        return impressao;
    }
}
