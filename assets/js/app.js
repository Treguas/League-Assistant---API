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


var ionia = document.getElementById('ion') /* ok */
var bilge = document.getElementById('agu') /* ok */
var noxus = document.getElementById('nox') /* ok */
var demacia = document.getElementById('dem') /* ok */
var shadow_isles = document.getElementById('ilhas')
var shurima = document.getElementById('shu')
var vazio = document.getElementById('vaz')
var monte_targon = document.getElementById('mont')
var zaun = document.getElementById('zau')
var piltover = document.getElementById('pil')
var ixtal = document.getElementById('ixt')
var bandopolis = document.getElementById('band')
var freljord = document.getElementById('frel')
var titulo = document.getElementById('titulo')
var acesso = document.getElementById('access')
var facul = document.getElementById('facul')

ionia.addEventListener('click', function(){
    titulo.innerHTML = "Ionia"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspRodeada por águas traiçoeiras, Ionia é composta por várias províncias aliadas dispersas ao longo do arquipélago gigantesco conhecido por muitos como as Primeiras Terras. Como a cultura ioniana vem sendo moldada há muito tempo com base na busca pelo equilíbrio em todas as coisas, a fronteira entre os reinos material e espiritual tende a ser mais flexível por aqui, principalmente nas florestas e montanhas selvagens.<br>

    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEmbora os encantamentos deste lugar sejam instáveis e suas criaturas sejam mágicas e perigosas, a maioria dos ionianos conseguiu levar uma vida próspera aqui durante séculos. Os monastérios cheios de guerreiros, as milícias provinciais e até mesmo o próprio continente foram o suficiente para mantê-los protegidos.<br>
    
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMas essa calmaria terminou há doze anos, quando Noxus atacou as Primeiras Terras. As tropas do império, as quais pareciam não ter fim, invadiram Ionia e só foram derrotadas muitos anos depois, e com grandes custos.<br>
    
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAgora, uma paz frágil paira sobre Ionia. Reações distintas à guerra acabaram dividindo a região – alguns grupos, como os monges Shojin e os Kinkou, procuram retornar ao isolamento pacífico e às tradições antigas. Já outras facções mais radicais, como a Irmandade Navori e a Ordem das Sombras, exigem a militarização da magia destas terras, a fim de criar uma nação unificada capaz de se vingar de Noxus.<br>
    
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspO destino de Ionia se sustenta sobre um equilíbrio delicado que alguns estão dispostos a desfazer, mas todos, sem exceção, estão irrequietos, sentindo a energia da mudança sob seus pés.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/l7opUhgEx7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    
    acesso.innerHTML = "Conheça mais Sobre Ionia"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/ionia/"
})

bilge.addEventListener('click', function(){
    titulo.innerHTML = "Águas de Sentina"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSituada no arquipélago das Ilhas da Chama Azul, Águas de Sentina é uma cidade portuária sem igual, cheia de mercenários, gangues das docas e contrabandistas do mundo inteiro. Aqui, fortunas crescem e ambições desmoronam em um piscar de olhos. É uma cidade de recomeços para quem está fugindo da justiça, de dívidas ou de perseguições, já que nestas ruas tortuosas ninguém se importa com o seu passado. Mesmo assim, a cada manhã, corpos de viajantes descuidados são encontrados flutuando no mar perto das docas, com os bolsos vazios e suas gargantas cortadas...

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEmbora seja perigosíssima, Águas de Sentina fervilha com novas oportunidades, já que não é limitada pelas amarras de um governo formal e regulações de mercado. Quem tem dinheiro pode comprar quase tudo aqui, desde itens hextec proibidos até a lealdade de um senhor do crime.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCom a destituição do último "rei dos ladrões", Águas de Sentina entrou em um período de transição enquanto os capitães mais proeminentes tentam chegar a um acordo sobre o futuro da cidade. Mas, havendo navios em condições de navegar e homens dispostos a tripulá-los, Águas de Sentina continuará sendo um dos lugares mais peculiares e bem relacionados de Runeterra.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/l7opUhgEx7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Águas de Sentina"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/bilgewater/"
})

