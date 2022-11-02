
loadSelect();  //primera función a ejecutar 
var spinner = document.getElementById('spinner'); 
var charactersDiv = document.getElementById('section-weather-result');
    
async function getCity(value) {
    charactersDiv.innerHTML = "";
    spinner.style.display='block';

    // Esperar que el pedido responda. Buscar y traer info de API.
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b54914a753ddd99a46e09a5c522ae648&units=metric&lang=es`);
    //Guardar respuesta API en formato json para manipular info
    const json = await response.json();
    spinner.style.display='none';
    return json;
}




function consultar() {
    var citySelected = document.getElementById('citiesSelect');
    var value = citySelected.value;

    getCity(value)
        //Esperar ejecución de función getCity
        .then((response) => {
            showInfo(response); //Pasa la info de API a la función showInfo y se ejecuta
        })
        .catch(err =>  alert("Problemas del servidor."));

}

function showInfo(data) {
    const card = document.createElement('div');  //Crear elemento
    card.className = 'card';  //Asignar clase
    const title = document.createElement('h3');
    title.innerText = data.name;  //Título con nombre de la ciudad

    const img = document.createElement('img');
    img.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";  //Obtengo nombre del icono

    const pTemperature = document.createElement('p');
    pTemperature.innerText = 'Temperatura: ' + data.main.temp + '°C';  //Obtengo valor de temp y muestro texto

    const pFeelsLike = document.createElement('p');
    pFeelsLike.innerText = 'Sensación térmica: ' + data.main.feels_like + '°C';

    const pHumidiy = document.createElement('p');
    pHumidiy.innerText = 'Humedad: ' + data.main.humidity + '%';

    const pWindSpeed = document.createElement('p');
    pWindSpeed.innerText = 'Velocidad del viento: ' + (data.wind.speed*3.6).toFixed(2) + ' km/h'; //Se convierte a km/h y trunca en 2 cifras decimales

    const pPressure = document.createElement('p');
    pPressure.innerText = 'Presión: ' + data.main.pressure + ' P';

    card.append(title,img,pTemperature,pFeelsLike,pHumidiy,pWindSpeed,pPressure); //Agrega las const anteriores al div
    charactersDiv.append(card); //Agrega card a la section-weather-result 

}

function loadSelect(){

    if (localStorage.getItem("Ciudades") == null) {  //Obtiene array Ciudades, si es null, lo crea
        localStorage.setItem("Ciudades", "[]");      
    }
    let cities = JSON.parse(localStorage.getItem("Ciudades"));  //Pasa de texto a json
    if(cities.length !== 0){
        var select = document.getElementById('citiesSelect');
        for (i = 0; i < cities.length; i += 1) {           //crear option según cantidad de ciudades, con valor=nombre de la ciudad
            option = document.createElement('option');   
            option.setAttribute('value', cities[i]);     
            option.appendChild(document.createTextNode(cities[i]));  //crear texto con nombre de ciudad en cada option
            select.appendChild(option);
        }
    }
}
