import Processo from "../abstracoes/processo.js";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente.js";
import CadastroClienteTitular from "./cadastroClienteTitular.js";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}