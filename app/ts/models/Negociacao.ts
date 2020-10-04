class Negociacao {
    private data;
    private quantidade;
    private valor;

    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
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