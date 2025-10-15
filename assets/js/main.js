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

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.




// Creo una variabile per assegnare il prezzo al km

const priceForKm = 0.21

// Creo una variabile in cui collegare il bottone

const btnEl = document.getElementById("buy-button")

// al click del bottone mi faccio ritornare i valori degli input
// MS2.Aggiunto evento per non far scomparire i dati del form
btnEl.addEventListener("click", (event) => {
    event.preventDefault()
    // Creo due variabili per usare i due input
    const kmEl = document.getElementById("km")
    const ageEl = document.getElementById("age")

    // MS2.Aggiungo la variabile del nome 

    const nameEl = document.getElementById("passenger-name-input")
    const name = nameEl.value
    console.log(name)
    // Prendo il "value" dii entrambi gli elementi
    // trasformo le stringhe degli input in numeri
    const km = Number(kmEl.value)
    const age = Number(ageEl.value)
    console.log(km, age);

    // Calcolo del prezzo
    // Creo una variabile in cui troviamo il prezzo del biglietto

    let ticketPrice = km * priceForKm
    console.log(ticketPrice)

    // MS2. Aggiungo una variabile per il tipo di biglietto da stampare in pagina

    let message = "Biglietto standard"

    // SE l'età è inferiore a 18 applico il 20% di sconto
    if (age < 18) {
        ticketPrice = ticketPrice * 0.8
        // MS2. il biglietto da stampare sarà "Biglietto per minorenni"
        message = "Biglietto per minorenni"

    } else if (age >= 65) {
        // ALTRIMENTI SE l'età è maggiore a 65 applico il 40% di sconto
        ticketPrice = ticketPrice * 0.6
        // MS2.Il biglietto da stampare sarà "Biglietto per anziani"
        message = "Biglietto per anziani"
    }

    // Dopo aver calcolato il prezzo lo arrotondo a due decimali con toFixed e lo stampo
    ticketPrice = ticketPrice.toFixed(2)
    console.log(ticketPrice);

    // MS2. Aggiungo funzione per calcolare numeri random

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // MS2.Calcolo un numero random da 1 a 10 per i vagoni e da 1000 a 99999 per il codice del biglietto

    const vagoneNum = getRandomInt(1, 10)
    const ticketCodeNum = getRandomInt(1000, 99999)
    console.log(vagoneNum, ticketCodeNum);

    // MS2. Aggiungo le variabili degli elementi in cui devono andare i dati 
    
    const passengerName = document.getElementById("passenger-name")
    const typeOfDiscount = document.getElementById("type-of-discount")
    const vagone = document.getElementById("vagone")
    const ticketCode = document.getElementById("ticket-code")
    const ticketTotalPrice = document.getElementById("ticket-total-price")

    // MS2. passo con textcontent tutti i risultati ai rispettivi risultati del biglietto

   passengerName.textContent = name
   typeOfDiscount.textContent = message
   vagone.textContent = vagoneNum
   ticketCode.textContent = ticketCodeNum
   ticketTotalPrice.textContent = `${ticketPrice} €`
}
)












