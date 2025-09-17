//Principais
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

//Corações
const heart1 = document.querySelector(".heart");
const heart2 = document.querySelector(".heart1");
const heart3 = document.querySelector(".heart2");

//Decorações, "telas" e informações exibidas na tela
const estrelas = document.querySelector(".sky-stars");
const goku = document.querySelector(".goku");
const dragon = document.querySelector(".dragon");
const dragonair = document.querySelector(".dragonair");


// nao meche aqui jao, to vendo aqui ainda
const skeletonHead = document.querySelector(".skeletonHead")

const telaMorte = document.querySelector(".div-continuar");
const telaIncio = document.querySelector(".tela_inicio");
const gameBoard = document.querySelector(".game-board");
const infoBoard = document.querySelector(".info-board");
const pretin = document.querySelector(".pretin");
const goku_golpes = document.querySelector(".goku_golpes");

//:D
const musica = document.getElementById('troca');
const musicaSelecao = document.getElementById("musicaSelecao");
const musicaJogo = document.getElementById("musicaJogo");
// (nahyron) coloquei essa variavel para controlar o personagem atual e eu poder usar la na frente :)
let personagemAtual = "";

let segundos = 0;



//Pontos e vidas ao inciar o jogo
let pontos = 0;
let lifes = 3;
const coin = document.querySelector(".coin");

//Sumindo com algumas coisas da tela antes do jogo começar
pipe.style.display = "none";
mario.style.display = "none";
coin.style.display = "none";
infoBoard.style.display = "none";
telaMorte.style.display = "none";
pretin.style.display = "none";

var toca1 = true;
var toca2 = true;




//Já tinha antes
const jump = () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);



}

// (nahyron) funções para o sonic virar bolinha quando segurar a seta pra baixo e voltar ao normal quando soltar

function spin() {
    mario.src = "/_media/gifs-principais/sonic-spinning.gif";

    musica.removeAttribute('loop');
}

// (nahyron) função para o sonic voltar ao normal

function normal() {
    mario.src = "/_media/gifs-principais/sonic.gif"
}


const marioSeq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown'];
const sonicSeq = ['ArrowLeft','ArrowRight','ArrowLeft','ArrowRight'];
let marioInput = [];
let sonicInput = [];
const marioKartSeq = ['ArrowUp','ArrowRight','ArrowDown','ArrowLeft'];
const shadowSeq = ['ArrowRight','ArrowRight'];
let marioKartInput = [];
let shadowInput = [];

