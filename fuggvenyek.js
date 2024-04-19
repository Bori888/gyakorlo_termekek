export function tablazatLetrehoz(lista) {
  let txt = "<div class='table-responsive'><table class='table'>";
  txt +=
    "<thead><tr><th>Név</th><th>tomeg</th><th>ar</th><th></th></tr></thead>";
  txt += "<tbody>";
  lista.forEach((elem, index) => {
    txt += `<tr>
        <td>${elem.nev}</td>
        <td>${elem.tomeg}</td>
        <td>${elem.ar}</td>
        </tr>`;
  });

  txt += "</tbody></table></div>";
  return txt;
}

export function megjelenit(txt) {
  const ELEM = $("#feladat_1");
  ELEM.html(txt);
  //return txt;
}
export function osszead(lista) {
    


    
}
