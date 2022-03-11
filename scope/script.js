// Por qual motivo o código abaixo retorna com erros? R: no console o nome da variavel precisa ser imprimido, entretanto, o mesmo não deve estar fora do bloco.
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo? R: declarar a variavel "dois" fora do bloco
let dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500? R: trocar var por let
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
