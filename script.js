function saugotiDuomenis() {
    var vardas = document.getElementById("vardas").value;
    var pavarde = document.getElementById("pavarde").value;
    var data = document.getElementById("data").value;

    if (!patikrintiData(data)) {
        alert("Neteisinga datos formato arba įvesta praeities data!");
        return;
    }

    var duomenys = {
        vardas: vardas,
        pavarde: pavarde,
        laukiamaData: data
    };

    console.log(duomenys);

    var rezultatasContainer = document.getElementById("rezultatas");
    rezultatasContainer.innerHTML = ""; 

    for (var savybe in duomenys) {
        if (duomenys.hasOwnProperty(savybe)) {
            var eilute = document.createElement("p");
            eilute.innerHTML = "<strong>" + savybe + ":</strong> " + duomenys[savybe];
            rezultatasContainer.appendChild(eilute);
        }
    }

    document.getElementById("rezultatas").innerHTML = formatuotiDuomenis(duomenys);
}
function patikrintiData(data) {
    var datosFormatas = /^\d{4}-\d{2}-\d{2}$/;
    var dabartinisLaikas = new Date();
    var ivestaData = new Date(data);

    return datosFormatas.test(data) && ivestaData >= dabartinisLaikas;
}

function gautiDuomenis() {
    var duomenys = document.getElementById("rezultatas").innerHTML;
    var gautiDuomenysContainer = document.getElementById("gautiDuomenys");
    gautiDuomenysContainer.innerHTML = "<strong>Gauti Duomenys:</strong><br>" + duomenys;
}

function formatuotiDuomenis(duomenys) {
    var dabartinisLaikas = new Date();
    var laukiamasLaikas = new Date(duomenys.laukiamaData);
    var dienosSkirtumas = Math.ceil((laukiamasLaikas - dabartinisLaikas) / (1000 * 60 * 60 * 24));

    var dienosGalune = (dienosSkirtumas === 1) ? "dieną" : "dienas";

    var rezultatas = duomenys.vardas + "<br>" + duomenys.pavarde + "<br>" + duomenys.laukiamaData +  "<br>" +
           duomenys.vardas + " " + duomenys.pavarde + " " + "nugyvens " + dienosSkirtumas + " " + dienosGalune + ".";

           var rezultatasContainer = document.getElementById("rezultatas");
           if (dienosSkirtumas <= 1000) {
               rezultatasContainer.style.fontSize = "10px";
           } else if (dienosSkirtumas > 1000 && dienosSkirtumas<=7000) {
               rezultatasContainer.style.fontSize = "16px";
           } else {
               rezultatasContainer.style.fontSize = "20px";
           }
       
           return rezultatas;
       }

