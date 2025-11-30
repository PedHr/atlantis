import Diretor from "../abstracoes/diretor.js";
import ConstrutorAcomodacao from "../construtores/construtorAcomodacao.js";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
import Acomodacao from "../modelos/acomodacao.js";

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaSuper
        objetoConstrutor.CamaSolteiro = 6
        objetoConstrutor.CamaCasal = 2
        objetoConstrutor.Suite = 3
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        return objetoConstrutor.construir()
    }
}