// Fonction pour charger le contenu client
function loadClient(client) {
  // Extraire les data-attributes
  const module = $(".dynamic-div").data("module");
  const script = $(".dynamic-div").data("script");

  const fileUrl = `/customs/${client}/modules/${module}/${script}.php`;
  $("#client-content").load(fileUrl, function (response, status, xhr) {
    if (status === "error") {
      console.log(
        "Erreur lors du chargement du fichier: " +
          xhr.status +
          " " +
          xhr.statusText
      );
    }
  });
}
