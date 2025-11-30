import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";
import Prototipo from "../interfaces/prototipo";

export default class Cliente implements Prototipo {
    private nome: string;
    private nomeSocial: string;
    private dataNascimento: Date;
    private dataCadastro: Date;
    private telefones: Telefone[] = [];
    private documentos: Documento[] = [];
    private endereco!: Endereco;
    private dependentes: Cliente[] = [];
    private titular!: Cliente;

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = new Date();
    }

    public get Nome(): string { return this.nome }
    public get NomeSocial(): string { return this.nomeSocial }
    public get DataNascimento(): Date { return this.dataNascimento }
    public get DataCadastro(): Date { return this.dataCadastro }
    public get Telefones(): Telefone[] { return this.telefones }
    public get Documentos(): Documento[] { return this.documentos }
    public get Endereco(): Endereco { return this.endereco }
    public get Dependentes(): Cliente[] { return this.dependentes }
    public get Titular(): Cliente { return this.titular }

    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Titular(titular: Cliente) { this.titular = titular }

    public clonar(): Prototipo {
        let cliente = new Cliente(this.nome, this.nomeSocial, this.dataNascimento);
        
        if (this.endereco) {
            cliente.Endereco = this.endereco.clonar() as Endereco;
        }
        
        this.documentos.forEach(documento => {
            cliente.Documentos.push(documento.clonar() as Documento);
        });

        this.telefones.forEach(telefone => {
            cliente.Telefones.push(telefone.clonar() as Telefone);
        });

        return cliente;
    }
}