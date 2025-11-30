import Diretor from "../abstracoes/diretor.js";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao.js";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
export default class DiretorFamiliaMais extends Diretor {
    constructor() {
        super();
        this.construtor = new ConstrutorAcomodacao();
    }
    construir() {
        let objetoConstrutor = this.construtor;
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaMais;
        objetoConstrutor.CamaSolteiro = 5;
        objetoConstrutor.CamaCasal = 1;
        objetoConstrutor.Suite = 2;
        objetoConstrutor.Climatizacao = true;
        objetoConstrutor.Garagem = 2;
        return objetoConstrutor.construir();
    }
}