noxus.addEventListener('click', function(){
    titulo.innerHTML = "Noxus"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNoxus é um império poderoso com uma reputação temível. É visto como uma ameaça brutal e expansionista pelos estrangeiros, mas, por trás do exterior bélico, há uma sociedade surpreendentemente inclusiva que respeita e encoraja os talentos e as aptidões de cada indivíduo.

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOs Noxii já foram uma tribo bárbara e violenta, até o momento em que invadiram a cidade antiga que, hoje em dia, fica no coração de seu domínio. Mesmo sob ameaças vindas de todos os lados, eles avançaram contra seus inimigos sem temor, expandindo o território ano a ano. A luta pela sobrevivência definiu o caráter dos noxianos modernos, um povo orgulhoso que valoriza a força acima de tudo — mas que sabe reconhecer que ela se manifesta de diversas formas.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspQualquer um pode conquistar uma posição de poder e respeito dentro de Noxus se demonstrar a aptidão necessária, independentemente de classe social, antecedentes ou riquezas. Os indivíduos que sabem usar magia são muito respeitados, e costumam ser recrutados para que seus talentos especiais sejam aprimorados e postos a serviço do império.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEntretanto, apesar dos ideais meritocráticos, as antigas famílias nobres ainda detêm grande poder... e há quem diga que a maior ameaça a Noxus não vem de fora, mas de dentro.
    
    <br><iframe width="560" height="315" src="https://www.youtube.com/embed/9EXK3xBfwTU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Noxus"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/noxus/"
})

shadow_isles.addEventListener('click', function(){
    titulo.innerHTML = "Ilha das Sombras"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEsta terra amaldiçoada já foi lar de uma civilização nobre e evoluída, sendo conhecida entre seus aliados como as Ilhas das Bênçãos. No entanto, mais de mil anos atrás, um cataclisma mágico sem precedentes estilhaçou a barreira entre os mundos material e espiritual, fundindo ambos... e aniquilando toda e qualquer forma de vida em um instante.

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAgora, uma Névoa Negra maligna cobre as Ilhas permanentemente, e a própria terra do lugar encontra-se corrompida por uma magia sombria. Qualquer mortal que se aventure por esses litorais nefastos terá sua força vital lentamente drenada, o que, por sua vez, atrai os espíritos insaciáveis e atormentados dos mortos.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPerecer dentro da névoa é estar condenado a assombrar este lugar medonho por toda a eternidade. Para piorar, o poder das Ilhas das Sombras parece se fortalecer a cada ano, permitindo que os espectros mais poderosos vagueiem cada vez mais longe por Runeterra.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/oAW0H9WCPcE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Ilha das Sombras"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/shadow-isles/"
})

vazio.addEventListener('click', function(){
    titulo.innerHTML = "Vazio"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspRuidosamente lançado à existência com o surgimento do universo, o Vazio é uma manifestação da vastidão inatingível daquilo que jaz além. É uma força de apetite insaciável, que espera uma eternidade até que seus mestres, os misteriosos Observadores, marquem o momento final da destruição.

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspQuando um mortal é tocado por esse poder, ele vislumbra uma agonizante irrealidade eterna, que é o suficiente para estilhaçar até mesmo as mentes mais fortes. Os próprios habitantes do reino do Vazio são criaturas geradas, muitas vezes com pouquíssima consciência, mas incumbidas de um propósito peculiar: levar toda Runeterra ao oblívio.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/fyb2KC-q7ls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Vazio"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/void/"
})

shurima.addEventListener('click', function(){
    titulo.innerHTML = "Shurima"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspO império de Shurima já foi uma civilização próspera que ocupava um continente inteiro. Forjado pelos poderosos deuses-guerreiros do Batalhão de Ascendentes em uma era perdida, ele uniu todos os povos díspares do sul e consolidou uma paz duradoura entre eles.

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPoucos ousavam se rebelar – e aqueles que o faziam, como a nação amaldiçoada de Icathia, eram esmagados sem misericórdia.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEntretanto, após milhares de anos de crescimento e prosperidade, a Ascensão fracassada do último imperador de Shurima deixou a capital em ruínas, e as histórias da antiga glória do império se tornaram pouco mais do que mitos. Agora, a maioria dos habitantes nômades dos desertos de Shurima lutam para conseguir se sustentar nesta terra impiedosa. Alguns grupos construíram pequenos postos para defender os raros oásis, enquanto outros mergulham em catacumbas há muito perdidas em busca das incontáveis fortunas que dizem estar aguardando lá embaixo. Também há quem leve uma vida de mercenário, trocando serviços por moedas antes de desaparecer de novo na vastidão sem lei.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMesmo assim, alguns ainda ousam sonhar com o retorno dos tempos antigos. Recentemente, as tribos andaram se agitando, fomentadas pelos sussurros vindos do coração do deserto sobre o retorno do imperador Azir, que os levará a uma nova era de maravilhas.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/Wu4iXThpubI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Shurima"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/shurima/"
})

