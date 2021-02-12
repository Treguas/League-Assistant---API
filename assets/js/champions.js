var campeao = document.querySelector('#input-champion')
let contentChampions = document.querySelector('.content-champions');
var championSelect = document.querySelector('.championSelect')

document.querySelector("#input-champion").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('.button').click();

    }
}); //Chamar Campeões com o Enter  

function clear() {
    contentChampions.innerHTML = '';
    document.querySelector('.foto').innerHTML = ''
}

  
  async function getChampions() {
   clear();

   contentChampions.innerHTML = '';

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
}

/* SELECT DOS CAMPEÕES */
fetch("https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json").then(res => res.json()).then(data => {
	champions = data;
	document.querySelector('.championSelect').innerHTML += "<option hidden selected> Selecione um Campeão.... </option>";
	
	for(champion in champions.data){    
    	document.querySelector('.championSelect').innerHTML += "<option value='"+ champion +"'>"+ champion +"</option>";
    }
});


document.querySelector('.championSelect').addEventListener('change', ()=> {
    
    
    let getSelect = document.querySelector('.championSelect').value;
    
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion/${getSelect}.json`).then(res => res.json()).then(champion => {
        
        
        
            var cont = 0
            
            nome = `${getSelect}`
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
            `<div class="img-champion fotoMain" function="changeIMG()" style="text-align: justify"><img id="camp" src='https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${getSelect}_${cont}.jpg'></div>`
                                 
            var j = []
            
            for (skin in champion.data[nome].skins) {
                j.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${getSelect}_`+champion.data[nome].skins[skin].num+`.jpg`)   
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
            
                                    
    })
})