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

// https://projetos-beginners.web.app/ProjetoFinal/

//SECTION champions
let urlChampions = 'https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json';
let contentChampions = document.querySelector('.content-champions');

async function getContent() {
    try {
        const response =  await fetch(urlChampions)
        const data = await response.json()
        const champions = data.data
        showChampions(champions)
    } catch (err) {
        console.log(err)
    }
}

getContent()

function showChampions(champions) {
    let teste = [champions]

    for(let champion of teste) {
        console.log(champion)
        //         // contentChampions.innerHTML += ``
    }

}



// let url = 'http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion/Aatrox.json'


let btnSearch = document.querySelector('.button');

btnSearch.addEventListener("click", ()=> {
    let input = document.querySelector('#input-champion').value;

})



