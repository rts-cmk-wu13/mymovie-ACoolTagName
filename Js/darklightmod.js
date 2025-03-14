let rootElm = document.documentElement;

let switchElm = document.querySelector("#switch")
let isDarkMode = readFromLocalStorage("isdarkMode")
let browserDark = window.matchMedia("prefers-color-scheme: light").matches

let darkState = null
if( isDarkMode == null ) {
    darkState = browserDark;
} else {
    darkState = isDarkMode
}


if (darkState) {
    switchElm.checked = true
    rootElm.setAttribute("data-dark", switchElm.checked)
} else {
    switchElm.checked = flase
    rootElm.setAttribute("data-dark", switchElm.checked)
}

switchElm.addEventListener("change", function () {



})