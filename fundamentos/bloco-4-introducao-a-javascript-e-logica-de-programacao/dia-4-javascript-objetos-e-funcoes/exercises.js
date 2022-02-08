let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Boas vindas ao personagem
function welcome (personageName) {
  return "Bem vinda, " + personageName;
}
let nameInInfo = info["personagem"];
console.log(welcome(nameInInfo));

//2 - Chave "recorrente" e valor "Sim" e imprimir
info.recorrente = "Sim";
console.log(info);

//3 - for/in chaves
for (const key in info) {
    console.log(key);
}

//4 - for/in valores
for (const key in info) {
  console.log(info[key]);
}

/*5 - Objeto com: : 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'.
Imprimir os valores de cada objeto juntos, sendo o último valor: Ambos recorrentes, se sim ou não */