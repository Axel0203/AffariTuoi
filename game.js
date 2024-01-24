//Procedura di gioco

const start = document.getElementById("start")
start.addEventListener("click", (e) => {
    //showStartPopup()
    cambio()
})



let pressioni = 0

function verificaPressioni(){
    if(pressioni === 6) {
        console.log("hai premuto sei pulsanti")
    }
}