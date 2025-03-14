

//document.getElementById("test").style.fontSize = "10rem";
//document.getElementById("test").style.color = "red";
//document.getElementById("test").style.margin = "0";
//document.getElementById("test").style.fontWeight = "bold";
//document.getElementById("test").style.border = "solid 50px";
//document.getElementById("test").style. = "";
//document.getElementById("test").style. = "";

const element = document.getElementById("test");

const styles = {
    backgroundColor: "#000",
    color: "red",
    padding: "10px 20px",
    border: "solid 10px #04f",
    cursor: "pointer",



    
}; for (let property in styles) { element.style[property] = styles[property];}