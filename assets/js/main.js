// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.





// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

// Creo una variabile per assegnare il prezzo al km

const priceForKm = 0.21

// Creo una variabile in cui collegare il bottone

const btnEl = document.querySelector("button")
console.log(btnEl);

// al click del bottone mi faccio ritornare i valori degli input

btnEl.addEventListener("click", () => {
    // Creo due variabili per usare i due input
    const kmEl = document.getElementById("km")
    const ageEl = document.getElementById("age")
    // Prendo il "value" dii entrambi gli elementi
    // trasformo le stringhe degli input in numeri
    const km = Number(kmEl.value)
    const age = Number(ageEl.value)
    console.log(km,age);
    
})


// Calcolo del prezzo
// Creo una variabile in cui troviamo il prezzo del biglietto

// SE l'età è inferiore a 18 applico il 20% di sconto

// ALTRIMENTI SE l'età è maggiore a 65 applico il 40% di sconto

// ALTRIMENTI salvo il prezzo normale

// Dopo aver calcolato il prezzo lo arrotondo a due decimali con toFixed e lo stampo



// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

