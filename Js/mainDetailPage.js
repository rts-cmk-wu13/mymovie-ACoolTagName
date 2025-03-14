@param { string } movienUrl
@returns { string }
function getIdFromMovie(movienUrl) {
    return movienUrl.slice(0, -1).split("/").pop()
}

const thumnailsUrl = ""

const mainPage = document.createElement("article");
mainPage.innerHTML = ""


fetch("https://api.themoviedb.org/3/trending/movie/week",
    {
        headers:
            { accept: 'application/json', Authorization: 'Bearer //indsæt din token her...' }

    }
)
    .then(function (response) {
        return response.json()
    }
    ).then(
        function (data) {
            mainPage.innerHTML = data.map(movie => `
                <section>
                    <article><img src="${artworkUrl}/${getIdFromMovie(movie.url)}.png" alt="${movie.name}"></article>
                </section>
                <section>
                    <article>
                        <section>
                            <h1>${movie.name}</h1>
                            <p class="rating">p</p>
                            <div class="theams">div</div>
                            <div class="info" info></div>
                            <h2>Description</h2>
                            <p>p</p>
                        </section>
                        <section>
                            <h2>Cast</h2>
                            <div>
                                <div class="actor_object-card"><img src="" alt="">
                                    <h3></h3>
                                </div>
                            </div>
                        </section>
                    </article>
                </section>
            `).join("")

        }
    )


document.querySelector("main").append(sectionElm)



