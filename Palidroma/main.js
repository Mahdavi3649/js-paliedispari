// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

var parolaScelta = prompt("Inserisci una parola");
console.log(parolaScelta);

var parolaContrario = wordReverse(parolaScelta);
console.log(parolaContrario);


if(parolaScelta === parolaContrario){
    console.log("palindromo");
}else{
    console.log('non è palindromo');
}


function wordReverse(parola) {

    let reverse = "";
    for (let i = parola.length - 1; i >= 0; i-- ) {
        reverse += parola[i];
    }
    return reverse;
}