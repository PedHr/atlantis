import Diretor from "../abstracoes/diretor.js";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao.js";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
export default class DiretorFamiliaSimples extends Diretor {
    constructor() {
        super();
        this.construtor = new ConstrutorAcomodacao();
    }
    construir() {
        let objetoConstrutor = this.construtor;
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamilaSimples;
        objetoConstrutor.CamaSolteiro = 2;
        objetoConstrutor.CamaCasal = 1;
        objetoConstrutor.Suite = 1;
        objetoConstrutor.Climatizacao = true;
        objetoConstrutor.Garagem = 1;
        return objetoConstrutor.construir();
    }
}