document.addEventListener('keydown', function(e) {
    // Mario secreto
    marioInput.push(e.key);
    if (marioInput.length > marioSeq.length) marioInput.shift();
    if (marioInput.join('').toLowerCase() === marioSeq.join('').toLowerCase()) {
        document.querySelector('option[value="marioSecreto"]').style.display = 'block';
        alert('Skin secreta do Mario desbloqueada!');
        marioInput = [];
    }
    // Sonic secreto
    sonicInput.push(e.key);
    if (sonicInput.length > sonicSeq.length) sonicInput.shift();
    if (sonicInput.join('').toLowerCase() === sonicSeq.join('').toLowerCase()) {
        document.querySelector('option[value="sonicSecreto"]').style.display = 'block';
        alert('Skin secreta do Sonic desbloqueada!');
        sonicInput = [];
    }

     // Mario Kart secreto
    marioKartInput.push(e.key);
    if (marioKartInput.length > marioKartSeq.length) marioKartInput.shift();
    if (marioKartInput.join('').toLowerCase() === marioKartSeq.join('').toLowerCase()) {
        document.querySelector('option[value="marioKart"]').style.display = 'block';
        alert('Skin secreta do Mario Kart desbloqueada!');
        marioKartInput = [];
    }
    // Shadow secreto
    shadowInput.push(e.key);
    if (shadowInput.length > shadowSeq.length) shadowInput.shift();
    if (shadowInput.join('').toLowerCase() === shadowSeq.join('').toLowerCase()) {
        document.querySelector('option[value="shadowSecreto"]').style.display = 'block';
        alert('Skin secreta do Shadow desbloqueada!');
        shadowInput = [];
    }
});
//Conforme vai sendo alterado o valor no select vai executando está função
//Muda o personagem exibido na tela de Start e dentro do jogo já que define o src da classe mario com o Gif do personagem escolhido
function mudarPersonagem() {
    let selecao = document.getElementById("character-select").value;
    let personagemSelecionado = document.getElementById("personagem-sel");

    // salva o perso atual
    personagemAtual = selecao;

    switch (selecao) {
        case "mario":
            mario.src = "/_media/gifs-principais/mario.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/marioDancando.gif";
            musica.src = "/_media/sounds/its_mario.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            ;
            break;
        case "sonic":

            mario.src = "/_media/gifs-principais/sonic.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/sonic_dance.gif";
            mario.style.bottom = "-4px";
            // (nahyron) muda a musica do sonic
            musica.src = "/_media/sounds/sonicSelection.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');

            // condicional pra quando segurar a seta pra baixo, ele virar uma bolinha (sonic) (nahyron)

            document.addEventListener("keydown", (event) => {
                switch (event.key) {
                    case "ArrowDown":
                        spin();
                        break;
                    default:
                        break;
                }
            });

            // condicional pra quando soltar a seta pra baixo, ele virar uma bolinha (sonic) (nahyron)

            document.addEventListener("keyup", (event) => {
                switch (event.key) {
                    case "ArrowDown":
                        normal();
                        break;
                    default:
                        break;
                }
            });



            break;

        case "marioSecreto":
            mario.src = "/_media/gifs-principais/mario-walking.gif";
            personagemSelecionado.src = "/_media/gifs-principais/mario-walking.gif";
            musica.src = "/_media/sounds/mario.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            break;
        case "sonicSecreto":
            mario.src = "/_media/gifs-principais/super-sonic.gif";
            personagemSelecionado.src = "/_media/gifs-principais/super-sonic.gif";
            musica.src = "/_media/sounds/sonic-theme.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            break;
         case "marioKart":
            mario.src = "/_media/gifs-principais/super-mario-kart-mario.gif";
            personagemSelecionado.src = "/_media/gifs-principais/super-mario-kart-mario.gif";
            musica.src = "/_media/sounds/mario.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            break;
        case "shadowSecreto":
            mario.src = "/_media/gifs-principais/shadow-the-hedgehog.gif";
            personagemSelecionado.src = "/_media/gifs-principais/shadow-the-hedgehog.gif";
            musica.src = "/_media/sounds/sonic-theme.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            // Inverte o gif para o lado direito
            mario.style.transform = "scaleX(-1)";
            personagemSelecionado.style.transform = "scaleX(-1)";
            break;
        case "pikachu":
            mario.src = "/_media/gifs-principais/Pikachu.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/pikachu_parado.gif";
            // (nahyron) muda a musica do pikachu
            musica.src = "/_media/sounds/quePokemon.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            break;
        case "kirby":
            mario.src = "/_media/gifs-principais/kirby.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/kirby-nintendo.gif";
            // (nahyron) adiciona som ao selecionar a kirby
            musica.src = "/_media/sounds/kirby_hi.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            // quando clicar na foto da kirby, ela vai rir (nahyron)
            personagemSelecionado.addEventListener("click", (event) => {
                musica.src = "/_media/sounds/Kirby_laught.mp3";
            })
            break;
        case "SwordSkeleton":
            mario.src = "/_media/gifs-principais/skeleton.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/skeleton_Dancing.gif";
            // (nahyron) adiciona som ao selecionar o esqueleto
            musica.src = "/_media/sounds/esqueleto-start.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            break;
        case "Batman":
            mario.src = "/_media/gifs-principais/batman.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/batman_Dance.gif";
            // (nahyron) adiciona som ao selecionar o batman
            musica.src = "/_media/sounds/sou_batman.mp3";
            // (nahyron) ajusta o batman para ficar no chão (sou perfeccionista)
            mario.style.bottom = "-2px";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');
            break;
        case "Luffy":
            mario.src = "/_media/gifs-principais/luffy.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/luffy_walk.gif";
            // nahyron adiciona adiciona som ao selecionar o luffy
            musica.src = "/_media/sounds/luffy-rei.mp3";
            // nahyron remove o loop da musica
            musica.removeAttribute('loop');

            break;
        case "Link":
            mario.src = "/_media/gifs-principais/link.gif";
            // (nahyron) ajusta o link para ficar no chão
            mario.style.bottom = "-13px";
            personagemSelecionado.src = "/_media/gifs-startscreen/link_Dance.gif";
            // (nahyron) adiciona som ao selecionar o link
            musica.src = "/_media/sounds/link-tema.mp3";

            musica.removeAttribute('loop');
            break;
        default:
            mario.style.transform = ""; // Remove inversão se trocar de personagem
            personagemSelecionado.style.transform = "";
            mario.src = "/_media/gifs-principais/mario.gif";
            personagemSelecionado.src = "/_media/gifs-startscreen/marioDancando.gif";
            break;
    }
}

