async function loadCarData(client) {
  let garages = [];
  await new Promise((resolve) => {
    if (client == "clientb") {
      $.getJSON("/data/garages.json", (data) => {
        garages = data;
        resolve();
      });
    } else {
      resolve();
    }
  });

  // Charger et afficher les données des voitures
  $.getJSON("/data/cars.json", function (data) {
    const carsContent = $("#cars-content");
    carsContent.empty();

    let carInfo = "";
    const car = data
      .filter((car) => car.customer === client)
      .forEach((car) => {
        carInfo += `<div class="car-item" data-id=${car.id}>`;
        switch (client) {
          case "clienta":
            carInfo += `
                    <p>Nom: ${car.modelName}</p>
                    <p>Marque: ${car.brand}</p>
                    <p>Année: ${new Date(car.year, 0, 1).toLocaleDateString(
                      "fr-FR",
                      { year: "numeric" }
                    )}</p>
                    <p>Puissance: ${car.power} chevaux</p>
            `;
            break;
          case "clientb":
            const garage = garages.find((e) => e.id == car.garageId);
            carInfo += `
                    <p>Nom: ${car.modelName.toLowerCase()}</p>
                    <p>Marque: ${car.brand}</p>
                    <p>Garage: ${garage ? garage.title : "inconnu"}</p>
                </div>
            `;
            break;
          case "clientc":
            carInfo += `
                <div style="background-color: ${car.colorHex}; padding: 10px; margin: 10px 0; color: white">
                    <p>Nom: ${car.modelName}</p>
                    <p>Marque: ${car.brand}</p>
                </div>
            `;
            break;
          default:
            carInfo += "<div>Client non reconnu.</div>";
        }
        carInfo += "</div>";
      });

    carsContent.append(carInfo);
  });
}
