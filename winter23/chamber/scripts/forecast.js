const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const foreCast = document.querySelector('#foreCast');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather';

const apiKey = '8e6510e8d4e1682e9b87719658d8bae2';
const city = 'Bakersfield';
const units = 'imperial';
const queryString = `?q=${city}&appid=${apiKey}&units=${units}`;

const fullURL = url + queryString;

async function apiFetch(){
    try {
        const response = await fetch(fullURL);
        if (response.ok) {
            const data = await response.json();

            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}