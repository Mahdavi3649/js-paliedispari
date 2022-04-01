/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const sceltaUtente = prompt("scegli pari o dispari")
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log(sceltaUtente, numeroUtente);

const numeroRandomPc = getRandom(1,5)
console.log(numeroRandomPc);

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const sommaNumeri = numeroUtente + numeroRandomPc;
console.log(`la scelta:${sceltaUtente}`+"| "+`il tuo numero:${numeroUtente}`+"| "+`Numero PC:${numeroRandomPc}`+"| "+`la somma:${sommaNumeri}`)

function pari_dispari(numero) {
    if (numero % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

if(pari_dispari(sommaNumeri) == sceltaUtente){
    console.log("Hai vinto!");

}else{
    console.log("Hai perso!");
}


