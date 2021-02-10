const buttonSearch = document.querySelector("#a-contato")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal a")

buttonSearch.addEventListener("click", ()=> {
    modal.classList.remove("hide")
})

close.addEventListener("click", ()=> {
    modal.classList.add("hide")
})
//codigo acima relacionado a criar a pagina em cima da page home!

