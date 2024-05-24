const jeu = ["pierre", "papier", "ciseaux"]

let reponse = ""
let scoreJoueur = 0;
let scoreOrdi = 0;

while (scoreJoueur < 2 && scoreOrdi < 2) {
    const joueur = prompt("entrez pierre,papier ou ciseaux")
    const ordi = jeu [Math.floor(Math.random() * jeu.length)]

    if (joueur === ordi) {
        reponse = "egalite"
        

    } else if ((joueur === "pierre" && ordi === "ciseaux") || (joueur === "ciseaux" && ordi === "papier") || (joueur === "papier" && ordi === "pierre")) {
        reponse = "Gagné";
        scoreJoueur++
    }

    else {
        reponse = "Perdu";
        scoreOrdi++
        
    }
    console.log(reponse)

}



