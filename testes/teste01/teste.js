let contador = 0;
let alturas = [];
let sexos = [];
let maiorAltura = 0;
let menorAltura = Number.MAX_VALUE;
let somaAlturaHomens = 0;
let quantidadeMulheres = 0;

while (contador < 15) {
  let altura;
  let sexo;

  while (true) {
    altura = prompt(`Qual é a altura da pessoa ${contador+1} em metros?`);
    if (altura !== null && altura !== "" && !isNaN(altura)) {
      break;
    } else {
      alert("Por favor, insira uma altura válida.");
    }
  }

  while (true) {
    sexo = prompt(`Qual é o sexo da pessoa ${contador+1}? Digite M para masculino ou F para feminino.`);
    if (sexo !== null && sexo !== "") {
      sexo = sexo.toUpperCase();
      if (sexo === "M" || sexo === "F") {
        break;
      } else {
        alert("Por favor, insira um sexo válido.");
      }
    } else {
      alert("Por favor, insira um sexo.");
    }
  }

  alturas.push(parseFloat(altura));
  sexos.push(sexo);

  // calcula a maior e menor altura
  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
  if (altura < menorAltura) {
    menorAltura = altura;
  }

  // calcula a soma das alturas dos homens para calcular a média depois
  if (sexo === "M") {
    somaAlturaHomens += parseFloat(altura);
  }

  // calcula a quantidade de mulheres
  if (sexo === "F") {
    quantidadeMulheres++;
  }

  contador++;
}

// calcula a média de altura dos homens
let mediaAlturaHomens = somaAlturaHomens / (contador - quantidadeMulheres);

alert("Alturas: " + alturas);
alert("Sexos: " + sexos);
alert("Maior altura: " + maiorAltura);
alert("Menor altura: " + menorAltura);
alert("Média de altura dos homens: " + mediaAlturaHomens.toFixed(2));
alert("Quantidade de mulheres: " + quantidadeMulheres);