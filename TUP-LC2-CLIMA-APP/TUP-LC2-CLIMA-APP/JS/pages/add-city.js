const form = document.getElementById("agregar-ciudades");

//Uso prevent default para que no se recargue la pagina
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

//Obtengo los valores del localStorage

function getCitiesFromLocalStorage() {

    let city = document.getElementById("texto-city").value; //Obtengo el input text de html
    const result = document.getElementById("result");

    if (localStorage.getItem("Ciudades") == null) { //Verifico si el item Ciudades es nulo, si lo es se crea un array vacio
        localStorage.setItem("Ciudades", "[]");
    }

    let old_cities = JSON.parse(localStorage.getItem("Ciudades")); //Guardo el item en una variable y lo parseo

    const ifExist = old_cities.includes(city);  //Creo esta constante para manejar la logica de la verificacion

    result.style.display = "block"; //Al elemento donde se va a mostrar el mensaje del resultado, le agrego display block

    if (!ifExist && city != "" && (/^[a-zA-Z]+$/.test(city))) {
        result.classList.remove('alert-warning');
        result.classList.remove('alert-danger');
        old_cities.push(city);                  //Si se cumplen las condiciones del If, pushea los valores de city al array old_cities
        result.classList.add('alert-success');
        result.innerText = "Ciudad agregada correctamente";
    }
    else if (!(/^[a-zA-Z]+$/.test(city))) {
        result.classList.remove('alert-warning');
        result.classList.remove('alert-success');
        result.classList.add('alert-danger');
        result.innerText = "Ciudad inválida, asegurese de que esté bien escrita e intentelo nuevamente";
    }

    else if (ifExist) {
        result.classList.remove('alert-danger');
        result.classList.remove('alert-success');
        result.classList.add('alert-warning');
        result.innerText = "La ciudad ya se encuentra almacenada";
    }

    //Seteo los valores del local storage

    localStorage.setItem("Ciudades", JSON.stringify(old_cities));

}

