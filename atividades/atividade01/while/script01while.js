let contador = 0;
let alturaTotalHomens = 0;
let quantidadeMulheres = 0;
let maiorAltura = 0;
let menorAltura = Infinity;

while (contador < 15) {
  let altura = parseInt(prompt("Qual a sua altura em centímetros?"));
  let sexo = prompt("Qual o seu sexo? (M ou F)").toUpperCase();

  // armazena a maior e a menor altura
  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
  if (altura < menorAltura) {
    menorAltura = altura;
  }

  // calcula a média de altura entre os homens
  if (sexo === "M") {
    alturaTotalHomens += altura;
  }

  // conta a quantidade de mulheres
  if (sexo === "F") {
    quantidadeMulheres++;
  }

  contador++;
}

let mediaAlturaHomens = alturaTotalHomens / (contador - quantidadeMulheres);

alert(`A maior altura registrada foi ${maiorAltura} cm.`);
alert(`A menor altura registrada foi ${menorAltura} cm.`);
alert(`A média de altura entre os homens é ${mediaAlturaHomens.toFixed(2)} cm.`);
alert(`A quantidade de mulheres é ${quantidadeMulheres}.`);