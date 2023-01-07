// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

let quantity = document.querySelector('#q').value;

document.querySelector('aside').innerHTML = 'Welcome to <em>our </em>neighborhood!'

const divs = document.querySelectorAll('div');

let filterC = citynames.filter (city => city.charAt (0) === 'C');

document.querySelector('#temp').value = getCelsius(33);
function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};

// Question #5 (change)
today1.innerHTML = new Date().toLocaleDateString("en-US", options);
// Question #6 (change)
today2.innerHTML = `<strong>Volume</strong>: $ {volume} liters`
// Question #7

// Question #8

// Question #9

// Question #10

// Question #11
