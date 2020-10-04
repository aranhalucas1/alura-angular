class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adicionar(event) {
        event.preventDefault();

        const negociacao = new Negociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        return negociacao;
    }
}