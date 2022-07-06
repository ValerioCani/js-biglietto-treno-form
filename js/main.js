let prezzo 
const create = document.getElementById("myBtn");
create.addEventListener('click', myFunction);

const cancel = document.getElementById("clear");
cancel.addEventListener('click', clearFunction);

function myFunction() {

    //aquisizione dati e calcolo costanti
    const nameAndSurname = document.getElementById('name').value;
    const kilometriNum = parseInt(document.getElementById('jurneykm').value);
    const etaRange = document.getElementById('eta').value;
    const prezzoPieno = kilometriNum * 0.21;
    const numeroCarrozza = Math.floor(Math.random() * 10);
    const numeroCodice = Math.floor(Math.random() * 10000) + 90000;
    
    if (document.getElementById("name").value.length == 0 || document.getElementById("jurneykm").value.length == 0 || document.getElementById("eta").value.length == 0 ) {
        
        alert("compilare tutti i campi vuoti");
        
    } else {

        //calcolo prezzi scontati in base all'età
        switch (etaRange){
            case "minorenne":
                prezzo = prezzoPieno - (prezzoPieno * 0.2);
                document.getElementById("offer").innerHTML = "Biglietto Mocciosi";
                break;
            
            case "anziano":
                prezzo = prezzoPieno - (prezzoPieno * 0.4);
                document.getElementById("offer").innerHTML = "Biglietto Decrepiti";
                break;
            
            case  "adulto": 
                prezzo = prezzoPieno;
                document.getElementById("offer").innerHTML = "Biglietto Normies";
                break;
        
            default:
                alert("inserire fascia d'età");//inutile
        }
        
        document.getElementById("passenger").innerHTML = nameAndSurname;
        document.getElementById("carriage").innerHTML = numeroCarrozza;
        document.getElementById("code").innerHTML = numeroCodice;
        document.getElementById("price").innerHTML = prezzo.toFixed(2) + " euro";
    
        document.querySelector('.ticket-creator').classList.remove('HideTicket');
    }
}

function clearFunction() {
    document.getElementById("name").value ="";
    document.getElementById("jurneykm").value ="";
    /*function setSelectValue (id, val) {
        document.getElementById(id).value = val;
    }
    setSelectValue('eta', "");*/
    //ma c'era bisogno?      
    document.getElementById("eta").value ="";
    document.querySelector('.ticket-creator').classList.add('HideTicket');
}


