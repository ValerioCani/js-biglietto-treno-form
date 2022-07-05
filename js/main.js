const eta = prompt("inserisci la tua età");
const kilometri = prompt("inserisci quanti kilometri devi percorrere");

const etaNum = parseInt(eta);
const kilometriNum = parseInt(kilometri);

const prezzoPieno = kilometriNum * 0.21;
console.log("Il prezzo del biglietto non scontato è: " + prezzoPieno + "euro");

if (etaNum < 18){
    let prezzo = prezzoPieno - (prezzoPieno * 0.2);
    alert ( "il prezzo del bilglietto è di " + prezzo.toFixed(2) + " euro." );
} else if (etaNum > 65){
    let prezzo = prezzoPieno - (prezzoPieno * 0.4);
    alert ( "il prezzo del bilglietto è di " + prezzo.toFixed(2) + " euro." );
} else {
    let prezzo = prezzoPieno;
    alert ( "il prezzo del bilglietto è di " + prezzo.toFixed(2) + " euro." );
}
 