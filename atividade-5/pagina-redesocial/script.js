
var botaoCalcular = document.querySelector('#btn-calcular')

function exibirErro(idElemento, msg) {
    var elemento = document.querySelector('#' + idElemento);
    
    elemento.textContent = msg
    
    elemento.classList.remove('oculto');
    
    setTimeout(function() {
        elemento.classList.add('oculto');
    }, 3000);
}


function verificarEntrada(qtdVisualizacao, qtdInteracoes) {

    if (isNaN(qtdVisualizacao) || isNaN(qtdInteracoes)) {
        exibirErro('msgErro', 'A entrada deve ser composta de valores numéricos')
    }
    else if (qtdVisualizacao < 0 || qtdInteracoes < 0 ) {
        exibirErro('msgErro', 'A entrada deve ser composta de valores numéricos válidos')

    }
    return true
}


function calcularTaxa() {
    var qtdInteracoes = document.querySelector('#qtdInteracoes').value
    var qtdVisualizacao = document.querySelector('#qtdVisualizacoes').value
    var conteudo = document.querySelector('#resultadoTaxa')

    if (verificarEntrada(qtdVisualizacao, qtdInteracoes)) {
        var taxaDeEngajamento = (qtdInteracoes/qtdVisualizacao) * 100

        conteudo.innerHTML = taxaDeEngajamento.toFixed(2) + '%'
        
    }

}


botaoCalcular.addEventListener('click', calcularTaxa)