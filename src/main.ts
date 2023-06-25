let score: number = 0;
let lose: boolean = false;
const urlBase: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/"
const fileFormat: string = ".jpg";
const drawcard = document.getElementById("drawcard");
const newGameButton = document.getElementById("new-game");
const stand = document.getElementById("stand");
const queHubieraPasadoButton = document.getElementById("queHubieraPasado");

if(drawcard !== null && drawcard !== undefined && drawcard instanceof HTMLElement){
    drawcard.addEventListener("click", () => {
        const randomCard: number = dameCarta();
        const cardValue: number = comprobarValor(randomCard);
        const urlCarta: string = obtenerUrlCarta(randomCard);
        savePoints(cardValue);
        mePlanto()
        finalDeLaMano(urlCarta);
    })
}

if(stand !== null && stand !== undefined && stand instanceof HTMLElement){
    document.getElementById("stand")?.addEventListener ("click", () => {
        hideOrShowButton("new-game", false, true);
        hideOrShowButton("stand", true, true, "none");
        hideOrShowButton("drawcard", true, false);
        hideOrShowButton("queHubieraPasado", false, true, "block");
        if (score <= 7.5) {
            const messageStand: string = mensajeMePlanto(score);
            muestraPuntuacion(messageStand);
        }
    })
};

if(queHubieraPasadoButton !== null && queHubieraPasadoButton !== undefined && queHubieraPasadoButton instanceof HTMLElement){
    document.getElementById("queHubieraPasado")?.addEventListener("click", () => { 
        hideOrShowButton("queHubieraPasado", false, true);
        const randomCard: number = dameCarta();
        const cardValue: number = comprobarValor(randomCard);
        const urlCarta: string = obtenerUrlCarta(randomCard);
        savePoints(cardValue);
        pintarImagenCarta(urlCarta)
        muestraPuntuacion(score.toString());
    })
}

if(newGameButton !!== null && newGameButton !== undefined && newGameButton instanceof HTMLButtonElement)
newGameButton.addEventListener("click", () => {
    score = 0;
    newGameButton.style.display = "none";
    muestraPuntuacion();
    hideOrShowButton("new-game", true, true, "none");
    hideOrShowButton("stand", true, true, "none");
    hideOrShowButton("drawcard", false, true);
    hideOrShowButton("queHubieraPasado", true, true, "none");
    const img = document.getElementById("img1");
    if(img !== null && img !== undefined && img instanceof HTMLImageElement){
        img.src = `${urlBase}back${fileFormat}`
    } 
});

const mePlanto = (): void => {
    hideOrShowButton("stand", false, true);
}

const savePoints = (points: number): void => {
    score = sumarPuntos(points);
}

const muestraPuntuacion = (mensaje: string = ""): void => {
    const puntuacion = document.getElementById('score');
    if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement){
        puntuacion.innerHTML = mensaje;
    }        
};

const dameCarta = (): number => {
    const randomValue = Math.floor(Math.random() * 10 + 1)
    return randomValue > 7 ? randomValue + 2 : randomValue;
}

const obtenerUrlCarta = (carta: number): string => {
    let urlImage: string;
    switch (carta) {
        case 1 :
            urlImage = `${urlBase}copas/1_as-copas${fileFormat}`
        break;
        case 2 :
            urlImage = `${urlBase}copas/2_dos-copas${fileFormat}`
        break;
        case 3 :
            urlImage = `${urlBase}copas/3_tres-copas${fileFormat}`
        break;
        case 4 :
            urlImage = `${urlBase}copas/4_cuatro-copas${fileFormat}`
        break;
        case 5 :
            urlImage = `${urlBase}copas/5_cinco-copas${fileFormat}`
        break;
        case 6 :
            urlImage = `${urlBase}copas/6_seis-copas${fileFormat}`
        break;
        case 7 :
            urlImage = `${urlBase}copas/7_siete-copas${fileFormat}`
        break;
        case 10 :
            urlImage = `${urlBase}copas/10_sota-copas${fileFormat}`
        break;
        case 11 :
            urlImage = `${urlBase}copas/11_caballo-copas${fileFormat}`
        break;
        case 12 :
            urlImage = `${urlBase}copas/12_rey-copas${fileFormat}`
        break;
        default:
            urlImage = `${urlBase}back${fileFormat}`
    }
    return urlImage
}

const pintarImagenCarta = (imagen: string): void => {
    const img = document.getElementById("img1")
    if(img !== null && img !== undefined && img instanceof HTMLImageElement){
        img.src = imagen
    }    
}

const sumarPuntos = (points: number): number => score + points;

const comprobarValor = (carta: number): number => carta > 7.5 ? 0.5 : carta

const showMessageGame = (score: number): string => {
    return score > 7.5 ? `GAME OVER ⚰️`: score === 7.5 ? "Has ganado" : `${score}`;
}

const isLost = (): boolean => {
    if (score > 7.5) {
        return true
    }
    return false;
}

const finalDeLaMano = (urlCarta: string): void => {
    lose = isLost();
    if(lose) {
        hideOrShowButton("new-game", false, true);
        hideOrShowButton("stand", true, true, "none");
        hideOrShowButton("drawcard", true, false);
        hideOrShowButton("queHubieraPasado", true, true, "none");
    }
    pintarImagenCarta(urlCarta)
    const finalMessage = showMessageGame(score)
    muestraPuntuacion(finalMessage);
}


const mensajeMePlanto = (score: number): string => {
    let mensaje: string = "";
    if(score < 4) {
        mensaje = `Has sido muy conservador.`
    }
    if(score >= 4 && score <= 5.5) {
        mensaje = `Te ha entrado el canguelo, ¿eh?`
    }
    if (score >= 6 && score <= 7) {
        mensaje = `Casi casi.`
    }
    if (score === 7.5) {
        mensaje = `¡Lo has clavado! ¡Enhorabuena!`
    }
    return mensaje
}

const hideOrShowButton = (id: string, disabled: boolean, isDisplayed: boolean = true, display: string = "block"): void => {
    const button = document.getElementById(id)
    if(button !!== null && button !== undefined && button instanceof HTMLButtonElement){
        button.disabled = disabled
        if(isDisplayed) {
            button.style.display = display
        }  
    }
}