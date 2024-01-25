//Cambio pacco

function cambio(){
    showAccettaPopup()
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


function hideAccettaPopup() {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.style.display = "none";

}

function hideCambioPopup () {
    const popup = document.getElementById("popupCambio")
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