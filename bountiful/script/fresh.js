const URLrequest = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
let incrementsFruit = 0;
let incrementsLabel = 0;

fetch(URLrequest)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.log(jsonObject);
        const fruitsData = jsonObject;
        console.log("fruistdata:",fruitsData);
        fruitsData.forEach(displayFruits);
            
});

function example(element) {
    console.log(element);
}

function displayFruits(fruits) {
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'fruitCheck');
    checkbox.setAttribute('name', 'typeOfFruit' + incrementsFruit++);
    checkbox.setAttribute('value', fruits.name);
    
    label.setAttribute('class', 'fruitLabel' + incrementsLabel++);
    label.textContent = fruits.name;
    label.appendChild(checkbox)
    
    document.querySelector('.fruitSelect').appendChild(label);
    
    
}
}