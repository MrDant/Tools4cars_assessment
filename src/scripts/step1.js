$(document).ready(function () {
  // Fonction pour lire un cookie
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = $.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  // Fonction pour charger le contenu
  function loadContent(client) {
    const fileUrl = `/customs/${client}/modules/${module}/${script}.php`;
    $(".dynamic-div").load(fileUrl, function (response, status, xhr) {
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

  // Lire le cookie 'client'
  const client = getCookie("client") || "clienta"; // Par défaut, utiliser 'clienta' si le cookie n'est pas défini

  // Extraire les data-attributes
  const module = $(".dynamic-div").data("module");
  const script = $(".dynamic-div").data("script");

  // Charger le contenu initial
  loadContent(client);

  // Gérer le changement de client
  $(document).on("click", ".change-client", function (e) {
    e.preventDefault();
    const newClient = $(this).data("client");
    document.cookie = `client=${newClient}; path=/`;
    loadContent(newClient); // Recharger le contenu avec le nouveau client
  });
});
