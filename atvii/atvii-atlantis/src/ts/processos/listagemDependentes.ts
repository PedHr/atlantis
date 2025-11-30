import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem de dependentes de um titular...');

        let titulares = this.clientes.filter(cliente => cliente.Titular == undefined);

        if (titulares.length === 0) {
            console.log('Não há titulares cadastrados.');
            return;
        }

        console.log('Selecione o titular para ver os dependentes:');
        titulares.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });

        let indiceTitular = this.entrada.receberNumero('Qual o índice do titular?');

        if (indiceTitular < 0 || indiceTitular >= titulares.length) {
            console.log('Índice inválido!');
            return;
        }

        let titularSelecionado = titulares[indiceTitular];

        console.log(`\nDependentes do titular ${titularSelecionado.Nome}:`);
        if (titularSelecionado.Dependentes.length === 0) {
            console.log('Este titular não possui dependentes.');
        } else {
            titularSelecionado.Dependentes.forEach(dependente => {
                this.impressor = new ImpressaorCliente(dependente);
                console.log(this.impressor.imprimir());
            });
        }
    }
}