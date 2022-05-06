// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1 creo un prompt per chiedere pari o dispari
// 2 creo un prompt per chiedere un numero da 1 a 5
// 3 creo una funzione per generare un numero da 1 a 5 per CPU
// 4 prendo il numero dell'utente e lo sommo al numero della CPU

const userInput = prompt("Scrivi la parola 'pari' o 'dispari' senza apici");
const userNumber = Number(prompt("Scegli e scrivi un numero da 1 a 5"));

function randomCPUnumber() {
    const number = Math.floor((Math.random() * 5) + 1);
    return number;
}

function checkNumber() {
    const cpuNumber = randomCPUnumber();
    const result = cpuNumber + userNumber;

    if (result % 2 == 0 && userInput == "pari") {
        console.log("Hai vinto!");
    } else if ( result % 2 == 1 && userInput == "dispari") {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso!");
    }    

    console.log(userNumber);
    console.log(cpuNumber);
    console.log(result);

}


alert(checkNumber());



