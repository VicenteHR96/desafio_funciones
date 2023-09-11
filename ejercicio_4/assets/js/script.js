//DOM

const btnGeneral = document.querySelector(".btn-general");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const teclas1 = document.getElementById("key");
const container2 = document.querySelector(".container-letras2");

var colorAsociadoLetras1 = ""; // Variable para el div "letras1"
var colorAsociadoNuevoDiv = ""; // Variable para el div "nuevoDiv"

// Métodos

const btnClick = (elemento) => {
  if (elemento.style.backgroundColor === "black") {
    elemento.style.backgroundColor = "";
  } else {
    elemento.style.backgroundColor = "black";
  }
};

// Eventos

// Ejercicio Click

btn1.addEventListener("click", function () {
  btnClick(btn1);
});
btn2.addEventListener("click", function () {
  btnClick(btn2);
});
btn3.addEventListener("click", function () {
  btnClick(btn3);
});
btn4.addEventListener("click", function () {
  btnClick(btn4);
});

// Ejercicio Letras asociadas a colores

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "a") {
    colorAsociadoLetras1 = "pink";
  } else if (event.key.toLowerCase() === "s") {
    colorAsociadoLetras1 = "orange";
  } else if (event.key.toLowerCase() === "d") {
    colorAsociadoLetras1 = "lightblue";
  }

  teclas1.style.backgroundColor = colorAsociadoLetras1;
});

// Ejercicio Crear Div y asignarle colores

function creaDiv(colorFondoNuevoDiv) {
  if (document.getElementById("nuevoDiv") === null) {
    const newDiv = document.createElement("div");
    newDiv.style.height = "200px";
    newDiv.style.width = "200px";
    newDiv.id = "nuevoDiv";
    newDiv.style.border = "2px solid black";
    newDiv.style.borderRadius = "50%";
    newDiv.style.backgroundColor = colorFondoNuevoDiv;
    container2.appendChild(newDiv);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "q") {
    creaDiv("purple");
    colorAsociadoNuevoDiv = "purple";
  } else if (event.key.toLowerCase() === "w") {
    creaDiv("grey");
    colorAsociadoNuevoDiv = "grey";
  } else if (event.key.toLowerCase() === "e") {
    creaDiv("brown");
    colorAsociadoNuevoDiv = "brown";
  }

  nuevoDiv.style.backgroundColor = colorAsociadoNuevoDiv;
});
