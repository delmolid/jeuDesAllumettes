/*let totalallumettes = 50;
function compteur(){
    let nballumettesUtilisateur1 = prompt("Joueur 1 : Retirer des allumettes : vous avez droit à 1 à 6 allumettes")
    let nballumettesUtilisateur2 = prompt("Joueur 2 : Retirer des allumettes : vous avez droit à 1 à 6 allumettes ")
if (nballumettesUtilisateur1 < 1 || nballumettesUtilisateur1 > 6 ||  nballumettesUtilisateur2 < 1 || nballumettesUtilisateur2 > 6) { 
    alert("Le nombre d’allumettes à pouvoir être retirées est : 1 à 6 : Recommencer")
    compteur();

} else {
    totalallumettes = totalallumettes - nballumettesUtilisateur1 
    totalallumettes = totalallumettes - nballumettesUtilisateur2
    console.log(totalallumettes)
   while(totalallumettes>0){
        alert("Nombre d'allumettes restantes : " + totalallumettes)
        compteur();
}
         alert("Il ne reste plus des allumettes, Feu de jeu");
} }
compteur(); 
*/



let totalAllumettes = 50;
let nombreJoueurs = 0;


// Sélection des boutons
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// Initialisation des boutons avec le nombre de joueurs
button1.onclick = function() {
    nombreJoueurs = 1;
    compteur();
};

button2.onclick = function() {
    nombreJoueurs = 2;
    demarrerJeu();
    compteur();
};

button3.onclick = function() {
    nombreJoueurs = 3;
    compteur();
};


function compteur() {
    let joueurActuel = 1;

    while (totalAllumettes > 0) {
        // Demander au joueur actuel de retirer des allumettes
        let nbAllumettes = prompt(`Joueur ${joueurActuel} : Retirer des allumettes (1 à 6)`);
        nbAllumettes = parseInt(nbAllumettes);

        if (isNaN(nbAllumettes) || nbAllumettes < 1 || nbAllumettes > 6) {
            alert("Le nombre d’allumettes doit être compris entre 1 et 6. Veuillez recommencer."); 
           continue;
        }

        // Soustraire le nombre d'allumettes retirées
        totalAllumettes -= nbAllumettes;

        if (totalAllumettes <= 0) {
            alert(`Joueur ${joueurActuel} a pris les dernières allumettes. Joueur ${joueurActuel} gagne !`);
            break;
        } else {
            alert("Nombre d'allumettes restantes : " + totalAllumettes);
        }

        // Passer au joueur suivant
        joueurActuel++;
        if (joueurActuel > nombreJoueurs) {
            joueurActuel = 1; // Revenir au premier joueur si le dernier a joué
        }
    }
}
