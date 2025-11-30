import ConstrutorAcomodacao from "../construtores/construtorAcomodacao.js";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
import Diretor from "../abstracoes/diretor.js";
export default class DiretorSolteiroSimples extends Diretor {
    constructor() {
        super();
        this.construtor = new ConstrutorAcomodacao();
    }
    construir() {
        let objetoConstrutor = this.construtor;
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.SolteiroSimples;
        objetoConstrutor.CamaCasal = 0;
        objetoConstrutor.CamaSolteiro = 1;
        objetoConstrutor.Climatizacao = true;
        objetoConstrutor.Garagem = 0;
        objetoConstrutor.Suite = 1;
        return objetoConstrutor.construir();
    }
}
