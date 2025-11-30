import Processo from "../abstracoes/processo.js";
import DiretorCasalSimples from "../diretores/diretorCasalSimples.js";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais.js";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples.js";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper.js";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais.js";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples.js";
import Armazem from "../dominio/armazem.js";
export default class CadastroAcomodacoes extends Processo {
    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }
    processar() {
        let diretor = new DiretorSolteiroSimples();
        this.acomodacoes.push(diretor.construir());
        let diretorSolteiroMais = new DiretorSolteiroMais();
        this.acomodacoes.push(diretorSolteiroMais.construir());
        let diretorCasalSimples = new DiretorCasalSimples();
        this.acomodacoes.push(diretorCasalSimples.construir());
        let diretorFamiliaSimples = new DiretorFamiliaSimples();
        this.acomodacoes.push(diretorFamiliaSimples.construir());
        let diretorFamiliaMais = new DiretorFamiliaMais();
        this.acomodacoes.push(diretorFamiliaMais.construir());
        let diretorFamiliaSuper = new DiretorFamiliaSuper();
        this.acomodacoes.push(diretorFamiliaSuper.construir());
    }
}
