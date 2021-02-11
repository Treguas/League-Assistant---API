var campeao = document.querySelector('#input-champion')
let contentChampions = document.querySelector('.content-champions');

document.querySelector("#input-champion").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('.button').click();

    }
}); //Chamar Campeões com o Enter  
  
  async function getChampions() {

   const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion/${campeao.value}.json`)
   const champion = await response.json()
   console.log(champion)     

            var cont = 0

            nome = `${campeao.value}`
            Passive = champion.data[nome].passive.image.full
            Q = champion.data[nome].spells[0].image.full
            W = champion.data[nome].spells[1].image.full
            E = champion.data[nome].spells[2].image.full
            R = champion.data[nome].spells[3].image.full

            contentChampions.innerHTML =

                `<div class="champions" >
                        <div class="card-title">
                            <span style="color: #cb00f3;">`+ champion.data[nome].name + '</span> - ' + champion.data[nome].title + `
                        </div>
                        <div class="foto"></div>
                        <div style="display: flex; align-items: center; width: max-content">
                            <div class="passive"></div>
                            <div class="spellQ"></div>
                            <div class="spellW"></div>
                            <div class="spellE"></div>
                            <div class="spellR"></div>                        
                       </div>
                       <div>
                            <span class="hability">Passiva</span>
                            <p>`+champion.data[nome].passive.description+`</p>
                            <span class="hability">Habilidade Q</span>
                            <p>`+champion.data[nome].spells[0].description+`</p>
                            <span class="hability">Habilidade W</span>
                            <p>`+champion.data[nome].spells[1].description+`</p>
                            <span class="hability">Habilidade E</span>
                            <p>`+champion.data[nome].spells[2].description+`</p>
                            <span class="hability">Habilidade R</span>
                            <p>`+champion.data[nome].spells[3].description+`</p>

                       
                       </div>


                        <div style="margin-top: 0.6rem;">
                            `+ champion.data[nome].lore + `
                        </div>
                        <div style="text-align:center;">
                            <p>Poder de Ataque: `+ champion.data[nome].info.attack + `</p>
                            <p>Poder de Defesa: `+ champion.data[nome].info.defense + `</p>
                            <p>Poder de Magia: `+ champion.data[nome].info.magic + `</p>
                            <p>Dificuldade: `+ champion.data[nome].info.difficulty + `</p>
                        </div>
                    </div>`

            document.querySelector('.foto').innerHTML =
                 `<div class="img-champion fotoMain" function="changeIMG()" style="text-align: justify"><img id="camp" src='https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeao.value}_${cont}.jpg'></div>`

             var j = []

             for (skin in champion.data[nome].skins) {
                 j.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeao.value}_`+champion.data[nome].skins[skin].num+`.jpg`)   
             }

             var maxJ = j.length
             var cont1 = 0;

             setInterval(function changeIMG(){

                 if(cont1 == maxJ -1){
                     cont1 = 0;
                 }else{
                     cont1++;
                 }

                 document.querySelector('.foto').innerHTML = `<div class="img-champion fotoMain"><image src="`+j[cont1]+`"><div>`
               
             }, 3000)


             document.querySelector('.passive').innerHTML = 
             `<img  style="width:100px" src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/${Passive}">`
             document.querySelector('.spellQ').innerHTML =
                 `<img style="width:100px" src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${Q}">`
             document.querySelector('.spellW').innerHTML =
                 `<img style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${W}">`
             document.querySelector('.spellE').innerHTML =
                 `<img style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${E}">`
             document.querySelector('.spellR').innerHTML =
                 `<img style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${R}">`

            //document.getElementById('status').innerHTML =


            //     `<div>
            //     <div id="stats">
            //         <h2>Nível `+ 1 + `</h2>
            //         <p>Vida Base: `+ json.data[nome].stats.hp + `</p>
            //         <p>Velocidade de Movimento Base: `+ json.data[nome].stats.movespeed + `</p>
            //         <p>Alcance de Ataque Base: `+ json.data[nome].stats.attackrange + `</p>
            //         <p>Velocidade de Ataque Base: `+ json.data[nome].stats.attackspeed + `</p>
            //         <p>Dano de Ataque Base: `+ json.data[nome].stats.attackdamage + `</p>
            //         <p>Armadura Base: `+ json.data[nome].stats.armor + `</p>
            //         <p>Bloqueio de Resistência Mágica: `+ json.data[nome].stats.spellblock + `</p>
            //         <p>Quantidade de Mana Base: `+ json.data[nome].stats.mp + `</p>
            //     </div>
            // </div>`
}

// /* Mostrando a Spell Passiva */
// function spellPshow() {
//     $("#elementoPassivo").show()

//     $("#abname1").hide()
//     $("#custo1").hide()
//     $("#cooldown1").hide()
//     $("#description1").hide()

//     $("#abname2").hide()
//     $("#custo2").hide()
//     $("#cooldown2").hide()
//     $("#description2").hide()

//     $("#abname3").hide()
//     $("#custo3").hide()
//     $("#cooldown3").hide()
//     $("#description3").hide()

//     $("#abname0").hide()
//     $("#custo0").hide()
//     $("#cooldown0").hide()
//     $("#description0").hide()
// }
