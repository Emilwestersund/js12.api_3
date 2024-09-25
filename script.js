const apiUrl = "https://hp-api.onrender.com/api/characters";
const searchBox = document.getElementById('searchBox');
const characterList = document.getElementById('characterList');
const defaultImage = 'https://via.placeholder.com/150?text=No+Image';

async function fetchCharacters() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {  
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const characters = await response.json();
        console.log("Fetched characters:", characters);  // Debugging
        displayCharacters(characters);
    } catch (error) {
        console.error("Failed to fetch characters:", error);
    }
}

function displayCharacters(characters) {
    if (!characterList) {
        console.error("characterList element not found!"); // Debugging
        return;
    }
    characterList.innerHTML = ''; 

    characters.forEach(character => {
        console.log("Displaying character:", character); // Debugging

        const card = document.createElement('div');
        card.classList.add('character-card');

        const img = document.createElement('img');
        img.src = character.image ? character.image : defaultImage; 
        img.onerror = function() {
            this.src = defaultImage; 
        };
        card.appendChild(img);

        const info = document.createElement('div');
        info.classList.add('character-info');
        info.innerHTML = `
            <h3>${character.name}</h3>
            <p><strong>House:</strong> ${character.house || 'Unknown'}</p>
            <p><strong>Blood Status:</strong> ${character.ancestry || 'Unknown'}</p>
            <p><strong>Patronus:</strong> ${character.patronus || 'Unknown'}</p>
            <p><strong>Year of Birth:</strong> ${character.yearOfBirth || 'Unknown'}</p>
            <p><strong>Actor:</strong> ${character.actor || 'Unknown'}</p>
        `;
        card.appendChild(info);

        characterList.appendChild(card);
    });
}

if (searchBox) {
    searchBox.addEventListener('input', function() {
        const query = searchBox.value.toLowerCase();
        const characterCards = document.querySelectorAll('.character-card');
        characterCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = name.includes(query) ? 'block' : 'none';
        });
    });
} else {
    console.error("searchBox element not found!"); // Debugging
}

document.addEventListener('DOMContentLoaded', () => {
    fetchCharacters();
});
