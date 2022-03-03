/* function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

/* let testingScope = escopo => escopo === true ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`: `Não devo ser utilizada fora meu escopo (else)`;

testingScope; */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */
const orderNumbers = oddsAndEvens.sort((a, b) => a - b);

console.log(orderNumbers);
