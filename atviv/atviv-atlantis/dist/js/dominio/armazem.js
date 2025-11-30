class Armazem {
    constructor() {
        this.clientes = [];
        this.acomodacoes = [];
        this.hospedagens = [];
    }
    static get InstanciaUnica() {
        return this.instanciaUnica;
    }
    get Clientes() {
        return this.clientes;
    }
    get Acomodacoes() {
        return this.acomodacoes;
    }
    get Hospedagens() {
        return this.hospedagens;
    }
}
Armazem.instanciaUnica = new Armazem();
export default Armazem;
