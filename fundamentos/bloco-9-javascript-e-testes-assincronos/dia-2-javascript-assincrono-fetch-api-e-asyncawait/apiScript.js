const fetch = require('node-fetch');

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.log(`Algo deu derrado :( \n${error}`));
};

window.onload = () => fetchJoke();