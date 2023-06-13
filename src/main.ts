
let score = 0;

const muestraPuntuacion = (mensaje: string) => {
    const puntuacion = document.getElementById("score") as HTMLInputElement;
    return puntuacion.innerHTML = mensaje;
};

const dameCarta = () => {
    document.getElementById("drawcard")?.addEventListener("click", () => {
        const randomValue = Math.floor(Math.random() * 10 + 1)
        const randomCard = randomValue > 7 ? randomValue + 2 : randomValue;
        const score = sumarValor(randomCard)
        if (score <= 7.5) {
            mostrarCarta(randomCard) 
        } else {
            mostrarCarta(randomCard) 
        }
        showMessageGame(score)
    })
}

dameCarta();
//Tal y como me dijiste, la función no debería estar fuera para evitar que se esté procesando todo el rato y obstaculice que se arranquen otras funciones.

const mostrarCarta = (carta: number) => {
    const img = document.getElementById("img1") as HTMLImageElement;
    switch (carta) {
        case 1 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
        break;
        case 2 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
        break;
        case 3 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
        break;
        case 4 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
        break;
        case 5 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
        break;
        case 6 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
        break;
        case 7 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
        break;
        case 10 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
        break;
        case 11 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
        break;
        case 12 :
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
        break;
        default:
            img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
    }
}

const sumarValor = (carta: number): number => {
    const points = carta > 7.5 ? 0.5 : carta
    score = score + points;
    return score
}

const showMessageGame = (score: number) => {
    let mensaje;
    if (score > 7.5) {
        mensaje = `GAME OVER ⚰️`;
        resetGame()
    } else {
        mensaje = `${score}`;
    }
    muestraPuntuacion(mensaje);
}

const mePlanto = () => {
    document.getElementById("stand")?.addEventListener ("click", () => {
        const restartButton = document.getElementById("restart") as HTMLButtonElement
        restartButton.style.display = "block"
        const standButton = document.getElementById("stand") as HTMLButtonElement
        standButton.style.display = "none"
        const borrarImagen = document.getElementById("drawcard") as HTMLButtonElement
        borrarImagen.style.display = "none"
        const queHubieraPasadoButton = document.getElementById("queHubieraPasado") as HTMLButtonElement
        queHubieraPasadoButton.style.display = "block"
        if (score <= 7.5) {
            //mensajeMePlanto()
            //queHubieraPasado()
            resetGame()
        }
        })
    }

mePlanto();

/*
/// TODO: aquí estaba intentando mostrar los distintos mensajes de la parte de «Me planto».

const mensajeMePlanto = (mensaje: string, score: number) => {
    switch (true) {
        case (score <= 4) :
        mensaje = ``
        break;
        case (score >= 4 || score <= 6) :
        mensaje = `Te ha entrado el canguelo, ¿eh?`
        break;
        case (score >= 6 || score <= 7) :
        mensaje = `Casi casi`
        break;
        case (score === 7.5) :
        mensaje = `¡Lo has clavado! ¡Enhorabuena!`
        break;
        default :
        console.log("Something went wrong")
        break;
    }
}

// Aquí quería empezar a hacer la parte de «Qué hubiera pasado», pero no he sabido continuar.

const queHubieraPasado = () => {
    document.getElementById("queHubieraPasado")?.addEventListener ("click", () => {
        const queHubieraPasadoButton = document.getElementById("queHubieraPasado") as HTMLButtonElement
        queHubieraPasadoButton.style.display = "block"
    })
}

queHubieraPasado();
*/

const resetGame = () => {
    const restartButton = document.getElementById("restart") as HTMLButtonElement
    restartButton.style.display = "block"
    const standButton = document.getElementById("stand") as HTMLButtonElement
    standButton.style.display = "none"
    const borrarImagen = document.getElementById("drawcard") as HTMLButtonElement
    borrarImagen.style.display = "none"
    const queHubieraPasadoButton = document.getElementById("queHubieraPasado") as HTMLButtonElement
    queHubieraPasadoButton.style.display = "none"
    restartButton.addEventListener("click", () => {
        score = 0;
        restartButton.style.display = "none";
        standButton.style.display = "block";
        queHubieraPasadoButton.style.display = "none";
        muestraPuntuacion("");
    borrarImagen.style.display = "block"
    const img = document.getElementById("img1") as HTMLImageElement;
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
    });
}

