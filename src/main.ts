
let score: number = 0;
let lose: boolean = false;

const drawcard = document.getElementById("drawcard");
if(drawcard !== null && drawcard !== undefined && drawcard instanceof HTMLElement){
    drawcard.addEventListener("click", () => {
        const randomCard = dameCarta();
        const cardValue = comprobarValor(randomCard)
        const urlCarta = obtenerUrlCarta(randomCard)
        score = sumarValor(cardValue)
        lose = isLost();
        if(lose) {
            hideButtons();
            resetGame();
        }
        pintarImagenCarta(urlCarta)
        const finalMessage = showMessageGame(score)
        muestraPuntuacion(finalMessage);
    })
}

const muestraPuntuacion = (mensaje: string): void => {
    const puntuacion = document.getElementById('score');
    if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement){
        puntuacion.innerHTML = mensaje
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
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
        break;
        case 2 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
        break;
        case 3 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
        break;
        case 4 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
        break;
        case 5 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
        break;
        case 6 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
        break;
        case 7 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
        break;
        case 10 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
        break;
        case 11 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
        break;
        case 12 :
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
        break;
        default:
            urlImage = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
    }
    return urlImage
}

const pintarImagenCarta = (imagen: string): void => {
    const img = document.getElementById("img1")
    if(img !== null && img !== undefined && img instanceof HTMLImageElement){
        img.src = imagen
    }    
}

const sumarValor = (points: number): number => score + points;

const comprobarValor = (carta: number): number => carta > 7.5 ? 0.5 : carta

const showMessageGame = (score: number): string => {
    return score > 7.5 ? `GAME OVER ⚰️`: `${score}`;
}
const isLost = (): boolean => {
    if (score > 7.5) {
        return true
    }
    return false;
}

const mePlanto = () => {
    document.getElementById("stand")?.addEventListener ("click", () => {
        hideButtons();
        if (score <= 7.5) {
            const messageStand = mensajeMePlanto(score);
            muestraPuntuacion(messageStand);
            resetGame()
        }
        })
    }

mePlanto();

const mensajeMePlanto = (score: number): string => {
    let mensaje: string = "";
    switch (score) {
        case  4 :
        case  4.5 :
        case  5 :
        case  5.5 :
            mensaje = `Te ha entrado el canguelo, ¿eh?`
            break;
        case 6 :
        case 6.5 :
        case 7 :
            mensaje = `Casi casi`
            break;
        case 7.5 :
            mensaje = `¡Lo has clavado! ¡Enhorabuena!`
            break;
        default :
            console.log("Something went wrong")
            break;
    }
    return mensaje;
}

/*
// Aquí voy empezar a hacer la parte de «Qué hubiera pasado»
const queHubieraPasado = () => {
    document.getElementById("queHubieraPasado")?.addEventListener ("click", () => {
        const queHubieraPasadoButton = document.getElementById("queHubieraPasado") as HTMLButtonElement
        queHubieraPasadoButton.style.display = "block"
    })
*/

const resetGame = () => {
    const restartButton = document.getElementById("restart");
    if(restartButton !!== null && restartButton !== undefined && restartButton instanceof HTMLButtonElement)
    restartButton.addEventListener("click", () => {
        score = 0;
        restartButton.style.display = "none";
        muestraPuntuacion("");
        showButtons();
        const img = document.getElementById("img1");
        if(img !== null && img !== undefined && img instanceof HTMLImageElement){
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
        } 
    });
}

const hideButtons = () => {
    const restartButton = document.getElementById("restart");
    if(restartButton !!== null && restartButton !== undefined && restartButton instanceof HTMLButtonElement){
        restartButton.style.display = "block"
    }
    const standButton = document.getElementById("stand");
    if(standButton !!== null && standButton !== undefined && standButton instanceof HTMLButtonElement){
        standButton.disabled = true; 
    }
    const borrarImagen = document.getElementById("drawcard");
    if(borrarImagen !!== null && borrarImagen !== undefined && borrarImagen instanceof HTMLButtonElement){
        borrarImagen.disabled = true; 
    }
    const queHubieraPasadoButton = document.getElementById("queHubieraPasado");
    if(queHubieraPasadoButton !!== null && queHubieraPasadoButton !== undefined && queHubieraPasadoButton instanceof HTMLButtonElement){
    queHubieraPasadoButton.style.display = "none"
    }
}

const showButtons = () => {
    const standButton = document.getElementById("stand");
    if(standButton !!== null && standButton !== undefined && standButton instanceof HTMLButtonElement){
        standButton.disabled = false;
    } 
    const borrarImagen = document.getElementById("drawcard");
    if(borrarImagen !!== null && borrarImagen !== undefined && borrarImagen instanceof HTMLButtonElement){
        borrarImagen.disabled = false; 
    }
    const queHubieraPasadoButton = document.getElementById("queHubieraPasado");
    if(queHubieraPasadoButton !!== null && queHubieraPasadoButton !== undefined && queHubieraPasadoButton instanceof HTMLButtonElement){
        queHubieraPasadoButton.style.display = "none"
    }
}