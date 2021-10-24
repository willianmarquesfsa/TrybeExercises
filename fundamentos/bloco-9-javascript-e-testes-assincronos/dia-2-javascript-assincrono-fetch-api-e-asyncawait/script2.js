const fetch = require('node-fetch');

const fetchJoke = async() => {
    const url = 'api.chucknorris.io/jokes/random?category=dev';
    console.log("teste")
    const resul = await fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data.value))
        .catch((error) => console.log(`Algo deu derrado :( \n${error}`));


    return resul

}

fetchJoke();
//console.log("teste")

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported