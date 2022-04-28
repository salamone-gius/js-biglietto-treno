const welcome = alert("Benvenuto/a");

const instructions = alert("Inserisci i dati richiesti per calcolare il prezzo del tuo biglietto")

// 1. Chiedo all'utente quanti chilometri vuole percorrere
const km = Number(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);

// 2. Chiedo l'età all'utente
const age = Number(prompt("Quanti anni hai?"));
console.log(age);

// 3. Moltiplico i chilometri per la tariffa € 0.21/km ottenendo il prezzo del biglietto
const price = km * 0.21;
console.log(price);

// 4. SE l'età è minore di 18, ALLORA sottraggo il 20% al prezzo del biglietto. ALTRIMENTI, SE l'età è maggiore o uguale a 65, ALLORA sottraggo il 40% al prezzo del biglietto. ALTRIMENTI, prezzo intero.
if (age < 18) {
    document.getElementById("message").innerHTML = "Il prezzo finale del tuo biglietto è:";
    document.getElementById("full-price").innerHTML = `${"€"} ${price.toFixed(2)}`;
    document.getElementById("final-price").innerHTML = `${"€"} ${(price -(price * 0.2)).toFixed(2)}`;
    document.getElementById("discount-reason").innerHTML = "Sconto del 20% applicato ai minori di anni 18";
} else if (age >= 65) {
    document.getElementById("message").innerHTML = "Il prezzo finale del tuo biglietto è:";
    document.getElementById("full-price").innerHTML = `${"€"} ${price.toFixed(2)}`;
    document.getElementById("final-price").innerHTML = `${"€"} ${(price -(price * 0.4)).toFixed(2)}`;
    document.getElementById("discount-reason").innerHTML = "Sconto del 40% applicato agli over 65";
} else {
    document.getElementById("message").innerHTML = "Il prezzo finale del tuo biglietto è:";
    document.getElementById("final-price").innerHTML = `${"€"} ${price.toFixed(2)}`;
    document.getElementById("discount-reason").innerHTML = "Nessuno sconto applicabile";
}
