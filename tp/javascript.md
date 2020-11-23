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

La première ligne correspond à l'import de classes, de fonctions ou d'objets provenant d'un autre fichier. On peut les importer tel que : 
```
import ...
```
Afin de permettre cet import, la classe, la fonction ou l'objet doivent être exportés:
```
export ...

module.exports ...
``` 

**2. Expliquez le rôle de la fonction `expect`.**

Expect vérifie si les valeurs remplissent des conditions. Elle offre un grand panel de méthodes qui permettent de valider différentes conditions.

**3. A quoi sert `toEqual` ? Trouvez 5 autres fonctions similaires.**

La méthode toEqual vérifie si les valeurs sont égales et retourne un boolean selon le résultat. 

Fonctions similaires :
- toBe()
- toMatch()
- toBeTruthy()
- toBeFalsy()
- toContain()

**4. Trouver le rôle des fonctions `beforeEach` et `afterEach`. En déduire le rôle de la fonction `describe`.**

**beforeEach** exécute une fonction avant l'exécution de chacun des tests de ce fichier. Si la fonction renvoie une promesse ou est un générateur, Jest attend que cette promesse soit résolue avant d'exécuter le test.

**afterEach** exécute une fonction après la fin de chacun des tests de ce fichier. Si la fonction renvoie une promesse ou est un générateur, Jest attend que cette promesse soit résolue avant de continuer.

**describe** crée un bloc qui regroupe plusieurs tests associés.

**5. La fonction `console.log` est "mocké". Expliquez ce que cela signifie et comment peut-on utiliser des mocks ?**


Cela signifie que l'on peut tester la fonction sans dépendre des composants tiers.
Il suffit d'utiliser la fonction Jest.fn(), cette fonction renvoie un mock qui est une fonction qui renvoie undefined si appellée. Il est possible ensuite d'inspecter les appels et de modifier les valeurs de retour si nécessaire.


**6. Imaginez d'autres cas ou il s'avère utile de mocker une fonction.**

Les modules nodes (dépendances)