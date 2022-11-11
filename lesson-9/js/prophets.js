//Let's store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

/* We will use a basic fetch() method and feed it the required argument, 
the URL and use the .then() method that returns a Promise which response
 we will work with as an argument to an anonymous function. 
 We need to extract the JSON content from the noise 
 of the full HTTP response by using the json() method. 
 The second .then() method is then setup for us to work with 
 the converted response data in JavaScript object format.  
 Initially we will test to see if we get a valid, parsed response 
 using a console.table() method to output the results to the console.*/
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //Now we will store the results of the converted response into an array since the data source is a neatly packed array of records named "prophets"
        const prophets = jsonObject["prophets"];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        /*As you guessed, in order to produce the output as shown in the
 screenshots, we need to loop through every record and process each one
  into its own 'card' (HTML output), one at a time. This is easily done 
  using a forEach method Links to an external site.. We we define a 
  function named "displayProphets" which will be called for each prophet
   record in the prophets list.*/
        prophets.forEach(displayProphets); 
    });


/*Define a function named "displayProphets", somewhere in your js file but not in the fetch() method. The defined function will be hoisted by rule Links to an external site.. In your function definition signature line, accept one parameter named "prophet" which will receive each element of the prophets array.

Now we just build the HTML of the prophet card using the createElement()
 and appendChild() methods on the document. We will place all of these 
  prophet 'cards' in already marked up, generic division <div> element
   on the page that has a class attribute value of "cards". Let's go ahead
    and make each card a <section> element with standard heading <h2> and 
     paragraphs <p> for field items and an image <img>. This code snippet, 
      within the callback function, is just a start populating h2 headers
       with full prophet names. */

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let birth = document.createElement("p");
    let children = document.createElement("p");
    let portrait = document.createElement("img");

    // Change the textContent property of the h2 element to contain the prophet's full name
    name.textContent = `${prophet.name} ${prophet.lastname}`;
    birth.textContent = `${prophet.name} was born on ${prophet.birthdate} in ${prophet.birthplace}.`;
    children.textContent = `He was father of ${prophet.numofchildren} children.`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute("loading", "lazy");

    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(birth);
    card.appendChild(children);
    card.appendChild(portrait);
    cards.appendChild(card);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}
