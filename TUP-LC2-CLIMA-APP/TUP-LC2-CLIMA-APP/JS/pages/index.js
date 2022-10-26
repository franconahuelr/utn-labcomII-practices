

async function getCity(value) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b54914a753ddd99a46e09a5c522ae648&units=metric&lang=es`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(err)
    }


}


function consultar() {
    var citySelected = document.getElementById('citiesSelect');
    var value = citySelected.value;

    getCity(value)
        .then((response) => {
            console.log(response)
            showInfo(response)
        })
        .catch(err => console.log(err))

    console.log(value)
}

function showInfo(data) {
    const charactersDiv = document.querySelector('#section-weather-result');
    charactersDiv.innerHTML = "";
    const card = document.createElement('div');
    card.className = 'card';
    const title = document.createElement('h3');
    title.innerText = data.name;

    const pTemperature = document.createElement('p');
    pTemperature.innerText = data.main.temp + '°C'

    const pFeelsLike = document.createElement('p');
    pFeelsLike.innerText = data.main.feels_like + '°C'

    const pHumidiy = document.createElement('p');
    pHumidiy.innerText = data.main.humidity + '%';
    const pPressure = document.createElement('p');
    pPressure.innerText = data.main.pressure

    card.append(title, pTemperature, pFeelsLike, pHumidiy, pPressure);
    charactersDiv.append(card)

}
