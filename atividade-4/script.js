function getById(id) {
    return document.getElementById(id);
}



function changeColor(btn, elementColor) {

    btn.addEventListener('click', () => {

    let p1 = getById('p1');
    
    p1.style.color = elementColor;

});

}

function countParagraphs(btn) {

    btn.addEventListener('click', () => {
    
        let div1 = getById('div-quotes');
        let divQuotes = div1.getElementsByTagName('p').length;
        let display = getById('counter-result');

        display.textContent = `Div have ${divQuotes} paragraphs`;

});
    }


    function changeText(btn) {

        btn.addEventListener('click', () => {

        let p = getById('p2');

        p.innerText = "Paragraph text modified!";


        });


    }

    function clearText(btn) {

        btn.addEventListener('click', () => {

        let p = getById('p2');

        p.innerText = "";


        });

    }



    function changeCSS(btn) {

        btn.addEventListener('click', () => {   

        let p3 = getById('p3')
        p3.style.font = "italic bold 20px 'Open Sans', sans-serif"
    });
}

function copyInput(btn) {
    btn.addEventListener('click', () => {

    input1 = getById('input1');
    inputUpper = getById('input2');

    inputUpper.value = input1.value.toUpperCase();


    })
}

function darkTheme(btn) { 
    btn.addEventListener("click", () => {
    body =  document.body

    body.style.color = "white"
    body.style.backgroundColor = "black"
    })
}

function defaultTheme(btn) {

    btn.addEventListener("click", () => {
        body =  document.body
        
        body.style.color = ""
        body.style.backgroundColor = ""
        
        
    })
}

function increasePage(btn) {
    btn.addEventListener('click', () => {
    

    size += 2
    let body = document.body;

    body.style.fontSize = size + 'px';
    


    });
}

function decreasePage(btn) {
    btn.addEventListener('click', () => {
    
    
    
    let body = document.body;

    if (size > 10) {
        size -= 2
        body.style.fontSize = size + 'px';
    }

    });
}

function calculator(btn){

    btn.addEventListener('click', () => {
        let n1 = Number(getById('num1').value);
        let n2 = Number(getById('num2').value);

        operation = document.querySelector('input[name="operation"]:checked').value

        let display = getById('result')
        let total = 0

        if (operation == 'sum') total = n1+n2
        if (operation == 'sub') total = n1-n2
        if (operation == 'mult') total = n1*n2
        if (operation == 'div') total = n1/n2

        display.innerText = `= ${total}`
    })

}


function createListItem(btn) {

    btn.addEventListener('click', () => {
        
        let input = getById('input-item');
        let ul = getById('element-list')
    
        if (input.value !== "") {
    
            let li = document.createElement('li');
    
            li.innerText = input.value;
    
            ul.appendChild(li)
    
            input.value = "";
    
        }

    })


}

function createSelectOption(btn) {
    btn.addEventListener('click', () => {
        let input = getById('input-select');
        let select = getById('select1');

        if (input.value !== "") {
            
            let option = document.createElement('option');
            
            option.innerText = input.value;

            option.value = input.value;
            
            select.appendChild(option);
        
            input.value = ""; 

        }
    });
}



// 2) Crie dois exemplos usando os métodos do objeto document:
// a. getElementById();

let btnYellow = getById('yellow-change-btn');
let btnBlue = getById('blue-change-btn');

changeColor(btnYellow, "yellow");
changeColor(btnBlue, "blue");


// b. getElementsByTagName();

let btnCounter = getById('quote-counter-btn');
countParagraphs(btnCounter);

// 4) Crie um segundo botão chamado “limpar” que limpe o conteúdo do texto do
// parágrafo.

let btnChangeText = getById('changeText-btn');
let btnClear = getById('clearText-btn');

changeText(btnChangeText);
clearText(btnClear);

// 6) Crie um exemplo em que uma propriedade CSS de um elemento HTML é alterada
// via DOM baseada na documentação da página:

let btnChangeCss = getById('changeCSS-btn')
changeCSS(btnChangeCss);

// 7) Criar um código que copie o conteúdo de uma caixa de texto para outra só que em
// caixa alta.

let btnCopyUpper = getById('copy-btn');
copyInput(btnCopyUpper);

// 8) Cria código que tenha botão de alto contraste que alterne a cor de fundo do body
// para preto e cor do texto para branco. Adicionalmente, crie um botão para resetar
// as cores originais.

let btnDarkTheme = getById('dark-theme')
let btnDefaultTheme = getById('default-theme')

darkTheme(btnDarkTheme)
defaultTheme(btnDefaultTheme)


// 9) Crie um script acionado por botões que aumentem o tamanho do texto de toda a
// página e outro que faça o contrário.

let btnIncreasePage = getById('increasePage');
let btnDecreasePage = getById('decreasePage');
let size = 16;

increasePage(btnIncreasePage);
decreasePage(btnDecreasePage);

// 10) Crie uma pequena calculadora com as 4 operações. A operação deve ser
// selecionada de botões de radio. Para isso, teste a propriedade checked para
// descobrir qual operação está selecionada.

let btnCalculator = getById('calculator-btn');
calculator(btnCalculator);

// 11) Pesquise como criar elementos e adicione o conteúdo de uma caixa de texto em
// uma lista não ordenada.

let btnList = getById('btn-add-item')
createListItem(btnList)

// 12) Repita o exercício anterior adicionando o conteúdo da caixa de texto em um
// elemento de um select.
let btnSelect =  getById('btn-add-select')
createSelectOption(btnSelect)