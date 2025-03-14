
const mainHeader = document.createElement("article");
mainHeader.innerHTML = `
<div id="menu_button"><i class="fa-solid fa-bars-staggered"></i></div><h1>MyMovies</h1><div id="toggleSwitch"><label class="switch"><input type="checkbox"><span class="slider round"></span></label></div>
`

document.querySelector("header").append(mainHeader);