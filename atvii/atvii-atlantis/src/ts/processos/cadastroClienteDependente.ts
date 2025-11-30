import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando o cadastro de um novo dependente...');

        // 1. Listar e Selecionar o Titular
        let armazem = Armazem.InstanciaUnica;
        let clientes = armazem.Clientes;
        let titulares = clientes.filter(cliente => cliente.Titular == undefined);

        if (titulares.length === 0) {
            console.log('Não há titulares cadastrados. Cadastre um titular primeiro.');
            return;
        }

        console.log('Selecione o titular responsável pelo dependente:');
        titulares.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });

        let indiceTitular = this.entrada.receberNumero('Qual o índice do titular?');
        
        if (indiceTitular < 0 || indiceTitular >= titulares.length) {
            console.log('Índice inválido!');
            return;
        }

        let titularSelecionado = titulares[indiceTitular];

        let nome = this.entrada.receberTexto('Qual o nome do dependente?');
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do dependente?');
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
        
        let dependente = new Cliente(nome, nomeSocial, dataNascimento);

        dependente.Titular = titularSelecionado;
        titularSelecionado.Dependentes.push(dependente);

        dependente.Endereco = titularSelecionado.Endereco.clonar() as any; 

        this.processo = new CadastrarDocumentosCliente(dependente);
        this.processo.processar();

        armazem.Clientes.push(dependente);

        console.log('Finalizando o cadastro do dependente...');
    }
}