# Les formulaires avec React

Ce TP permet de créer un formulaire avec React. Nous allons voir comment récupérer des informations pour inscrire un utilisateur dans notre application.
En pratique, des librairies comme [Formik](https://formik.org/) proposent une API simple pour cela. 

## Analyse du code

Lisez [le code lié à ce TP](https://codesandbox.io/s/tp-react-form-itrhu?file=/src/index.js) puis répondez aux questions.

**1. Décrire le rôle de chaque fonction (une phrase par fonction).**  
La fonction validateEmail permet d'accepter tous les caractères, ainsi que les symboles et elle vérifie qu'on a rentré une adresse mail valide.  
La fonction validateName regarde si on a rentré un caractère.  
La fonction NameField  recupère le texte rentré dans nom.  
La fonction EmailField recupère le texte rentré dans courriel.  
La fonction Inscription vérifie que le nom et l'email sont tous les deux valides.  
La fonction submit permet de valider la création du compte.  

**2. Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.**
le props de ce programme possède une fonction permettant de vérifier la validité des valeurs entrées par l'utilisateur. Ce props possède donc plusieurs méthodes, dont "isValid".
useState quant à lui, récupère via un import de react des règles de gestions permettant de vérifier des entrées et empéchant l'accès au bouton de création de compte lorsque les éléments fournis par l'utilisateur ne correspondent pas.

**3. Que contient la variable `event` dans `onChange={(event) => setName(event.target.value)}`? Vous pouvez la scruter à l'aide de `console.log`.**
La méthode onChange permet de vérifier si un élément dans un document web est modifié par l'utilisateur. Ici la méthode onChange vérifie : pour le premier : la zone de texte du nom / pour le deuxième l'email. Event = donc la saisie directe de l'utilisateur. On peut d'ailleur le constater lorsque l'enregistrement est effectué la première fois. La méthode onChange vérifie l'event qui est la zone de texte, et la remet en bas de page.

**4. Pourquoi doit-on encapsuler un espace avec `{" "}` ?**
Cette encapsulation permet, lorsque le programme traduit le code en html, d'ajouter un espace avant le texte généré grace à cette méthode : {message ? <em>{message}</em> : null}.
De plus, la mise en place de cette encapsulation permet d'éviter qu'il y ait plusieurs instances de "styled-components" de s'initialiser en même temps dans l'application. Ce qui peut poser des erreurs pendant le rafraichissement des éléments de la page, et qui peut potentiellement faire sauter instructions du programme.

**5. Peut-on transmettre une fonction dans un Props ?**
Oui, c'est d'ailleurs ce que nous avons pu constater sur la ligne 9. Props utilise une fonction "isValid". On peut donc chargé un props de fonctions et les utiliser dans notre programme.

**6. Précisez étape par étape ce que fait React lorsque le champ nom est modifié.**

**7. Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.**


## Mini-projet : un timer

Programmez un composant qui s'incrémente à chaque seconde. Vous aurez pour cela besoin d'utiliser la fonction [`setInterval`](https://www.w3schools.com/jsref/met_win_setinterval.asp). 

Créez un bouton pour démarrer et arrêter le timer. Séparez les secondes des minutes. Réinitialisez le compteur lorsqu'il atteint la valeur `99:59`. Ajoutez une image de fond pour que cela ressemble à un réveil. Utilisez la librairie [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display) pour rendre votre réveil plus réaliste. 

Rédigez un test pour vérifier que le timer fonctionne bien. Vous aurez pour cela besoin de mocker la fonction `setInterval` avec [Jest](https://jestjs.io/docs/en/timer-mocks).

