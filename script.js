// Affari Tuoi 22/01/2024, Axel e Giacomo

let pacchetti
let pacchiBlu
let pacchiRed;
let offerta = 0;
let pressioneImportante;
let pressioni
let bottonePacchettoUser;
let userPacchetto
let buttons;
const startButton = document.getElementById("start");
const gridContainer = document.getElementById("grid-container")
const leftBar = document.querySelector(".c1");
const rightBar = document.querySelector(".c3");
const popupOfferta = document.getElementById("popupOfferta");
const popupMessage = document.getElementById("popupMessage");

const startGame = () =>{
    //inizializzazione parametri di gioco
    pressioni = 0
    pacchiBlu = [ 0, 1, 5, 10, 20, 50, 75, 100, 200, 500];
    pacchiRed = [ 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000 ];

    //Creo le coppie numero-valore e le inserisco come oggetto in pacchetti
    pacchetti= [];
    let valori= [ 0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000 ];
    let numeri = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];
    numeri.forEach((number) => {
        pacchetti.push({
            numero: number,
            valore: getRandomAndRemove(valori),
        });
    });
    
    //riempio l'array di quando succede qualcosa(Offerta o scambio)
    pressioneImportante = [];
    pressioneImportante.push(6)
    const valoriCentrali = [4,3,2];
    for (let i = 0; i < 3; i++) {
        pressioneImportante.push(pressioneImportante[i] + getRandomElementFromArray(valoriCentrali))
    }
    pressioneImportante.push(18)


    //Ottengo un pacchetto random da dare al giocatore
    const userNumber = Math.floor(Math.random() * 20);
    userPacchetto = pacchetti[userNumber - 1];

    //rimuovo dai pacchetti selezionabili il pacchetto che è adesso dell'user
    const pacchettoDaNascondere = document.querySelector("#n" + userPacchetto.numero);
    pacchettoDaNascondere.style.display = "none";
    bottonePacchettoUser =document.querySelector("#userButton");
    bottonePacchettoUser.innerHTML = userPacchetto.numero.toString();



    //Aggiunta evento a ogni bottone:
    //Disabilita bottone
    //Rimozione oggetto pacchetto da array pacchetti
    //Rimuove il valore del pacchetto dagli array pacchiBlue e pacchiRed
    buttons = document.querySelectorAll(".grid-button");
    buttons.forEach((elem) => {
        elem.disabled = false;
        elem.addEventListener("click", (e) => {
            e.target.disabled = true;
            const id = Number(e.target.innerHTML);
            let paccoDaTogliere = pacchetti.find((obj) => {
                return obj.numero === id;
            });

            pacchetti = pacchetti.filter(
                (pacchetto) => pacchetto.numero != id
            );
            pacchiBlu = pacchiBlu.filter(
                (valore) => valore != paccoDaTogliere.valore
            );
            pacchiRed = pacchiRed.filter(
                (valore) => valore != paccoDaTogliere.valore
            );
            e.target.innerHTML = paccoDaTogliere.valore + "€"
            aggiornaNumeri()
            //TODO Perchè generare un offerta ad ogni pressione?
            generaOfferta()

            pressioni++


            if (pressioneImportante.includes(pressioni)){
                gridContainer.style.display = "none"
                const azione = generaAzione()
                if(azione === 1) showOffertaPopup()
                if(azione === 2) showAccettaPopup()
            }
        });
        
    })
    //Inserimento dei valori pacchiBlu e pacchiRossi nelle barre laterali
    for (let i = 0; i < 10; i++) {
        leftBar.innerHTML +=
            `<div class="pacchiBlu">` + `<h1>€ ${pacchiBlu[i]}</h1>` + `</div>`;

        rightBar.innerHTML +=
            `<div class="pacchiRed">` + `<h1>€ ${pacchiRed[i]}</h1>` + `</div>`;
    }
    showMessagePopup("Buona Fortuna!", "Continua")
}

startButton.addEventListener("click", startGame)



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


//show and hide message popup
function showMessagePopup(Message, testoBottone) {
    popupMessage.innerHTML =
        `    <p>${Message}</p>
             <button onclick="hideMessagePopup()">${testoBottone}</button>
        `;
        popupMessage.style.display = "block";
}
function hideMessagePopup() {
    popupMessage.style.display = "none";
}

//gestione offerta e accettazione offerta
function showOffertaPopup() {
    offerta = generaOfferta()
    popupOfferta.innerHTML = `
        <p>OFFERTA: ${offerta}</p>
        <button onclick="accettaOfferta()">ACCETTA</button>
        <button onclick="hideOffertaPopup()">RIFIUTA</button>
    `;
    popupOfferta.style.display = "block";
}
function hideOffertaPopup() {
    popupOfferta.style.display = "none";
    gridContainer.style.display = "grid"
}
function accettaOfferta() {
    bottonePacchettoUser.innerHTML = userPacchetto.valore + "€"
    popupOfferta.innerHTML = `
    <h2>Hai accettato: </h2>
    <p>Valore: ${offerta}€</p>
    <button onclick="startGame()" >RESTART?</button>
    `;
}

//gestione cambio pacco
function showCambioPopup() {
    const popup = document.getElementById("popupCambio");
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
    popup.style.display = "block";
}
function hideAccettaPopup() {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.style.display = "none";
    gridContainer.style.display = "grid"
}

function cambioPacchetto(){
    hideCambioPopup();
    let numeroNuovoPacchetto =  document.getElementById("popupCambioNumeroInput").value;
    document.querySelector("#n" + userPacchetto.numero).style.display = "block";

    document.querySelector("#n" + numeroNuovoPacchetto).style.display = "none";

    userPacchetto = pacchetti.find((obj) => {
        return obj.numero === Number(numeroNuovoPacchetto);
    });
    
    document.querySelector("#userButton").innerHTML = userPacchetto.numero.toString();
    document.getElementById("popupCambio").style.display = "none"
}