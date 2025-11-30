import Diretor from "../abstracoes/diretor.js";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao.js";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
import Acomodacao from "../modelos/acomodacao.js";

export default class DiretorSolteiroMais extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.SolteiroMais
        objetoConstrutor.CamaSolteiro = 0
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.Suite = 1
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 1
        return objetoConstrutor.construir()
    }
}