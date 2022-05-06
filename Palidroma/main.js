// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1 chiedo all utente la parola
// 2 creo una funzione con target la parola dell'utente
// 3 prendo la parola e assegno un indice
// se capovolgendo la parola è identica compare l'avviso "la parola e palindroma"
// altrimenti compare l'avviso "la parola non e palindroma"

// const userInput = prompt("Scrivi una parola");

function analyzeWord(word) {
    const slice = word.split("");
    const reverse = slice.reverse("");
    const joinReverse = reverse.join("");

    if ( word == joinReverse ) {
        alert("la parola e palindroma");
    } else {
        alert("la parola non e palindroma");
    }
}

analyzeWord("anna");