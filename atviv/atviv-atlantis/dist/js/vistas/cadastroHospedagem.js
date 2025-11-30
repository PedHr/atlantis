import Armazem from "../dominio/armazem.js";
import Hospedagem from "../modelos/hospedagem.js";
export default class CadastroHospedagem {
    constructor(voltarCallback) {
        this.acomodacoesDisponiveis = [];
        this.armazem = Armazem.InstanciaUnica;
        this.voltarCallback = voltarCallback;
    }
    renderizar() {
        // Filtrar acomodações que NÃO estão na lista de hospedagens ativas
        const acomodacoesOcupadas = this.armazem.Hospedagens.map(h => h.Acomodacao);
        this.acomodacoesDisponiveis = this.armazem.Acomodacoes.filter(a => !acomodacoesOcupadas.includes(a));
        const opcoesClientes = this.armazem.Clientes.map((cliente, index) => `<option value="${index}">${cliente.Nome} (Doc: ${cliente.Documentos[0]?.Numero || 'N/A'})</option>`).join('');
        const opcoesAcomodacoes = this.acomodacoesDisponiveis.map((acomodacao, index) => `<option value="${index}">${acomodacao.NomeAcomadacao} - (Solteiro: ${acomodacao.CamaSolteiro}, Casal: ${acomodacao.CamaCasal})</option>`).join('');
        // Se não houver quartos disponíveis, mostramos um alerta visual
        if (this.acomodacoesDisponiveis.length === 0) {
            return this.renderizarErro("Não há acomodações disponíveis no momento!");
        }
        // Se não houver clientes, também avisamos
        if (this.armazem.Clientes.length === 0) {
            return this.renderizarErro("Não há clientes cadastrados para realizar check-in!");
        }
        return `
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto animate-fade-in-up">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">Check-in de Hospedagem</h2>
                    <button id="btn-voltar" class="text-gray-500 hover:text-gray-700 font-bold">
                        Cancelar
                    </button>
                </div>

                <form id="form-checkin" class="space-y-6">
                    
                    <div class="bg-blue-50 p-4 rounded-md border border-blue-100">
                        <label class="block text-sm font-bold text-blue-800 mb-2">Selecione o Cliente</label>
                        <select id="select-cliente" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border bg-white">
                            ${opcoesClientes}
                        </select>
                        <p class="text-xs text-gray-500 mt-1">Titular da hospedagem</p>
                    </div>

                    <div class="bg-orange-50 p-4 rounded-md border border-orange-100">
                        <label class="block text-sm font-bold text-orange-800 mb-2">Selecione a Acomodação Disponível</label>
                        <select id="select-acomodacao" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 p-3 border bg-white">
                            ${opcoesAcomodacoes}
                        </select>
                        <p class="text-xs text-gray-500 mt-1">Apenas acomodações vagas são exibidas</p>
                    </div>

                    <div class="flex justify-end pt-4">
                        <button type="submit" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded shadow-lg transition duration-200 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            Confirmar Check-in
                        </button>
                    </div>
                </form>
            </div>
        `;
    }
    renderizarErro(mensagem) {
        return `
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center animate-fade-in-up">
                <div class="text-red-500 text-5xl mb-4">⚠️</div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">${mensagem}</h3>
                <button id="btn-voltar" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded transition duration-200">
                    Voltar ao Menu
                </button>
            </div>
        `;
    }
    associarEventos() {
        const btnVoltar = document.getElementById('btn-voltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', this.voltarCallback);
        }
        const form = document.getElementById('form-checkin');
        if (form) {
            form.addEventListener('submit', (e) => this.realizarCheckin(e));
        }
    }
    realizarCheckin(evento) {
        evento.preventDefault();
        const selectCliente = document.getElementById('select-cliente');
        const selectAcomodacao = document.getElementById('select-acomodacao');
        const indiceCliente = parseInt(selectCliente.value);
        const indiceAcomodacaoDisponivel = parseInt(selectAcomodacao.value);
        const clienteSelecionado = this.armazem.Clientes[indiceCliente];
        const acomodacaoSelecionada = this.acomodacoesDisponiveis[indiceAcomodacaoDisponivel];
        const novaHospedagem = new Hospedagem(clienteSelecionado, acomodacaoSelecionada);
        this.armazem.Hospedagens.push(novaHospedagem);
        alert(`Check-in realizado com sucesso!\nCliente: ${clienteSelecionado.Nome}\nAcomodação: ${acomodacaoSelecionada.NomeAcomadacao}`);
        this.voltarCallback();
    }
}
