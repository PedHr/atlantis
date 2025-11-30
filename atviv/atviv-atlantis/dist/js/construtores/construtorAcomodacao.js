import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao.js";
import Acomodacao from "../modelos/acomodacao.js";
export default class ConstrutorAcomodacao {
    constructor() {
        this.nomeAcomodacao = NomeAcomadacao.SolteiroSimples;
        this.camaSolteiro = 0;
        this.camaCasal = 0;
        this.suite = 0;
        this.climatizacao = false;
        this.garagem = 0;
    }
    set NomeAcomodacao(nomeAcomodacao) { this.nomeAcomodacao = nomeAcomodacao; }
    set CamaSolteiro(camaSolteiro) { this.camaSolteiro = camaSolteiro; }
    set CamaCasal(camaCasal) { this.camaCasal = camaCasal; }
    set Suite(suite) { this.suite = suite; }
    set Climatizacao(climatizacao) { this.climatizacao = climatizacao; }
    set Garagem(garagem) { this.garagem = garagem; }
    construir() {
        let acomodacao = new Acomodacao(this.nomeAcomodacao, this.camaSolteiro, this.camaCasal, this.suite, this.climatizacao, this.garagem);
        return acomodacao;
    }
}
