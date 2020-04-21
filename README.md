# format-octave-publish
Petit script et css rendant la page html généré par la fonction "publish()" du programme Octave convertible en un joli PDF.

![Schema de principe](https://raw.githubusercontent.com/PeufOne/format-octave-publish/master/illustrations/principe.png "Schema de principe")

Ajoute ces deux ligne dans la balise <head> (après <head> et avant </head> ) du fichier html qui à été généré.
```html
    <script type="text/javascript" src="script.js" data-signature="Ma signature"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
```
Remplace "Ma signature" par ton nom.
