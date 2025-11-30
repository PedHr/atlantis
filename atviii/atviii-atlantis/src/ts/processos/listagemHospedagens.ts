import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorHospedagem from "../impressores/impressorHospedagem";
import Hospedagem from "../modelos/hospedagem";

export default class ListagemHospedagens extends Processo {
    private hospedagens: Hospedagem[]
    
    constructor() {
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
    }

    processar(): void {
        console.clear()
        console.log('Listagem de Hospedagens Ativas:')
        console.log('-------------------------------------------------')
        
        if (this.hospedagens.length === 0) {
            console.log('Não há hospedagens ativas no momento.')
            return
        }

        this.hospedagens.forEach(hospedagem => {
            let impressor = new ImpressorHospedagem(hospedagem)
            console.log(impressor.imprimir())
            console.log('-------------------------------------------------')
        })
    }
}