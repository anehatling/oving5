//oppgave 2
let foresp = new XMLHttpRequest();
foresp.open("fjell.json", true);
foresp.onload = function() {
    let data = JSON.parse(this.response).fjell;

//tabell
let fjelltabell =
"table id= 'summit-table'><tr><th>Fylke</th><th>Fjell</th><th>Høyde</th>";

//liste data opp i html
for (let fylket of data)  {
    fjelltabell += `<tr><td>${fylket.fylke}</td><td>${fylket.fjell}</td><td>${fylket.hoyde}</tr>`;
}   fjelltabell += "</table>"

document.getElementById ("tabell").innerHTML = fjelltabell;

// oppgave 3
//legger til event "click"
document.getElementById("button").addEventListener("click", sorterData);

//lager funksjon som sorterer etter høyde
function sorterData() {
    let sortert = data.sort((a, b) => parseFloat(b.hoyde) - parseFloat(a.hoyde));
    let nyTabell = "<table id='summit-table2'><tr><th>Fylke</th><th>Fjell</th><th>Høyde</th>";

//loop gjennom fylker
for (let fylket of sortert) {
    nyTabell += `<tr><td>${fylket.fylke}</td><td>${fylket.fjell}</td><td>${fylket.hoyde}</tr>`;
}
nyTabell += "</table>"
document.getElementById("sortertTabell").innerHTML = nyTabell;;
}}
foresp.send();