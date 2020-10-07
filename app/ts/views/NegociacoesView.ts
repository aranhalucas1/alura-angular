class NegociacoesView extends View <Negociacoes> {

    update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {

        return `
        
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        ${model.paraArray().map(negociacoes => 
            `
            <tr>
                <td>${negociacoes.getData.getDate()}/${negociacoes.getData.getMonth()}/${negociacoes.getData.getFullYear()}</td>
                <td>${negociacoes.getQuantidade}</td>
                <td>${negociacoes.getValor}</td>
                <td>${negociacoes.volume}</td>  
            </tr>
            
            `
            
            ).join('')}
            
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
        
        
        `
    }
}