# format-octave-publish
Petit script et style à ajouter au document html généré par la fonction "publish()" du programme Octave.

![Schema de principe](https://raw.githubusercontent.com/PeufOne/format-octave-publish/master/illustrations/principe.png "Schema de principe")


## Ajout
* Séparation du script "input" et des la sortie dans deux collones
* Mise à niveau vertical étape par étape
* Traitement des sous-titres de 2eme niveau en ajoutant une séparation horizontal
* Gestion des sauts de pages lors de l'impression en PDF
* Supression de la table "Content"
* Ajout d'une signature au document

## Utilisation


### Installation
Ajoute ces deux ligne dans la balise "head" du fichier html qui à été généré.
```html
<head>
    <script data-signature="Jonas Voisard" id="structurScript"type="text/javascript" src="https://raw.githack.com/PeufOne/format-octave-publish/master/html/script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    ...
<head/>
```
Remplace "Ma signature" par ton nom.

### Sytaxe

### Résoudre le problème d'encodage

