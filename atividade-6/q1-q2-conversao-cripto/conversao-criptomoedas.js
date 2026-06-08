
function getByID(id) {
    return document.getElementById(id);
}

let botaoConsultar = getByID('botaoConsultar');
let botaoLimpar = getByID('botaoLimpar');
let botaoInverter = getByID('botaoInverter');
botaoConsultar.addEventListener('click', consultarPreco);
botaoLimpar.addEventListener('click', limparDados);
botaoInverter.addEventListener('click', inverterMoedas);


function inverterMoedas() {
    let moedaBase = getByID('moedaBase');
    let moedaConversao = getByID('moedaConversao');
    let temp = moedaBase.value;

    moedaBase.value = moedaConversao.value;
    moedaConversao.value = temp;
}


function limparDados() {
    let moedaBase = getByID('moedaBase');
    let moedaConversao = getByID('moedaConversao');
    let resultado = getByID('resultado');

    moedaBase.value = '';
    moedaConversao.value = '';
    resultado.textContent = '';
}


async function consultarPreco() {

    let moedaBase = getByID('moedaBase').value.toUpperCase();
    let moedaConversao = getByID('moedaConversao').value.toUpperCase();
    let resultado = getByID('resultado');
    if(moedaBase === "" || moedaConversao === "") {
        resultado.textContent = 'Preencha todos os campos';
        return
    }
    let symbol = moedaBase + moedaConversao


try{
    let url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }
    let json = await response.json();
    let preco = Number(json.price).toLocaleString('pt-BR')
    resultado.textContent = preco
}
catch(error) {
    resultado.textContent = error.message;
}

}