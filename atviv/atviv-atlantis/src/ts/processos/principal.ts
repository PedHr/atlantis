import Processo from "../abstracoes/processo.js"
import MenuPrincipal from "../menus/menuPricipal.js"
import ListagemAcomodacoes from "./listagemAcomodacoes.js"
import TipoCadastroCliente from "./tipoCadastroCliente.js"
import TipoListagemClientes from "./tipoListagemClientes.js"
import CadastroHospedagem from "./cadastroHospedagem.js"
import ListagemHospedagens from "./listagemHospedagens.js"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new CadastroHospedagem()
                this.processo.processar()
                break
            case 7:
                this.processo = new ListagemHospedagens()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}