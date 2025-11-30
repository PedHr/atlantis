import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    private titular: Cliente
    private acomodacao: Acomodacao

    constructor(titular: Cliente, acomodacao: Acomodacao) {
        this.titular = titular
        this.acomodacao = acomodacao
    }

    public get Titular(): Cliente { return this.titular }
    public get Acomodacao(): Acomodacao { return this.acomodacao }
}