//Função é executada quando o user clicar em "sim" na telaMorte, caso ele clique em "não" a página será recarregada
//Some com a tela de morte, volta o cano
function tiraVida() {
    telaMorte.style.display = "none";
    pipe.style.display = "flex";
    mario.style.display = "flex";
    coin.style.display = "flex";
    infoBoard.style.display = "flex";
    

    //Verifica o n° de vidas, reduz 1 no mesmo e some com o respectivo coração da tela
    if (lifes >= 3) {
        lifes--;
        heart3.style.display = "none";
    } else if (lifes == 2) {
        lifes--;
        heart2.style.display = "none";
    } else if (lifes == 1) {
        musica.src = '/_media/sounds/marioDeath.mp3';
        musica.removeAttribute('loop'); //remove o loop do som morrendo
        lifes--;
        heart1.style.display = "none";
        //Aqui decidi tirar o infoBoard porque já acabou o game, não tem como voltar...
        infoBoard.style.display = "none";
        //Armazeno o conteudo html do elemento com id "pontos", e exibo na tela de morte com a tag <p>, coloquei um <br> e um botão também
        const totalPontos = document.getElementById("pontos").innerHTML;
        telaMorte.innerHTML = "<p>Infelizmente você perdeu todas suas vidas</p><br><p>Pontos: " + totalPontos + "</p><button onclick='window.location.reload()'>Tentar Novamente</button>";
        //Exibo a telaMorte
        telaMorte.style.display = "flex";

        //Isso aqui já tinha
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        //Verifico qual o gif usado, baseado nisso coloco uma imagem de morte conforme o personagem que está sendo usado

        // (nahyron e rafael arrumaram os personagens em relação ao tamanho e a posição no chão na tela de morte)

        if (mario.src.match("_media/gifs-principais/Pikachu.gif")) {
            mario.src = "/_imagens/deaths/pikachu_death.png";
            musica.src = "_media/sounds/retired_Sound_pikachu.mp3";
            mario.style.width = "180px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-10px";
        } else if (mario.src.match("_media/gifs-principais/sonic.gif")) {
            mario.src = "/_imagens/deaths/sonic_death.png";
            musica.src = "_media/sounds/sonic_Death_sound.mp3";
            mario.style.width = "97px";
            mario.style.marginLeft = "50px";
        } else if (mario.src.match("_media/gifs-principais/kirby.gif")) {
            mario.src = "/_imagens/deaths/kirby-sleeping.gif";
            musica.src = "_media/sounds/kirby_Death.mp3";
            mario.style.width = "125px";
            mario.style.marginLeft = "50px";
        } else if (mario.src.match("_media/gifs-principais/skeleton.gif")) {
            mario.src = "/_imagens/deaths/skeleton_Death.gif";
            musica.src = "_media/sounds/skeleton_Death.mp3";
            mario.style.width = "85px";
            mario.style.marginLeft = "50px";
        } else if (mario.src.match("_media/gifs-principais/batman.gif")) {
            mario.src = "/_imagens/deaths/batman_Death.gif";
            musica.src = "_media/sounds/batman_Death.mp3";
            mario.style.width = "150px";
            mario.style.marginLeft = "50px";
            mario.style.bottom = "-13px";
        } else if (mario.src.match("_media/gifs-principais/luffy.gif") || mario.src.match("_media/gifs-principais/luffyGear.gif")) {
            mario.src = "/_imagens/deaths/luffyDeath.png";
            musica.src = "_media/sounds/luffy_Death.mp3";
            mario.style.width = "110px";
            mario.style.bottom = "-15px";
            mario.style.marginLeft = "50px";
        } else if (mario.src.match("_media/gifs-principais/link.gif")) {
            mario.src = "/_imagens/deaths/link_Death.png";
            musica.src = "_media/sounds/zelda_GameOver.mp3";
            mario.style.width = "110px";
            mario.style.marginLeft = "50px";

        }else if (mario.src.match("_media/gifs-principais/super-sonic.gif")) {
            mario.src = "/_imagens/deaths/sonic_death.png";
            musica.src = "_media/sounds/sonic_Death_sound.mp3";
            mario.style.width = "110px";
            mario.style.marginLeft = "50px";

        }else if (mario.src.match("_media/gifs-principais/shadow-the-hedgehog.gif")) {
            mario.src = "/_imagens/deaths/sonic_death.png";
            musica.src = "_media/sounds/sonic_Death_sound.mp3";
            mario.style.width = "110px";
            mario.style.marginLeft = "50px";

        } else {
            mario.src = "/_imagens/deaths/mario_death.png";
            mario.style.marginLeft = "50px";
            mario.style.width = "80px";
        }
    }
}

