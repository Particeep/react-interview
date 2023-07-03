
# react-interview
## Résumé de mon code

 - Lister les films dans des cards avec un grid responsive
 - Chaque carte ayant un titre en gras, la catégorie en sous titre, un bouton like et dislike et un bouton pour supprimer le film
 - Pagination avec le choix de selectionner le nombre de cartes par page (4,8,12)
 - Un filtre sur la catégorie en select dynamique en respectant la condition que s'il n'y a aucun film dans la liste, ce filtre n'affiche aucune catégorie
 - Utilisation de React, Redux et Mui pour le UI
 - Le Ui est simple, il manque quelque aspects que je n'ai pas eu le temps d'implementer  pour avoir un visuel clean et coherent car j'ai privilégié l'implementation du max des fonctionnalités.
1.  Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes doivent être côtes à côtes et responsive. Càd que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.
    
2.  Ajouter un bouton dans les cartes permettant de supprimer celle-ci
    
3.  Ajouter un bouton toggle like/dislike
    
4.  Ajouter un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il faut donc les récupérer dynamiquement depuis les films). Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus apparaître.
    
5.  Ajouter un système de pagination avec les fonctionnalités suivantes:
    
    -   Boutons précédent/suivant
    -   Choix du nombre d'élements affichés par page (4, 8 ou 12).

Prenez des initiatives, il y a des points bonus si

-   C'est joli
-   Vous utilisez correctement REDUX
-   Il y a une attention aux détails

/!\ La suppression du comportement asynchrone dans  `movies.js`  entraînera une annulation du test.



