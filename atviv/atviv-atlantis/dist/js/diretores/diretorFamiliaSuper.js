import Diretor from "../abstracoes/diretor.js";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao.js";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
export default class DiretorFamiliaSuper extends Diretor {
    constructor() {
        super();
        this.construtor = new ConstrutorAcomodacao();
    }
    construir() {
        let objetoConstrutor = this.construtor;
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaSuper;
        objetoConstrutor.CamaSolteiro = 6;
        objetoConstrutor.CamaCasal = 2;
        objetoConstrutor.Suite = 3;
        objetoConstrutor.Climatizacao = true;
        objetoConstrutor.Garagem = 2;
        return objetoConstrutor.construir();
    }
}
