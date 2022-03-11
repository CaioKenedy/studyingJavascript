const pessoa = {
  nome: "Caio",
  idade: 25,
  profissão: "Desenvolvedor",
  faculdade: true,
};

function soma(a, b) {
  return a + b;
}

let quadrado = {
  lados: 4,
  area: function (lado) {
    // apagando o function e o :
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

// continuação objetivos nativos JS

console.log(Math.random());

console.table(quadrado);
