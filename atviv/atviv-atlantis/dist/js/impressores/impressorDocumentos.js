import ImpressorDocumento from "./impressorDocumento.js";
export default class ImpressorDocumentos {
    constructor(documentos) {
        this.documentos = documentos;
    }
    imprimir() {
        let impressao = ``;
        for (let index = 0; index < this.documentos.length; index++) {
            this.impressor = new ImpressorDocumento(this.documentos[index]);
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`;
            }
            else {
                impressao = impressao + `\n${this.impressor.imprimir()}`;
            }
        }
        return impressao;
    }
}
