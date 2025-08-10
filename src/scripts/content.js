// Fonction pour charger le contenu client
function loadModulesContent(client) {
  $(".dynamic-div").each((index) => {
    const element = $(".dynamic-div").eq(index);
    // Extraire les data-attributes
    const module = element.data("module");

    // Ne pas faire pour les voitures
    if (module == "cars") {
      return;
    }

    // Charger et afficher les données des voitures
    $.getJSON(`/data/${module}.json`, function (data) {
      const elementsContent = $("#elements");
      elementsContent.empty();

      let html = "";
      const elements = data
        .filter((e) => e.customer === client)
        .forEach((e) => {
          const adapterName = {
            garages: "title",
          };
          html += `<div class="${module}-item" data-id=${e.id}>
                <p>Nom : ${e[adapterName[module]]} </p>
            </div>
          `;
        });

      elementsContent.append(html);
    });
  });
}

function addModulelickEvent() {
  console.log("pass");
  $(".dynamic-div").each((index) => {
    const element = $(".dynamic-div").eq(index);
    // Extraire les data-attributes
    const module = element.data("module");

    // Ne pas faire pour les voitures
    if (module == "cars") {
      return;
    }

    $(".dynamic-div")
      .eq(index)
      .on("click", `.${module}-item`, function () {
        console.log("pass");
        const id = $(this).data("id");
        loadDetails(id, module);
      });
  });
}

function loadDetails(id, module) {
  $.get("/details.php", { id, module }, function (data) {
    $(`.dynamic-div[data-module="${module}"] #elements`).html(data);
  });
}
