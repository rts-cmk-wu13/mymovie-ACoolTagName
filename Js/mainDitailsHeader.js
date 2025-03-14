
const mainHeader = document.createElement("article");
mainHeader.innerHTML = `
<div id="returne_button"><i class="fa-solid fa-arrow-left"></i></div><div id="toggleSwitch"><label class="switch"><input type="checkbox"><span class="slider round"></span></label></div>
`

document.querySelector("header").append(mainHeader);