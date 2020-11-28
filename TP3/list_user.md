# TP liste d'utilisateurs

## Analyse de code

Analysez le [code situé du projet](https://codesandbox.io/s/tp-props-q0wln?file=/src/App.js) puis répondez aux questions.


**1. Quelle ligne charge le fichier JSON dans le code ?**
La ligne qui charge le fichier JSON est la ligne 4 "import users from "./Users.json";"

**2. Quelle est la structure de données du fichier JSON ?**
Le JSON est un language permettant de stocker des données en NoSql.
JSON est construit par rapport à deux structures :

Une collection de paires nom / valeur. Dans les différentes langages, ce type de structure peut s’appeler objet, enregistrement, dictionnaire, table de hachage, liste à clé ou tableau associatif.
Une liste ordonnée de valeurs. Dans la plupart des langages, c’est ce qu’on va appeler tableau, liste, vecteur ou séquence.

**3. Justifiez le `User.propTypes`. Quelles données ne sont pas prises en compte ?**
Il permet de créer une structure de données d'un utilisateur. Certains éléments tels que le nom, le prénom et titre sont obligatoire pour construire un utilisateur. Là où la localité, le genre, ... ne le sont pas. / ????????

**4. Quelles données sont obligatoires pour construire le composant `User` ?**
Pour construire un utilisateur : son nom, son prénom et un titre est obligatoire

**5. A quoi correspond `PropTypes.shape` ?**
Il permet de créer des sous catégories à des éléments. Tel que pour l'élément "name". Cette catégorie possède un first (prénom), last (nom) et un titre. Cela permet donc de structuer les données. 

**6. Pourquoi l'attribut contient deux accolades ?**
????

**7. Quel est le nom de l'opérateur qui transmet les données du composant `App` vers le composant `User`? Pourquoi est-ce dangereux d'abuser de cet opérateur ?**
l'opérateur est "export default". Il est lié au nom de du fichier car c'est un export default. Il est aussi possible d'exporter sans default, mais de ce cas, cet export n'est pas lié au nom du fichier mais au nom de la fonction en elle meme.


**8. Ajoutez un paragraphe `p` au composant `User` pour afficher la date de naissance sous la forme "Né le 27/02/1942" pour un homme ou "Née le 27/02/1942" pour une femme en utilisant une condition ternaire. Copiez le code ajouté dans ce document en guise de réponse.**

(Pensez à mettre votre code dans des balises Markdown  !!)

## Rédaction de tests
**9. Lisez [les recettes de tests](https://fr.reactjs.org/docs/testing-recipes.html#gatsby-focus-wrapper). Rédigez un test pour vérifier que le composant `User` contient une image.**

**10. Rédigez un autre test dans lequel vous créez le composant `User` avec le `name` de votre choix dans le `props` et vérifiez que le composant affiche bien le `name`.**

**11. Faites un test de "capture d'instantanés" en suivant les indications de la documentation**

**12. Proposez 3 autres tests**


## Mini-projet 

[Téléchargez une liste de films sous le format d'un fichier JSON](https://imdb-api.com/). Cela vous demandera de créer un compte.

**13. Créez un nouveau projet et affichez les films sous la forme de cartes. Vous devrez soigner le design de la page, sans copiant le code de la liste d'utilisateurs**
