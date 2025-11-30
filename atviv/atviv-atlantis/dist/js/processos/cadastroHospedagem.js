import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import Hospedagem from "../modelos/hospedagem.js";
export default class CadastroHospedagem extends Processo {
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens;
    }
    processar() {
        console.clear();
        console.log('Iniciando o check-in (cadastro de hospedagem)...');
        console.log('Selecione o cliente titular:');
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.Nome}`);
        });
        let indiceCliente = this.entrada.receberNumero('Digite o número do cliente:') - 1;
        let clienteSelecionado = this.clientes[indiceCliente];
        if (!clienteSelecionado) {
            console.log('Cliente inválido!');
            return;
        }
        let acomodacoesOcupadas = this.hospedagens.map(h => h.Acomodacao);
        let acomodacoesDisponiveis = this.acomodacoes.filter(a => !acomodacoesOcupadas.includes(a));
        if (acomodacoesDisponiveis.length === 0) {
            console.log('Não há acomodações disponíveis!');
            return;
        }
        console.log('Selecione a acomodação:');
        acomodacoesDisponiveis.forEach((acomodacao, index) => {
            console.log(`${index + 1} - ${acomodacao.NomeAcomadacao}`);
        });
        let indiceAcomodacao = this.entrada.receberNumero('Digite o número da acomodação:') - 1;
        let acomodacaoSelecionada = acomodacoesDisponiveis[indiceAcomodacao];
        if (!acomodacaoSelecionada) {
            console.log('Acomodação inválida!');
            return;
        }
        let novaHospedagem = new Hospedagem(clienteSelecionado, acomodacaoSelecionada);
        this.hospedagens.push(novaHospedagem);
        console.log('Hospedagem realizada com sucesso!');
    }
}
