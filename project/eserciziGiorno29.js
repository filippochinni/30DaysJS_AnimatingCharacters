/* DEFINIZIONE DI ELEMENTI */

const body = document.querySelector("body");

const scritta = document.querySelector("#scritta");



/* FUNZIONI */

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
}

function funzioneMain() {
    body.style.backgroundColor = getRandomColor();

    const letters = scritta.textContent.split('');
    const coloredLetters = letters.map(letter => `<span style="color: ${getRandomColor()}">${letter}</span>`);
    scritta.innerHTML = coloredLetters.join('');
    
    scritta.style.fontWeight = getRandomNumber(100, 900);

    scritta.style.fontSize = `calc(8vw - ${getRandomNumber(-1, 3)}vw)`;

    scritta.style.animationName = 'none';
    void scritta.offsetWidth;    //Triggera il reflow
    scritta.style.animationName = 'fadeIn';
}



/* ESECUZIONE */

funzioneMain();
setInterval(funzioneMain, 3000);








  