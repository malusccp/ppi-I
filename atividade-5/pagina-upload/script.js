
// Para implementar essa funcionalidade, considere os seguintes pontos:
// a) Receba a imagem vinda do componente de arquivos da seguinte forma:
// var arquivoSelecionado = uploadImagem.files[0];
// b) Utilize a função document.createElement() para criar a tag img.
// c) Altere o atributo src da imagem usando a propriedade img.src =
// URL.createObjectURL(file), onde file é o arquivo selecionado pelo usuário.
// d) Adicione a imagem à div com id="resultado" utilizando
// resultado.appendChild(img).

var uploadImagem = document.querySelector("#uploadImagem");

var btn = document.querySelector("#btn-resultado");

var resultado = document.querySelector("#resultado")


btn.addEventListener('click', () => {

var arquivoSelecionado = uploadImagem.files[0];


var newImg = document.createElement("img")

console.log(typeof arquivoSelecionado, arquivoSelecionado)

newImg.src = URL.createObjectURL(arquivoSelecionado)


resultado.appendChild(newImg);
    
resultado.classList.remove('oculto');
})
