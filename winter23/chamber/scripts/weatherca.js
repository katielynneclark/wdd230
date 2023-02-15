const myTown = document.querySelector('#town')
const myGraphic = document.querySelector('#graphic')
const myDescription = document.querySelector('#description')
const myTemperature = document.querySelector('#temperature')

const townName = "Bakersfield"
const myKey = "8e6510e8d4e1682e9b87719658d8bae2"

const myURL = `//api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${myKey}&units=imperial`

fetch(myURL)
.then((response) => response.json())
.then((data) => displayData(data));


function displayData (data) {
console.log(data)
myTown.innerHTML = data.name
myGraphic.src=` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
myGraphic.alt=data.weather[0].main
myDescription.innerHTML = data.weather[0].description
myTemperature.innerHTML = `${data.main.temp}&degF`

}