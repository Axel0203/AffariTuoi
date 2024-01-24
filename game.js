//Procedura di gioco

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
    /*
        console.log("totale: " + totale)
        console.log("totaleIndex: " + totaleIndex)
        console.log("offerta: " + offerta)

    */
}

function cambio(){
    showAccettaPopup()
}




function showStartPopup(valore) {
    const popup = document.getElementById("popupStart");
    popup.innerHTML =
        `<p>Buona Fortuna!</p>
            <button onclick="hideStartPopup()">Continua</button>`;

    popup.style.display = "block";
}

function hideStartPopup() {
    const popup = document.getElementById("popupStart");
    popup.style.display = "none";
}


const popupAccettaContent = `
    <p>CAMBIO</p>
    <button onclick="eseguiAzione('Azione 1')">ACCETTA</button>
    <button onclick="hideAccettaPopup()">RIFIUTA</button>
`;

function showAccettaPopup(valore) {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.innerHTML = popupAccettaContent
    popup.style.display = "block";
}

function hideAccettaPopup() {
    const popup = document.getElementById("popupAccettaOfferta");
    popup.style.display = "none";
}