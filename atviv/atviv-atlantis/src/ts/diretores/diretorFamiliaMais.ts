import Diretor from "../abstracoes/diretor.js";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao.js";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
import Acomodacao from "../modelos/acomodacao.js";

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaMais
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.Suite = 2
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        return objetoConstrutor.construir()
    }
}