import Armazem from "../dominio/armazem.js";
import Cliente from "../modelos/cliente.js";
import Endereco from "../modelos/endereco.js";
import Documento from "../modelos/documento.js";
import { TipoDocumento } from "../enumeracoes/TipoDocumento.js";
import Hospedagem from "../modelos/hospedagem.js"; // Importe a classe Hospedagem
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples.js";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais.js";
import DiretorCasalSimples from "../diretores/diretorCasalSimples.js";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples.js";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais.js";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper.js";
export default class GeradorDados {
    static gerar() {
        const armazem = Armazem.InstanciaUnica;
        // 1. Gerar Clientes
        if (armazem.Clientes.length === 0) {
            const cliente1 = new Cliente("João da Silva", "João", new Date(1990, 1, 15));
            cliente1.Endereco = new Endereco("Rua das Flores", "Centro", "São Paulo", "SP", "Brasil", "12345-678");
            cliente1.Documentos.push(new Documento("111.222.333-44", TipoDocumento.CPF, new Date(2010, 5, 20)));
            armazem.Clientes.push(cliente1);
            const cliente2 = new Cliente("Maria Oliveira", "Maria", new Date(1985, 10, 5));
            cliente2.Endereco = new Endereco("Av. Paulista", "Bela Vista", "São Paulo", "SP", "Brasil", "98765-432");
            cliente2.Documentos.push(new Documento("RG-123456", TipoDocumento.RG, new Date(2005, 2, 10)));
            armazem.Clientes.push(cliente2);
            const cliente3 = new Cliente("Pedro Santos", "Pedrinho", new Date(2000, 7, 30));
            cliente3.Endereco = new Endereco("Rua do Porto", "Vila Madalena", "São Paulo", "SP", "Brasil", "54321-876");
            armazem.Clientes.push(cliente3);
        }
        // 2. Gerar Acomodações
        if (armazem.Acomodacoes.length === 0) {
            armazem.Acomodacoes.push(new DiretorSolteiroSimples().construir());
            armazem.Acomodacoes.push(new DiretorSolteiroMais().construir());
            armazem.Acomodacoes.push(new DiretorCasalSimples().construir());
            armazem.Acomodacoes.push(new DiretorFamiliaSimples().construir());
            armazem.Acomodacoes.push(new DiretorFamiliaMais().construir());
            armazem.Acomodacoes.push(new DiretorFamiliaSuper().construir());
        }
        if (armazem.Hospedagens.length === 0) {
            const clienteTeste = armazem.Clientes[0];
            const acomodacaoTeste = armazem.Acomodacoes[0];
            const hospedagemTeste = new Hospedagem(clienteTeste, acomodacaoTeste);
            armazem.Hospedagens.push(hospedagemTeste);
        }
    }
}
