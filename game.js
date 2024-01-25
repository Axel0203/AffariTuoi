//Procedura di Gioco

const start = document.getElementById("start");
const stop = document.getElementById("stop");

let pressioni = 0;
const gridContainer = document.getElementById("grid-container")


start.addEventListener("click", (e) => {

});

stop.addEventListener("click", (e) => {
    // Mostra nuovamente il div con la classe grid-container
    gridContainer.style.display = "grid"
});


function tiriIniziali() {
    if (pressioni === 6) {
        console.log("Hai premuto sei pulsanti");

        const gridContainer = document.getElementById("grid-container")
        gridContainer.style.display = "none"

        const azione = generaAzione()

        if(azione === 1) showOffertaPopup()
        if(azione === 2) showAccettaPopup()

    }
}




