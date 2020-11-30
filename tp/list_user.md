# TP liste d'utilisateurs

## Analyse de code

Analysez le [code situé du projet](https://codesandbox.io/s/react-props-list-from-file-wqwn5) puis répondez aux questions.


**1. Quelle ligne charge le fichier JSON dans le code ?**

```
La ligne 4
```

**2. Quelle est la structure de données du fichier JSON ?**

```
Collection qui peut contenir un objet (clé, valeur), une collection ou un tableau
```

**3. Justifiez le `User.propTypes`. Quelles données ne sont pas prises en compte ?**

```
Il annonce les types de chaque props et empêche l'assignation de mauvais type à une valeur. 

Données non pris en compte :
- login
- timezone
- coordinates
- postcode
- phone
- registered
```

**4. Quelles données sont obligatoires pour construire le composant `User` ?**

```
Le nom :
- title
- first
- last
```

**5. A quoi correspond `PropTypes.shape` ?**

```
PropTypes.shape décrit un objet dont les clés sont connues, en précisant les types de leurs valeurs.
```

**6. Pourquoi l'attribut contient deux accolades ?**

```
Parce qu'il faut désolidariser les objets pour leur assigner un type.
```

**7. Quel est le nom de l'opérateur qui transmet les données du composant `App` vers le composant `User`? Pourquoi est-ce dangereux d'abuser de cet opérateur ?**

```
Le Spread operator avant user
récupère les attributs d'un user. il décompose le user courant et récupère tous les attributs (genre, name, location ...) tout ce dont il a besoin. 

Lorsqu'on utilise la décomposition, il faut faire attention à ne pas dépasser le nombre maximal d'arguments du moteur JavaScript.
```

**8. Ajoutez un paragraphe `p` au composant `User` pour afficher la date de naissance sous la forme "Né le 27/02/1942" pour un homme ou "Née le 27/02/1942" pour une femme en utilisant une condition ternaire. Copiez le code ajouté dans ce document en guise de réponse.**

```js
function User(props) {
  let formatter = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
  return (
    ...
          <p>
            {this.formatter.format(Date.parse(props.dob.date))}
          </p>
    ...
  );
}

User.propTypes = {
  ...
  dob: PropTypes.shape({
    date: PropTypes.date,
    age: PropTypes.number
  })
};
```
(Pensez à mettre votre code dans des balises Markdown  !!)

## Rédaction de tests
**9. Lisez [les recettes de tests](https://fr.reactjs.org/docs/testing-recipes.html#gatsby-focus-wrapper). Rédigez un test pour vérifier que le composant `User` contient une image.**

```js
//import { User } from './App';

it("affiche les données utilisateur", () => {
  const fakeProps = {
    name: {
      first: "Edouard"
    },
    location: {
      state: "Isère",
      country: "FRANCE"
    },
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/80.jpg"
    }
  };
  act(() => {
      render(<User {...fProps} />, container);
  });

  expect(container.querySelector("h4").textContent).toBe(fakeProps.name.first);
  expect(container.querySelector("p").textContent).toBe(
    fakeProps.location.state + ", " + fakeProps.location.country
  );
  expect(container.querySelector("img").getAttribute("src")).toBe(fakeProps.picture.medium);

});
```

**10. Rédigez un autre test dans lequel vous créez le composant `User` avec le `name` de votre choix dans le `props` et vérifiez que le composant affiche bien le `name`.**

```js
it("s’affiche avec ou sans nom", () => {
  const fakeProps = {
    name: {
      first: "Edouard"
    },
    location: {
      state: "Isère",
      country: "FRANCE"
    },
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/80.jpg"
    }
  };
  
    act(() => {
      render(<User {...fProps} />, container);
    });
  });
  expect(container.querySelector("h4").textContent).toBe(fakeProps.name.first);
});

```

**11. Faites un test de "capture d'instantanés" en suivant les indications de la documentation**

**12. Proposez 3 autres tests**


## Mini-projet 

[Téléchargez une liste de films sous le format d'un fichier JSON](https://imdb-api.com/). Cela vous demandera de créer un compte.

**13. Créez un nouveau projet et affichez les films sous la forme de cartes. Vous devrez soigner le design de la page, sans copiant le code de la liste d'utilisateurs**
