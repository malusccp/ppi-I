btnEscolha = document.querySelector("#btn-escolha")
selectEscolha = document.querySelector(".existencialistas")
result = document.querySelector(".result")

selectEscolha.addEventListener("change", (event) => {

    result.innerHTML = "";

    var newImg = document.createElement("img")  
    console.log(selectEscolha.value)
    newImg.src = selectEscolha.value

    result.appendChild(newImg)

})