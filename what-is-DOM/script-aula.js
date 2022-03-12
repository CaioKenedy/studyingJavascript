console.log(window.innerHeight);

window.innerHeight;

// window.alert("suave");

var href = window.location.href;

if (href === "http://127.0.0.1:5500/what-is-DOM/") {
  window.alert("ta valendo");
}

const h1Select = document.querySelector("h1");
const h1Classes = h1Select.classList;

const titulo = document.querySelector("h1");

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

// titulo.addEventListener("click", function () {
//   console.log("clicou em", h1Select.innerText);
// });
// ativa a função callback ao click no titulo

//refatorando

function callbackh1() {
  console.log("clicou em", h1Select.innerText);
}

titulo.addEventListener("click", callbackh1);
