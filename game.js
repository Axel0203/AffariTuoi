//Procedura di gioco

document.addEventListener("DOMContentLoaded", function() {
    showStartPopup()

});





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
