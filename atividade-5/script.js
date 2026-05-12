

// Refatore o código de forma que seja possível passar uma mensagem de erro
// específica e que possa ser passado o id do componente HTML que irá receber a
// mensagem de erro.




function exibirErro(idElemento, msg) {
    var elemento = document.querySelector('#' + idElemento);
    
    elemento.textContent = msg
    
    elemento.classList.remove('oculto');
    
    setTimeout(function() {
        elemento.classList.add('oculto');
    }, 3000);
}


var botao = document.querySelector('#botaoErro')
botao.addEventListener('click', () => {
    exibirErro('mensagemErro', msg);
});


// Altere o código anterior validando se o campo foi preenchido:
// a) Retire os espaços usando a função trim() das strings e faça um if testando se a
// string resultante é nula/vazia;
// b) Sinalize que o conteúdo do campo não pode ser vazio usando a função de
// exibir mensagens de erro da questão anterior.

var botaoExibir = document.querySelector('#botaoExibir');

botaoExibir.addEventListener('click', exibirConteudo)


function exibirConteudo() {
    var input = document.querySelector('#caixaDeTexto');
    var conteudo = document.querySelector('#conteudo');

    var valorSemEspaco = input.value.trim();

    if (valorSemEspaco === "" ) {
        exibirErro('conteudo', 'A string não pode ser vazia')
    }
    else {
        conteudo.innerHTML = valorSemEspaco;
        conteudo.classList.remove('oculto');
    }

}