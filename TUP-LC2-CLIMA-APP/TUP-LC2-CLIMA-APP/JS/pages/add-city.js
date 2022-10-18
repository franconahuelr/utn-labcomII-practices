$(document).ready(function () {
    $('#boton-guardar').click(function () {
        /*Captura de datos escrito en los inputs*/
        var ciudad = document.getElementById("texto-city").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Ciudad", ciudad);
        document.getElementById("alert-success").innerText = "Ciudad agregada con exito";
    });
});



function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}
function addNewCityToLocalStorage(newCity) {
    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem("CITIES", JSON.stringify(cities));
}