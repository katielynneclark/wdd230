const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier&units=imperial&appid=8e6510e8d4e1682e9b87719658d8bae2';

  async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&degF`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}10d.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }
