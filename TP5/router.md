# TP Routage avec React

Pour bien comprendre ce qui se trame dans le routage, nous ré-implémentons les composants vus en cours à l'aide de fonctions primitives fournies par la libraire `react-dom`.


## Ré-implémenter le composant `Link`

Notre version de `Link`, appelée `CustomLink` accepte un props `to` sous la forme d'une chaîne de caractères. Lorsqu'un utilisateur clique sur `Link`, il est redirigé vers la page indiquée par `to`.

**1. Comment fait-on une redirection avec `react-router` ?**
1. Il faut tout d'abord importer des éléments de React-router-dom tels que Route, BroswerRouter et Link
2. Dans la fonction default, on créé une constante dans laquelle on instancie par des pages (avec un nom, une redirection, et un contenu par défaut)
```
exemple :
const page [{name:"accueil", path: "/", content: "Page d'accueil"}(name:"legal", path: "/legal", content: "Mentions legales"}]
```
3. Dans le return de la fonction "default", il faut afficher les liens de redirection. Le plus souvent ces liens sont placés dans des balises de navigation, permettant à l'utilisateur de naviguer plus simplement.
```
<BrowserRouter>
 <nav>
  <ul>
   {pages.map((page, indes) => {
    return (
     <li key=[index]>
      <a href={page.path}>{page.name}</a>
     </li>
    );
  </ul>
 </nav>
 {pages.map((page, index) =>{
  return (
   <Route path={page.path}>
    <h1 key={index}>{page.content}</h1>
   </Route>
  )
 }
</BrowserRouter>
```


Mais comment avoir accès à cet objet que vous venez d'évoquer ? Dans le cours, il était injecté par `Route`. Cette fois-ci, nous allons utiliser la fonction [`useHistory`](https://reactrouter.com/web/api/Hooks/usehistory). 

1. Il faut tout d'abord importer la fonction useHistory provenant de react-router-dom
2. Dans la fonction default, on créé une constante dans laquelle on donne les fonctionnalités de la fonction "useHistory"
3. Avant le return de la fonction default, créer une fonction (par exemple "backToPage" possédant la fonction histoyy.goBack();
```
function backToPage(){
 history.goBack();
}
```
4. Créer un bouton permettant d'appeler cette fonction avec un bouton possédent la caractéristique onClick permettant ainsi d'appeler la fonction backToPage inséré dans celui-ci.
```
<button onClick={backtoPage}>Revenir en arrière</button>
```

Ainsi nous pourrons réinvoquer une page fermé précédement.


**2. Après avoir lu la documentation correspondante, décrivez le fonctionnement de cette fonction.**
useHistory semble avoir accès à l'historique de l'utilisateur (tout du moins limité à son historique lié au site). Ce qui lui permet de redérouler en sens inverse si l'utilisateur souhaite revenir en arrière.

**3. En utilisant cette fonction, devez-vous implémenter le `CustomLink` composant sous la forme d'une fonction ou d'une classe ?**  
Nous l'implémenterons sous la forme d'une classe.

**4. Faites l'implémentation de `CustomLink`, ajoutez les `propTypes`, testez la dans une codesandbox et copiez votre implémentation de `CustomLink` dans ce document.**
```javascript
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const MenuLink = ({ children, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "" : ""}
        <Link to={to}>{children}</Link>
      </div>
    )}
  />
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MenuLink exact={true} to="/">
            Home
          </MenuLink>
          <MenuLink to="/about">About</MenuLink>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
```
Pour procéder à l'implémentation de `CustomLink` sous l'autre forme (classe ou fonction, selon votre réponse à la question 3.), nous utiliserons la fonction [`withRouter`](https://reactrouter.com/web/api/withRouter). Il s'agit d'un HOC ; nous les verrons en détail dans un prochain cours.

**5. Reprenez les questions 2 à 4 avec `withRouter`**  
withRouter transmet les accessoires de correspondance, d'emplacement et d'historique mis à jour au composant encapsulé à chaque fois qu'il sera rendu.
Nous l'implémenterons sous forme de fonction.

## Ré-implémenter le composant Route

Notre composant `CustomRoute` accepte deux props: 

 - `path` est une chaîne de caractères ;
 - `component` est un composant à afficher lorsque la localisation correspond au `path`. Ce composant reçoit en props `history`, `location` et `match`.

**6. Dans la documentation de la `react-router`, trouvez trois hooks permettant d'obtenir les variables `history`, `location` et `match`.**  
1 - withRouter  
2 -

**7. Faites l'implémentation de `CustomRoute`, ajoutez les `propTypes`, testez la dans une codesandbox et copiez votre implémentation de `CustomRoute` dans ce document.**


## Tester le routage avec React

Pour tester le routage, nous cherchons une manière simple de contrôler la localisation de la page.
Puisque `BrowserRouter` utilise l'URL du navigateur, nous préférons utiliser [`MemoryRouter`](https://reactrouter.com/web/api/MemoryRouter), qui peut être contrôlé à partir de son props `initialEntries`. 

Nous séparons alors l'appel au `Router` du reste de l'application afin de simplifier la mise en test de cette dernière:


```jsx
// index.js
export default function App() {
  return (
      <main>
        <nav>
          <ul>
           <li>
              <Link to="/pages/mon-premier-article">Mon premier article</Link>
            </li>
            <li>
              <Link to="/pages/mon-second-article">Mon second article</Link>
            </li>
          </ul>
        </nav>
      <Route path="/post/:name">
        <Post />
      </Route>
      </main>
  );
}
// Post Page
const Post = () => {
  let { name } = useParams();
  return <h1>{name.replaceAll("-", " ")}</h1>;
};


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  rootElement
);
```

**8. Ce code utilise `useParams`, que nous n'avons encore jamais utilisé. A quoi sert-il ?**  
useParams permet de retourner un objet possédant une clée et une valeur. L'utiliser permet d'accéder aux parametres de la route courante

**9. Créez un nouveau projet à partir de code.  Créez un test qui injecte `MemoryRouter` autour de `App`. Indiquez des URL à `MemoryRouter` et vérifiez que les posts affichent bien le contenu de l'URL.**

Aide : la [documentation](https://reactrouter.com/web/guides/testing) fournit quelques renseignements sur le testing d'une application avec un routeur. Vous pouvez reprendre également la [documentation de React conernant les tests](https://reactjs.org/docs/testing.html).



