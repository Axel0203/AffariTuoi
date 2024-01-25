// Affari Tuoi 22/01/2024, Axel e Giacomo

let pacchetti= [];
let valori= [ 0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000 ];
let numeri = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
let pacchiBlu = [ 0, 1, 5, 10, 20, 50, 75, 100, 200, 500];
let pacchiRed = [ 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000 ];

let array = [];

let pressioni = 0

const start = document.getElementById("start");
const gridContainer = document.getElementById("grid-container")

start.addEventListener("click", (e) => {
//Creo le coppie numero-valore e le inserisco come oggetto in pacchetti
    numeri.forEach((number) => {
        pacchetti.push({
            numero: number,
            valore: getRandomAndRemove(valori),
        });
    });


//reimpio l'array dei tiri
    array.push(6)
    const valoriCentrali = [3, 2, 1, 3, 2, 1];

    for (let i = valoriCentrali.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valoriCentrali[i], valoriCentrali[j]] = [valoriCentrali[j], valoriCentrali[i]];
    }
    array.push(...valoriCentrali);
    array.push(2)

    console.log(array)



//Ottengo un pacchetto radom da dare al giocatore
    const userNumber = Math.floor(Math.random() * 20);
    let userPacchetto = pacchetti[userNumber - 1];

//rimuovo dai pacchetti selezionabili il pacchetto che è adesso dell'user
    const userPacchettoButton = document.querySelector("#n" + userNumber);
    userPacchettoButton.style.display = "none";
    document.querySelector("#userButton").innerHTML = userNumber.toString();



//Aggiunta evento a ogni bottone:
//Disabilita bottone
//Rimozione oggetto pacchetto da array pacchetti
//Rimuove il valore del pacchetto dagli array pacchiBlue e pacchiRed
    const buttons = document.querySelectorAll(".grid-button");
    buttons.forEach((elem) => {
        elem.disabled = false;

        showStartPopup("Buona Fortuna!", "Continua")

        setTimeout(() => {
            showStartPopup("Hai 6 tiri a disposizione", "Continua")
        }, 1000)

        setTimeout(() => {
            elem.addEventListener("click", (e) => {
                e.target.disabled = true;
                const id = Number(e.target.innerHTML);
                let paccoDaTogliere = pacchetti.find((obj) => {
                    console.log(obj.numero === id);
                    return obj.numero === id;
                });

                console.log(paccoDaTogliere);

                pacchetti = pacchetti.filter(
                    (pacchetto) => pacchetto.numero != id
                );
                pacchiBlu = pacchiBlu.filter(
                    (valore) => valore != paccoDaTogliere.valore
                );
                pacchiRed = pacchiRed.filter(
                    (valore) => valore != paccoDaTogliere.valore
                );
                showPopupPerdite(paccoDaTogliere.valore);
                aggiornaNumeri()
                generaOfferta()

                pressioni++

                if (pressioni === 6) {
                    gridContainer.style.display = "none"

                    setTimeout((e) => {
                        console.log("Hai premuto sei pulsanti");
                        const azione = generaAzione()
                        if(azione === 1) showOffertaPopup()
                        if(azione === 2) showAccettaPopup()
                    }, 2000)

                    showStartPopup("Hai 6 tiri a disposizione", "Continua")
                }

                if (pressioni === 9) {
                    gridContainer.style.display = "none"
                    setTimeout((e) => {
                        const azione = generaAzione()
                        if(azione === 1) showOffertaPopup()
                        if(azione === 2) showAccettaPopup()
                    }, 2000)
                }

                if (pressioni === 11) {
                    gridContainer.style.display = "none"
                    setTimeout((e) => {
                        const azione = generaAzione()
                        if(azione === 1) showOffertaPopup()
                        if(azione === 2) showAccettaPopup()
                    }, 2000)
                }

                if (pressioni === 12){
                    gridContainer.style.display = "none"
                    setTimeout((e) => {
                        const azione = generaAzione()
                        if(azione === 1) showOffertaPopup()
                        if(azione === 2) showAccettaPopup()
                    }, 2000)
                }

                if (pressioni === 15){
                    gridContainer.style.display = "none"
                    setTimeout((e) => {
                        const azione = generaAzione()
                        if(azione === 1) showOffertaPopup()
                        if(azione === 2) showAccettaPopup()
                    }, 2000)
                }

                if (pressioni === 17){
                    gridContainer.style.display = "none"
                    setTimeout((e) => {
                        const azione = generaAzione()
                        if(azione === 1) showOffertaPopup()
                        if(azione === 2) showAccettaPopup()
                    }, 2000)
                }

                if (pressioni === 18){
                    gridContainer.style.display = "none"
                    setTimeout((e) => {
                        const azione = generaAzione()
                        if(azione === 1) showOffertaPopup()
                        if(azione === 2) showAccettaPopup()
                    }, 2000)
                }


                console.log(pressioni)
            });
        });
    })
})




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


function showPopupPerdite(valore) {
    const popup = document.getElementById("popupPerdita");
    popup.innerHTML =
        `<p>Hai Aperto: € ${valore}</p><button onclick="hidePopupPerdite()">Continua</button>`;

    popup.style.display = "block";
}


function hidePopupPerdite() {
    const popup = document.getElementById("popupPerdita");
    popup.style.display = "none";
}


function showStartPopup(valore, testoBottone) {
    const popup = document.getElementById("popupStart");
    popup.innerHTML =
        `    <p>${valore}</p>
             <button onclick="hideStartPopup()">${testoBottone}</button>
        `;
    popup.style.display = "block";
}


function hideStartPopup() {
    const popup = document.getElementById("popupStart");
    popup.style.display = "none";
}


function showOffertaPopup() {
    const popup = document.getElementById("popupOfferta");
    const offerta = generaOfferta()
    popup.innerHTML = `
        <p>OFFERTA: ${offerta}</p>
        <button onclick="">ACCETTA</button>
        <button onclick="hideOffertaPopup()">RIFIUTA</button>
    `;
    popup.style.display = "block";
}

function hideOffertaPopup() {
    const popup = document.getElementById("popupOfferta");
    popup.style.display = "none";
    gridContainer.style.display = "grid"
}


const popupAccettaContent = `
    <p>CAMBIO</p>
    <button onclick="showCambioPopup()">ACCETTA</button>
    <button onclick="hideAccettaPopup()">RIFIUTA</button>
`;

const popupCambioContent = `
    <p>Che pacco vuoi prendere ? </p>
    <input type="text" id="numeroInput" placeholder="Inserisci un numero">
    <button onclick="cambiaPacco()">Cambia</button>
`;


function showCambioPopup() {
    const popup = document.getElementById("popupCambio");
    popup.innerHTML = popupCambioContent
    hideAccettaPopup()
    popup.style.display = "block"
}


function hideCambioPopup () {
    const popup = document.getElementById("popupCambio")
    popup.style.display = "none";
    gridContainer.style.display = "grid"
}


function showAccettaPopup() {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.innerHTML = popupAccettaContent
    popup.style.display = "block";
}


function hideAccettaPopup() {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.style.display = "none";
    gridContainer.style.display = "grid"
}