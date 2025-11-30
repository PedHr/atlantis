import Construtor from "../interfaces/construtor.js";

export default abstract class Diretor<T>{
    protected construtor!: Construtor<T>
    public abstract construir(): T
}