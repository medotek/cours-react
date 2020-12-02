# TP Routage avec React

Pour bien comprendre ce qui se trame dans le routage, nous ré-implémentons les composants vus en cours à l'aide de fonctions primitives fournies par la libraire `react-dom`.


## Ré-implémenter le composant `Link`

Notre version de `Link`, appelée `CustomLink` accepte un props `to` sous la forme d'une chaîne de caractères. Lorsqu'un utilisateur clique sur `Link`, il est redirigé vers la page indiquée par `to`.

**1. Comment fait-on une redirection avec `react-router` ?**

```
Pour faire un redirection on ajoute dans l'attribut history du DOM, 
en injectant le nouveau chemin vers lequel l'utilisateur sera redirigé.

```


Mais comment avoir accès à cet objet que vous venez d'évoquer ? Dans le cours, il était injecté par `Route`. Cette fois-ci, nous allons utiliser la fonction [`useHistory`](https://reactrouter.com/web/api/Hooks/usehistory). 
```
On peut le faire en utlisant la fonction useHistory ou avec withRouter en fonction de l'utilisation d'une fonction ou d'une classe
```

**2. Après avoir lu la documentation correspondante, décrivez le fonctionnement de cette fonction.**

```
La fonction permet d'accéder directement au props history du render de la route, 
qui nous permettra de modifier l'historique à nos souhaits.
History permettra de modifier la navigation.
```

**3. En utilisant cette fonction, devez-vous implémenter le `CustomLink` composant sous la forme d'une fonction ou d'une classe ?**

```
Les hooks s'utilisent avec des fontions, donc on devra imlémenter le composant 
CustomLink sous la forme d'une fonction
```

**4. Faites l'implémentation de `CustomLink`, ajoutez les `propTypes`, testez la dans une codesandbox et copiez votre implémentation de `CustomLink` dans ce document.**

```jsx
const Content = () => {
  return <div>oui</div>;
};

function CustomLink(props) {
  let history = useHistory();
  function handleClick() {
    history.push(props.to);
  }
  return <div onClick={handleClick}>{props.children}</div>;
}

export default function App() {
  return (
    <>
      <div className="App">
        <h1>CustomLink</h1>
      </div>
      <CustomLink to="/oui">
        <button>oui</button>
      </CustomLink>

      <Switch>
        <Route path="/oui" component={Content} />
      </Switch>
    </>
  );
}

```

Pour procéder à l'implémentation de `CustomLink` sous l'autre forme (classe ou fonction, selon votre réponse à la question 3.), nous utiliserons la fonction [`withRouter`](https://reactrouter.com/web/api/withRouter). Il s'agit d'un HOC ; nous les verrons en détail dans un prochain cours.

**5. Reprenez les questions 2 à 4 avec `withRouter`**

5.2 Après avoir lu la documentation correspondante, décrivez le fonctionnement de cette fonction

```
withRouter est une fonction (HOC - Higher-Order Component) qui permet de fournir à un composant les props match,
location et history, et renvoie un nouveau composant
```

5.3 :

```
On peut utiliser les deux, mais on préfèrera utiliser une classe.
```

5.4

```jsx
const Oui = () => {
  return <div>oui</div>;
};

class EmptyCustomLink extends React.Component {
  render() {
    const { history, children, to } = this.props;
    //return <div onClick={this.handleClick}>OUI</div>;
    const handleClick = () => {
      history.push(to);
    };
    return <div onClick={handleClick}>{children}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <h1>CustomLink</h1>
        </div>
        <CustomLink to="/">
          <button>/</button>
        </CustomLink>
        <CustomLink to="/oui">
          <button>oui</button>
        </CustomLink>
        <Switch>
          <Route to="/oui" component={Oui} />
        </Switch>
      </>
    );
  }
}

EmptyCustomLink.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export const CustomLink = withRouter(EmptyCustomLink);

export default App;
```


## Ré-implémenter le composant Route

Notre composant `CustomRoute` accepte deux props: 

 - `path` est une chaîne de caractères ;
 - `component` est un composant à afficher lorsque la localisation correspond au `path`. Ce composant reçoit en props `history`, `location` et `match`.

**6. Dans la documentation de la `react-router`, trouvez trois hooks permettant d'obtenir les variables `history`, `location` et `match`.**

```jsx
useHistory()
useLocation()
useRouteMatch()
```


**7. Faites l'implémentation de `CustomRoute`, ajoutez les `propTypes`, testez la dans une codesandbox et copiez votre implémentation de `CustomRoute` dans ce document.**

```jsx
function CustomRoute(props) {
  //let history = useHistory();
  let location = useLocation();
  let MyComponent = props.component;

  const match = matchPath(location.pathname, {
    path: props.path,
    exact: true,
    strict: false
  });
  return (
    <>
      {(() => {
        if (match) {
          return <MyComponent history={history} location={location} match={match} />;
        }
      })()}
    </>
  );
}

//...  App()
  <CustomRoute path="/oui" component={Content}></CustomRoute>
//... PropTypes de CustomLink +
CustomRoute.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired
};
```

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

```
useParams est un hook qui retourne un tableau de clé/valeur de paramètres d'URL
```

**9. Créez un nouveau projet à partir de code.  Créez un test qui injecte `MemoryRouter` autour de `App`. Indiquez des URL à `MemoryRouter` et vérifiez que les posts affichent bien le contenu de l'URL.**

Aide : la [documentation](https://reactrouter.com/web/guides/testing) fournit quelques renseignements sur le testing d'une application avec un routeur. Vous pouvez reprendre également la [documentation de React conernant les tests](https://reactjs.org/docs/testing.html).



