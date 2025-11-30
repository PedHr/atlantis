import Armazem from "../dominio/armazem.js";
import Acomodacao from "../modelos/acomodacao.js";

export default class ListagemAcomodacoes {
    private armazem: Armazem;
    private voltarCallback: () => void;

    constructor(voltarCallback: () => void) {
        this.armazem = Armazem.InstanciaUnica;
        this.voltarCallback = voltarCallback;
    }

    public renderizar(): string {
        const cardsAcomodacoes = this.armazem.Acomodacoes.map(acomodacao => this.gerarCardAcomodacao(acomodacao)).join('');

        return `
            <div class="container mx-auto animate-fade-in-up">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-bold text-gray-800">Nossas Acomodações</h2>
                    <button id="btn-voltar" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded shadow transition duration-200">
                        Voltar ao Menu
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${cardsAcomodacoes}
                </div>
            </div>
        `;
    }

    public associarEventos(): void {
        const btnVoltar = document.getElementById('btn-voltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', this.voltarCallback);
        }
    }

    private gerarCardAcomodacao(acomodacao: Acomodacao): string {
        return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div class="bg-blue-600 p-4">
                    <h3 class="text-white text-lg font-bold truncate" title="${acomodacao.NomeAcomadacao}">
                        ${acomodacao.NomeAcomadacao}
                    </h3>
                </div>
                <div class="p-6 space-y-3">
                    <div class="flex items-center text-gray-700">
                        <span class="font-semibold w-32">Cama Solteiro:</span>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${acomodacao.CamaSolteiro}</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                        <span class="font-semibold w-32">Cama Casal:</span>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${acomodacao.CamaCasal}</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                        <span class="font-semibold w-32">Suíte:</span>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${acomodacao.Suite}</span>
                    </div>
                    <div class="flex items-center text-gray-700">
                        <span class="font-semibold w-32">Climatização:</span>
                        <span class="${acomodacao.Climatizacao ? 'text-green-600' : 'text-red-600'} font-bold">
                            ${acomodacao.Climatizacao ? 'Sim' : 'Não'}
                        </span>
                    </div>
                    <div class="flex items-center text-gray-700">
                        <span class="font-semibold w-32">Garagem:</span>
                        <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">${acomodacao.Garagem} vagas</span>
                    </div>
                </div>
            </div>
        `;
    }
}