let prezzo 
const element = document.getElementById("myBtn");
element.addEventListener('click', myFunction);

function myFunction() {
    //aquisizione dati e calcolo costanti
    const nameAndSurname = document.getElementById('name').value;
    const kilometriNum = parseInt(document.getElementById('jurneykm').value);
    const etaRange = document.getElementById('eta').value;
    const prezzoPieno = kilometriNum * 0.21;
    //calcolo prezzi scontati in base all'età
    switch (etaRange){
        case "minorenne":
            prezzo = prezzoPieno - (prezzoPieno * 0.2);
            break;
        
        case "anziano":
            prezzo = prezzoPieno - (prezzoPieno * 0.4);
            break;
        
        case  "adulto": 
            prezzo = prezzoPieno;
            break;
    
        default:
            alert("inserire fascia d'età");
    }
    console.log("il prezzo pieno del biglietto è di " + prezzoPieno.toFixed(2)  + " euro")
    console.log("il prezzo del biglietto è di " + prezzo.toFixed(2) + " euro")
}




