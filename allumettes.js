// Déclaration des variables totalAllumettes et nombreJoueurs 
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
