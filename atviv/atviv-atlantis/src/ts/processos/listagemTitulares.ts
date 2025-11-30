import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import ImpressaorCliente from "../impressores/impressorCliente.js";
import Impressor from "../interfaces/impressor.js";
import Cliente from "../modelos/cliente.js";

export default class ListagemTitulares extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes titulares...')
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ImpressaorCliente(cliente)
                console.log(this.impressor.imprimir())
            }
        })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}