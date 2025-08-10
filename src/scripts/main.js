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

// Fonction pour afficher la vue
function displayApp() {
  $(`.dynamic-div`).hide();
  $(`.dynamic-div[data-module="cars"]`).show();
  const client = getCookie("client") || "clienta";
  if (client == "clientb") {
    $(".change-module").show();
  } else {
    $(".change-module").hide();
  }
  loadModulesClients(client);
  loadModulesContent(client);
  loadCarData(client);
}

// Fonction principale pour initialiser l'application
function init() {
  displayApp();
  // Gérer le changement de client
  $(document).on("click", ".change-client", function (e) {
    e.preventDefault();
    const newClient = $(this).data("client");
    document.cookie = `client=${newClient}; path=/`;
    displayApp();
  });
  $(document).on("click", ".change-module", function (e) {
    e.preventDefault();
    $(`.dynamic-div`).hide();
    $(`.dynamic-div[data-module="${$(this).data("module")}"]`).show();
  });
  addClickEvent();
  addModulelickEvent();
}

// Initialiser l'application lorsque le document est prêt
$(document).ready(init);
