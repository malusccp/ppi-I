function getByID(id) {
    return document.getElementById(id);
}

botaoPesquisar = getByID('botaoPesquisar');
botaoPesquisar.addEventListener('click', pesquisarMusica);


async function pesquisarMusica() {
    let nomeMusica = getByID('nomeMusica').value;
    let resultado = getByID('resultado');
    let midia = getByID('midia');

    try{
    let urlLetra = `https://api.lyrics.ovh/v1/Harry%20Styles/${nomeMusica}`;
    let response = await fetch(urlLetra);

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }
    let json = await response.json();
    resultado.textContent = json.lyrics
}
catch(error) {
    resultado.textContent = error.message;
}

try{
    let nomeFormatado = nomeMusica.replace(/ /g, '+');
    let urlITunes = `https://itunes.apple.com/search?term=harry+styles+${nomeFormatado}&entity=song&limit=1`
    let responseITunes = await fetch(urlITunes);
        if (!responseITunes.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }
    let jsonITunes = await responseITunes.json();

    let capa = jsonITunes.results[0].artworkUrl100;
    let audio = jsonITunes.results[0].previewUrl;

    midia.innerHTML = `
                <img src="${capa}" alt="Capa do Álbum" style="border-radius: 8px; margin-bottom: 10px; width: 100px; height: 100px;">
                <br>
                <audio controls src="${audio}" style="width: 100%; margin-bottom: 20px;"></audio>
            `;
    }

    catch(error) {
        console.error("Não foi possível carregar o áudio: " + error.message);
    }
}
    
