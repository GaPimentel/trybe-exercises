let statusCandidata = ["Aprovada", "lista", "reprovada"];

switch (statusCandidata) {
    case "Aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
    case "reprovada":
        console.log("Você foi reprovada(o)");    
    default:
        console.log("não se aplica");
        break;
}
