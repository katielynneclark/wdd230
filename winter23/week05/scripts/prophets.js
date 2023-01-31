const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards'); 


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  

    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);

   
  });

  
  
    function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birth = document.createElement('p')

    console.log(card);
    console.log(h2);
    console.log(portrait);
  
    
    h2.textContent = prophet.name + ' ' + prophet.lastname;
  
    portrait.setAttribute('src', prophet.imageurl);
    h2.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    card.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
  
    
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birth);

    
     birth.textContent = `Born in ${prophet.birthplace} on ${prophet.birthdate}`;
    document.querySelector('div.cards').appendChild(card);

    
  }