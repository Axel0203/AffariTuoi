//Procedura di gioco

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



const start = document.getElementById("start")
start.addEventListener("click", (e) => {
    //showStartPopup()
    cambio()
})


function generaOfferta(){
    const sommaRed = pacchiRed.reduce((acc, numero) => acc + numero, 0);
    const lengtRed = pacchiRed.length

    const sommaBlu = pacchiBlu.reduce((acc, numero) => acc + numero, 0)
    const lengtBlu = pacchiBlu.length

    const totale = sommaRed + sommaBlu
    const totaleIndex = lengtRed + lengtBlu
    const offerta = Math.floor(totale/totaleIndex)-12000

        console.log("totale: " + totale)
        console.log("totaleIndex: " + totaleIndex)
        console.log("offerta: " + offerta)
}

function cambio(){
    showAccettaPopup()
}




function showStartPopup(valore) {
    const popup = document.getElementById("popupStart");
    popup.innerHTML =
        `    <p>Buona Fortuna!</p>
             <button onclick="hideStartPopup()">Continua</button>
        `;
    popup.style.display = "block";
}

function hideStartPopup() {
    const popup = document.getElementById("popupStart");
    popup.style.display = "none";
}





function showAccettaPopup() {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.innerHTML = popupAccettaContent
    popup.style.display = "block";
}

function showCambioPopup() {
    const popup = document.getElementById("popupCambio");
    popup.innerHTML = popupCambioContent
    hideAccettaPopup()
    popup.style.display = "block"
}



function cambiaPacco() {
    const numeroInput = Number(document.getElementById("numeroInput").value);
    let oggettoArray = pacchetti.find((pacchetto) => pacchetto.numero === numeroInput);

    console.log("FROM array")
    console.log(oggettoArray)
    console.log("FROM giocatore")
    console.log(userPacchetto)


    if (numeroInput === userNumber) {
        showCambioPopup();
    } else {
        const scambio = oggettoArray
        oggettoArray = userPacchetto
        userPacchetto = scambio

        console.log("TO array")
        console.log(oggettoArray)
        console.log("TO giocatore")
        console.log(userPacchetto)

        hideCambioPopup();
    }
}




function hideAccettaPopup() {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.style.display = "none";
}

function hideCambioPopup () {
    const popup = document.getElementById("popupCambio")
    popup.style.display = "none";
}