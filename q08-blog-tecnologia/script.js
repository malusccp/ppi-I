const btn = document.querySelector("#btn-theme");
const theme = document.querySelector("#theme-1");

const themes = [ 'q05-styles.css', 
    'q06-styles.css',
    'q07-styles.css'
];

const linkDoCSS = theme;
const listaDeTemas = themes;

btn.addEventListener("click", function() {
  let temaAtual = linkDoCSS.getAttribute('href');
  let posicaoAtual = listaDeTemas.indexOf(temaAtual);
  let proximaPosicao = (posicaoAtual + 1) % listaDeTemas.length;
  let novoTema = listaDeTemas[proximaPosicao];
  linkDoCSS.setAttribute('href', novoTema);
});