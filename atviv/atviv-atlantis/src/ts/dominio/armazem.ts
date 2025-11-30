import Acomodacao from "../modelos/acomodacao.js"
import Cliente from "../modelos/cliente.js"
import Hospedagem from "../modelos/hospedagem.js"

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[]
    private acomodacoes: Acomodacao[]
    private hospedagens: Hospedagem[]

    private constructor() {
        this.clientes = []
        this.acomodacoes = []
        this.hospedagens = []
    }

    public static get InstanciaUnica() {
        return this.instanciaUnica
    }

    public get Clientes() {
        return this.clientes
    }

    public get Acomodacoes() {
        return this.acomodacoes
    }
    
    public get Hospedagens() {
        return this.hospedagens
    }
}