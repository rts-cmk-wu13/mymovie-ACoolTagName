


let mainSecElm = document.createElement("section")

mainSecElm.innerHTML = `
<section>
<article><img src="" alt=""></article>
</section>
<section>
    <article>
        <section>
            <h1>header</h1>
            <p class="rating">p</p>
            <div class="theams">div</div>
            <div class="info"info></div>
            <h2>Description</h2>
            <p>p</p>
        </section>
        <section>
            <h2>Cast</h2>
            <div><div class="actor_object-card"><img src="" alt=""><h3></h3></div></div>
        </section>
    </article>
</section>
`

document.querySelector("main").append(mainSecElm)
