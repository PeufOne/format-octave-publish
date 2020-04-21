# format-octave-publish
Petit script et style à ajouter au document html généré par la fonction "publish()" du programme Octave.

![Schema de principe](https://raw.githubusercontent.com/PeufOne/format-octave-publish/master/illustrations/principe.png "Schema de principe")


## Ce que ca fait
* Séparation du script "input" et de la sortie dans deux colonnes
* Mise à niveau vertical étape par étape
* Traitement des sous-titres de 2eme niveau en ajoutant une séparation horizontal
* Gestion des sauts de pages lors de l'impression en PDF
* Supression de la table "Content"
* Ajout d'une signature au document

## Comment ca s'utilise

Dans l'invite de commande d'Octave, entre la commande suivante:
(Attention à être placer dans le bon répertoire)
```
publish('Exemple.m')
```

Cette fonction génère un répertoire "html" dans lequel sera créer un fichier "Exemple.html".

1. Ouvre le fichier "Exemple.html" avec un editeur de text (bloc-notes)
2. Copie et colle les lignes "script" et "link" ci dessous dans l'entête du fichier (head)
3. remplace "Ma signature" par ton nom

Exemple.html
```html
<head>
    ...
    <script data-signature="Ma signature" id="structurScript" type="text/javascript" src="https://raw.githack.com/PeufOne/format-octave-publish/master/html/script.js"></script>
    <link rel="stylesheet" type="text/css" href="https://raw.githack.com/PeufOne/format-octave-publish/master/html/style.css">
    ...
<head/>
```

### Sytaxe du script .m

Les titre doivent s'écrire comme cela:
```
%% Mon titre
...
...
```

Le sous-titre de 2eme niveau doivent s'écrire entre deux *:
```
%%
% *Mon sous titre*
...
```

Les commentaires simple seront exporté du code s'il il respecte la sytaxe suivante:
```
%%
% Mon super commentaire 
...
```

Tu peux séparer les étapes en placant un titre vide :
```
code de l'étape 1
%%
code de l'étape 2
```

Voir plus de détail sur [la documentation d'Octave](https://octave.org/doc/v4.2.1/Publish-Octave-Script-Files.html).
Voir [un exemple](https://github.com/PeufOne/format-octave-publish/blob/master/Exemple.m).

### Problème d'encodage

Il ce peut que tu aies des problème d'encodage avec certain symbole comme "éàè°" etc...
Cela est du à un problème d'encodage.

Il peut être résolue en réencodant votre script .m *avant* d'utilisé la fonction publish()

![changement de l'encodage](https://raw.githubusercontent.com/PeufOne/format-octave-publish/master/illustrations/change-encodage.PNG "changement de l'encodage")

1. Ouvre ton script avec le bloc-notes
2. Fait un *Enregistrer sous*
3. Change le nom du fichier pour ne pas l'écraser (ajoute _utf8 par exemple)
4. Change l'encodage ANSI en UTF-8
5. Enregistre

Tu peux maintant recommencer l'étape de publication avec le nouveau fichier.
Mais attention le nom du fichier à changé (et le html généré aussi).

:)
