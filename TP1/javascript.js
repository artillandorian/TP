const anagrammes = (stringA, stringB) => {
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */

    //Suppression des espaces et des points d'exclamation
    var sA = stringA.toLowerCase();
    for (let i = 1; i <= stringA.length; i++){
        sA = sA.replace(' ', '');
        sA = sA.replace('!', '');
    }



    var sB = stringB.toLowerCase();
    for (let i = 1; i <= stringB.length; i++){
        sB = sB.replace(' ', '');
        sB = sB.replace('!', '');
    }
    //Triez les deux chaînes.
    var s1 = sA.split('').sort().join('');
    var s2 = sB.split('').sort().join('');
    //Comparez les deux chaînes triées.
    return (s1 === s2);

};

class Stack {
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */

 constructor(){
     this.tableau = [];
 }
    
 push(val1){
   this.tableau.push(val1);
 }
 pop(){
    let valeur = this.tableau[this.tableau.length-1];
    this.tableau.splice(this.tableau.length-1);
    return valeur;
 }
 peek(){
    return this.tableau[0];
}
};


const fizzBuzz = (n) => {
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

var divTrois = 0;
    var divCinq = 0;

    for (let i = 1; i <= n; i++) {
      divTrois = i%3;
      divCinq = i%5;



          if(divCinq < 1 || divTrois < 1){
            if(divCinq < 1 && divTrois < 1){
                console.log('fizzbuzz');
            }
            else{
                if(divCinq < 1){
                console.log('buzz');
                }
                else{
                 console.log('fizz');
                }
            }


          }
          else{
            console.log(i);
          }

        }
};

const spirale = (n) => {
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */
let resultat = new Array(n).fill().map(() => new Array(n).fill(''));

    let compteur = 1;
    let debutColonne = 0;
    let finColonne = n - 1;
    let debutLigne = 0;
    let finLigne = n - 1;
    while (debutColonne <= finColonne && debutLigne <= finLigne) {
        for (let i = debutColonne; i <= finColonne; i++) {
            resultat[debutLigne][i] = compteur;
            compteur++;
        }
        debutLigne++;
        for (let j = debutLigne; j <= finLigne; j++) {
            resultat[j][finColonne] = compteur;
            compteur++;
        }

        finColonne--;

        for (let i = finColonne; i >= debutColonne; i--) {
            resultat[finLigne][i] = compteur;
            compteur++;
        }

        finLigne--;
        for (let i = finLigne; i >= debutLigne; i--) {
            resultat[i][debutColonne] = compteur;
            compteur++;
        }

        debutColonne++;

    }

    console.log('resultat: ', resultat);
    return resultat;
};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */

let colonne = 5;
let ligne = 5;
let board = new Array();
let i = 0;
    
// Vérification horizontale
    let countLigne=0;
    let h=0;
    while (h<colonne){
        if (board[i][h]==player){
            countLigne++;
            h++;
        }
        else if (board[i][h]!==player&&countLigne==4){
            h++;
        }
        else {
            countLigne=0;
            h++;
        };
    };
    
    // Vérification verticale
    let countColonne=0;
    let v=0;
    while (v<ligne){
        if (board[v][j]==player){
            countColonne++;
            v++;
        }
        else if (board[v][j]!==player&&countColonne==4){
            v++;
        }
        else {
            countColonne=0;
            v++;
        };
    };
    
    // Vérification diagonale
    let countDiag=0;
    let d=-Math.min(i,j);
    
    while(i+d<ligne&&j+d<colonne&&i+d>=0&&j+d>=0){
        
        if (board[i+d][j+d]==player){
            countDiag++;
            d++;
        }
        else if (board[i+d][j+d]!==player&&countDiag==4){
            d++;
        }
        else {
            countDiag=0;
            d++;
        };
    };
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}

