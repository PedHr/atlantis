import GeradorDados from "../utils/geradorDados.js";
import ListagemClientes from "../vistas/listagemClientes.js";
import CadastroCliente from "../vistas/cadastroCliente.js";
import ListagemAcomodacoes from "../vistas/listagemAcomodacoes.js";
import CadastroHospedagem from "../vistas/cadastroHospedagem.js";
import ListagemHospedagens from "../vistas/listagemHospedagens.js";
export default class App {
    constructor() {
        this.elementoPrincipal = document.getElementById('app');
        GeradorDados.gerar();
        this.inicializar();
    }
    inicializar() {
        this.renderizarMenuPrincipal();
    }
    renderizarMenuPrincipal() {
        this.elementoPrincipal.innerHTML = `
            <nav class="bg-blue-600 p-4 text-white shadow-lg mb-8">
                <div class="container mx-auto flex justify-between items-center">
                    <h1 class="text-2xl font-bold">Atlantis Water Park</h1>
                </div>
            </nav>
            <main class="container mx-auto p-4 flex-grow">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-blue-500 transform hover:-translate-y-1 transition-transform duration-200 group" id="btn-cadastro-cliente">
                        <h2 class="text-xl font-semibold mb-2">Cadastrar Cliente</h2>
                        <p class="text-gray-600">Adicionar novos titulares.</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-green-500 transform hover:-translate-y-1 transition-transform duration-200 group" id="btn-listar-clientes">
                        <h2 class="text-xl font-semibold mb-2">Listar Clientes</h2>
                        <p class="text-gray-600">Visualizar base de dados.</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-purple-500 transform hover:-translate-y-1 transition-transform duration-200 group" id="btn-acomodacoes">
                        <h2 class="text-xl font-semibold mb-2">Acomodações</h2>
                        <p class="text-gray-600">Tipos de quartos disponíveis.</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-orange-500 transform hover:-translate-y-1 transition-transform duration-200 group" id="btn-checkin">
                        <h2 class="text-xl font-semibold mb-2">Realizar Check-in</h2>
                        <p class="text-gray-600">Registrar nova hospedagem.</p>
                    </div>

                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-red-500 transform hover:-translate-y-1 transition-transform duration-200 group" id="btn-listar-hospedagens">
                        <h2 class="text-xl font-semibold mb-2">Hospedagens Ativas</h2>
                        <p class="text-gray-600">Ver quem está hospedado.</p>
                    </div>

                </div>
            </main>
            <footer class="bg-slate-800 text-white text-center p-4 mt-auto">
                <p>&copy; 2025 Atlantis Water Park</p>
            </footer>
        `;
        this.associarEventosMenu();
    }
    associarEventosMenu() {
        const btnListarClientes = document.getElementById('btn-listar-clientes');
        if (btnListarClientes) {
            btnListarClientes.addEventListener('click', () => {
                this.renderizarListagemClientes();
            });
        }
        const btnCadastroCliente = document.getElementById('btn-cadastro-cliente');
        if (btnCadastroCliente) {
            btnCadastroCliente.addEventListener('click', () => {
                this.renderizarCadastroCliente();
            });
        }
        const btnAcomodacoes = document.getElementById('btn-acomodacoes');
        if (btnAcomodacoes) {
            btnAcomodacoes.addEventListener('click', () => {
                this.renderizarListagemAcomodacoes();
            });
        }
        const btnCheckin = document.getElementById('btn-checkin');
        if (btnCheckin) {
            btnCheckin.addEventListener('click', () => {
                this.renderizarCadastroHospedagem();
            });
        }
        // --- ESTE BLOCO ABAIXO ESTAVA FALTANDO NO SEU ARQUIVO ---
        const btnListarHospedagens = document.getElementById('btn-listar-hospedagens');
        if (btnListarHospedagens) {
            btnListarHospedagens.addEventListener('click', () => {
                console.log("Botão clicado!"); // Para confirmar no console
                this.renderizarListagemHospedagens();
            });
        }
        // ---------------------------------------------------------
    }
    renderizarListagemClientes() {
        const vistaListagem = new ListagemClientes(() => this.renderizarMenuPrincipal());
        this.atualizarConteudo(vistaListagem);
    }
    renderizarCadastroCliente() {
        const vistaCadastro = new CadastroCliente(() => this.renderizarMenuPrincipal());
        this.atualizarConteudo(vistaCadastro);
    }
    renderizarListagemAcomodacoes() {
        const vistaAcomodacoes = new ListagemAcomodacoes(() => this.renderizarMenuPrincipal());
        this.atualizarConteudo(vistaAcomodacoes);
    }
    renderizarCadastroHospedagem() {
        const vistaCheckin = new CadastroHospedagem(() => this.renderizarMenuPrincipal());
        this.atualizarConteudo(vistaCheckin);
    }
    // --- ESTA FUNÇÃO TAMBÉM ESTAVA FALTANDO ---
    renderizarListagemHospedagens() {
        const vistaHospedagens = new ListagemHospedagens(() => this.renderizarMenuPrincipal());
        this.atualizarConteudo(vistaHospedagens);
    }
    // ------------------------------------------
    atualizarConteudo(vista) {
        const mainContent = this.elementoPrincipal.querySelector('main');
        if (mainContent) {
            mainContent.innerHTML = vista.renderizar();
            vista.associarEventos();
        }
    }
}
new App();
