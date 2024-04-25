import { tablazatLetrehoz, megjelenit, osszead } from "./fuggvenyek.js";
import { GYUMOLCSOK } from "./adatok.js";

let txt = tablazatLetrehoz(GYUMOLCSOK);
megjelenit(txt);
let ossz_tomeg=osszead(GYUMOLCSOK);

//ossz_tomeg megjelenit
const ELEM = $("#feladat_2");
ELEM.html("A gyümölcsök súlya összesen: "+ ossz_tomeg+ " kg");

//előszö megfog aztán rá teszem a li tegre az eseményt
const trELEM = $("#feladat_1 table tbody tr");
trELEM.on("click" , function (event) {
    console.log(event.target.id)
    //ki kell olvasni a listábol azt az elemet amiez az az id atartozik
    
    console.log(GYUMOLCSOK[event.target.id].nev)
    kivalsztott.push(GYUMOLCSOK[event.target.id].nev)
    idELEM.empty();
    for (let index = 0; index < kivalsztott.length; index++) {


        idELEM.append(kivalsztott[index]+"<br>");
        
    }
    
})
//Meg van az előző feladatban az index most ezt ki kell irni az ehez tartozo elemet legalulra
const idELEM = $("#feladat_3");
const kivalsztott = [];


    


