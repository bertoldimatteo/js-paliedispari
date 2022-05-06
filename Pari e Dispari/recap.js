//Controllare carrello della spesa e se trovo "Nutella", "Broccoli", "Zucchine", "Salmone"
//Lo segnalo sulla console di rimuoverli dal carrello 

const carrello = [
    "Pasta",
    "Carne",
    "Salmone",
    "Acqua",
    "Vino",
    "Broccoli",
    "Panna",
    "Latte",
    "Nutella",
    "Cereali",
    "Uova",
    "Semi di lino",
    "Zucchine",
    "Cibo per cani"
];

const dieta = [
    "Nutella", 
    "Broccoli", 
    "Zucchine", 
    "Salmone"
];


for(let i = 0; i < carrello.length; i++) {
    console.log('elemento corrente', carrello[i])
    
    for(let j = 0; j < dieta.length; j++) {
        console.log('dentro il for di dieta => ', carrello[i], dieta[j])
        if(carrello[i] === dieta[j]) {
            console.log(carrello[i], 'trovato, togliere dal carrello');
        }
    }
}
