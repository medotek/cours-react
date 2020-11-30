# Les formulaires avec React

Ce TP permet de créer un formulaire avec React. Nous allons voir comment récupérer des informations pour inscrire un utilisateur dans notre application.
En pratique, des librairies comme [Formik](https://formik.org/) proposent une API simple pour cela. 

## Analyse du code

Lisez [le code lié à ce TP](https://codesandbox.io/s/tp-react-form-itrhu?file=/src/index.js) puis répondez aux questions.

**1. Décrire le rôle de chaque fonction (une phrase par fonction).**

validateEmail :
```
Regex qui vérifie si la valeur en entrée est valide (est un email) sinon retourne "Une adresse email est obligatoire" si ce n'est pas le cas.
```

validateName : 
```
Prend une valeur en entré et
Vérifie que l'input(la valeur) n'est pas vide
```

NameField :
```
Définie un input (un champ pour le nom) et ses attributs, ensuite on appelle la méthode qui vérifie la valeur en entrée (nom) si elle est vide ou non. 
```

EmailField : 
```
Définie un input (un champ pour l'email)et ses attributs, ensuite on appelle la méthode qui vérifie la valeur en entrée (email) si elle est vide ou non
```

Inscription : 
```
C'est une fonction qui initialise les états des props liés au formulaire et l'affiche. (vérification des inputs, s'ils sont vides, on ne peut pas cliquer sur le bouton)
```

**2. Quelles sont les states et les props mis en jeu ? Indiquez leur valeur par défaut.**

Props :
- message = 
```validateName(name) ou  validateName(email)```
- canSubmit = ```!validateEmail(email) && !validateName(name);```
- Input (styledcomp) = 
```js
styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => (props.isValid && "cornflowerblue") || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
```

State :
- isSubmit = useState(false)
- setSubmit =useState(false)
- name = useState("")
- setName = useState("")
- email = useState("")
- setEmail = useState("")

**3. Que contient la variable `event` dans `onChange={(event) => setName(event.target.value)}`? Vous pouvez la scruter à l'aide de `console.log`.**

La variable event est un objet qui contient des types d'évènement, notamment:
```js
SyntheticEvent {dispatchConfig: Object, _targetInst: FiberNode, nativeEvent: InputEvent, type: "change", target: HTMLInputElement…}
    ...
    type: "change"
    target: <INPUT type="text" class="sc-bdfBwQ jcKsYw" value="test"></INPUT>
    ...
```

**4. Pourquoi doit-on encapsuler un espace avec `{" "}` ?**

On pourrait mettre un espace normalement dans la génération du "message" mais avec react on ne peut pas car il ne l'affiche pas dans le navigateur lors du rendu, donc il faut l'encapsuler ou rajouter un espace non insécable.

**5. Peut-on transmettre une fonction dans un Props ?**

On peut passer un gestionnaire d’événements et d’autres fonctions dans les props d’un composant, comme n’importe quelle autre valeur

**6. Précisez étape par étape ce que fait React lorsque le champ nom est modifié.**

- Initialisatuin avec une chaîne vide
- l'utilisateur écrit un caractère
- l'handler onChange est activé sur le champ de texte
- Il appelle la fonction setName et il lui passe la valeur du champ en paramètre
- setName étant le setter de notre état dans, il modifie la valeur de l'attribut name dans l'état du document

**7. Expliquez la regex pour valider un email. Vous pouvez la recopier dans regex101.com pour vous aider.**

premier@deuxieme.troisieme

```
[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]
```

premier = > [a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] {}

ça sélectionne tous les caractères alpha numériques et les caractères spéciaux qui sont donnés ()

ensuite :

`premier@deuxieume`

`deuxieme = [a-zA-Z0-9-]`

`premier+@[a-zA-Z0-9-]...`
Sélectionne les caractères alpha numériques

troisième = `(?:\.[a-zA-Z0-9-]` : Selectionne les caractères alpha numériques

premier@deuxieme+`(?:\.[a-zA-Z0-9-]`

`?:`signifie que les champs suivants sont facultatifs



## Mini-projet : un timer

Programmez un composant qui s'incrémente à chaque seconde. Vous aurez pour cela besoin d'utiliser la fonction [`setInterval`](https://www.w3schools.com/jsref/met_win_setinterval.asp). 

Créez un bouton pour démarrer et arrêter le timer. Séparez les secondes des minutes. Réinitialisez le compteur lorsqu'il atteint la valeur `99:59`. Ajoutez une image de fond pour que cela ressemble à un réveil. Utilisez la librairie [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display) pour rendre votre réveil plus réaliste. 

Rédigez un test pour vérifier que le timer fonctionne bien. Vous aurez pour cela besoin de mocker la fonction `setInterval` avec [Jest](https://jestjs.io/docs/en/timer-mocks).




