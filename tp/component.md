# TP : création d'un projet React et d'un premier composant.

Ce TP montre comment créer un projet React à partir de zéro. Vous allez créer un premier composant, le designer et l'afficher sur un écran.


*1. Installez `[node et npm](https://nodejs.org/en/download/)`, et `[yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)` sur vos ordinateurs. Listez les étapes clés de l'installation, comme si vous rédigiez un tutoriel.**

Pour un projet, il suffit de lancer la commande :
```
sudo apt-get update
sudo apt-get install nodejs npm
```
Ensuite pour installer installer une version XX
```
wget -qO- https://deb.nodesource.com/setup_XX.x | sudo -E bash -
sudo apt install -y nodejs
```

Pour installer yarn, on peut simplement utiliser npm qui est déjà installé avec nodejs :
```
npm install -g yarn // -g pour l'installer en global
```

Sinon sur Windows, télécharger l'installeur de nodejs puis celui de yarn... trop simple

*2. [Quelle ligne de commande](https://github.com/facebook/create-react-app) faut-il lancer pour créer un projet React ?*

On va installer le projet et lui un nom avec la commande suivante :
```
npx create-react-app my-app
```
ou avec yarn
```
yarn create react-app my-app
```
Ensuite accédons au répertoire du projet :
```
cd my-app
```
Nous allons utiliser un script npm pour lancer le projet
```
npm start
```
ou
```
yarn start
```

*3. Créez un autre projet avec [Guppy](https://github.com/joshwcomeau/guppy). Quelle méthode préférez-vous ?*

*4. Modifiez le projet React nouvellement créer pour supprimer le contenu actuel de l'application*

*5. Créez un nouveau composant avec votre liste de cadeau pour le Père Noel.*

*6. [Ajoutez une image](https://create-react-app.dev/docs/adding-images-fonts-and-files/) du Père Noel.*

*7. [Designez](https://create-react-app.dev/docs/adding-a-stylesheet) la page pour qu'elle ressemble à un thème de Noel.*

Le meilleur design aura un point supplémentaire !
