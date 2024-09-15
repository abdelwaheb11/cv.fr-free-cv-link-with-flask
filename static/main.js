function imprimerCV() {
    // Récupérer le contenu de la balise div avec l'ID 'cv'
    var contenu = document.getElementById('cv').innerHTML;
    
    // Créer une nouvelle fenêtre pour l'impression
    var fenetreImpression = window.open('', '', 'height=550,width=800');
    
    // Injecter le contenu à imprimer dans la nouvelle fenêtre
    fenetreImpression.document.write('<html><head>');
    fenetreImpression.document.write('<style>@media print {@page { margin: 0; } body { margin: 0; }}</style>');
    fenetreImpression.document.write('</head><body>');
    fenetreImpression.document.write(contenu);  // Insérer le contenu du CV
    fenetreImpression.document.write('</body></html>');
    // Fermer le flux de document pour forcer le rendu
    fenetreImpression.document.close();

    // Lancer la boîte de dialogue d'impression
    fenetreImpression.print();
}