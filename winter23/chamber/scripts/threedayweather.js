function getWeatherForecast() {
    const apiKey = '8e6510e8d4e1682e9b87719658d8bae2';
    const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Bakersfield,us&units=imperial&appid=${apiKey}';

    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const weatherData = data.list.slice(0,2);
        const forecastHtml = weatherData.map((weather) => {
            const date = new Date(weather.dt_txt);
            const dayOfWeek = date.toLocaleDateString('en-US', {weekday: 'long'});
            const time = date.toLocaleDateString('en-US', {hour: 'numeric'});
            const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

            return `
            <div class="weather-item">
            <div class="weather-time">${dayOfWeek} ${time}</div>
            <img src="${iconUrl}" alt="${weather.weather[0].description}">
            <div class="weather-temp">${Math.round(weather.main.temp)}&deg;F</div>
            </div>
            `;

        }).join('');

        document.getElementById('weather-forecast').innerHTML = `
        <h2>Two Day Weather Forecast</h2>
        <div class="weather-container">
        ${forecastHtml}
        </div>
        `;
        })
        .catch(error => console.log(error));
    }
    ``
