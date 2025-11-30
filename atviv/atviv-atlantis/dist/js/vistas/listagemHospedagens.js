import Armazem from "../dominio/armazem.js";
export default class ListagemHospedagens {
    constructor(voltarCallback) {
        this.armazem = Armazem.InstanciaUnica;
        this.voltarCallback = voltarCallback;
    }
    renderizar() {
        const hospedagens = this.armazem.Hospedagens;
        if (hospedagens.length === 0) {
            return `
                <div class="container mx-auto text-center animate-fade-in-up mt-10">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Hospedagens Ativas</h2>
                    <div class="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-8 rounded shadow-md max-w-2xl mx-auto">
                        <p class="font-bold text-xl mb-2">O resort está vazio no momento.</p>
                        <p>Realize um Check-in para ver as hospedagens aqui.</p>
                    </div>
                    <button id="btn-voltar" class="mt-8 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded shadow transition duration-200">
                        Voltar ao Menu
                    </button>
                </div>
            `;
        }
        const cards = hospedagens.map(h => this.gerarCardHospedagem(h)).join('');
        return `
            <div class="container mx-auto animate-fade-in-up">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-bold text-gray-800">Hóspedes Atuais</h2>
                    <button id="btn-voltar" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded shadow transition duration-200">
                        Voltar ao Menu
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${cards}
                </div>
            </div>
        `;
    }
    associarEventos() {
        const btnVoltar = document.getElementById('btn-voltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', this.voltarCallback);
        }
    }
    gerarCardHospedagem(hospedagem) {
        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                <div class="p-5">
                    <div class="flex items-center mb-4">
                        <div>
                            <p class="text-sm text-gray-500">Hóspede Titular</p>
                            <h3 class="font-bold text-lg text-gray-800">${hospedagem.Titular.Nome}</h3>
                        </div>
                    </div>
                    <div class="border-t border-gray-100 pt-4">
                        <span class="text-gray-700 font-medium">${hospedagem.Acomodacao.NomeAcomadacao}</span>
                    </div>
                </div>
            </div>
        `;
    }
}
