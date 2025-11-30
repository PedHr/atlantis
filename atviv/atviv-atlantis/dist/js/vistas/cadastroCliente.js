import Armazem from "../dominio/armazem.js";
import Cliente from "../modelos/cliente.js";
import Endereco from "../modelos/endereco.js";
import Documento from "../modelos/documento.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
export default class CadastroCliente {
    constructor(voltarCallback) {
        this.armazem = Armazem.InstanciaUnica;
        this.voltarCallback = voltarCallback;
    }
    renderizar() {
        return `
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto animate-fade-in-up">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">Cadastro de Novo Cliente</h2>
                    <button id="btn-voltar" class="text-gray-500 hover:text-gray-700 font-bold">
                        Cancelar
                    </button>
                </div>

                <form id="form-cadastro-cliente" class="space-y-6">
                    
                    <div class="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h3 class="text-lg font-medium text-blue-600 mb-4 border-b pb-2">Dados Pessoais</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Nome Completo</label>
                                <input type="text" id="nome" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Nome Social</label>
                                <input type="text" id="nomeSocial" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Data de Nascimento</label>
                                <input type="date" id="dataNascimento" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h3 class="text-lg font-medium text-blue-600 mb-4 border-b pb-2">Endereço</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="col-span-2">
                                <label class="block text-sm font-medium text-gray-700">Rua</label>
                                <input type="text" id="rua" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Bairro</label>
                                <input type="text" id="bairro" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Cidade</label>
                                <input type="text" id="cidade" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Estado</label>
                                <input type="text" id="estado" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">País</label>
                                <input type="text" id="pais" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Código Postal</label>
                                <input type="text" id="codigoPostal" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h3 class="text-lg font-medium text-blue-600 mb-4 border-b pb-2">Documento Principal</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Tipo</label>
                                <select id="tipoDocumento" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                                    <option value="CPF">CPF</option>
                                    <option value="RG">RG</option>
                                    <option value="Passaporte">Passaporte</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Número</label>
                                <input type="text" id="numeroDocumento" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Data de Expedição</label>
                                <input type="date" id="dataExpedicao" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end pt-4">
                        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-200">
                            Salvar Cliente
                        </button>
                    </div>
                </form>
            </div>
        `;
    }
    associarEventos() {
        const btnVoltar = document.getElementById('btn-voltar');
        if (btnVoltar) {
            btnVoltar.addEventListener('click', this.voltarCallback);
        }
        const form = document.getElementById('form-cadastro-cliente');
        if (form) {
            form.addEventListener('submit', (e) => this.cadastrar(e));
        }
    }
    cadastrar(evento) {
        evento.preventDefault();
        const nome = document.getElementById('nome').value;
        const nomeSocial = document.getElementById('nomeSocial').value;
        const dataNascimentoStr = document.getElementById('dataNascimento').value;
        const dataNascimento = new Date(dataNascimentoStr);
        const rua = document.getElementById('rua').value;
        const bairro = document.getElementById('bairro').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const pais = document.getElementById('pais').value;
        const codigoPostal = document.getElementById('codigoPostal').value;
        const tipoDocStr = document.getElementById('tipoDocumento').value;
        const numDoc = document.getElementById('numeroDocumento').value;
        const dataExpStr = document.getElementById('dataExpedicao').value;
        const dataExp = new Date(dataExpStr);
        const novoCliente = new Cliente(nome, nomeSocial, dataNascimento);
        const endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);
        novoCliente.Endereco = endereco;
        let tipoDocEnum;
        if (tipoDocStr === 'CPF')
            tipoDocEnum = TipoDocumento.CPF;
        else if (tipoDocStr === 'RG')
            tipoDocEnum = TipoDocumento.RG;
        else
            tipoDocEnum = TipoDocumento.Passaporte;
        const documento = new Documento(numDoc, tipoDocEnum, dataExp);
        novoCliente.Documentos.push(documento);
        this.armazem.Clientes.push(novoCliente);
        alert('Cliente cadastrado com sucesso!');
        this.voltarCallback();
    }
}
