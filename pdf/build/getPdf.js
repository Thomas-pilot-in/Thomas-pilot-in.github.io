$("a").click(function () {
    var retour = true; //retourne true si la lien n'est pas un pdf
    // recupere le lien
    var lien = $(this);
    // récupérer le href
    var url = lien.context.href;
    var iLength = url.length; // Récupérer la longueru deu href
    var iPoint = url.lastIndexOf("."); // récupérer la position du dernier point (ceci afin de recupérer l'extension)
    if (iLength > iPoint) {
        //Récupérer l'extension du lien
        var extension = url.substr(iPoint, iLength - iPoint).trim().toLowerCase();
        if (extension == ".pdf") {
            var path = "";
            var origin = lien.context.origin; //recuper le HTTP ou https + host
            var fichier = url.replace(origin, "").replace(path, ""); // le remplacer dans url afin d'avoir le nom du fichier
            $(this).attr("href", path + fichier); // Attribuer le lien vers la visionneuse avecle fichier en parametre
        }
    }
    return retour;
});