zaun.addEventListener('click', function(){
    titulo.innerHTML = "Zaun"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspZaun é um grande distrito subterrâneo, aos pés de cânions profundos e vales que cortam Piltover. A pouca luz que chega lá é filtrada pelas fumaças que saem dos emaranhados de canos corroídos e refletem do vidro manchado de sua arquitetura industrial. Zaun e Piltover já foram unidas, mas agora são sociedades simbióticas, mas separadas. Apesar de existir no crepúsculo perpétuo da poluição, Zaun prospera com seu povo vibrante e sua rica cultura. A riqueza de Piltover permitiu que Zaun se desenvolvesse em paralelo; um espelho escuro da cidade acima. Muitas das mercadorias que chegam a Piltover acabam entrando no mercado clandestino de Zaun, e os inventores hextec que consideram que as restrições impostas na cidade acima são muito rígidas descobrem que suas pesquisas perigosas são bem-vindas em Zaun. O desenvolvimento desenfreado de tecnologias voláteis e da indústria imprudente fez com que as extensões de Zaun ficassem poluídas e perigosas. Correntes de derramamento tóxico estagnaram nas partes mais baixas da cidade, mas mesmo aqui as pessoas encontram maneiras de existir e prosperar.

    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/fsnDbealN9E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    
    acesso.innerHTML = "Conheça mais Sobre Zaun"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/zaun/"
})

piltover.addEventListener('click', function(){
    titulo.innerHTML = "Piltover"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPiltover é uma cidade próspera e progressiva cujo poder e influência estão em crescimento. Ela é o centro cultural de Valoran, onde a arte, o artesanato, o comércio e a inovação andam de mãos dadas. Seu poder não vem de soberania militar, mas através dos motores do comércio e do pensamento de vanguarda. Situada no despenhadeiro acima do distrito de Zaun e de frente para o oceano, frotas de navios passam por seus portões do mar gigantescos, trazendo iguarias do mundo todo. A riqueza que isso gera deu lugar a um aumento sem precedentes no crescimento da cidade. Piltover se reinventou - e continua se reinventando - como uma cidade onde fortunas podem ser feitas e sonhos podem ser realizados. Os crescentes clãs de mercadores investiram no desenvolvimento dos empreendimentos mais incríveis: grandes loucuras artísticas, pesquisa hextec esotérica e monumentos arquitetônicos em seu poder. Com cada vez mais inventores estão se envolvendo com a história de hextec, Piltover se tornou um ímã para os artesãos mais habilidosos do mundo.
<br><iframe width="560" height="360" src="https://www.youtube.com/embed/Z_BedYLqQ4g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    
    acesso.innerHTML = "Conheça mais Sobre Piltover"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/piltover/"
})

ixtal.addEventListener('click', function(){
    titulo.innerHTML = "Ixtal"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspReconhecida por seu domínio da magia elemental, Ixtal foi uma das primeiras nações independentes que se uniram ao império shurimane. Na verdade, a cultura ixtalense é muito mais antiga, parte da grande diáspora ocidental que deu origem a civilizações como Buhru, a magnífica Helia e os ascetas de Targon. Além disso, é provável que tenham desempenhado um papel significativo na criação do primeiro Ascendente.

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOs magos de Ixtal sobreviveram ao Vazio, e mais tarde aos Darkin, distanciando-se dos reinos vizinhos, servindo-se da vida selvagem ao redor como se fosse um escudo. Apesar de muito ter sido perdido, eles se comprometeram em preservar o pouco que restou...
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAgora, isolada na selva há milhares de anos, a sofisticada cidade arcológica de Ixaocan permanece praticamente livre de influências externas. Tendo testemunhado de longe a ruína das Ilhas das Bênçãos e as Guerras Rúnicas logo depois, os ixtalenses veem todas as outras facções de Runeterra como novatas e impostoras, e usam sua poderosa magia para manter qualquer intruso bem longe.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/-PWWRS8v7Ag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Ixtal"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/ixtal/"
})

freljord.addEventListener('click', function(){
    titulo.innerHTML = "Freljord"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFreljord é uma terra hostil e impiedosa, onde todos já nascem guerreiros para não perecer diante das adversidades.

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOrgulhosas e muito independentes, as tribos locais são, muitas vezes, consideradas selvagens, rústicas e "nada civilizadas" por seus vizinhos de Valoran, que não conhecem as tradições milenares que as moldam. Há muitos milhares de anos, a aliança formada pelas irmãs Avarosa, Serylda e Lissandra foi rompida em uma guerra que ameaçou toda a região de Runeterra, lançando as terras nortenhas ao caos de um inverno quase constante. Agora, os únicos destinados (ou capacitados) a liderar são os mortais realmente excepcionais, resistentes aos estragos do fogo e do gelo.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspApesar dos esforços dos Praeglacius, mitos e lendas sobre deuses antigos, yetis enigmáticos e irrequietos andarilhos espirituais ainda persistem. Os saqueadores dos Garra do Inverno avançam mais e mais a cada ano que passa, causando problemas ao sul de Demacia e às fronteiras de Noxus ao leste. Por fim, em busca de um futuro mais pacífico, tribos e clãs independentes começaram a oferecer vassalagem a Ashe, a jovem rainha dos avarosianos.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMesmo assim, há maus presságios à espreita. A guerra está voltando a Freljord, e ninguém tem esperança de escapar.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/pnCq4uyYtmo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Freljord"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/freljord/"
})

