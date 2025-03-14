const mainWrapper = document.createElement("div"); mainWrapper.id = "mainWrapper";

mainWrapper.innerHTML = `
  <header id="mainHeader"></header>
  <main id="mainFrontPage"></main>
  <footer id="mainFooter"></footer>
`;

document.querySelector("body").appendChild(mainWrapper);
