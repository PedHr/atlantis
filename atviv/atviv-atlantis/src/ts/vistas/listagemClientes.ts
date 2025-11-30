import Armazem from "../dominio/armazem.js";
import Cliente from "../modelos/cliente.js";

export default class ListagemClientes {
    private armazem: Armazem;
    private voltarCallback: () => void;

    constructor(voltarCallback: () => void) {
        this.armazem = Armazem.InstanciaUnica;
        this.voltarCallback = voltarCallback;
    }

    public renderizar(): string {
        const tabelaLinhas = this.armazem.Clientes.map(cliente => this.gerarLinhaTabela(cliente)).join('');

        return `
            <div class="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">Listagem de Clientes</h2>
                    <button id="btn-voltar" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200">
                        Voltar
                    </button>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Nome
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Nome Social
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Documentos
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tabelaLinhas}
                        </tbody>
                    </table>
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

    private gerarLinhaTabela(cliente: Cliente): string {
        const docs = cliente.Documentos.map(d => `${d.Tipo}: ${d.Numero}`).join(', ') || 'Nenhum';

        return `
            <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap font-medium">${cliente.Nome}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${cliente.NomeSocial}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">${docs}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button class="text-blue-600 hover:text-blue-900 mr-2">Editar</button>
                    <button class="text-red-600 hover:text-red-900">Excluir</button>
                </td>
            </tr>
        `;
    }
}