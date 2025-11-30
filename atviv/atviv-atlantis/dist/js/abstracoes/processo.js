import Entrada from "../io/entrada.js";
export default class Processo {
    constructor() {
        this.entrada = new Entrada();
    }
    get Execucao() {
        return this.execucao;
    }
}
