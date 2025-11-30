import Processo from "../abstracoes/processo.js";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes.js";
import ListagemTitulares from "./listagemTitulares.js";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break

            default:
                console.log('Opção não entendida... :(')
        }
    }
}