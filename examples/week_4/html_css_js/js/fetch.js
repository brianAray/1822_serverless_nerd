
/**
 * The fetch api is a modern JS interface for making network requests
 * 
 * It provides a more powerful and flexible way to work with network requests compared to XMLHttpRequest
 */

// Basic Fetch Request

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

// send data POST

fetch("post example", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: "hello"})
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


/*
    <div id="poke-searcher-div">
        <h1>Poke Search</h1>
        <input type="number" placeholder="3">
        <input type="button" value="search">

        <div id="poke-data-div">
            
        </div>
    </div>

*/

const pokeSearcherDiv = document.querySelector("#poke-searcher-div");

const pokeNumberInput = pokeSearcherDiv.children[1];
const pokeSearchButton = pokeSearcherDiv.children[2];

const pokeDataDiv = document.querySelector("#poke-data-div");


pokeSearchButton.addEventListener("click", () => {
    searchPokeApi(pokeNumberInput.value);
})


async function searchPokeApi(number){
    let url = `https://pokeapi.co/api/v2/pokemon/${number}`;

    try{

        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        updatePokeDisplay(data);
    }catch(error){
        console.error(error);
    }
}

// searchPokeApi(3);

function updatePokeDisplay(pokeData){
    pokeDataDiv.textContent = "";

    const pokeImage = document.createElement("img");
    pokeImage.src = pokeData.sprites.front_default;

    const pokeName = document.createElement("h4");
    pokeName.textContent = pokeData.name;

    pokeDataDiv.appendChild(pokeName);
    pokeDataDiv.appendChild(pokeImage);
}