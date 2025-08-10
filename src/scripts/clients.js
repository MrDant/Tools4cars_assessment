// Fonction pour charger le contenu client
function loadModulesClients(client) {
  $(".dynamic-div").each((index) => {
    const element = $(".dynamic-div").eq(index);
    // Extraire les data-attributes
    const module = element.data("module");
    const script = element.data("script");

    const fileUrl = `/customs/${client}/modules/${module}/${script}.php`;
    element
      .find("#client-content")
      .empty()
      .load(fileUrl, function (response, status, xhr) {
        if (status === "error") {
          console.log(
            "Erreur lors du chargement du fichier: " +
              xhr.status +
              " " +
              xhr.statusText
          );
        }
      });
  });
}
