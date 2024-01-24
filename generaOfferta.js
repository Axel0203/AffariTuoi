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