bandopolis.addEventListener('click', function(){
    titulo.innerHTML = "Bandópolis"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspHá muita controvérsia sobre onde exatamente fica o lar dos yordles, embora vários mortais afirmem ter atravessado portais invisíveis para uma terra de estranho encantamento além do reino material. Falam de um lugar com magia ilimitada, onde os incautos, atraídos por uma infinidade de elementos fantásticos, podem acabar perdidos em um sonho sem volta.
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEm Bandópolis, dizem que todas as sensações são amplificadas para os não yordles. As cores são mais vívidas. A comida e a bebida embriagam os sentidos por anos e, uma vez provadas, jamais podem ser esquecidas. A luz do sol é eternamente dourada, as águas são completamente cristalinas e toda colheita é extremamente frutífera. Talvez alguns desses relatos sejam verdadeiros, mas talvez nenhum seja, pois não há duas pessoas neste mundo que concordem sobre o que realmente viram.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSó uma coisa é certa: Bandópolis e seus habitantes carregam um poder atemporal. Isso deve explicar por que muitos mortais que encontram seu caminho de volta parecem ter envelhecido bruscamente, embora a maioria sequer retorne.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/h0ySffKkE1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    
    acesso.innerHTML = "Conheça mais Sobre Bandópolis"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/bandle-city/"
})

demacia.addEventListener('click', function(){
    titulo.innerHTML = "Demacia"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEm um reino imponente e legítimo com uma prestigiosa história militar, os habitantes de Demacia sempre colocaram os ideais de justiça, honra e dever acima de tudo, orgulhando-se intensamente de sua herança cultural. No entanto, apesar desses nobres princípios, essa grande nação autossuficiente foi se tornando cada vez mais fechada e isolacionista nos últimos séculos.

    Hoje, Demacia é uma nação em crise.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSua capital, a Grande Cidade de Demacia, nasceu como um refúgio contra a feitiçaria após as Guerras Rúnicas, construída sobre a enigmática petricita – uma pedra branca peculiar que anula qualquer energia mágica. É de lá que a família real, desde muito tempo atrás, defende as cidades e vilas mais afastadas, as fazendas, as florestas e as montanhas ricas em recursos minerais.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNo entanto, após a morte súbita do rei Jarvan III, as outras famílias nobres ainda não aprovaram a sucessão de seu único herdeiro ao trono, o jovem príncipe Jarvan.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAqueles que vivem para além das fronteiras fortemente protegidas são cada vez mais vistos com desconfiança e, em uma época de tantas incertezas, muitos antigos aliados começaram a procurar proteção em outros lugares. Dizem por aí que a era dourada de Demacia já passou e, a menos que seu povo esteja disposto a se adaptar a um mundo em constante mudança – o que muitos julgam impossível –, a queda do reino será inevitável.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNem toda a petricita da região será capaz de proteger Demacia de si mesma.
    
    <br><iframe width="560" height="315" src="https://www.youtube.com/embed/lAGWn3GVLVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Sobre Demacia"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/demacia/"
})

monte_targon.addEventListener('click', function(){
    titulo.innerHTML = "Monte Targon"
    conteudo.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPara melhor entender Runeterra, um bom ponto de partida são as montanhas ocidentais de Shurima, berço de muitas lendas sobre a origem do mundo.

    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspComo todo local mítico, Targon atrai sonhadores e peregrinos em busca da verdade e de grandes revelações. É o caso da tribo dos valentes Rakkor, que fizeram das montanhas seu lar. O Monte Targon é o ponto mais alto de Runeterra; um pico imponente de rocha torcida e curada ao sol, tão altivo que parece tocar as estrelas.
    
    <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspEmbora saibam que a escalada é praticamente impossível, há milênios os mortais são atraídos até lá, mesmo que nem sempre entendam o motivo.
    
    <br><iframe width="560" height="360" src="https://www.youtube.com/embed/gBjox7vn3-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    acesso.innerHTML = "Conheça mais Sobre Monte Targon"
    acesso.href = "https://universe.leagueoflegends.com/pt_BR/region/mount-targon/"
})