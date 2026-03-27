const phrases = [
    "Conception de produits numériques de A→Z"
];

const element = document.getElementById("typing");

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    element.textContent = currentPhrase.substring(0, letterIndex);

    let speed = isDeleting ? 30 : 60;

    // pause quand la phrase est complète
    if (!isDeleting && letterIndex === currentPhrase.length) {

        if (currentPhrase === "Conception de produits numériques de A→Z") {
            return; // pause finale plus longue
        } else {
            speed = 800; // hésitation
        }

        isDeleting = true;
    }

    // phrase totalement effacée
    if (isDeleting && letterIndex === 0) {

        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;

        speed = 800; // pause avant nouvelle frappe
    }

    setTimeout(type, speed);



}

type();