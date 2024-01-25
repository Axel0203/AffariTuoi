//Logica per Cambio od Offerta

function generaAzione() {
    const numeroCasuale = Math.floor(Math.random() * 2) + 1;
    if (numeroCasuale === 1)  return 1
    else return 2
}
