//Genera Offerta

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

    return offerta
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
}

