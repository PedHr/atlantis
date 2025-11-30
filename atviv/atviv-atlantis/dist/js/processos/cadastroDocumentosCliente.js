import Processo from "../abstracoes/processo.js";
import MenuTipoDocumento from "../menus/menuTipoDocumento.js";
import CadastroRg from "./cadastroRg.js";
export default class CadastroDocumentosCliente extends Processo {
    constructor(cliente) {
        super();
        this.cliente = cliente;
        this.menu = new MenuTipoDocumento();
        this.execucao = true;
    }
    processar() {
        console.log('Inciando o cadastro de documentos...');
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Qual opção desejada?');
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroRg(this.cliente);
                    this.processo.processar();
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    }
}
