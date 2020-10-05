class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        return this.negociacoes.push(negociacao);
    }
    paraArray() {
        return this.negociacoes;
    }
}
