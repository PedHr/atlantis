import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirCliente extends Processo {
    processar(): void {
        console.clear();
        console.log('Iniciando processo de exclusão de clientes...');
        
        let armazem = Armazem.InstanciaUnica;
        let clientes = armazem.Clientes;

        if (clientes.length === 0) {
            console.log('Não há clientes para excluir.');
            return;
        }

        console.log('Selecione o cliente que deseja excluir:');
        clientes.forEach((cliente, index) => {
            console.log(`${index} - ${cliente.Nome}`);
        });

        let indice = this.entrada.receberNumero('Qual o índice do cliente para exclusão?');

        if (indice < 0 || indice >= clientes.length) {
            console.log('Índice inválido.');
            return;
        }

        let clienteParaExcluir = clientes[indice];

        if (clienteParaExcluir.Titular) {
            let titular = clienteParaExcluir.Titular;
            let indexNoTitular = titular.Dependentes.indexOf(clienteParaExcluir);
            if (indexNoTitular > -1) {
                titular.Dependentes.splice(indexNoTitular, 1);
            }
            // Remover do armazém global
            clientes.splice(indice, 1);
            console.log(`Dependente ${clienteParaExcluir.Nome} excluído com sucesso.`);

        } else {
            if (clienteParaExcluir.Dependentes.length > 0) {
                console.log('Este cliente é um titular e possui dependentes.');
                console.log('Ao excluí-lo, todos os seus dependentes também serão excluídos.');
                clienteParaExcluir.Dependentes.forEach(dependente => {
                    let indexDependente = clientes.indexOf(dependente);
                    if (indexDependente > -1) {
                        clientes.splice(indexDependente, 1);
                    }
                });
            }
            
            let indexAtualTitular = clientes.indexOf(clienteParaExcluir);
            if (indexAtualTitular > -1) {
                clientes.splice(indexAtualTitular, 1);
                console.log(`Titular ${clienteParaExcluir.Nome} e seus dependentes foram excluídos.`);
            }
        }
    }
}