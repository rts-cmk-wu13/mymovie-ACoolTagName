@param { string } movienUrl
@returns { string }
function getIdFromPokemon(movienUrl) {
    return movienUrl.slice(0, -1).split("/").pop()
}

const artworkUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

let sectionElm = document.createElement("section")
sectionElm.className = "pokelist"

fetch("/data/pokemon.json")
    .then(function (response) {
        return response.json()
    }).then(
        function (data) {
            sectionElm.innerHTML = data.map(movie => `
                <article>
                    <h2>${movie.name}</h2>
                    <img src="${artworkUrl}/${getIdFromPokemon(movie.url)}.png" alt="${movie.name}">
                </article>
            `).join("")

        }
    )

document.querySelector("main").append(sectionElm)