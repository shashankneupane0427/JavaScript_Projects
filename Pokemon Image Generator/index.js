async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); // get the value of the input field
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // fetch the data from the API
        
        if (!response.ok) {
            throw new Error('Could not fetch the data for that resource');
        }
        
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default; // get the sprite of the pokemon
        const imgElement = document.getElementById("pokemonSprite"); // get the image element
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"; // show the image
    } catch (error) {
        console.error(error);
    }
}