export function tablazatLetrehoz(lista) {
    let txt = "<div class='table-responsive'><table class='table'>";
    txt +=
      "<thead><tr><th>Név</th><th>tomeg</th><th>ar</th><th></th></tr></thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
      txt += `<tr>
          <td id="${index}">${elem.nev}</td>
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
  }
  export function osszead(lista) {
    let ossz_tomeg = 0;
    for (let index = 0; index < lista.length; index++) {
      ossz_tomeg += lista[index].tomeg;
    } 
    return ossz_tomeg;
  }
  export function torol(lista){
    console.log(lista.length);
    lista.splice(0, lista.length);
    return lista;
}
