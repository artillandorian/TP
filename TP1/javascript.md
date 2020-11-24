# TP JavaScript

- Copier le [fichier d'exercices](../assets/javascript.js) et le [fichier de tests](../assets/javascript.test.js) dans votre répertoire git.

- Remplir le fichier d'exercices.

- Les [tests automatisés](../assets/javascript.test.js) doivent passer en lançant la commande :

```js
npm test javascript.test.js
```

## Questions sur les tests 
Répondre aux questions en modifiant directement ce fichier.

**1. A quoi correspond la première ligne ? Connaissez-vous (ou sinon cherchez sur Internet !) une autre manière d'importer des dépendances.**  
La première ligne créée une constante tableau associatif possédant : un attribut de classe anagrammes, un attribut classe Stack, un attribut classe spirale, un attribut classe puissance4 et un attribut classe fizzBuzz. Ces classes sont appelés dans un fichier externe du nom de javascript.js

**2. Expliquez le rôle de la fonction `expect`.**  
La fonction expect est une assertion explicite. Les expectations sont construites à partir de la fonction expect qui prend en argument une valeur. Le tout est suivi d’une fonction dite “matcher” qui prend en argument la valeur attendue. Elle permet de vérifier si la classe anagrammes est bien défini pour la sixième ligne.

**3. A quoi sert `toEqual` ? Trouvez 5 autres fonctions similaires.**  
toEqual permet une comparaison stricte des valeurs du variable. C’est une fonction qui cherche de manière récursive à comparer les données les plus profondes entre 2 variables. La méthodes toEqual possède des fonctions similaires tels que :  
* toBe qui sert à comparer des valeurs primitives ou pour vérifier l'identité référentielle des instances d'objet.   
* toMatch permet la comparaison avec les expressions régulières.   
* toBeNull permet de tester la nullité d'un élément.    
* toContain permet de vérifier la présence d'un élément dans un tableau.  
* toBeTruthy et toBeFalsy permet de tester de manière booléen des valeurs.  

**4. Trouver le rôle des fonctions `beforeEach` et `afterEach`. En déduire le rôle de la fonction `describe`.**  
Il est possible d’exécuter du code “avant” et “après” chacune des spécifications écrites, respectivement grâce aux fonctionnalités beforeEach et afterEach. Cela peut devenir pratique si l’on veut factoriser du code, ou si l’on utilise des variables globales que l’on souhaite réinitialiser après un test. La fonction describe() permet de débuter les tests, elle nécessite 2 paramètres : une chaîne de caractères et une fonction. La chaîne de caractère représente le titre du test, quant à la fonction, c’est un bloc de code qui implémente le test

**5. La fonction `console.log` est "mocké". Expliquez ce que cela signifie et comment peut-on utiliser des mocks ?**  
Mock permet de tester des liens entre le code en effaçant l’implémentation réelle de la fonction. Les objets de type mock permettent de simuler le comportement d’autres objets. Ils peuvent trouver de nombreuses utilités notamment dans les tests unitaires où ils permettent de tester le coder en maitrisant le comportement des dépendances

**6. Imaginez d'autres cas ou il s'avère utile de mocker une fonction.**  
La fonction mock permet de créer une fonction virtuelle. Cette fonction virtuelle permet de remplacer une vraie fonction (et donc son traitement). Elle permet ainsi de vérifier si les entrées saisies sont fonctionnelles ou non sans avoir à utiliser une véritable fonction, pouvant mettre plus de temps à s’effectuer. (Ou pouvant être inaccessible) 
