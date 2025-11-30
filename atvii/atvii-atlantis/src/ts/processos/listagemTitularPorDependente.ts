import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularPorDependente extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a busca do titular de um dependente...');

        let dependentes = this.clientes.filter(cliente => cliente.Titular !== undefined);

        if (dependentes.length === 0) {
            console.log('Não há dependentes cadastrados.');
            return;
        }

        console.log('Selecione o dependente para encontrar o titular:');
        dependentes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });

        let indiceDependente = this.entrada.receberNumero('Qual o índice do dependente?');

        if (indiceDependente < 0 || indiceDependente >= dependentes.length) {
            console.log('Índice inválido!');
            return;
        }

        let dependenteSelecionado = dependentes[indiceDependente];

        console.log(`\nO titular responsável por ${dependenteSelecionado.Nome} é:`);
        
        this.impressor = new ImpressaorCliente(dependenteSelecionado.Titular);
        console.log(this.impressor.imprimir());
    }
}