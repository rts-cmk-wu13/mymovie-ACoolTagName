@param { string } movienUrl
@returns { string }
function getIdFromMovie(movienUrl) {
    return movienUrl.slice(0, -1).split("/").pop()
}

const thumnailsUrl = ""

const mainPage = document.createElement("article");
mainPage.innerHTML = ""


    fetch("https://api.themoviedb.org/3/trending/movie/week", 
        { headers: 
            { accept: 'application/json', Authorization: 'Bearer //indsæt din token her...' } 

        }
        )
        .then(function (response) {
            return response.json()
        }
        ).then(
            function (data) {
                mainPage.innerHTML = data.map(movie => `
                <section class="page_section">
                    <article>
                        <section class="article_section--headline">
                            <h2>Now Showing</h2>

                            <div class="button"><a href="">See more</a></div>
                        </section><!--article_section-->

                        <section class="article_section--content">
                            <div class="movie_gallary">
                                <div class="object_card--movie_card">
                                    <article class="object_card--article">
                                        <div class="object_card--movie_img-frame">
                                            <img src="${artworkUrl}/${getIdFromMovie(movie.url)}.png"
                                                alt="${movie.name}">
                                        </div>
                                        <h3 class="object_card--movie_title">${movie.name}</h3>
                                        <p class="object_card--movie_rating"></p>
                                    </article>
                                </div><!--cobject_card-movie-->
                            </div><!--movie_gallary-->
                        </section><!--article_section-->
                    </article>
                </section><!--page_section-->
                <section class="page_section">
                    <article>
                        <section class="article_section--headline">
                            <h2>Popular</h2>
                            <div class="button"><a href="">See more</a></div>
                        </section><!--article_section-->
                        <section class="article_section--content">
                            <div class="movie_gallary">
                                <div class="object_card--movie_card">
                                    <article class="object_card--article">
                                        <div class="object_card--movie_img-frame">
                                            <img src="" alt="">
                                        </div>
                                        <div>
                                            <h3 class="object_card--movie_title">${movie.name}</h3>
                                            <p class="object_card--movie_rating"></p>
                                            <div>
                                                <div>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <p></p>
                                        </div>
                                    </article>
                                </div><!--cobject_card-movie-->
                            </div><!--movie_gallary-->
                        </section><!--article_section-->
                    </article>
                </section><!--page_section-->
            `).join("")

            }
        )
    

document.querySelector("main").append(sectionElm)