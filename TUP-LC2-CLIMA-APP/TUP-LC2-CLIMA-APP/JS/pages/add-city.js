const form = document.getElementById("agregar-ciudades");

function getCitiesFromLocalStorage() {
    let city = document.getElementById("texto-city").value;

    if (localStorage.getItem("Ciudades") == null) {
        localStorage.setItem("Ciudades", "[]");
    }

    let old_cities = JSON.parse(localStorage.getItem("Ciudades"));

    old_cities.push(city);

    localStorage.setItem("Ciudades", JSON.stringify(old_cities));

}

