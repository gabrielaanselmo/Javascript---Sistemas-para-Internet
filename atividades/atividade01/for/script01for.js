// Array para armazenar os dados das pessoas
let pessoas = [];

// Loop para pedir informações de 15 pessoas
for (let i = 0; i < 15; i++) {
  // Pergunta a altura
  let altura = parseFloat(prompt(`Digite a altura da ${i+1}ª pessoa:`));
  
  // Pergunta o sexo
  let sexo = prompt(`Digite o sexo da ${i+1}ª pessoa (M ou F):`).toUpperCase();
  
  // Verifica se o sexo é válido
  if (sexo !== "M" && sexo !== "F") {
    alert("Sexo inválido! Digite 'M' para masculino ou 'F' para feminino.");
    i--; // Volta para a pessoa anterior
    continue;
  }
  
  // Adiciona os dados da pessoa ao array
  pessoas.push({
    altura: altura,
    sexo: sexo
  });
}

// Variáveis para armazenar os resultados
let maiorAltura = -Infinity;
let menorAltura = Infinity;
let somaAlturaHomens = 0;
let qtdMulheres = 0;

// Loop para calcular os resultados
for (let i = 0; i < pessoas.length; i++) {
  let pessoa = pessoas[i];
  
  // Verifica se a altura é maior ou menor que as já encontradas
  if (pessoa.altura > maiorAltura) {
    maiorAltura = pessoa.altura;
  }
  if (pessoa.altura < menorAltura) {
    menorAltura = pessoa.altura;
  }
  
  // Verifica se é um homem e soma a altura para calcular a média
  if (pessoa.sexo === "M") {
    somaAlturaHomens += pessoa.altura;
  }
  
  // Verifica se é uma mulher e incrementa a quantidade
  if (pessoa.sexo === "F") {
    qtdMulheres++;
  }
}

// Calcula a média da altura dos homens
let mediaAlturaHomens = somaAlturaHomens / (pessoas.length - qtdMulheres);

// Exibe os resultados
alert("Maior altura: " + maiorAltura);
alert("Menor altura: " + menorAltura);
alert("Média de altura dos homens: " + mediaAlturaHomens.toFixed(2));
alert("Número de mulheres: " + qtdMulheres);
