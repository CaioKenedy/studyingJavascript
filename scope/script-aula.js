"use strict";

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (true) {
  var carro = "Fusca";
  console.log(carro);
}

console.log(carro);

// Se usar const ou let a variavel nao vaza pra fora do escopo, ou seja, var tem um erro.

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

// se usasse var, vazaria do escopo, const não funcionaria por ser constante

// const mes = "Dezembro";
// mes = "Janeiro"; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

// data.dia = 29; // Funciona
// data = "Janeiro"; // erro
