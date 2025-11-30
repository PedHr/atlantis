import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import ImpressorHospedagem from "../impressores/impressorHospedagem.js";
export default class ListagemHospedagens extends Processo {
    constructor() {
        super();
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens;
    }
    processar() {
        console.clear();
        console.log('Listagem de Hospedagens Ativas:');
        console.log('-------------------------------------------------');
        if (this.hospedagens.length === 0) {
            console.log('Não há hospedagens ativas no momento.');
            return;
        }
        this.hospedagens.forEach(hospedagem => {
            let impressor = new ImpressorHospedagem(hospedagem);
            console.log(impressor.imprimir());
            console.log('-------------------------------------------------');
        });
    }
}
