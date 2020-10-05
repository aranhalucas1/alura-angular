class Negociacoes {
    private negociacoes: Array<Negociacoes> = []

    adiciona(negociacao: Negociacoes) {

        return this.negociacoes.push(negociacao);
    }

    paraArray() {
        return this.negociacoes;
    }
}