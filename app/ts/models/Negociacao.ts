class Negociacao {

    constructor(private data: Date, private quantidade: number, private valor: number) {
    }

    get getData() {
        return this.data;
    }

    get getQuantidade() {
        return this.quantidade;
    }

    get getValor() {
        return this.valor;
    }

    get volume() {
        return this.quantidade * this.valor;
    }
}