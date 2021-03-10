# Microservice API d'horodatage
Microservice avec npm, Node et Espress



## Utilisation
 
1.  Le point de terminaison de l'API est GET /api/timestamp/:date\_string.
2.  Une chaîne de date est valide si elle peut être analysée avec succès par `new Date(date_string)`.  
    Notez que l'horodatage unix doit être un entier (non une chaîne) spécifiant des millisecondes.  
    Dans notre test, nous utiliserons des chaînes de date conformes à la norme ISO-8601 (par exemple, "2016-11-20"), ce qui garantira un horodatage UTC.
3.  Si la chaîne de date est vide, elle est équivalente à déclencher `new Date()`, le service utilise l'horodatage actuel.
4.  Si la chaîne de date est invalide, l'API renvoie un JSON ayant la structure `{"error": "Invalid Date"}`.
5.  Si la chaîne de date est valide, l'API renvoie un JSON ayant la structure `{"unix": , "utc": }`.  
    Par exemple `{"unix": 1615381986967 ,"utc": "Wed Mar 10 2021 13:13:06 GMT"}`.
    


## Exemples

-   Entrée  
    [/api/timestamp/2015-12-25](../api/timestamp/2015-12-25)  
    [/api/timestamp/1585751851261](../api/timestamp/1585751851261)  
    [/api/timestamp/](../api/timestamp/)

* * *

-   Sortie  
    `{"unix":1615385973471,"utc":"Wed Mar 10 2021 14:19:33 GMT"}`
