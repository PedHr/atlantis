import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class EditarCliente extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando a edição de cliente...');

        let clientes = Armazem.InstanciaUnica.Clientes;

        if (clientes.length === 0) {
            console.log('Não há clientes para editar.');
            return;
        }

        console.log('Selecione o cliente para editar:');
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });

        let indice = this.entrada.receberNumero('Qual o índice do cliente?');

        if (indice < 0 || indice >= clientes.length) {
            console.log('Índice inválido.');
            return;
        }

        let cliente = clientes[indice];

        console.log(`Editando dados de: ${cliente.Nome}`);
        console.log('1 - Nome');
        console.log('2 - Nome Social');
        console.log('3 - Data de Nascimento');
        console.log('0 - Sair');

        let opcao = this.entrada.receberNumero('Qual dado deseja alterar?');

        switch (opcao) {
            case 1:
                let novoNome = this.entrada.receberTexto('Novo Nome:');
                (cliente as any).nome = novoNome; 
                break;
            case 2:
                let novoNomeSocial = this.entrada.receberTexto('Novo Nome Social:');
                (cliente as any).nomeSocial = novoNomeSocial;
                break;
            case 3:
                let novaData = this.entrada.receberData('Nova Data de Nascimento');
                (cliente as any).dataNascimento = novaData;
                break;
            case 0:
                break;
            default:
                console.log('Opção inválida.');
        }

        console.log('Dados atualizados com sucesso!');
    }
}