function loadCarData(client) {
  // Charger et afficher les données des voitures
  $.getJSON("/data/cars.json", function (data) {
    const car = data.filter((car) => car.customer === client).pop();
    const carsContent = $("#cars-content");
    carsContent.empty();

    let carInfo = "";

    switch (client) {
      case "clienta":
        carInfo = `
                <div>
                    <p>Nom: ${car.modelName}</p>
                    <p>Marque: ${car.brand}</p>
                    <p>Année: ${new Date(car.year, 0, 1).toLocaleDateString(
                      "fr-FR",
                      { year: "numeric" }
                    )}</p>
                    <p>Puissance: ${car.power} chevaux</p>
                </div>
            `;
        break;
      case "clientb":
        carInfo = `
                <div>
                    <p>Nom: ${car.modelName.toLowerCase()}</p>
                    <p>Marque: ${car.brand}</p>
                    <p>Garage: ${car.garage}</p>
                </div>
            `;
        break;
      case "clientc":
        carInfo = `
                <div style="background-color: ${car.colorHex}; padding: 10px; margin: 10px 0; color: white">
                    <p>Nom: ${car.modelName}</p>
                    <p>Marque: ${car.brand}</p>
                </div>
            `;
        break;
      default:
        carInfo = "<div>Client non reconnu.</div>";
    }

    carsContent.append(carInfo);
  });
}
