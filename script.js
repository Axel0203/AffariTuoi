// Affari Tuoi 22/01/2024, Axel e Giacomo

let pacchetti= [];
let valori= [ 0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000 ];
let numeri = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

let pacchiBlu = [ 0, 1, 5, 10, 20, 50, 75, 100, 200, 500];
let pacchiRed = [ 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000 ];


//Creo le coppie numero-valore e le inserisco come oggetto in pacchetti
numeri.forEach((number) => {
    pacchetti.push({
        numero: number,
        valore: getRandomAndRemove(valori),
    });
});

//Ottengo un pacchetto radom da dare al giocatore
const userNumber = Math.floor(Math.random() * 20);
let userPacchetto = pacchetti[userNumber - 1];

//rimuovo dai pacchetti selezionabili il pacchetto che è adesso dell'user
const userPacchettoButton = document.querySelector("#n" + userNumber);
userPacchettoButton.style.display = "none";
document.querySelector("#userButton").innerHTML = userNumber.toString();

//Aggiunta evento ad ogni bottone:
//Disabilita bottone
//Rimozione oggetto pacchetto da array pacchetti
//Rimuove il valore del pacchetto dagli array pacchiBlue e pacchiRed
const buttons = document.querySelectorAll(".grid-button");
buttons.forEach((elem) => {
    elem.disabled = false;
    elem.addEventListener("click", (e) => {
        e.target.disabled = true;
        const id = Number(e.target.innerHTML);
        let paccoDaTogliere = pacchetti.find((obj) => {
            console.log(obj.numero === id);
            return obj.numero === id;
        });
        console.log(paccoDaTogliere);

        pacchetti = pacchetti.filter((pacchetto) => pacchetto.numero != id);
        pacchiBlu = pacchiBlu.filter(
            (valore) => valore != paccoDaTogliere.valore
        );
        pacchiRed = pacchiRed.filter(
            (valore) => valore != paccoDaTogliere.valore
        );
        showPopup(paccoDaTogliere.valore);
        aggiornaNumeri();
    });
});

function getRandomAndRemove(array) {
    if (array.length === 0) {
        console.error("L'array è vuoto.");
        return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    array.splice(randomIndex, 1);
    return randomElement;
}

//Inserimento dei valori pacchiBlu e pacchiRossi nelle barre laterali
const leftBar = document.querySelector(".c1");
const rightBar = document.querySelector(".c3");

for (let i = 0; i < 10; i++) {
    leftBar.innerHTML +=
        `<div class="pacchiBlu">` + `<h1>€ ${pacchiBlu[i]}</h1>` + `</div>`;

    rightBar.innerHTML +=
        `<div class="pacchiRed">` + `<h1>€ ${pacchiRed[i]}</h1>` + `</div>`;
}

//Chiamandola svuota e riempe le barre laterali con i valori dei due array leftBar e rightBar
function aggiornaNumeri() {
    leftBar.innerHTML = "";
    rightBar.innerHTML = "";

    pacchiBlu.forEach((val) => {
        leftBar.innerHTML +=
            `<div class="pacchiBlu">` + `<h1>€ ${val}</h1>` + `</div>`;
    });

    pacchiRed.forEach((val) => {
        rightBar.innerHTML +=
            `<div class="pacchiRed">` + `<h1>€ ${val}</h1>` + `</div>`;
    });
}


function showPopup(valore) {
    const popup = document.getElementById("popup");
    popup.innerHTML =
        `<p>Hai perso: € ${valore}</p><button onclick="hidePopup()">Continua</button>`;

    popup.style.display = "block";
}

function hidePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
