function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));
areaQuadrado(5);
areaQuadrado(2);

function pi() {
  return 3.14;
}

const total = 5 * pi();

console.log(total);

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(75, 1.72));

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc2(80, 1.6);

function corFav(cor) {
  if (cor === "azul") {
    console.log("olhe para o céu");
  } else if (cor === "rosa") {
    console.log("olhe para as flores");
  } else {
    return "voce n vale nada";
  }
}

addEventListener("click", function () {
  console.log("clicou");
});

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    console.log("ta me gastando, digite certo");
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

function paisesaVisitar(jaVisitei) {
  const totalPaises = 193;
  return `não visitei o seguinte número de países ainda: ${
    totalPaises - jaVisitei
  }`;
}
