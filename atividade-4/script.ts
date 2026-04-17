function getById(id: string): HTMLElement {

    return document.getElementById(id) as HTMLElement;
}

function changeColor(btn: HTMLButtonElement, elementColor: string): void {
    btn.addEventListener('click', (): void => {
        let p1: HTMLElement = getById('p1');
        p1.style.color = elementColor;
    });
}

function countParagraphs(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let div1: HTMLElement = getById('div-quotes');
        let divQuotes: number = div1.getElementsByTagName('p').length;
        let display: HTMLElement = getById('counter-result');

        display.textContent = `Div have ${divQuotes} paragraphs`;
    });
}

function changeText(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let p: HTMLElement = getById('p2');
        p.innerText = "Paragraph text modified!";
    });
}

function clearText(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let p: HTMLElement = getById('p2');
        p.innerText = "";
    });
}

function changeCSS(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {   
        let p3: HTMLElement = getById('p3');
        p3.style.font = "italic bold 20px 'Open Sans', sans-serif";
    });
}

function copyInput(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let input1: HTMLInputElement = getById('input1') as HTMLInputElement;
        let inputUpper: HTMLInputElement = getById('input2') as HTMLInputElement;

        inputUpper.value = input1.value.toUpperCase();
    });
}

function darkTheme(btn: HTMLButtonElement): void { 
    btn.addEventListener("click", (): void => {
        let body: HTMLElement = document.body;

        body.style.color = "white";
        body.style.backgroundColor = "black";
    });
}

function defaultTheme(btn: HTMLButtonElement): void {
    btn.addEventListener("click", (): void => {
        let body: HTMLElement = document.body;
        
        body.style.color = "";
        body.style.backgroundColor = "";
    });
}


let size: number = 16;

function increasePage(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        size += 2;
        let body: HTMLElement = document.body;
        body.style.fontSize = size + 'px';
    });
}

function decreasePage(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let body: HTMLElement = document.body;

        if (size > 10) {
            size -= 2;
            body.style.fontSize = size + 'px';
        }
    });
}

function calculator(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let n1: number = Number((getById('num1') as HTMLInputElement).value);
        let n2: number = Number((getById('num2') as HTMLInputElement).value);

        // Afirmamos que a busca retornará um Input para podermos ler o .value
        let operationInput: HTMLInputElement = document.querySelector('input[name="operation"]:checked') as HTMLInputElement;
        let operation: string = operationInput.value;

        let display: HTMLElement = getById('result');
        let total: number = 0;

        if (operation == 'sum') total = n1 + n2;
        if (operation == 'sub') total = n1 - n2;
        if (operation == 'mult') total = n1 * n2;
        if (operation == 'div') total = n1 / n2;

        display.innerText = `= ${total}`;
    });
}

function createListItem(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let input: HTMLInputElement = getById('input-item') as HTMLInputElement;
        let ul: HTMLUListElement = getById('element-list') as HTMLUListElement;
    
        if (input.value !== "") {
            let li: HTMLLIElement = document.createElement('li');
            li.innerText = input.value;
            ul.appendChild(li);
            input.value = "";
        }
    });
}

function createSelectOption(btn: HTMLButtonElement): void {
    btn.addEventListener('click', (): void => {
        let input: HTMLInputElement = getById('input-select') as HTMLInputElement;
        let select: HTMLSelectElement = getById('select1') as HTMLSelectElement;

        if (input.value !== "") {
            let option: HTMLOptionElement = document.createElement('option');
            option.innerText = input.value;
            option.value = input.value;
            select.appendChild(option);
            input.value = ""; 
        }
    });
}


// 2) Crie dois exemplos usando os métodos do objeto document:
// a. getElementById();
let btnYellow: HTMLButtonElement = getById('yellow-change-btn') as HTMLButtonElement;
let btnBlue: HTMLButtonElement = getById('blue-change-btn') as HTMLButtonElement;

changeColor(btnYellow, "yellow");
changeColor(btnBlue, "blue");

// b. getElementsByTagName();
let btnCounter: HTMLButtonElement = getById('quote-counter-btn') as HTMLButtonElement;
countParagraphs(btnCounter);

// 4) Crie um segundo botão chamado “limpar” que limpe o conteúdo do texto do parágrafo.
let btnChangeText: HTMLButtonElement = getById('changeText-btn') as HTMLButtonElement;
let btnClear: HTMLButtonElement = getById('clearText-btn') as HTMLButtonElement;

changeText(btnChangeText);
clearText(btnClear);

// 6) Crie um exemplo em que uma propriedade CSS de um elemento HTML é alterada via DOM baseada na documentação da página:
let btnChangeCss: HTMLButtonElement = getById('changeCSS-btn') as HTMLButtonElement;
changeCSS(btnChangeCss);

// 7) Criar um código que copie o conteúdo de uma caixa de texto para outra só que em caixa alta.
let btnCopyUpper: HTMLButtonElement = getById('copy-btn') as HTMLButtonElement;
copyInput(btnCopyUpper);

// 8) Cria código que tenha botão de alto contraste que alterne a cor de fundo do body para preto e cor do texto para branco. Adicionalmente, crie um botão para resetar as cores originais.
let btnDarkTheme: HTMLButtonElement = getById('dark-theme') as HTMLButtonElement;
let btnDefaultTheme: HTMLButtonElement = getById('default-theme') as HTMLButtonElement;

darkTheme(btnDarkTheme);
defaultTheme(btnDefaultTheme);

// 9) Crie um script acionado por botões que aumentem o tamanho do texto de toda a página e outro que faça o contrário.
let btnIncreasePage: HTMLButtonElement = getById('increasePage') as HTMLButtonElement;
let btnDecreasePage: HTMLButtonElement = getById('decreasePage') as HTMLButtonElement;

increasePage(btnIncreasePage);
decreasePage(btnDecreasePage);

// 10) Crie uma pequena calculadora com as 4 operações. A operação deve ser selecionada de botões de radio. Para isso, teste a propriedade checked para descobrir qual operação está selecionada.
let btnCalculator: HTMLButtonElement = getById('calculator-btn') as HTMLButtonElement;
calculator(btnCalculator);

// 11) Pesquise como criar elementos e adicione o conteúdo de uma caixa de texto em uma lista não ordenada.
let btnList: HTMLButtonElement = getById('btn-add-item') as HTMLButtonElement;
createListItem(btnList);

// 12) Repita o exercício anterior adicionando o conteúdo da caixa de texto em um elemento de um select.
let btnSelect: HTMLButtonElement = getById('btn-add-select') as HTMLButtonElement;
createSelectOption(btnSelect);