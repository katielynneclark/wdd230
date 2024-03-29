const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const cards = document.querySelector('.cards'); 


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['fruit'];
    prophets.forEach(displayFruit);

   
  });

  
  
    function displayFruits(fruit) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birth = document.createElement('p')

    console.log(card);
    console.log(h2);
    console.log(portrait);
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    h2.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    card.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birth);

     //Birth place and date
     birth.textContent = `Born in ${prophet.birthplace} on ${prophet.birthdate}`;
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.fruit').appendChild(fruit);

    
  }


  