function iniciarGame() {




    // coloca a música da gameplay (nahyron)
    if (personagemAtual == "sonic") {
        musica.src = "/_media/sounds/sonic-theme.mp3";
    }
    if (personagemAtual == "sonicSecreto") {
        musica.src = "/_media/sounds/sonic-theme.mp3";
    }
    if (personagemAtual == "shadowSecreto") {
        musica.src = "/_media/sounds/sonic-theme.mp3";
    }
    if (personagemAtual == "Link") {
        musica.src = "/_media/sounds/link-game.mp3";
    }
    if (personagemAtual == "Luffy") {
        musica.src = "/_media/sounds/luffy-music.mp3";
    }
    if (personagemAtual == "Batman") {
        musica.src = "/_media/sounds/batman_theme.mp3";
    }
    if (personagemAtual == "mario") {
        musica.src = "/_media/sounds/mario.mp3";
    }
    if (personagemAtual == "marioSecreto") {
        musica.src = "/_media/sounds/mario.mp3";
    }
    if (personagemAtual == "kirby"){
        musica.src = "/_media/sounds/kirby-game.mp3";
    }
    if (personagemAtual == "pikachu"){
        musica.src = "/_media/sounds/pikachu-game.mp3";
    }

    // joão colocou a do mario kart

    if (personagemAtual == "marioKart") {
        musica.src = "/_media/sounds/mario.mp3";
    }
    if (personagemAtual == "SwordSkeleton") {
        musica.src = "/_media/sounds/esqueleto-tema.mp3";
    
    }

    //Sumo com a tela de Start, apareço com as informações (vida e pontos), o cano e o "mario"
    telaIncio.style.display = "none";
    infoBoard.style.display = "flex";
    pipe.style.display = "flex";
    mario.style.display = "flex";
    coin.style.display = "flex";




    //Isso aqui virifica se o display é "none", se for ele ganha pontos e exibe no elemento com id "pontos"
    //Sem isso o user podia só deixar lá a telaMorte aberta e ir ganhando pontos infinitos... agora ele tem que escolher ou "sim" ou "não", se sim e ele tiver vidas ok, caso contrário recarrega a página.
    setInterval(() => {
        if (telaMorte.style.display.match("none")) {
            pontos++;
            document.getElementById("pontos").innerHTML = pontos;
        }
    }, 100)


    let coinCollected = false;



    //Validar "colisão" com a moeda, se arrelou + 500 pontos
    setInterval(() => {
        if (coin.style.display !== "none") {
            const coinPosition = coin.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
            if (coinPosition <= 120 && coinPosition > 0 && marioPosition >= 120 && !coinCollected) {
                pontos += 500;
                coin.style.display = "none";
                coinCollected = true;
                setTimeout(() => {
                    coin.style.display = "block";
                    coinCollected = false;
                }, 2000); // 2 segundos para reaparecer
            }
        }
    }, 100);









    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

        // Se todas as condições forem verdadeiras, troca o gif para o luffyGear (ele está dentro do loop principal pois é onde o jogo vai rodando constantemente)

        if (
            mario.src.includes("luffy.gif") && // Está usando o gif do Luffy normal
            pontos >= 500 && // Pontuação mínima atingida
            !mario.src.includes("luffyGear.gif")) // Ainda não está com o gif do Gear
        {
            mario.src = "/_media/gifs-principais/luffyGear.gif"; // Troca para o gif do Luffy Gear
            musica.src = "/_media/sounds/luffy-song-gear-five.mp3";
        }


        //Dificuldade baseada na qntd de pontos, deixando a animação do pipe mais rápida
        //Também muda o fundo e adiciona alguns pequenos detalhes
        if (pontos == 1500) {
            pipe.style.animationDuration = "1.5s";
        }
        if (pontos >= 5000) {
            pipe.style.animationDuration = "1s";
            gameBoard.style.backgroundImage = "linear-gradient(#ffcc70, #ff7eb3)";
            goku.style.display = "flex";
            goku_golpes.style.display = "none";
        }
        if (pontos >= 10000) {
            if (toca1 == true) {
                musica.src = "/_media/sounds/hardDifficulty.mp3";
                toca1 = false;
            }
            pipe.style.animationDuration = "0.75s";
            gameBoard.style.backgroundImage = "linear-gradient(#141e30, #243b55)";
            estrelas.style.display = "flex";
            dragon.style.display = "flex";
            pretin.style.display = "flex";
            goku.style.display = "none";
            dragonair.style.display = "none";
        }
        if (pontos >= 95000) {
            document.querySelector(".clouds").style.animationDuration = "0.2s";
            estrelas.style.animationDuration = "0.1s";
            lifes = 100000000000000;
            pipe.style.animationDuration = "0.1s";
            coin.style.animationDuration = "0.1s";
            coin.style.display = "none";
        }
        if (pontos >= 95050 && pontos <= 95650) {
            document.querySelector(".made-in-heaven").style.display = "flex";
            if (toca2 == true) {
                musica.src = "/_media/sounds/madeinheaven.mp3";
                musica.removeAttribute("loop");
                toca2 = false;
            }
            coin.style.display = "none";
            pipe.style.display = "none";
            mario.style.display = "none";
            gameBoard.style.borderBottom = "none";
            if (pontos >= 95700 || pontos >= 95145) {
                window.location.reload(true);
            }
        }


        //Verifica se o "Mario" arrelou no cano se sim aparece a tela de morte e some com o cano
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && lifes > 0 && lifes < 9) {
            telaMorte.style.display = "flex";
            pipe.style.display = "none";
            mario.style.display = "none";
            coin.style.display = "none";
            infoBoard.style.display = "none";
        }
    }, 10);


    //Adicionei isso por frescura, não acho que fazia sentido ele pular com o user apertando qualquer tecla...
    //Agora só vai pular se pressionar seta pra cima, w e espaço
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                jump();
                break;
            case "w":
                jump();
                break;
            //Tive que pesquisar pra descobrir que assim era o espaço, eu tinha colocado "space" e não ia :D (na minha cabeça fazia sentido)
            case " ":
                jump();
                break;
            default:
                break;
        }

    });
    musica.loop = true;
    musica.play();

}