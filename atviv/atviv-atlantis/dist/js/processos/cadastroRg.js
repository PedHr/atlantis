import Processo from "../abstracoes/processo.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
import Documento from "../modelos/documento.js";
export default class CadastroRg extends Processo {
    constructor(cliente) {
        super();
        this.cliente = cliente;
    }
    processar() {
        let numero = this.entrada.receberTexto('Qual o número do documento?');
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?');
        let rg = new Documento(numero, TipoDocumento.RG, dataExpedicao);
        this.cliente.Documentos.push(rg);
    }
}
