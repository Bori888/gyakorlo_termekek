import { tablazatLetrehoz, megjelenit, osszead } from "./fuggvenyek.js";
import { GYUMOLCSOK } from "./adatok.js";

let txt = tablazatLetrehoz(GYUMOLCSOK);
megjelenit(txt);
let ossz_tomeg=osszead(GYUMOLCSOK);

//ossz_tomeg megjelenit
const ELEM = $("#feladat_2");
ELEM.html("A gyümölcsök súlya összesen: "+ ossz_tomeg+ " kg");