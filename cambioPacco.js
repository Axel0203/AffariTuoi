//Cambio pacco

function cambio(){
    showAccettaPopup()
}

function cambiaPacco() {
    const numeroInput = Number(document.getElementById("numeroInput").value);
    let oggettoArray = pacchetti.find((pacchetto) => pacchetto.numero === numeroInput);
/*
    console.log("FROM array")
    console.log(oggettoArray)
    console.log("FROM giocatore")
    console.log(userPacchetto)

*/

    if (numeroInput === userNumber) {
        showCambioPopup();
    } else {
        const scambio = oggettoArray
        oggettoArray = userPacchetto
        userPacchetto = scambio
/*
        console.log("TO array")
        console.log(oggettoArray)
        console.log("TO giocatore")
        console.log(userPacchetto)

*/

        hideCambioPopup();
    }
}












