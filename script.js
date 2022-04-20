let order = []; //ordem do jogo que vai aparecer
let clickedOrder = []; //ordem dos cliques
let score = 0; //pontuação

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); //vai arredondar o numero, e sempre vai sortear um numero de 0 a 3
    order[order.length] = colorOrder; //atribuindo um array com a cor 
    clickedOrder = [];
    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor( elementColor, Number(i) + 1);
    } //vai percorer o array e executar o que colocar dentro dele
} 


//acende a proxima cor
let lightColor = (element , number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250); //espera o tempo passar para depois executar a função
    setTimeout(() => {
        element.classList.remove('selected');
    });
}


//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você conseguiu! Vamos para o proximo nível!`);
        nextLevel();
    }
}


//função para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;//na posição que for clicado vai ser a cor que atribuir
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder(); //verifica se o que clicamos é o que o jogo pediu
    },250);
}


//função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}


//função para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}


//função de perder o jogo
let gameOver = () => {
    alert(`Pontuação: ${score}. \nVocê perdeu o jogo!\nClique aqui para jogar novamente.`);
    order = [];
    clickedOrder = [];
    playGame ();
}


//Zera o score e ativa a função de proxima sequencia
let playGame = () => {
    alert('Iniciando novo jogo do Gênesis!'); 
    score = 0;
    nextLevel();
}


//eventos de cliques
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();