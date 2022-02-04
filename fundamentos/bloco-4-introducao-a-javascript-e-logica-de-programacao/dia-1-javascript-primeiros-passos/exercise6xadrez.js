let pXadrezRecebida = "PeAo";
let pLowerCase = pXadrezRecebida.toLowerCase();
let movimentos = ["Se for seu primeiro movimento: avance duas casas para frente. Se não: avance uma casa para frente, ou tombe uma peça pulando uma casa nas diagonais.", "Na vertical ou horizontal, sem restrição de casas.", "Em diagonal, sem restrição de casas.", "Em L.", "Em qualquer posição, sem restrição de passos.","Em qualquer posição, uma casa apenas."]

if (pLowerCase === "peao") {
    console.log(movimentos[0]);
} else if (pLowerCase === "torre") {
    console.log(movimentos[1]);
} else if (pLowerCase === "bispo") {
    console.log(movimentos[2]);
} else if (pLowerCase === "cavalo") {
    console.log(movimentos[3]);
} else if (pLowerCase === "rainha") {
    console.log(movimentos[4]);
} else if (pLowerCase === "rei") {
    console.log(movimentos[5]);
} else {
    console.log("Esse não é um valor válido");
}
