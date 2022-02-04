let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1
/* for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
} */

//2
/* let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma = numbers[i] += soma;
}
console.log(soma); */

//3
/* let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma = numbers[i] += soma;
}
console.log(soma / numbers.length); */

//4
/* let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma = numbers[i] += soma;
}
let media = soma / numbers.length;
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}*/

//5
/* let maiorValor = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}
console.log(maiorValor); */

//6
/* let quantImpar = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    quantImpar += 1;
  }
}
if (quantImpar === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(quantImpar);
} */

//7
/* let menorValor = numbers[0];
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menorValor) {
    menorValor = numbers[i];
  }
}
console.log(menorValor); */

//8
/* let de1a25 = [];
for (let i = 1; i <= 25; i += 1) {
  de1a25.push(i)
}
console.log(de1a25); */

//9
/* for (let i = 0; i < de1a25.length; i += 1) {
  de1a25[i] /= 2;
  console.log(de1a25[i]);
} */
