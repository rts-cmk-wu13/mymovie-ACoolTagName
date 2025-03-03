


let divElm = document.createElement("div")
divElm.id = "root"

divElm.innerHTML = `
    <div id="wrapper">
    <header><div></div><h1>MyMovies</h1><div></div></header>
    <main></main>
    </div>
`

document.querySelector("body").append(divElm)
