import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import ImpressaorCliente from "../impressores/impressorCliente.js";
export default class ListagemTitulares extends Processo {
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }
    processar() {
        console.clear();
        console.log('Iniciando a listagem dos clientes titulares...');
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressaorCliente(cliente);
                console.log(this.impressor.imprimir());
            }
        });
    }
    titular(cliente) {
        let verificacao = false;
        if (cliente.Titular == undefined) {
            verificacao = true;
        }
        return verificacao;
    }
}
