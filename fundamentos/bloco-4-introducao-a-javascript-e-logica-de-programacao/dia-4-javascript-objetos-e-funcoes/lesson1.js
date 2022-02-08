//1

let player = {
  name : 'Marta',
  lastName : 'Silva',
  age : 34,
  medals : { golden: 2, silver: 3 },
}

//2
//Mensagem com name, lastName e Age
function nameLastNameAge (object) {
  let playerName = "A jogadora " + object["name"];
  let playerLastName = " " + object["lastName"];
  let playerAge = " tem " + object["age"] + " anos de idade.";
  return  playerName + playerLastName + playerAge;
}
let jogadora = nameLastNameAge(player);
console.log(jogadora);
let playerName = "A jogadora " + player["name"];
let playerLastName = " " + player["lastName"];
let playerAge = " tem " + player["age"] + " anos de idade.";
//3
//chave bestInTheWorld e valor [2006, 2007, 2008, 2009, 2010, 2018]
player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

//4
let howManyTimes = " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.";
console.log(playerName + playerLastName + howManyTimes);

//5 "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"
let playerMedals = "A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " de prata.";
console.log(playerMedals);
