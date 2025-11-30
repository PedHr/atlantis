import Processo from "../abstracoes/processo.js";
import Armazem from "../dominio/armazem.js";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao.js";
import Impressor from "../interfaces/impressor.js";
import Acomodacao from "../modelos/acomodacao.js";

export default class ListagemAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das acomodações ofertadas...')
        console.log(`-------------------------------------------------`)
        this.acomodacoes.forEach(acomodacao => {
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log(this.impressor.imprimir())
            console.log(`-------------------------------------------------`)
        })
    }
}